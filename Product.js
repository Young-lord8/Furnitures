import React from 'react';
import ProductCard from './ProductCard.js';

const allProducts = [
  { id: 1, name: 'Modern Sofa', price: 1299, description: 'Luxury leather design', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
  { id: 2, name: 'Dining Table', price: 899, description: 'Solid oak wood table', image: 'https://images.unsplash.com/photo-1547503677-fd380b888e9f?w=400&h=300&fit=crop' },
  { id: 3, name: 'Accent Chair', price: 399, description: 'Velvet comfort chair', image: 'https://images.unsplash.com/photo-1599122130001-553b1dd676cf?w=400&h=300&fit=crop' },
  { id: 4, name: 'Sectional Sofa', price: 1899, description: 'L-shaped family sofa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop' }
];

const Products = () => {
  return (
    <section className="products-page">
      <div className="container">
        <h1>🛒 Our Collection</h1>
        <div className="products-grid">
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
