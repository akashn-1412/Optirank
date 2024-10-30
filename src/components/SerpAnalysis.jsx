import React, { useState } from 'react';

function SerpAnalysis() {
  const [url, setUrl] = useState('https://serpanalysis-za2opef4.b4a.run/'); // Default URL
  const [loading, setLoading] = useState(true); // Loading state

  // Handler to change iframe URL on link click
  const handleLinkClick = (newUrl) => {
    setUrl(newUrl);
    setLoading(true); // Show loading spinner when URL changes
  };

  return (
    <div className="h-full relative">
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="loader"></div>
        </div>
      )}

      {/* Iframe to display the selected website */}
      <div style={{ width: '100%', height: '95%', border: '1px solid #ccc', marginTop: '20px' }}>
        <iframe
          src={url}
          title="Embedded Website"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          onLoad={() => setLoading(false)} // Hide spinner when iframe loads
        ></iframe>
      </div>

      {/* Inline CSS for loader */}
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default SerpAnalysis;
