import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryDropdown = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-semibold">Select a Category</label>
      <select
        className="p-2 border border-gray-300 rounded"
        onChange={(e) => onCategorySelect(e.target.value)}
      >
        <option value="">Choose a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
