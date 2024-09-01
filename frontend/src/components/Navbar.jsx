import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold"> Marketplace</h1>
        <div>
          <Link to="/" className="text-white mr-4">Home</Link>
          <Link to="/products" className="text-white">Products</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
