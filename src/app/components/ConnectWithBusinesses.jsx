// // "use client";
// // import Link from "next/link";
// // import { useState } from "react";

// // export default function ConnectWithBusinesses() {
// //   const [category, setCategory] = useState("");

// //   return (
// //     <div className="py-12 bg-gray-100">
// //       <div className="container mx-auto px-6 text-center">
// //         <h2 className="text-3xl font-bold mb-4">
// //           Connect with Local Businesses
// //         </h2>
// //         <p className="text-lg mb-6">
// //           Discover and connect with businesses near you that cater to your
// //           needs.
// //         </p>
// //         {/* Category Selector */}
// //         <div className="mb-6">
// //           <select
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             className="border rounded-md px-4 py-2 text-lg"
// //           >
// //             <option value="" disabled>
// //               Select a category
// //             </option>
// //             <option value="groceries">Groceries</option>
// //             <option value="restaurants">Restaurants</option>
// //             <option value="services">Services</option>
// //             {/* Add more categories as needed */}
// //           </select>
// //           <Link href={`/stores?category=${category}`}>
// //             <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
// //               Find Stores
// //             </button>
// //           </Link>
// //         </div>
// //         {/* Call-to-Action for Businesses */}
// //         <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
// //           <p className="text-lg">Are you a local business owner?</p>
// //           <Link href="/business-signup">
// //             <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md">
// //               Join Us
// //             </button>
// //           </Link>
// //         </div>
// //         {/* Contact Option */}
// //         <div className="mt-6">
// //           <p className="text-sm">
// //             Need help?{" "}
// //             <Link href="/contact" className="text-blue-600">
// //               Contact us for more info
// //             </Link>
// //             .
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import StoreCard from "./StoreCard";

// const ConnectWithBusinesses = ({ stores }) => {
//   const categories = ["Electronics", "Groceries", "Fashion", "Home & Living"];
//   const [activeCategory, setActiveCategory] = useState("Electronics");

//   const filteredStores = stores.filter(
//     (store) => store.category === activeCategory
//   );

//   return (
//     <section className="py-10 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Connect with Your Favorite Businesses
//         </h2>
//         <p className="text-center text-gray-600 mb-8">
//           Instantly reach out to stores via WhatsApp
//         </p>

//         {/* Tabs for Categories */}
//         <div className="flex justify-center mb-8 space-x-4">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded ${
//                 activeCategory === category
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-300"
//               }`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Store Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredStores.map((store) => (
//             <StoreCard key={store.id} store={store} />
//           ))}
//         </div>

//         {/* CTA for Business Owners */}
//         <div className="mt-12 text-center">
//           <h3 className="text-xl font-semibold">Want to list your business?</h3>
//           <p className="text-gray-600 mb-4">
//             Increase your visibility by joining our platform today!
//           </p>
//           <a
//             href="/register-business"
//             className="bg-blue-500 text-white px-6 py-2 rounded shadow"
//           >
//             Register Your Business
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectWithBusinesses;

// import { useState } from "react";
// import StoreCard from "./StoreCard";

// const categories = ["All", "Electronics", "Groceries"]; // Add more categories as needed

// const ConnectWithBusinesses = ({ stores }) => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredStores =
//     selectedCategory === "All"
//       ? stores
//       : stores.filter((store) => store.category === selectedCategory);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Tabs for categories */}
//       <div className="flex justify-center mb-6">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 mx-2 text-lg font-medium ${
//               selectedCategory === category
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             } rounded-md hover:bg-blue-400 hover:text-white`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Store Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredStores.map((store) => (
//           <StoreCard key={store.id} store={store} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ConnectWithBusinesses;

import { useState } from "react";
import StoreCard from "./StoreCard";

const ConnectWithBusinesses = ({ stores }) => {
  const categories = [
    "All",
    "Electronics",
    "Groceries",
    "Fashion",
    "Home & Living",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStores =
    activeCategory === "All"
      ? stores
      : stores.filter((store) => store.category === activeCategory);

  // const filteredStores = stores.filter(
  //   (store) => store.category === activeCategory
  // );

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Connect with Your Favorite Businesses
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Instantly reach out to stores via WhatsApp
        </p>

        {/* Tabs for Categories */}
        <div className="flex justify-center mb-8 flex-wrap space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-l from-[#557C56] to-[#3D593E] text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-blue-400 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 mx-4 md:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {/* CTA for Business Owners */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold">Want to list your business?</h3>
          <p className="text-gray-600 mb-4">
            Increase your visibility by joining our platform today!
          </p>
          <a
            href="/register-business"
            className="bg-gradient-to-l from-[#557C56] to-[#3D593E] text-white px-6 py-2 rounded shadow"
          >
            Register Your Business
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithBusinesses;
