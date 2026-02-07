import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ease-out flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-gold text-brand-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,220,65,0.3)]",
    secondary: "bg-brand-gray text-brand-light hover:bg-brand-charcoal border border-brand-gray",
    outline: "bg-transparent text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-brand-black"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};