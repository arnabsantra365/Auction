import React from 'react';
import Items from './Items';

const ProductCard = ({ product, onSelect, isSelected }) => {
  return (
    // <div className={`border p-4 rounded ${isSelected ? 'border-green-500' : 'border-gray-300'}`}>
    //   <h3 className="text-xl font-semibold">{product.name}</h3>
    //   <p>{product.description}</p>
    //   <p>{product.basePrice}</p>
    //   <button
    //     className={`mt-2 px-4 py-2 rounded ${isSelected ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
    //     onClick={() => onSelect(product)}
    //   >
    //     {isSelected ? 'Deselect' : 'Select'}
    //   </button>
      <Items product={product} onSelect={onSelect} isSelected={isSelected}/>
    // </div>
  );
};

export default ProductCard;
