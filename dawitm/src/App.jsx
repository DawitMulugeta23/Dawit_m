import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
// ማሳሰቢያ፡ Skills.jsx ባለፈው የላኩልህ ኮድ እዚህ ጋር import ይደረጋል

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      {/* የ Projects እና Contact ሴክሽኖችን እዚህ ይጨምሩ */}
      <section id="projects" className="h-96 p-20"><h2>Projects Section</h2></section>
      <section id="contact" className="h-96 p-20 bg-gray-100"><h2>Contact Section</h2></section>
    </div>
  );
}

export default App;