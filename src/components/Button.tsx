import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: LucideIcon;
}

export default function Button({ children, variant, onClick, icon: Icon }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg";
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-purple-200",
    secondary: "bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 text-purple-600 shadow-pink-100"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} rounded-lg`}
    >
      <span>{children}</span>
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
}