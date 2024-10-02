// // // // // app/stores/[store]/page.js

// // // "use client";
// // // // import React from "react";
// // // import { useRouter } from "next/navigation";

// // // // const StorePage = () => {
// // // //   const router = useRouter();

// // // //   // const { store } = router.query; // Gets the store name from the URL
// // // //   if (!router.isReady) {
// // // //     return <div>Loading...</div>; // Render a loading message or a spinner
// // // //   }

// // // //   const { store } = router.query;
// // // //   // Ensure router is ready before accessing the query
// // // //   // if (!router.isReady) {
// // // //   //   return <div>Loading...</div>; // Render a loading message or a spinner
// // // //   // }

// // // //   // Now we can safely destructure the store from the query

// // // //   // Now we can safely destructure the store from the query
// // // //   // const { store } = router.query;

// // // //   // Check if store is undefined
// // // //   if (!store) {
// // // //     return <div>Store not found.</div>; // Render a message if no store is found
// // // //   }
// // // //   // const router = useRouter();

// // // //   // Check if the query is defined before destructuring
// // // //   // const store = router.query.store;

// // // //   // Check if store is undefined
// // // //   if (!store) {
// // // //     return <div>Loading...</div>; // Render a loading message or a spinner
// // // //   }

// // // //   // const { store } = router.query; // This might be undefined initially

// // // //   // Check if store is defined
// // // //   if (!store) {
// // // //     return <div>Loading...</div>; // or some loading indicator
// // // //   }

// // // //   // Sample data for demonstration
// // // //   const storeDetails = {
// // // //     "store-a": {
// // // //       name: "Store A",
// // // //       description: "Amazing deals on electronics.",
// // // //       whatsapp: "1234567890",
// // // //     },
// // // //     "store-b": {
// // // //       name: "Store B",
// // // //       description: "Trendy fashion for everyone.",
// // // //       whatsapp: "0987654321",
// // // //     },
// // // //     "store-c": {
// // // //       name: "Store C",
// // // //       description: "Quality home goods at great prices.",
// // // //       whatsapp: "1122334455",
// // // //     },
// // // //   }[store];

// // // //   if (!storeDetails) {
// // // //     return <p>Store not found.</p>;
// // // //   }

// // // //   return (
// // // //     <div className="container mx-auto px-4 py-8">
// // // //       <h1 className="text-3xl font-bold">{storeDetails.name}</h1>
// // // //       <p>{storeDetails.description}</p>
// // // //       <a
// // // //         href={`https://wa.me/${storeDetails.whatsapp}`} // WhatsApp link
// // // //         className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
// // // //       >
// // // //         Contact Us on WhatsApp
// // // //       </a>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StorePage;

// // // // pages/[store].js

// // // import React from "react";
// // // // import { useRouter } from "next/router";

// // // const StorePage = () => {
// // //   const router = useRouter();
// // //   const { store } = router.query; // Gets the store name from the URL

// // //   // You would fetch/store details based on the store name.
// // //   const storeDetails = {
// // //     "store-a": {
// // //       name: "Store A",
// // //       description: "Amazing deals on electronics.",
// // //     },
// // //     "store-b": { name: "Store B", description: "Trendy fashion for everyone." },
// // //     "store-c": {
// // //       name: "Store C",
// // //       description: "Quality home goods at great prices.",
// // //     },
// // //   }[store];

// // //   return (
// // //     <div className="container mx-auto px-4 py-8">
// // //       <h1 className="text-3xl font-bold">{storeDetails?.name}</h1>
// // //       <p>{storeDetails?.description}</p>
// // //       <a
// // //         href="https://wa.me/1234567890" // Replace with your store's WhatsApp number
// // //         className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
// // //       >
// // //         Contact Us on WhatsApp
// // //       </a>
// // //     </div>
// // //   );
// // // };

// // // export default StorePage;
// "use client";
// // import { useRouter } from "next/router";

// // const StorePage = () => {
// //   const router = useRouter();

// //   // Check if the router is ready
// //   if (!router.isReady) {
// //     return <div>Loading...</div>; // Show a loading message while waiting for the router to be ready
// //   }

// //   // Safely destructure store from router.query
// //   const { store } = router.query;

// //   // Check if store is undefined
// //   if (!store) {
// //     return <div>Store not found.</div>; // Render a message if no store is found
// //   }

// //   // Sample data for demonstration
// //   const storeDetails = {
// //     name: store,
// //     description: `Details about ${store}.`,
// //   };

// //   return (
// //     <div>
// //       <h1>{storeDetails.name}</h1>
// //       <p>{storeDetails.description}</p>
// //       {/* Add more store details as needed */}
// //     </div>
// //   );
// // };

// // export default StorePage;

// // src/app/stores/[store]/page.js

// const StorePage = ({ params }) => {
//   const { store } = params; // Directly get the store parameter from params

//   // Check if store is undefined
//   if (!store) {
//     return <div>Store not found.</div>; // Render a message if no store is found
//   }

//   // Sample data for demonstration
//   const storeDetails = {
//     name: store,
//     description: `Details about ${store}.`,
//   };

//   return (
//     <div>
//       <h1>{storeDetails.name}</h1>
//       <p>{storeDetails.description}</p>
//       {/* Add more store details as needed */}
//     </div>
//   );
// };

// export default StorePage;

// src/app/stores/[store]/page.js

const StorePage = ({ params }) => {
  const { store } = params; // Get the store name from URL parameters

  // Sample store data
  const storeData = {
    "store-a": {
      name: "Store A",
      description: "Amazing deals on electronics.",
      products: ["Product A1", "Product A2"],
    },
    "store-b": {
      name: "Store B",
      description: "Trendy fashion for everyone.",
      products: ["Product B1", "Product B2"],
    },
    "store-c": {
      name: "Store C",
      description: "Quality home goods at great prices.",
      products: ["Product C1", "Product C2"],
    },
  };

  const storeDetails = storeData[store]; // Get details for the specific store

  // Handle case where store is not found
  if (!storeDetails) {
    return <div>Store not found.</div>;
  }

  return (
    <div>
      <h1>{storeDetails.name}</h1>
      <p>{storeDetails.description}</p>
      <h2>Products:</h2>
      <ul>
        {storeDetails.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default StorePage;
