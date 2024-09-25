// src/app/products/[id].jsx
"use client";

import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Detailed description for product 1",
    price: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Detailed description for product 2",
    price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Detailed description for product 3",
    price: 30,
    image: "https://via.placeholder.com/150",
  },
  // Add more products here
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query; // Extracting product ID from URL

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-full mb-4" />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <button className="bg-blue-500 text-white p-2 rounded">
          Add to Cart
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
