import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import SerpAnalysis from './components/SerpAnalysis';
import SEOAnalysis from './components/SEOAnalysis';
import KeywordAnalyser from './components/keyword';
import Competitors from './components/Competitors';

function App() {
  
  const [activeNav, setActiveNav] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  console.log(activeNav);

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 p-6">
        <DashboardContent activeNav={activeNav} darkMode={darkMode} />      
        {/* <SerpAnalysis activeNav={activeNav} /> */}
        {activeNav==="serp-analysis" && <SerpAnalysis />}
        {activeNav==="ai-recommendations" && <SEOAnalysis />}
        {activeNav==="competitors" && <Competitors />}
        
      </main>
    </div>
  );
}

export default App;
