import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-gray pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="font-serif text-2xl text-brand-light tracking-tight block mb-6">
              APEX<span className="text-brand-gold">.</span>
            </a>
            <p className="text-brand-muted max-w-md font-light">
              Facilitating strategic mergers and acquisitions for the nation's most prestigious accounting firms. 
              Bridging the gap between legacy and future growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-light font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#sellers" className="text-brand-muted hover:text-brand-gold transition-colors text-sm">Seller Representation</a></li>
              <li><a href="#buyers" className="text-brand-muted hover:text-brand-gold transition-colors text-sm">Buy-Side Advisory</a></li>
              <li><a href="#process" className="text-brand-muted hover:text-brand-gold transition-colors text-sm">Valuation</a></li>
              <li><a href="#process" className="text-brand-muted hover:text-brand-gold transition-colors text-sm">Deal Structuring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-light font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-brand-muted hover:text-brand-gold transition-colors text-sm">Contact Us</a></li>
              <li><a href="mailto:eranshe@gmail.com" className="text-brand-muted hover:text-brand-gold transition-colors text-sm">eranshe@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-gray pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} Apex Succession Partners. All rights reserved.
          </p>
          <div className="text-brand-muted text-xs">
            Apex Succession Partners is a strategic advisory firm.
          </div>
        </div>
      </div>
    </footer>
  );
};