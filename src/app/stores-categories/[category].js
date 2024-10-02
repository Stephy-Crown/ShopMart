import { useRouter } from "next/router";
import React from "react";

const storesData = {
  electronics: [
    {
      id: 1,
      name: "Best Buy",
      description: "Your go-to store for electronics.",
    },
    { id: 2, name: "Tech World", description: "Latest gadgets and devices." },
  ],
  fruits: [
    { id: 1, name: "Fresh Fruits Market", description: "Organic fruits." },
    {
      id: 2,
      name: "Tropical Fruits",
      description: "Exotic fruits from around the world.",
    },
  ],
  // Add similar data for other categories...
};

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const stores = storesData[category] || [];

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">{category} Stores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <div key={store.id} className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p className="text-gray-700">{store.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
