import { useState } from "react";
import StoreCard from "./StoreCard";

const ConnectWithBusinesses = ({ stores }) => {
  const categories = ["Electronics", "Groceries", "Fashion", "Home & Living"];
  const [activeCategory, setActiveCategory] = useState("Electronics");

  const filteredStores = stores.filter(
    (store) => store.category === activeCategory
  );

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Connect with Your Favorite Businesses</h2>
        <p className="text-center text-gray-600 mb-8">
          Instantly reach out to stores via WhatsApp
        </p>

        {/* Tabs for Categories */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {/* CTA for Business Owners */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold">Want to list your business?</h3>
          <p className="text-gray-600 mb-4">Increase your visibility by joining our platform today!</p>
          <a
            href="/register-business"
            className="bg-blue-500 text-white px-6 py-2 rounded shadow"
          >
            Register Your Business
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithBusinesses;
