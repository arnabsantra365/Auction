import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuctionResults from '../components/AuctionResults';

const Auction = ({ selectedProducts, selectedVendors, budget }) => {
  const [auctionResults, setAuctionResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const startAuction = async () => {
      if (selectedVendors.length === 0) {
        setError("Please select at least one vendor.");
        return;
      }

      const auctionData = {
        buyer: "Company ABC",
        selectedVendors: selectedVendors, // Vendors go here
        productRange: selectedProducts.join(', '),   // Assume this is now the category or product type
        budget: parseFloat(budget),
        requirements: "200 engineers",
      };

      try {
        const response = await axios.post('/api/v1/auctions', auctionData);
        const auctionId = response.data._id;

        const auctionResponse = await axios.post(`/api/v1/auctions/${auctionId}/start`);
        setAuctionResults(auctionResponse.data.bids);
      } catch (err) {
        console.error('Error in auction process:', err);
        setError(err.response?.data?.message || 'Failed to start auction');
      }
    };

    startAuction();
  }, [selectedProducts, selectedVendors, budget]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Auction Results</h2>
      {error && <p className="text-red-500">Error: {error}</p>}
      {auctionResults ? (
        <AuctionResults bids={auctionResults} />
      ) : (
        <p>Loading auction results...</p>
      )}
    </div>
  );
};

export default Auction;
