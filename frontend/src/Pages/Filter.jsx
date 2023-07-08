import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: "",
    color: "",
    mileage: ""
  });

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value
    }));
    onFilterChange(filters);
  };

  return (
    <div>
      <div>
        <label>
          Price:
          <input
            type="text"
            value={filters.price}
            onChange={(e) => handleFilterChange("price", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Color:
          <input
            type="text"
            value={filters.color}
            onChange={(e) => handleFilterChange("color", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Mileage:
          <input
            type="text"
            value={filters.mileage}
            onChange={(e) => handleFilterChange("mileage", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Filter;
