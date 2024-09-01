import React from 'react';

const AuctionResults = ({ bids }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Auction Results</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Vendor</th>
            <th className="py-2">Price</th>
            <th className="py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid, index) => (
            <tr key={index} className="text-center border-t">
              <td className="py-2">{bid.vendor}</td>
              <td className="py-2">${bid.price.toFixed(2)}</td>
              <td className="py-2">{bid.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionResults;
