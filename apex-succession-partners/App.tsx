import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light font-sans selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;