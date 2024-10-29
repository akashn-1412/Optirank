import { createServer } from 'node:http';
import { getJson } from 'serpapi';

const hostname = '127.0.0.1';
const port = 3000;
const allowed_domain = '*'; // Adjust with your domain or localhost

const server = createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', allowed_domain);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const searchParams = url.searchParams;
    const query = searchParams.get('query');
    const location = searchParams.get('location');
    const website = searchParams.get('website');

    if (!query || !location || !website) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Missing query, location, or website parameter" }));
        return;
    }

    try {
        const response = await getJson({
            engine: "google",
            api_key: "be88bce1f01b111804b361e68da015ec83ae2cf822a80f4635f7c70cd5806e41", // Use environment variable for API key
            q: query,
            location: location,
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

export default server;
