import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  icon: string;
  color: string;
}

const categories: Category[] = [
  { name: "Educational Toys", icon: "🎓", color: "bg-blue-100 hover:bg-blue-200" },
  { name: "Creative Arts", icon: "🎨", color: "bg-pink-100 hover:bg-pink-200" },
  { name: "Building Blocks", icon: "🏗️", color: "bg-green-100 hover:bg-green-200" },
  { name: "Board Games", icon: "🎲", color: "bg-purple-100 hover:bg-purple-200" },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`${category.color} p-6 rounded-xl transition-all transform hover:scale-105 group`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{category.icon}</span>
                  <span className="text-xl font-semibold text-gray-800">
                    {category.name}
                  </span>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}