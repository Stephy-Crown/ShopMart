// src/app/cart.js
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 2 },
  ]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Logic for checking out
    alert("Proceeding to checkout...");
  };

  const handleContinueShopping = () => {
    // Logic for continuing shopping
    window.location.href = "/";
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <div>
                    <h2 className="text-lg">{item.name}</h2>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="font-semibold">
                    ${item.price * item.quantity}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <div className="text-lg font-semibold">Total: ${totalPrice}</div>
              <div>
                <button
                  onClick={handleCheckout}
                  className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
                >
                  Checkout
                </button>
                <button
                  onClick={handleContinueShopping}
                  className="border border-blue-500 text-blue-500 rounded px-4 py-2"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
