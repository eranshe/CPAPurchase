import React from 'react';
import { PROCESS_STEPS, TESTIMONIAL } from '../constants';
import { Quote } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-black relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-charcoal to-brand-black opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 block">The Transaction</span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-light mb-6">
            Precision in Execution
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-24">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-brand-gray z-0"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative z-10 bg-brand-black pt-4 md:pt-0 border-l border-brand-gray md:border-l-0 pl-6 md:pl-0">
              <div className="text-6xl font-serif text-brand-gray font-bold mb-4 md:mb-8 md:bg-brand-black md:inline-block md:pr-4 relative">
                <span className="text-stroke-gold text-brand-gold/20">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-light mb-4 uppercase tracking-wider">
                {step.title}
              </h3>
              <p className="text-brand-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="relative max-w-4xl mx-auto bg-brand-charcoal p-12 border border-brand-gray">
          <div className="absolute -top-6 -left-6 text-brand-gold bg-brand-black p-4 border border-brand-gray rounded-full">
            <Quote size={24} />
          </div>
          <div className="text-center">
            <p className="font-serif text-xl md:text-2xl text-brand-light italic leading-relaxed mb-8">
              "{TESTIMONIAL.quote}"
            </p>
            <div>
              <p className="text-brand-gold font-bold tracking-widest text-sm uppercase">
                {TESTIMONIAL.author}
              </p>
              <p className="text-brand-muted text-xs mt-1 uppercase tracking-wide">
                {TESTIMONIAL.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};