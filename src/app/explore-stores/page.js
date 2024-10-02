// // // // pages/explore-stores.js

// import React from "react";

// const ExploreStores = () => {
//   // Sample data for featured stores
//   const featuredStores = [
//     {
//       id: 1,
//       name: "Store A",
//       description: "Amazing deals on electronics.",
//       logo: "/store-a-logo.png",
//       link: "/store-a",
//       whatsappLink: "https://wa.me/1234567890?text=Hello%20Store%20A%21",
//     },
//     {
//       id: 2,
//       name: "Store B",
//       description: "Trendy fashion for everyone.",
//       logo: "/store-b-logo.png",
//       link: "/store-b",
//       whatsappLink: "https://wa.me/1234567890?text=Hello%20Store%20A%21",
//     },
//     {
//       id: 3,
//       name: "Store C",
//       description: "Quality home goods at great prices.",
//       logo: "/store-c-logo.png",
//       link: "/store-c",
//       whatsappLink: "https://wa.me/1234567890?text=Hello%20Store%20A%21",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Explore Our Featured Stores</h1>
//         <p className="mt-2 text-gray-600">
//           Discover exclusive offers and unique products.
//         </p>
//       </header>

//       {/* Featured Stores Carousel */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Featured Stores</h2>
//         <div className="flex overflow-x-auto space-x-4">
//           {featuredStores.map((store) => (
//             <div
//               key={store.id}
//               className="min-w-[200px] bg-white shadow-lg rounded-lg p-4 text-center"
//             >
//               <img
//                 src={store.logo}
//                 alt={`${store.name} Logo`}
//                 className="h-32 mx-auto mb-2"
//               />
//               <h3 className="text-lg font-medium">{store.name}</h3>
//               <p className="text-gray-500">{store.description}</p>
//               <a
//                 href={store.whatsappLink}
//                 className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
//               >
//                 Connect on WhatsApp
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Promotions Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Current Promotions</h2>
//         <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
//           <h3 className="font-semibold">Special Offer on Store A!</h3>
//           <p>Get 20% off with code: SAVE20</p>
//         </div>
//         {/* Add more promotions here */}
//       </section>

//       {/* Categories Section */}
//       <section className="mb-8">
//         <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
//         <ul className="space-y-2">
//           <li>
//             <a
//               href="/category/clothing"
//               className="text-blue-600 hover:underline"
//             >
//               Clothing
//             </a>
//           </li>
//           <li>
//             <a
//               href="/category/electronics"
//               className="text-blue-600 hover:underline"
//             >
//               Electronics
//             </a>
//           </li>
//           <li>
//             <a
//               href="/category/home-goods"
//               className="text-blue-600 hover:underline"
//             >
//               Home Goods
//             </a>
//           </li>
//         </ul>
//       </section>

//       {/* Testimonials Section */}
//       <section className="mb-8">
//         <h3 className="text-xl font-semibold mb-4">What Our Customers Say</h3>
//         <blockquote className="border-l-4 border-blue-600 pl-4 italic">
//           "I found amazing deals at Store A!" - Customer Name
//         </blockquote>
//         <blockquote className="border-l-4 border-blue-600 pl-4 italic mt-2">
//           "Store B has the best customer service!" - Customer Name
//         </blockquote>
//       </section>

//       {/* Call to Action Section */}
//       <section className="text-center">
//         <p className="mb-4">
//           Don’t miss out on amazing deals! Sign up for our newsletter for
//           exclusive offers.
//         </p>
//         <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
//           Subscribe Now
//         </button>
//       </section>
//     </div>
//   );
// };

// export default ExploreStores;

// // // pages/explore-stores.js

// // import React from "react";

// // const ExploreStores = () => {
// //   // Sample data for featured stores, including WhatsApp numbers
// //   const featuredStores = [
// //     {
// //       id: 1,
// //       name: "Store A",
// //       description: "Amazing deals on electronics.",
// //       logo: "/store-a-logo.png",
// //       link: "/store-a",
// //       whatsapp: "https://wa.me/1234567890", // WhatsApp link for Store A
// //     },
// //     {
// //       id: 2,
// //       name: "Store B",
// //       description: "Trendy fashion for everyone.",
// //       logo: "/store-b-logo.png",
// //       link: "/store-b",
// //       whatsapp: "https://wa.me/1234567891", // WhatsApp link for Store B
// //     },
// //     {
// //       id: 3,
// //       name: "Store C",
// //       description: "Quality home goods at great prices.",
// //       logo: "/store-c-logo.png",
// //       link: "/store-c",
// //       whatsapp: "https://wa.me/1234567892", // WhatsApp link for Store C
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <header className="text-center mb-8">
// //         <h1 className="text-4xl font-bold">Explore Our Featured Stores</h1>
// //         <p className="mt-2 text-gray-600">
// //           Discover exclusive offers and unique products.
// //         </p>
// //       </header>

