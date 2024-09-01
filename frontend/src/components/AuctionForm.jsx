import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';

function AuctionForm() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [budget, setBudget] = useState('');
  const [requirements, setRequirements] = useState('');
  const navigate = useNavigate();

  const handleProductSelect = (product) => {
    setSelectedProducts(prevSelected => {
      const isAlreadySelected = prevSelected.some(p => p._id === product._id);
      if (isAlreadySelected) {
        return prevSelected.filter(p => p._id !== product._id);
      } else if (prevSelected.length < 3) {
        return [...prevSelected, product];
      } else {
        alert('You can only select 3 products. Please deselect one before adding another.');
        return prevSelected;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedProducts.length !== 3) {
      alert('Please select exactly 3 products');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auctions', {
        buyer: 'Example Company',
        selectedVendors: selectedProducts.map(p => p.vendor),
        productRange: selectedProducts[0].category,
        budget: parseFloat(budget),
        requirements,
      });
      navigate(`/result/${response.data._id}`);
    } catch (error) {
      console.error('Error creating auction:', error);
    }
  };

  return (
    <div>
      <ProductList onProductSelect={handleProductSelect} selectedProducts={selectedProducts} />
      <form onSubmit={handleSubmit}>
        <h2>Create New Auction</h2>
        <div>
          <h3>Selected Products ({selectedProducts.length}/3):</h3>
          {selectedProducts.map(product => (
            <div key={product._id}>
              <p>{product.name} - {product.vendor}</p>
              <button type="button" onClick={() => handleProductSelect(product)}>Remove</button>
            </div>
          ))}
        </div>
        <div>
          <label>Budget:</label>
          <input 
            type="number" 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your budget"
            required
          />
        </div>
        <div>
          <label>Requirements:</label>
          <textarea 
            value={requirements} 
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Enter your specific requirements"
            required
          />
        </div>
        <button type="submit" disabled={selectedProducts.length !== 3}>
          {selectedProducts.length === 3 ? 'Start Auction' : 'Select 3 Products to Start'}
        </button>
      </form>
    </div>
  );
}

export default AuctionForm;
