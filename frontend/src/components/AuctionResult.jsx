// client/src/components/AuctionResult.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AuctionResult() {
  const [auction, setAuction] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auctions/${id}`);
        setAuction(response.data);

        if (response.data.status === 'pending') {
          const auctionResponse = await axios.post(`http://localhost:5000/api/auctions/${id}/start`);
          setAuction(auctionResponse.data);
        }
      } catch (error) {
        console.error('Error fetching or starting auction:', error);
      }
    };

    fetchAuction();
  }, [id]);

  if (!auction) return <div>Loading...</div>;

  return (
    <div>
      <h2>Auction Result</h2>
      <p>Product Range: {auction.productRange}</p>
      <p>Original Budget: ${auction.budget.toFixed(2)}</p>
      <h3>Best Offers (Sorted):</h3>
      {auction.bids.map((bid, index) => (
        <div key={bid.vendor}>
          <h4>{index + 1}. {bid.vendor}</h4>
          <p>Price: ${bid.price.toFixed(2)}</p>
          <p>Discount: {((1 - bid.price / auction.budget) * 100).toFixed(2)}%</p>
          <p>Details: {bid.details}</p>
        </div>
      ))}
    </div>
  );
}

export default AuctionResult;