// src/app/components/CategoryDropdown.js
"use client";

const CategoryDropdown = () => {
  return (
    <select className="border p-2 rounded mb-4">
      <option value="">Select Category</option>
      <option value="beverages">Beverages</option>
      <option value="drinks">Drinks</option>
      <option value="toiletries">Toiletries</option>
    </select>
  );
};

export default CategoryDropdown;
