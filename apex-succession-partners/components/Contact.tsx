import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    email: '',
    type: 'selling', // Default selection
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission would go here
    alert("Thank you. We will contact you at " + formData.email + " shortly.");
    setFormData({ name: '', firm: '', email: '', type: 'selling' });
  };

  return (
    <section id="contact" className="py-24 bg-brand-charcoal relative">
      <div className="absolute inset-0 bg-brand-gray/10"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Copy */}
          <div className="pt-8">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-light mb-6">
              Confidential Inquiry
            </h2>
            <p className="text-brand-muted text-lg mb-12 leading-relaxed">
              Whether you are considering an exit strategy or looking to acquire a firm, 
              discretion is our highest priority. Start the conversation with a private assessment.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-black border border-brand-gray flex items-center justify-center text-brand-gold shrink-0">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-brand-gold uppercase tracking-widest mb-1">Direct Contact</p>
                  <a href="mailto:eranshe@gmail.com" className="font-serif text-xl text-brand-light hover:text-brand-gold transition-colors">eranshe@gmail.com</a>
                  <p className="text-sm text-brand-muted mt-2">
                    Our partners monitor this inbox directly.
                  </p>
                </div>
              </div>
              
              <div className="p-6 border border-brand-gray bg-brand-black/50">
                <h4 className="text-brand-light font-serif text-lg mb-2">Our Promise</h4>
                <p className="text-brand-muted text-sm">
                  We are not a listing service. We are strategic advisors. Your information is never shared without your explicit consent and a signed NDA.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-brand-black p-8 md:p-12 border border-brand-gray shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-charcoal via-brand-gold to-brand-charcoal"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Type Selection */}
              <div>
                <label className="block text-brand-muted text-xs uppercase tracking-widest mb-2">I am interested in</label>
                <div className="relative">
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-brand-gray text-brand-light p-4 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="selling">Selling my Accounting Firm</option>
                    <option value="buying">Acquiring an Accounting Firm</option>
                    <option value="merger">Discussing a Strategic Merger</option>
                    <option value="valuation">Firm Valuation Services</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-brand-muted">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-brand-muted text-xs uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-charcoal border border-brand-gray text-brand-light p-4 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-brand-muted text-xs uppercase tracking-widest mb-2">Firm Name</label>
                <input 
                  type="text" 
                  name="firm"
                  value={formData.firm}
                  onChange={handleChange}
                  className="w-full bg-brand-charcoal border border-brand-gray text-brand-light p-4 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="Doe & Associates, CPAs"
                />
              </div>
              <div>
                <label className="block text-brand-muted text-xs uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-charcoal border border-brand-gray text-brand-light p-4 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <Button type="submit" fullWidth className="mt-4">
                Submit Confidential Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};