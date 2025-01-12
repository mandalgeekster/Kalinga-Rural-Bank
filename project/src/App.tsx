import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import GovtSchemes from './pages/GovtSchemes';
import Investments from './pages/Investments';
import Budgeting from './pages/Budgeting';
import Mentorship from './pages/Mentorship';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 pb-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/govt-schemes" element={<GovtSchemes />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/budgeting" element={<Budgeting />} />
            <Route path="/mentorship" element={<Mentorship />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;