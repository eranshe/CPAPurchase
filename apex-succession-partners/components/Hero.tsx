import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-black to-brand-charcoal z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] z-0"></div>
      
      {/* Abstract Light Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gray/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="inline-block mb-6 text-brand-gold tracking-[0.2em] text-xs md:text-sm uppercase font-semibold border border-brand-gold/30 px-4 py-2 rounded-full backdrop-blur-sm">
          Mergers & Acquisitions for Accounting Firms
        </span>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-brand-light mb-8 drop-shadow-2xl">
          Strategic Growth. <br />
          <span className="text-brand-muted italic">Distinguished Exits.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-brand-muted text-lg md:text-xl leading-relaxed mb-12 font-light">
          We are the architects of alliance, connecting elite accounting firms seeking succession with forward-thinking practices poised for expansion.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button onClick={scrollToContact}>
            Start the Conversation <ArrowRight className="w-4 h-4" />
          </Button>
          <a href="#sellers">
            <Button variant="secondary">
              For Sellers
            </Button>
          </a>
          <a href="#buyers">
            <Button variant="outline">
              For Buyers
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};