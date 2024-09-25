// import Image from "next/image";

// const popularProducts = [
//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: "$3",
//     oldPrice: "$4",
//   },
//   {
//     name: "Fresh Orange 6 pcs",
//     image: "/images/orange.png",
//     price: "$5",
//   },
//   {
//     name: "Red Carrot Vegetables",
//     image: "/images/carrot.png",
//     price: "$4.99",
//     oldPrice: "$5.99",
//   },
//   {
//     name: "Pineapple Queen 1 pc",
//     image: "/images/pineapple.png",
//     price: "$2.98",
//   },

//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: "$3",
//     oldPrice: "$4",
//   },

//   // {
//   //   name: "Cauliflower 1 pc",
//   //   image: "/images/cauliflower.png", // replace with actual image paths
//   //   price: "$3",
//   //   oldPrice: "$4",
//   // },
//   // Add more products as needed
// ];

// const ProductCard = ({ name, image, price, oldPrice }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between">
//       <Image src={image} alt={name} width={150} height={150} className="mb-4" />
//       <h3 className="text-lg font-semibold">{name}</h3>
//       <div className="flex items-center space-x-2 mt-2">
//         <span className="text-lg font-bold text-green-600">{price}</span>
//         {oldPrice && (
//           <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
//         )}
//       </div>
//       <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
//         Add to cart
//       </button>
//     </div>
//   );
// };

// const PopularProducts = () => {
//   return (
//     <div className="popular-products-section py-10">
//       <h2 className="text-xl font-bold text-center mb-6">
//         Our Popular Products
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
//         {popularProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             name={product.name}
//             image={product.image}
//             price={product.price}
//             oldPrice={product.oldPrice}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import ProductModal from "./ProductModal"; // Import the modal component

// const popularProducts = [
//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: 3,
//     oldPrice: 4,
//   },
//   {
//     name: "Fresh Orange 6 pcs",
//     image: "/images/orange.png",
//     price: 5,
//   },
//   {
//     name: "Red Carrot Vegetables",
//     image: "/images/carrot.png",
//     price: 4.99,
//     oldPrice: 5.99,
//   },
//   {
//     name: "Pineapple Queen 1 pc",
//     image: "/images/pineapple.png",
//     price: 2.98,
//   },
// ];

// const ProductCard = ({ product, onAddToCartClick }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={150}
//         height={150}
//         className="mb-4"
//       />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <div className="flex items-center space-x-2 mt-2">
//         <span className="text-lg font-bold text-green-600">
//           ${product.price}
//         </span>
//         {product.oldPrice && (
//           <span className="text-sm text-gray-400 line-through">
//             ${product.oldPrice}
//           </span>
//         )}
//       </div>
//       <button
//         className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
//         onClick={() => onAddToCartClick(product)}
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// };

// const PopularProducts = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to handle Add to Cart button click
//   const handleAddToCartClick = (product) => {
//     setSelectedProduct(product); // Set the selected product for the modal
//     setIsModalOpen(true); // Open the modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//     setSelectedProduct(null); // Reset the selected product
//   };

//   return (
//     <div className="popular-products-section py-10">
//       <h2 className="text-xl font-bold text-center mb-6">
//         Our Popular Products
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
//         {popularProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             product={product}
//             onAddToCartClick={handleAddToCartClick}
//           />
//         ))}
//       </div>

//       {/* Render the modal if a product is selected */}
//       {isModalOpen && selectedProduct && (
//         <ProductModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           product={selectedProduct}
//         />
//       )}
//     </div>
//   );
// };

// export default PopularProducts;

// "use client"; // Make sure this is at the top if using hooks
// import { useState } from "react";
// import Image from "next/image";
// import ProductModal from "./ProductModal"; // Import the modal component

// const popularProducts = [
//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: 3,
//     oldPrice: 4,
//   },
//   {
//     name: "Fresh Orange 6 pcs",
//     image: "/images/orange.png",
//     price: 5,
//   },
//   {
//     name: "Red Carrot Vegetables",
//     image: "/images/carrot.png",
//     price: 4.99,
//     oldPrice: 5.99,
//   },
//   {
//     name: "Pineapple Queen 1 pc",
//     image: "/images/pineapple.png",
//     price: 2.98,
//   },
// ];

