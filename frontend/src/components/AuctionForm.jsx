// client/src/components/AuctionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AuctionForm() {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [productRange, setProductRange] = useState('');
  const [budget, setBudget] = useState('');
  const [requirements, setRequirements] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedVendors.length !== 3) {
      alert('Please select exactly 3 vendors');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auctions', {
        buyer: 'Example Company',
        selectedVendors,
        productRange,
        budget: parseFloat(budget),
        requirements,
      });
      history.push(`/result/${response.data._id}`);
    } catch (error) {
      console.error('Error creating auction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Auction</h2>
      <div>
        <label>Select 3 Vendors:</label>
        <select 
          multiple 
          value={selectedVendors} 
          onChange={(e) => setSelectedVendors(Array.from(e.target.selectedOptions, option => option.value))}
        >
          <option value="GitHub">GitHub</option>
          <option value="GitLab">GitLab</option>
          <option value="Bitbucket">Bitbucket</option>
          {/* Add more vendors as needed */}
        </select>
      </div>
      <div>
        <label>Product Range:</label>
        <input 
          type="text" 
          value={productRange} 
          onChange={(e) => setProductRange(e.target.value)}
          placeholder="e.g. Code Collaboration Platform"
        />
      </div>
      <div>
        <label>Budget:</label>
        <input 
          type="number" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter your budget"
        />
      </div>
      <div>
        <label>Requirements:</label>
        <textarea 
          value={requirements} 
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Enter your specific requirements"
        />
      </div>
      <button type="submit">Start Auction</button>
    </form>
  );
}

export default AuctionForm;