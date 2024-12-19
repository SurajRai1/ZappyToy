import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const featuredProducts = [
  {
    name: "Magic Learning Tablet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1631160299919-6a175aa6d189?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    ageRange: "3-7 yrs"
  },
  {
    name: "Creative Building Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    ageRange: "4-10 yrs"
  },
  {
    name: "Science Explorer Kit",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    ageRange: "6-12 yrs"
  },
  {
    name: "Musical Adventure Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1619229667009-e7e61c981f07?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    ageRange: "2-8 yrs"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CategorySection />
      
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;