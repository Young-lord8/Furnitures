import React from 'react';
import Hero from './Hero.js';
import ProductCard from './ProductCard.js';

const featuredProducts = [
  { id: 1, name: 'Modern Sofa', price: 1299, description: 'Luxury leather design', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
  { id: 2, name: 'Dining Table', price: 899, description: 'Solid oak wood table', image: 'https://images.unsplash.com/photo-1547503677-fd380b888e9f?w=400&h=300&fit=crop' },
  { id: 3, name: 'Accent Chair', price: 399, description: 'Velvet comfort chair', image: 'https://images.unsplash.com/photo-1599122130001-553b1dd676cf?w=400&h=300&fit=crop' }
];

const Home = () => {
  return (
    <>
      <Hero />
      <section className="featured-products">
        <div className="container">
          <h2>🔥 Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
