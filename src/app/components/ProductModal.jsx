// // import { useState } from "react";

// // const ProductModal = ({ isOpen, onClose, product }) => {
// //   const [quantity, setQuantity] = useState(1);
// //   const totalPrice = (product.price * quantity).toFixed(2);

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
// //       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
// //         <div className="flex justify-between items-center">
// //           <h2 className="text-xl font-bold">{product.name}</h2>
// //           <button onClick={onClose} className="text-gray-400">
// //             &times;
// //           </button>
// //         </div>
// //         <Image
// //           src={product.image}
// //           alt={product.name}
// //           width={150}
// //           height={150}
// //         />
// //         <p className="mt-4">Price: ${product.price.toFixed(2)}</p>
// //         {product.oldPrice && (
// //           <p className="line-through">${product.oldPrice}</p>
// //         )}
// //         <p className="mt-4">Quantity:</p>
// //         <div className="flex items-center mt-2">
// //           <button
// //             onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
// //             className="border px-2"
// //           >
// //             -
// //           </button>
// //           <span className="mx-4">{quantity}</span>
// //           <button
// //             onClick={() => setQuantity(quantity + 1)}
// //             className="border px-2"
// //           >
// //             +
// //           </button>
// //         </div>
// //         <p className="mt-4">Total: ${totalPrice}</p>
// //         <button
// //           className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
// //           onClick={onClose}
// //         >
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductModal;

// "use client";
// // import { useRouter } from "next/router";
// import { useState } from "react";
// import { useRouter } from "next/router";

// const ProductModal = ({ isOpen, onClose, product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const isUserLoggedIn = false; // Replace with actual auth check

//   const handleAddToCart = () => {
//     if (!isUserLoggedIn) {
//       router.push("/login"); // Redirect to login
//     } else {
//       // Add product to cart logic here
//       onClose();
//     }
//   };

//   if (!isOpen) return null; // Don't render modal if not open

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">{product.name}</h2>
//           <button onClick={onClose} className="text-gray-400">
//             &times;
//           </button>
//         </div>
//         {/* Add product details here */}
//         <p>Price: ${product.price}</p>
//         {/* Quantity controls */}
//         <div className="flex items-center mt-2">
//           <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
//             -
//           </button>
//           <span className="mx-4">{quantity}</span>
//           <button onClick={() => setQuantity(quantity + 1)}>+</button>
//         </div>
//         <p>Total Price: ${(product.price * quantity).toFixed(2)}</p>

//         <button
//           onClick={handleAddToCart}
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;

// "use client"; // Ensure this is at the top of your file
// import { useState } from "react";
// import { useRouter } from "next/router";

// const ProductModal = ({ isOpen, onClose, product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const isUserLoggedIn = false; // Replace with actual auth check

//   const handleAddToCart = () => {
//     if (!isUserLoggedIn) {
//       router.push("/login"); // Redirect to login
//     } else {
//       // Add product to cart logic here
//       onClose();
//     }
//   };

//   if (!isOpen) return null; // Don't render modal if not open

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">{product.name}</h2>
//           <button onClick={onClose} className="text-gray-400">
//             &times;
//           </button>
//         </div>
//         <p>Price: ${product.price}</p>
//         <div className="flex items-center mt-2">
//           <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
//             -
//           </button>
//           <span className="mx-4">{quantity}</span>
//           <button onClick={() => setQuantity(quantity + 1)}>+</button>
//         </div>
//         <p>Total Price: ${(product.price * quantity).toFixed(2)}</p>
//         <button
//           onClick={handleAddToCart}
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/router"; // Ensure you're using this correctly

// const ProductModal = ({ isOpen, onClose, product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const isUserLoggedIn = false; // Replace with actual auth check

//   const handleAddToCart = () => {
//     if (!isUserLoggedIn) {
//       router.push("/login"); // Redirect to login
//     } else {
//       // Logic to add product to cart
//       onClose();
//     }
//   };

//   if (!isOpen) return null; // Don't render modal if not open

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">{product.name}</h2>
//           <button onClick={onClose} className="text-gray-400">
//             &times;
//           </button>
//         </div>
//         <p>Price: ${product.price}</p>
//         <div className="flex items-center mt-2">
//           <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
//             -
//           </button>
//           <span className="mx-4">{quantity}</span>
//           <button onClick={() => setQuantity(quantity + 1)}>+</button>
//         </div>
//         <p>Total Price: ${(product.price * quantity).toFixed(2)}</p>

//         <button
//           onClick={handleAddToCart}
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js router

const ProductModal = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const isUserLoggedIn = false; // Replace this with your actual authentication check

  const handleAddToCart = () => {
    if (!isUserLoggedIn) {
      router.push("/login"); // Redirect to login if not logged in
    } else {
      // Logic to add product to cart (e.g., update state or call API)
      console.log(`Added ${quantity} of ${product.name} to cart.`);
      onClose(); // Close modal after adding to cart
    }
  };

  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-400">
            &times;
          </button>
        </div>
        <p>Price: ${product.price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="bg-gray-200 px-2 rounded"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 px-2 rounded"
          >
            +
          </button>
        </div>
        <p>Total Price: ${(product.price * quantity).toFixed(2)}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