// //       {/* Featured Stores Carousel */}
// //       <section className="mb-8">
// //         <h2 className="text-2xl font-semibold mb-4">Featured Stores</h2>
// //         <div className="flex overflow-x-auto space-x-4">
// //           {featuredStores.map((store) => (
// //             <div
// //               key={store.id}
// //               className="min-w-[200px] bg-white shadow-lg rounded-lg p-4 text-center"
// //             >
// //               <img
// //                 src={store.logo}
// //                 alt={`${store.name} Logo`}
// //                 className="h-32 mx-auto mb-2"
// //               />
// //               <h3 className="text-lg font-medium">{store.name}</h3>
// //               <p className="text-gray-500">{store.description}</p>
// //               <a
// //                 href={store.link}
// //                 className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
// //               >
// //                 Shop Now
// //               </a>
// //               {/* WhatsApp Link */}
// //               <a
// //                 href={store.whatsapp}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="mt-2 inline-block bg-green-600 text-white py-1 px-2 rounded hover:bg-green-500 transition duration-300"
// //               >
// //                 Chat on WhatsApp
// //               </a>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Promotions Section */}
// //       <section className="mb-8">
// //         <h2 className="text-2xl font-semibold mb-4">Current Promotions</h2>
// //         <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
// //           <h3 className="font-semibold">Special Offer on Store A!</h3>
// //           <p>Get 20% off with code: SAVE20</p>
// //         </div>
// //         {/* Add more promotions here */}
// //       </section>

// //       {/* Categories Section */}
// //       <section className="mb-8">
// //         <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
// //         <ul className="space-y-2">
// //           <li>
// //             <a
// //               href="/category/clothing"
// //               className="text-blue-600 hover:underline"
// //             >
// //               Clothing
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="/category/electronics"
// //               className="text-blue-600 hover:underline"
// //             >
// //               Electronics
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="/category/home-goods"
// //               className="text-blue-600 hover:underline"
// //             >
// //               Home Goods
// //             </a>
// //           </li>
// //         </ul>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="mb-8">
// //         <h3 className="text-xl font-semibold mb-4">What Our Customers Say</h3>
// //         <blockquote className="border-l-4 border-blue-600 pl-4 italic">
// //           "I found amazing deals at Store A!" - Customer Name
// //         </blockquote>
// //         <blockquote className="border-l-4 border-blue-600 pl-4 italic mt-2">
// //           "Store B has the best customer service!" - Customer Name
// //         </blockquote>
// //       </section>

// //       {/* Call to Action Section */}
// //       <section className="text-center">
// //         <p className="mb-4">
// //           Don’t miss out on amazing deals! Sign up for our newsletter for
// //           exclusive offers.
// //         </p>
// //         <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
// //           Subscribe Now
// //         </button>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ExploreStores;

// // app/explore-stores/page.js

// const ExploreStores = () => {
//   const featuredStores = [
//     {
//       id: 1,
//       name: "Store A",
//       description: "Amazing deals on electronics.",
//       logo: "/store-a-logo.png",
//     },
//     {
//       id: 2,
//       name: "Store B",
//       description: "Trendy fashion for everyone.",
//       logo: "/store-b-logo.png",
//     },
//     {
//       id: 3,
//       name: "Store C",
//       description: "Quality home goods at great prices.",
//       logo: "/store-c-logo.png",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Featured Stores Carousel */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Featured Stores</h2>
//         <div className="flex overflow-x-auto space-x-4">
//           {featuredStores.map((store) => (
//             <div
//               key={store.id}
//               className="min-w-[200px] bg-white shadow-lg rounded-lg p-4 text-center"
//             >
//               <img
//                 src={store.logo}
//                 alt={`${store.name} Logo`}
//                 className="h-32 mx-auto mb-2"
//               />
//               <h3 className="text-lg font-medium">{store.name}</h3>
//               <p className="text-gray-500">{store.description}</p>
//               <a
//                 href={`/stores/${store.name.toLowerCase().replace(" ", "-")}`} // Link to dynamic route
//                 className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
//               >
//                 Shop Now
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ExploreStores;

