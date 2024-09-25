// // src/app/components/ProductCard.js
// "use client";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-md">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-32 object-cover"
//       />
//       <h2 className="text-lg font-bold">{product.name}</h2>
//       <p>{product.description}</p>
//       <p className="font-bold">${product.price}</p>
//       <button className="bg-blue-500 text-white p-2 rounded mt-2">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

// src/app/components/ProductCard.js
// "use client";

// import Link from "next/link";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="border rounded-lg overflow-hidden shadow-lg p-4">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-40 object-cover"
//       />
//       <h2 className="text-xl font-bold mt-2">{product.name}</h2>
//       <p className="text-gray-600">{product.description}</p>
//       <p className="text-lg font-semibold">${product.price}</p>
//       <Link
//         href={`/products/${product.id}`}
//         className="mt-4 inline-block bg-blue-500 text-white rounded px-4 py-2"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

// src/app/components/ProductCard.js

// "use client";

// import Link from "next/link";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="border rounded p-4">
//       <img src={product.image} alt={product.name} className="w-full mb-2" />
//       <h2 className="text-xl font-bold">{product.name}</h2>
//       <p className="text-gray-600">${product.price}</p>
//       <Link href={`/products/${product.id}`}>
//         <button className="bg-blue-500 text-white p-2 mt-4 rounded">
//           View Details
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

// import { useState } from "react";
// import ProductModal from "./ProductModal"; // Import the modal component

// const ProductCard = ({ name, image, price, oldPrice }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between">
//         <Image
//           src={image}
//           alt={name}
//           width={150}
//           height={150}
//           className="mb-4"
//         />
//         <h3 className="text-lg font-semibold">{name}</h3>
//         <div className="flex items-center space-x-2 mt-2">
//           <span className="text-lg font-bold text-green-600">{price}</span>
//           {oldPrice && (
//             <span className="text-sm text-gray-400 line-through">
//               {oldPrice}
//             </span>
//           )}
//         </div>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
//         >
//           Add to cart
//         </button>
//       </div>

//       {/* Render the Modal */}
//       <ProductModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         product={{ name, image, price, oldPrice }}
//       />
//     </>
//   );
// };
// export default ProductCard;
"use client";
import { useState } from "react";

import Image from "next/image";
import ProductModal from "./ProductModal"; // Import the modal component
const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between">
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={150}
          className="mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
        </div>
        <button
          className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
          onClick={handleAddToCartClick}
        >
          Add to cart
        </button>
      </div>

      {/* Render the Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
