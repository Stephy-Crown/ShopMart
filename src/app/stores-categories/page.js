import Link from "next/link";
import React from "react";

const categories = [
  { id: 1, name: "Electronics", path: "/stores-categories/electronics" },
  { id: 2, name: "Fruits", path: "/stores-categories/fruits" },
  { id: 3, name: "Cakes & Bakes", path: "/stores-categories/cakes-bakes" },
  { id: 4, name: "Clothes", path: "/stores-categories/clothes" },
  { id: 5, name: "Groceries", path: "/stores-categories/groceries" },
];

const StoresCategories = () => {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Store Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.path}
            className="block p-6 border rounded-lg shadow-sm hover:bg-gray-50"
          >
            {/* <a > */}
            <h2 className="text-xl font-semibold">{category.name}</h2>
            {/* </a> */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StoresCategories;