// src/app/explore-stores/page.js

// import Link from "next/link";

// const ExploreStores = () => {
//   // Sample data for featured stores
//   const featuredStores = [
//     {
//       id: 1,
//       name: "Store A",
//       link: "/stores/store-a",
//       whatsappLink: "https://wa.me/1234567890?text=Hello%20Store%20A%21",
//     },
//     {
//       id: 2,
//       name: "Store B",
//       link: "/stores/store-b",
//       whatsappLink: "https://wa.me/1234567891?text=Hello%20Store%20B%21",
//     },
//     {
//       id: 3,
//       name: "Store C",
//       link: "/stores/store-c",
//       whatsappLink: "https://wa.me/1234567892?text=Hello%20Store%20C%21",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Explore Our Featured Stores</h1>
//         <p className="mt-2 text-gray-600">
//           Discover exclusive offers and unique products.
//         </p>
//       </header>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Featured Stores</h2>
//         <div className="flex flex-col space-y-4">
//           {featuredStores.map((store) => (
//             <div
//               key={store.id}
//               className="block bg-white shadow-lg rounded-lg p-4 text-center hover:bg-gray-100 transition"
//             >
//               <Link href={store.link} className="text-lg font-medium">
//                 {store.name}
//               </Link>
//               <div className="mt-2">
//                 <a
//                   href={store.whatsappLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//                 >
//                   Connect on WhatsApp
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ExploreStores;

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const ExploreStores = () => {
  // Sample data for featured stores
  const featuredStores = [
    {
      id: 1,
      name: "Store A",
      description: "Amazing deals on electronics.",
      // logo: "/store-a-logo.png",
      link: "/stores/store-a", // Update to your store page path
      whatsappLink: "https://wa.me/1234567890?text=Hello%20Store%20A%21",
    },
    {
      id: 2,
      name: "Store B",
      description: "Trendy fashion for everyone.",
      // logo: "/store-b-logo.png",
      link: "/stores/store-b", // Update to your store page path
      whatsappLink: "https://wa.me/1234567891?text=Hello%20Store%20B%21",
    },
    {
      id: 3,
      name: "Store C",
      description: "Quality home goods at great prices.",
      // logo: "/store-c-logo.png",
      link: "/stores/store-c", // Update to your store page path
      whatsappLink: "https://wa.me/1234567892?text=Hello%20Store%20C%21",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Explore Our Featured Stores</h1>
        <p className="mt-2 text-gray-600">
          Discover exclusive offers and unique products.
        </p>
      </header>

      {/* Featured Stores Carousel */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Stores</h2>
        <div className="flex overflow-x-auto space-x-4">
          {featuredStores.map((store) => (
            <div key={store.id} className="min-w-[400px] px-1">
              <Link href={store.link}>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <Image
                    src={store.logo}
                    alt={`${store.name} Logo`}
                    className="h-32 mx-auto mb-2"
                    width={300}
                  />
                  <h3 className="text-lg font-medium">{store.name}</h3>
                  <p className="text-gray-500">{store.description}</p>
                </div>
              </Link>
              <a
                href={store.whatsappLink}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Promotions</h2>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <h3 className="font-semibold">Special Offer on Store A!</h3>
          <p>Get 20% off with code: SAVE20</p>
        </div>
        {/* Add more promotions here */}
      </section>

      {/* Categories Section */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="/category/clothing"
              className="text-blue-600 hover:underline"
            >
              Clothing
            </a>
          </li>
          <li>
            <a
              href="/category/electronics"
              className="text-blue-600 hover:underline"
            >
              Electronics
            </a>
          </li>
          <li>
            <a
              href="/category/home-goods"
              className="text-blue-600 hover:underline"
            >
              Home Goods
            </a>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      {/* <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">What Our Customers Say</h3> */}
      {/* <blockquote className="border-l-4 border-blue-600 pl-4 italic">
          "I found amazing deals at Store A!" - Customer Name
        </blockquote>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic mt-2">
          "Store B has the best customer service!" - Customer Name
        </blockquote> */}
      {/* </section> */}

      {/* Call to Action Section */}
      <section className="text-center">
        <p className="mb-4">
          Don’t miss out on amazing deals! Sign up for our newsletter for
          exclusive offers.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
          Subscribe Now
        </button>
      </section>
    </div>
  );
};

export default ExploreStores;
