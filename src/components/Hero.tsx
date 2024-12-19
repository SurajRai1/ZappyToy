import React, { useState } from 'react';
import { Sparkles, Rocket } from 'lucide-react';
import SubscribeModal from './SubscribeModal';
import Button from './Button';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-purple-100 via-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-600 leading-tight">
              Unlock a World of
              <span className="block text-pink-500">Magical Play! ✨</span>
            </h1>
            <p className="text-xl text-gray-600">
              Join our Fun Club for exclusive deals, birthday surprises, and magical updates that'll make your little one's eyes sparkle!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                onClick={() => setIsModalOpen(true)}
                icon={Sparkles}
              >
                Join Now
              </Button>
              <Button 
                variant="secondary"
                icon={Rocket}
              >
                View Toys
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80"
              alt="Happy kids playing with toys"
              className="rounded-2xl shadow-2xl transform hover:rotate-2 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <SubscribeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}