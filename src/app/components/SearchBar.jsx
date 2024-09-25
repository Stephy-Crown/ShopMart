// src/app/components/SearchBar.js
"use client";

const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default SearchBar;
