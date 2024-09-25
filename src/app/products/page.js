// src/app/products.js
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryDropdown from "../components/CategoryDropdown";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
      price: 10,
      // image: "https://via.placeholder.com/150",
      category: "Beverages",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
      price: 20,
      // image: "https://via.placeholder.com/150",
      category: "Toiletries",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
      price: 30,
      // image: "https://via.placeholder.com/150",
      category: "Drinks",
    },
    // Add more products as needed
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <CategoryDropdown setSelectedCategory={setSelectedCategory} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
