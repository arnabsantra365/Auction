import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ onProductSelect, selectedProducts }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/products/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/products?category=${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>SaaS Products</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {products.length === 0 && selectedCategory && (
        <p>No products available in this category.</p>
      )}

      {products.map(product => (
        <ProductItem 
          key={product._id}
          product={product}
          isSelected={selectedProducts.some(p => p._id === product._id)}
          onSelect={onProductSelect}
          disableSelect={selectedProducts.length >= 3 && !selectedProducts.some(p => p._id === product._id)}
        />
      ))}
    </div>
  );
}

function ProductItem({ product, isSelected, onSelect, disableSelect }) {
  const handleClick = () => {
    onSelect(product);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Base Price: ${product.basePrice}</p>
      <button 
        onClick={handleClick}
        disabled={disableSelect}
        style={{
          backgroundColor: isSelected ? 'green' : 'blue',
          color: '#fff',
          cursor: !disableSelect ? 'pointer' : 'not-allowed'
        }}
      >
        {isSelected ? 'Deselect' : 'Select'}
      </button>
    </div>
  );
}

export default ProductList;
