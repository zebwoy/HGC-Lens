import React, { useState } from 'react';
import './App.css';
import TabNavigation from './components/TabNavigation';
import PriceChecker from './components/PriceChecker';
import Direction from './components/Direction';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Price Checker', icon: '💰' },
    { id: 1, name: 'Direction', icon: '🧭' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <PriceChecker />;
      case 1:
        return <Direction />;
      default:
        return <PriceChecker />;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>HGC Lens</h1>
          <p>Smart Price Checker & Navigation</p>
        </header>
        
        <TabNavigation 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <main className="tab-content">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}

export default App; 