// const ProductCard = ({ product, onAddToCartClick }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={150}
//         height={150}
//         className="mb-4"
//       />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <div className="flex items-center space-x-2 mt-2">
//         <span className="text-lg font-bold text-green-600">
//           ${product.price}
//         </span>
//         {product.oldPrice && (
//           <span className="text-sm text-gray-400 line-through">
//             ${product.oldPrice}
//           </span>
//         )}
//       </div>
//       <button
//         className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
//         onClick={() => onAddToCartClick(product)}
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// };

// const PopularProducts = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddToCartClick = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="popular-products-section py-10">
//       <h2 className="text-xl font-bold text-center mb-6">
//         Our Popular Products
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
//         {popularProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             product={product}
//             onAddToCartClick={handleAddToCartClick}
//           />
//         ))}
//       </div>

//       {/* Render the modal if a product is selected */}
//       {isModalOpen && selectedProduct && (
//         <ProductModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           product={selectedProduct}
//         />
//       )}
//     </div>
//   );
// };

// export default PopularProducts;

// "use client"; // Make sure this is at the top if using hooks
// import { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { FreeMode, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import ProductModal from "./ProductModal"; // Import the modal component
// import "swiper/css/pagination"; // Import pagination styles

// const popularProducts = [
//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: 3,
//     oldPrice: 4,
//   },
//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: 3,
//     oldPrice: 4,
//   },
//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: 3,
//     oldPrice: 4,
//   },
//   {
//     name: "Fresh Orange 6 pcs",
//     image: "/images/orange.png",
//     price: 5,
//   },
//   {
//     name: "Red Carrot Vegetables",
//     image: "/images/carrot.png",
//     price: 4.99,
//     oldPrice: 5.99,
//   },
//   {
//     name: "Pineapple Queen 1 pc",
//     image: "/images/pineapple.png",
//     price: 2.98,
//   },
// ];

// const ProductCard = ({ product, onAddToCartClick }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={150}
//         height={150}
//         className="mb-4"
//       />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <div className="flex items-center space-x-2 mt-2">
//         <span className="text-lg font-bold text-green-600">
//           ${product.price}
//         </span>
//         {product.oldPrice && (
//           <span className="text-sm text-gray-400 line-through">
//             ${product.oldPrice}
//           </span>
//         )}
//       </div>
//       <button
//         className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
//         onClick={() => onAddToCartClick(product)}
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// };

// const PopularProducts = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddToCartClick = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <section className="popular-products-section py-10">
//       <h2 className="text-xl font-bold text-center mb-6">
//         Our Popular Products
//       </h2>
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//           1280: { slidesPerView: 5 },
//         }}
//         modules={[FreeMode, Navigation, Pagination]}
//         navigation={true} // Enable navigation arrows
//         pagination={{ clickable: true }} // Enable pagination
//         className="mySwiper"
//       >
//         {popularProducts.map((product, index) => (
//           <SwiperSlide key={index}>
//             <ProductCard
//               product={product}
//               onAddToCartClick={handleAddToCartClick}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Render the modal if a product is selected */}
//       {isModalOpen && selectedProduct && (
//         <ProductModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           product={selectedProduct}
//         />
//       )}

//       <style jsx global>{`
//         .swiper-button-next,
//         .swiper-button-prev {
//           background-color: rgba(16, 198, 70, 0.8);
//           color: #fbfbfb;
//           width: 30px;
//           height: 30px;
//           border-radius: 50%;
//         }
//         .swiper-button-next:after,
//         .swiper-button-prev:after {
//           font-size: 14px;
//         }
//         .swiper-button-disabled {
//           opacity: 0.5 !important;
//           pointer-events: none;
//         }
//         .swiper-pagination {
//           position: absolute;
//           bottom: 10px;
//           left: 0;
//           right: 0;
//           text-align: center;
//         }
//         .swiper-pagination-bullet {
//           background: #1fc072;
//           opacity: 0.5;
//           margin: 0 5px;
//         }
//         .swiper-pagination-bullet-active {
//           opacity: 1;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PopularProducts;

// "use client"; // Make sure this is at the top if using hooks
// import { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { FreeMode, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import ProductModal from "./ProductModal"; // Import the modal component
// import "swiper/css/pagination"; // Import pagination styles

// const popularProducts = [
//   {
//     name: "Cauliflower 1 pc",
//     image: "/images/cauliflower.png", // replace with actual image paths
//     price: 3,
//     oldPrice: 4,
//   },
//   {
//     name: "Fresh Orange 6 pcs",
//     image: "/images/orange.png",
//     price: 5,
//   },
//   {
//     name: "Red Carrot Vegetables",
//     image: "/images/carrot.png",
//     price: 4.99,
//     oldPrice: 5.99,
//   },
//   {
//     name: "Pineapple Queen 1 pc",
//     image: "/images/pineapple.png",
//     price: 2.98,
//   },
// ];

