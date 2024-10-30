import React, { useState } from 'react';

function SerpAnalysis() {
  const [url, setUrl] = useState('https://serpanalysis-za2opef4.b4a.run/'); // Default URL

  // Handler to change iframe URL on link click
  const handleLinkClick = (newUrl) => {
    setUrl(newUrl);
  };

  return (
    <div className='h-full'>

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
        ></iframe>
      </div>
    </div>
  );
}

export default SerpAnalysis;
