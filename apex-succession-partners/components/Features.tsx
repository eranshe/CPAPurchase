import React from 'react';
import { SELLER_FEATURES, BUYER_FEATURES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="bg-brand-charcoal relative">
      
      {/* Sellers Section */}
      <div id="sellers" className="py-24 border-b border-brand-gray/30 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-gray/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="md:w-2/3">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-2 block">For Owners & Partners</span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-light">
                Secure Your <span className="italic text-brand-muted">Legacy</span>
              </h2>
            </div>
            <p className="md:w-1/3 text-brand-muted text-sm leading-relaxed border-l border-brand-gold/30 pl-6">
              You’ve built more than a client list; you’ve built a reputation. 
              We assist partners in exiting on their terms, maximizing value while ensuring clients are cared for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SELLER_FEATURES.map((feature, index) => (
              <div key={index} className="p-8 bg-brand-black border border-brand-gray hover:border-brand-gold/50 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-brand-gold mb-6" />
                <h3 className="font-serif text-xl text-brand-light mb-4">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buyers Section */}
      <div id="buyers" className="py-24 relative overflow-hidden bg-brand-gray/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div className="md:w-2/3">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-2 block">For Growing Firms</span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-light">
                Expand Your <span className="italic text-brand-muted">Footprint</span>
              </h2>
            </div>
            <p className="md:w-1/3 text-brand-muted text-sm leading-relaxed border-l border-brand-gold/30 pl-6">
              Organic growth is slow. Strategic acquisition is the accelerator. 
              We connect you with compatible firms ready to merge, bringing talent and clients into your fold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUYER_FEATURES.map((feature, index) => (
              <div key={index} className="p-8 bg-brand-charcoal border border-brand-gray hover:bg-brand-gray transition-colors duration-300 shadow-xl">
                <feature.icon className="w-10 h-10 text-brand-light mb-6 opacity-80" />
                <h3 className="font-serif text-xl text-brand-light mb-4">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};