import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Skills />
      {/* Add Project and Contact components here similarly */}
    </div>
  );
}

export default App;