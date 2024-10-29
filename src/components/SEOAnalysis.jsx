import React, { useState } from "react";
import axios from "axios";

const App = (activeNav) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setResults(null);

    try {
      const response = await axios.post(
        `https://gemini.googleapis.com/v1/images:analyze?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        { imageUrl: url },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults({ error: "Failed to analyze the URL. Please check your API setup and try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen overflow-x-hidden">
      <header className="bg-gray-800 text-white py-4 text-center">
        <nav className="flex justify-center gap-8">
          <a href="#home" className="hover:underline text-blue-400">Home</a>
          <a href="#about" className="hover:underline text-blue-400">About</a>
          <a href="#contact" className="hover:underline text-blue-400">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        {/* Hero Section */}
        <section className="hero text-center bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-bold mb-4">SEO Analyzer</h1>
          <p className="text-lg mb-4">Analyze your website's SEO quickly and easily!</p>
          <form
            className="flex justify-center gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleAnalyze();
            }}
          >
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
              className="w-80 p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500"
            >
              Analyze
            </button>
          </form>
          {loading && <div className="loading mt-4">Loading...</div>}
          {results && (
            <div id="results" className="mt-4 p-4 bg-gray-800 rounded-lg">
              {results.error ? (
                <p className="text-red-500">{results.error}</p>
              ) : (
                <pre className="text-left">{JSON.stringify(results, null, 2)}</pre>
              )}
            </div>
          )}
        </section>

        {/* Mission Section */}
        <section id="Mission" className="my-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className="border-l-4 border-r-4 border-blue-500 p-4 rounded-lg w-72 bg-gray-800">
              Providing accurate insights for your SEO needs.
            </li>
          </ul>
        </section>

        {/* Key Features Section */}
        <section id="Key-Features" className="text-center my-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="bg-gray-800 p-6 rounded-lg shadow-md">
              <strong className="text-lg">Feature 1</strong>
              <p>Optimize your website with detailed insights.</p>
            </li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-8 bg-blue-700 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your SEO?</h2>
          <p className="text-xl text-gray-200 mb-4">Join us now and take your website to the next level!</p>
          <button className="bg-white text-blue-700 py-3 px-6 rounded-lg hover:bg-gray-100">
            Get Started
          </button>
        </section>
      </main>
    </div>
    
  );
};

export default App;
