import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purple-500 bg-opacity-95 z-50 md:hidden">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-white">
          <X className="w-8 h-8" />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 text-white text-2xl">
        <a href="#toys" className="hover:text-yellow-300 transition-colors" onClick={onClose}>Toys</a>
        <a href="#games" className="hover:text-yellow-300 transition-colors" onClick={onClose}>Games</a>
        <a href="#learning" className="hover:text-yellow-300 transition-colors" onClick={onClose}>Learning</a>
      </nav>
    </div>
  );
}