// const ProductCard = ({ product, onAddToCartClick }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={150}
//         height={150}
//         className="mb-4"
//       />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <div className="flex items-center space-x-2 mt-2">
//         <span className="text-lg font-bold text-green-600">
//           ${product.price}
//         </span>
//         {product.oldPrice && (
//           <span className="text-sm text-gray-400 line-through">
//             ${product.oldPrice}
//           </span>
//         )}
//       </div>
//       <button
//         className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
//         onClick={() => onAddToCartClick(product)}
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// };

// const PopularProducts = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddToCartClick = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <section className="popular-products-section py-10">
//       <h2 className="text-xl font-bold text-center mb-6">
//         Our Popular Products
//       </h2>
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//           1280: { slidesPerView: 5 },
//         }}
//         modules={[FreeMode, Navigation, Pagination]}
//         navigation={true} // Enable navigation arrows
//         pagination={{ clickable: true }} // Enable pagination
//         className="mySwiper"
//       >
//         {popularProducts.map((product, index) => (
//           <SwiperSlide key={index}>
//             <ProductCard
//               product={product}
//               onAddToCartClick={handleAddToCartClick}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Render the modal if a product is selected */}
//       {isModalOpen && selectedProduct && (
//         <ProductModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           product={selectedProduct}
//         />
//       )}

//       <div className="swiper-pagination-container">
//         {/* Pagination dots will be displayed here */}
//         <style jsx global>{`
//           .swiper-button-next,
//           .swiper-button-prev {
//             background-color: rgba(16, 198, 70, 0.8);
//             color: #fbfbfb;
//             width: 30px;
//             height: 30px;
//             border-radius: 50%;
//           }
//           .swiper-button-next:after,
//           .swiper-button-prev:after {
//             font-size: 14px;
//           }
//           .swiper-button-disabled {
//             opacity: 0.5 !important;
//             pointer-events: none;
//           }
//           .swiper-pagination {
//             position: relative;
//             bottom: -30px; /* Move the dots down */
//             text-align: center;
//             margin-top: 20px; /* Add space above dots */
//           }
//           .swiper-pagination-bullet {
//             background: #1fc072;
//             opacity: 0.5;
//             margin: 0 5px;
//           }
//           .swiper-pagination-bullet-active {
//             opacity: 1;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// };

// export default PopularProducts;

"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles

const popularProducts = [
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  {
    id: 1,
    name: "Organic Bananas 1 bunch",
    image: "/images/bananas.png",
    price: 1.2,
    stock: 20,
  },
  // Add more popular products as needed
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#e7e0db] p-4 rounded-lg shadow flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        width={150}
        height={150}
        className="mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{product.name}</h3>
      <span className="text-lg font-bold text-green-600">
        ${product.price.toFixed(2)}
      </span>
    </div>
  );
};

const PopularProducts = () => {
  return (
    <section id="popular-products" className="pt-16 -mt-16 relative">
      <div className="bg-[#dcb373]  py-4 flex justify-between items-center md:px-6 px-4">
        <h2 className="text-xl font-bold text-white">Popular Products</h2>
        <Link
          href="/popular-products"
          className="bg-inherit md:bg-[#528353] text-white px-4 py-2 rounded flex items-center  transition"
        >
          <span className="hover:underline">View All</span>
          <svg
            className="ml-2 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5-5 5M6 12h12"
            />
          </svg>
        </Link>
      </div>
      <div className="popular-products-section  py-10">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[FreeMode, Mousewheel, Navigation, Pagination]}
          freeMode={true}
          mousewheel={true} // Enable mouse wheel control
          navigation={true} // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination
          className="mySwiper"
        >
          {popularProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 205, 0, 0.8);
          color: #fbfbfb;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 14px;
        }
        .swiper-button-disabled {
          opacity: 0.5 !important;
          pointer-events: none;
        }
        .swiper-pagination {
          position: relative; /* Set to relative for positioning */
          margin-top: 20px; /* Add margin to separate from the slider */
          text-align: center; /* Center align the bullets */
        }
        .swiper-pagination-bullet {
          background: #ffcc00;
          opacity: 0.5;
          margin: 0 5px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default PopularProducts;
