import { ShieldCheck, TrendingUp, Users, Scale, Lock, Handshake, Briefcase, PieChart } from 'lucide-react';
import { NavItem, Feature, ProcessStep, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'For Sellers', href: '#sellers' },
  { label: 'For Buyers', href: '#buyers' },
  { label: 'Methodology', href: '#process' },
];

export const SELLER_FEATURES: Feature[] = [
  {
    title: 'Value Realization',
    description: 'We ensure you are compensated not just for your client list, but for the brand equity and operational excellence you have cultivated.',
    icon: PieChart
  },
  {
    title: 'Legacy Preservation',
    description: 'We identify successors who honor your culture, ensuring your staff and clients experience a seamless transition without disruption.',
    icon: ShieldCheck
  },
  {
    title: 'Confidential Exit',
    description: 'Our blind-match process ensures your intent to sell remains strictly confidential until a qualified letter of intent is signed.',
    icon: Lock
  }
];

export const BUYER_FEATURES: Feature[] = [
  {
    title: 'Strategic Expansion',
    description: 'Bypass the slow crawl of organic growth. Acquire established books of business that align perfectly with your firm’s expertise.',
    icon: TrendingUp
  },
  {
    title: 'Talent Acquisition',
    description: 'In a tight labor market, acquiring a firm is the most efficient strategy to secure seasoned CPAs and support staff.',
    icon: Users
  },
  {
    title: 'Vetted Opportunities',
    description: 'We present only pre-qualified opportunities with verified financials, saving you time on due diligence for dead-end deals.',
    icon: Scale
  }
];

// Placeholder for export to satisfy original imports in other files if needed, 
// though we will update components to use the new arrays.
export const FEATURES = [...SELLER_FEATURES, ...BUYER_FEATURES]; 

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation & Valuation',
    description: 'We analyze the firm’s financials, culture, and goals to establish a market valuation and ideal partner profile.'
  },
  {
    number: '02',
    title: 'Private Matching',
    description: 'We discreetly introduce sellers to our exclusive roster of pre-vetted acquisition partners who match the criteria.'
  },
  {
    number: '03',
    title: 'Deal Structuring',
    description: 'We facilitate the negotiation, assisting with LOIs, due diligence, and final agreements to ensure a fair and tax-efficient close.'
  }
];

export const TESTIMONIAL: Testimonial = {
  quote: "The merger wasn't just a transaction; it was a strategic alignment. Apex understood that we needed a partner, not just a buyer. The transition was flawless.",
  author: "Jonathan S.",
  role: "Former Managing Partner, Merged 2023"
};