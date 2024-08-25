import React, { useState } from 'react';

const BusinessForm = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [productsServices, setProductsServices] = useState('');
  const [pricing, setPricing] = useState('');
  const [availableDates, setAvailableDates] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle form submission, e.g., send data to a backend server
    // You can access the form data in the respective state variables (businessName, description, etc.)
    // Perform any necessary validation before submitting the data
  };

  return (
    <div>
        <h2 className='text-center text-2xl pt-3 font-bold'>You are just a step away from making your first business</h2>
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-medium mb-4">List Your Business</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Business Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4"> 
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Products/Services</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={productsServices}
            onChange={(e) => setProductsServices(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Pricing</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Available Dates</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={availableDates}
            onChange={(e) => setAvailableDates(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default BusinessForm;
