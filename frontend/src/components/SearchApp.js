import React, { useState } from 'react';


const SearchApp = () => {
    const businessesData = [
        {
          id: 1,
          name: "Café",
          category: "Restaurant",
          location: "Delhi",
          availability: "Open",
        },
        {
          id: 2,
          name: "The Fashion Store",
          category: "Retail",
          location: "Kolkata",
          availability: "Open",
        },
        {
          id: 3,
          name: "Green Thumb Garden Center",
          category: "Retail",
          location: "Delhi",
          availability: "Closed",
        },
        {
            id: 4,
            name: "West Town Bakery",
            category: "Restaurant",
            location: "Kolkata",
            availability: "Open",
          },
        // Add more business objects as needed
      ];
      
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const filteredBusinesses = businessesData.filter((business) => {
    const isMatchingSearchQuery = business.name.toLowerCase().includes(searchQuery.toLowerCase());
    const isMatchingCategoryFilter = categoryFilter ? business.category === categoryFilter : true;
    const isMatchingLocationFilter = locationFilter ? business.location === locationFilter : true;

    return isMatchingSearchQuery && isMatchingCategoryFilter && isMatchingLocationFilter;
  });

  return (
    <div className="container mx-auto p-24">
      <h1 className="text-2xl font-bold mb-4">Business Search</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search businesses..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="w-full rounded p-2 mb-4"
      />

      {/* Category Filter */}
      <select
        value={categoryFilter}
        onChange={handleCategoryFilterChange}
        className="w-full rounded p-2 mb-4"
      >
        <option value="">All Categories</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Retail">Retail</option>
        {/* Add more category options as needed */}
      </select>

      {/* Location Filter */}
      <select
        value={locationFilter}
        onChange={handleLocationFilterChange}
        className="w-full rounded p-2 mb-4"
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Kolkata">Kolkata</option>
        {/* Add more location options as needed */}
      </select>

      {/* Results */}
      <ul className="list-disc pl-6">
        {filteredBusinesses.map((business) => (
          <li key={business.id}>{business.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchApp;
