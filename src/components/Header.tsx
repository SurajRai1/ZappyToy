import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Gamepad2 } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="w-8 h-8 animate-bounce" />
          <h1 className="text-2xl font-bold">Zappy Tots</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#toys" className="hover:text-yellow-300 transition-colors">Toys</a></li>
              <li><a href="#games" className="hover:text-yellow-300 transition-colors">Games</a></li>
              <li><a href="#learning" className="hover:text-yellow-300 transition-colors">Learning</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for fun..."
                className="pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <button className="relative hover:text-yellow-300 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
                0
              </span>
            </button>
          </div>
        </div>
        
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}