import React from 'react';

const VendorSelection = ({ vendors, onVendorSelect }) => {
  return (
    <div className="my-4">
      <h4 className="text-lg font-semibold mb-2">Select Vendors</h4>
      {vendors.map(vendor => (
        <button
          key={vendor}
          className={`px-4 py-2 mr-2 mb-2 rounded ${vendors.includes(vendor) ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => onVendorSelect(vendor)}
        >
          {vendor}
        </button>
      ))}
    </div>
  );
};

export default VendorSelection;
