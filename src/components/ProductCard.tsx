import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  ageRange: string;
}

export default function ProductCard({ name, price, image, rating, ageRange }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-yellow-400 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">
          {ageRange}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">${price}</span>
          <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transform hover:scale-110 transition-transform">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}