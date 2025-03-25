import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CareTeam } from './components/CareTeam';
import { About } from './components/About';
import { FAQ } from './components/FAQ';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [error, setError] = useState<string | null>(null);

  const handleNavigate = useCallback((view: string) => {
    setCurrentView(view);
  }, []);

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold text-red-600 mb-2">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => {
              setError(null);
              setCurrentView('home');
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const renderMainContent = () => {
    if (currentView === 'care-team') {
      return <CareTeam onNavigate={setCurrentView} />;
    } else if (currentView === 'about') {
      return <About onNavigate={setCurrentView} />;
    } else if (currentView === 'faq') {
      return <FAQ onNavigate={setCurrentView} />;
    } else {
      return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={
          <div className="h-screen bg-gray-50">
            {renderMainContent()}
          </div>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;