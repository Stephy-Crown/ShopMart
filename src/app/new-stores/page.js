import Link from "next/link";
import Image from "next/image";
import { newArrivals, newStoresData } from "../data/newStoresData"; // Import your newArrivals data

const NewStoresPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-3xl font-bold">New Stores</h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore our latest additions and discover exciting new shops!
        </p>
      </header>

      {/* Filter Options (optional) */}
      {/* <div className="flex justify-center mb-4">
        <select className="p-2 border rounded">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fruits</option>
          <option>Cakes & Bakes</option>
          <option>Clothes</option>
          <option>Groceries</option>
        </select>
      </div> */}

      {/* Store Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newStoresData.map((store) => (
          <div key={store.id} className="p-4 bg-white rounded-lg shadow">
            <Link href={`/stores/${store.id}`}>
              <div className="relative w-full h-32 rounded-lg overflow-hidden">
                <Image
                  src={store.image}
                  alt={store.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mt-2 text-lg font-semibold text-black">
                {store.name}
              </h3>
              <span className="text-lg font-bold text-green-600">
                ${store.price.toFixed(2)}
              </span>
            </Link>
            <div className="mt-2">
              <Link
                href={`/stores/${store.id}`}
                className="text-blue-500 hover:underline"
              >
                View Store
                {/* <a ></a> */}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer (optional) */}
      <footer className="text-center mt-8">
        <p className="text-gray-500">
          &copy; 2024 Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NewStoresPage;
