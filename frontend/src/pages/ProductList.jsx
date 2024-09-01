import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategoryDropdown from '../components/CategoryDropdown';
import { Link } from 'react-router-dom';

const ProductList = ({ setSelectedProducts, setSelectedVendors, setBudget }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedVendors, setSelectedVendorsState] = useState([]);
  const [budget, setLocalBudget] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      axios.get(`/api/v1/products?category=${selectedCategory}`)
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
    }
  }, [selectedCategory]);

  const handleProductSelect = (product) => {
    setSelectedVendorsState(prev => {
      if (prev.includes(product.name)) {
        return prev.filter(v => v !== product.name);
      } else {
        return [...prev, product.name];
      }
    });
  };

  const startAuction = () => {
    setSelectedVendors(selectedVendors);
    setSelectedProducts([selectedCategory]); // Assuming category is the product type
    setBudget(budget);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Select SaaS Vendors</h2>
      <CategoryDropdown onCategorySelect={setSelectedCategory} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.name}
            product={product}
            onSelect={handleProductSelect}
            isSelected={selectedVendors.includes(product.name)}
          />
        ))}
      </div>

      <div className="my-4">
        <label className="block mb-2 text-lg font-semibold">Set Budget</label>
        <input
          type="number"
          className="p-2 border border-gray-300 rounded"
          value={budget}
          onChange={(e) => setLocalBudget(e.target.value)}
        />
      </div>
      
      <Link to="/auction">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded mt-4"
          onClick={startAuction}
        >
          Start Auction
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
