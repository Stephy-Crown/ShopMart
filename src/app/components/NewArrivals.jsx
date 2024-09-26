// // import Image from "next/image";

// // const newArrivals = [
// //   {
// //     name: "Fresh Spinach 1 Bunch",
// //     image: "/images/spinach.png", // replace with actual image paths
// //     price: 2.5,
// //   },
// //   {
// //     name: "Organic Apples 6 pcs",
// //     image: "/images/apples.png",
// //     price: 4.0,
// //   },
// //   {
// //     name: "Sweet Potatoes 1 kg",
// //     image: "/images/sweetpotato.png",
// //     price: 3.2,
// //   },
// //   {
// //     name: "Cucumbers 2 pcs",
// //     image: "/images/cucumber.png",
// //     price: 1.5,
// //   },
// // ];

// // const ProductCard = ({ product }) => {
// //   return (
// //     <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
// //       <Image
// //         src={product.image}
// //         alt={product.name}
// //         width={150}
// //         height={150}
// //         className="mb-4"
// //       />
// //       <h3 className="text-lg font-semibold">{product.name}</h3>
// //       <span className="text-lg font-bold text-green-600">${product.price}</span>
// //     </div>
// //   );
// // };

// // const NewArrivals = () => {
// //   return (
// //     <div className="new-arrivals-section py-10">
// //       <h2 className="text-xl font-bold text-center mb-6">New Arrivals</h2>
// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
// //         {newArrivals.map((product, index) => (
// //           <ProductCard key={index} product={product} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewArrivals; // Export the NewArrivals component

// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";

// const newArrivals = [
//   {
//     id: 1,
//     name: "Fresh Spinach 1 Bunch",
//     image: "/images/spinach.png",
//     price: 2.5,
//     stock: 10,
//   },
//   {
//     id: 2,
//     name: "Organic Apples 6 pcs",
//     image: "/images/apples.png",
//     price: 4.0,
//     stock: 15,
//   },
//   {
//     id: 3,
//     name: "Sweet Potatoes 1 kg",
//     image: "/images/sweetpotato.png",
//     price: 3.2,
//     stock: 8,
//   },
//   {
//     id: 4,
//     name: "Cucumbers 2 pcs",
//     image: "/images/cucumber.png",
//     price: 1.5,
//     stock: 20,
//   },
// ];

// const ProductCard = ({
//   product,
//   onAddToCart,
//   onToggleWishlist,
//   onQuickView,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={150}
//         height={150}
//         className="mb-4"
//       />
//       <h3 className="text-lg font-semibold text-center">{product.name}</h3>
//       <span className="text-lg font-bold text-green-600">
//         ${product.price.toFixed(2)}
//       </span>

//       {isHovered && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
//           <button
//             onClick={() => onAddToCart(product)}
//             className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={() => onToggleWishlist(product)}
//             className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={() => onQuickView(product)}
//             className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//             </svg>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const NewArrivals = () => {
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [quickViewProduct, setQuickViewProduct] = useState(null);

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} added to cart!`);
//   };

//   const handleToggleWishlist = (product) => {
//     setWishlist((prevWishlist) => {
//       const isInWishlist = prevWishlist.some((item) => item.id === product.id);
//       if (isInWishlist) {
//         return prevWishlist.filter((item) => item.id !== product.id);
//       } else {
//         return [...prevWishlist, product];
//       }
//     });
//     alert(
//       `${product.name} ${
//         wishlist.some((item) => item.id === product.id)
//           ? "removed from"
//           : "added to"
//       } wishlist!`
//     );
//   };

//   const handleQuickView = (product) => {
//     setQuickViewProduct(product);
//   };

//   return (
//     <section id="new-arrivals" className="pt-16 -mt-16">
//       <div className="new-arrivals-section py-10">
//         <h2 className="text-xl font-bold text-center mb-6">New Arrivals</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4">
//           {newArrivals.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onAddToCart={handleAddToCart}
//               onToggleWishlist={handleToggleWishlist}
//               onQuickView={handleQuickView}
//             />
//           ))}
//         </div>

//         <div className="text-center mt-6">
//           <Link
//             href="/new-arrivals"
//             className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
//           >
//             View All
//           </Link>
//         </div>

//         {quickViewProduct && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//             <div className="bg-white p-6 rounded-lg max-w-md">
//               <h3 className="text-xl font-bold mb-4">
//                 {quickViewProduct.name}
//               </h3>
//               <Image
//                 src={quickViewProduct.image}
//                 alt={quickViewProduct.name}
//                 width={200}
//                 height={200}
//                 className="mb-4 mx-auto"
//               />
//               <p className="text-lg font-bold text-green-600 mb-2">
//                 ${quickViewProduct.price.toFixed(2)}
//               </p>
//               <p className="mb-4">In stock: {quickViewProduct.stock}</p>
//               <button
//                 onClick={() => handleAddToCart(quickViewProduct)}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => setQuickViewProduct(null)}
//                 className="ml-4 text-gray-600 hover:text-gray-800"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css"; // Import Swiper styles
// // import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Your products here...
// const newArrivals = [
//   {
//     id: 1,
//     name: "Fresh Spinach 1 Bunch",
//     image: "/images/spinach.png",
//     price: 2.5,
//     stock: 10,
//   },

//   {
//     id: 1,
//     name: "Fresh Spinach 1 Bunch",
//     image: "/images/spinach.png",
//     price: 2.5,
//     stock: 10,
//   },

//   {
//     id: 1,
//     name: "Fresh Spinach 1 Bunch",
//     image: "/images/spinach.png",
//     price: 2.5,
//     stock: 10,
//   },

//   {
//     id: 1,
//     name: "Fresh Spinach 1 Bunch",
//     image: "/images/spinach.png",
//     price: 2.5,
//     stock: 10,
//   },
//   {
//     id: 2,
//     name: "Organic Apples 6 pcs",
//     image: "/images/apples.png",
//     price: 4.0,
//     stock: 15,
//   },
//   {
//     id: 3,
//     name: "Sweet Potatoes 1 kg",
//     image: "/images/sweetpotato.png",
//     price: 3.2,
//     stock: 8,
//   },
//   {
//     id: 4,
//     name: "Cucumbers 2 pcs",
//     image: "/images/cucumber.png",
//     price: 1.5,
//     stock: 20,
//   },
// ];

// const ProductCard = ({ product }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={150}
//         height={150}
//         className="mb-4"
//       />
//       <h3 className="text-lg font-semibold text-center">{product.name}</h3>
//       <span className="text-lg font-bold text-green-600">
//         ${product.price.toFixed(2)}
//       </span>
//     </div>
//   );
// };

// const NewArrivals = () => {
//   return (
//     <section id="new-arrivals" className="pt-16 -mt-16">
//       <div className="new-arrivals-section py-10">
//         <h2 className="text-xl font-bold text-center mb-6">New Arrivals</h2>
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }} // Enable pagination dots
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 },
//           }}
//           modules={[FreeMode, Mousewheel, Navigation, Pagination]}
//           //  spaceBetween={20}
//           // slidesPerView="auto"
//           freeMode={true}
//           mousewheel={true}
//           navigation
//           // pagination={{ clickable: true }}
//           className="mySwiper"
//         >
//           {newArrivals.map((product) => (
//             <SwiperSlide key={product.id}>
//               <ProductCard product={product} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="text-center mt-6">
//           <Link
//             href="/new-arrivals"
//             className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
//           >
//             View All
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

// "use client";
// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { FreeMode, Mousewheel, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";

// const newArrivals = [
//   {
//     id: 1,
//     name: "Fresh Spinach 1 Bunch",
//     image: "/images/spinach.png",
//     price: 2.5,
//     stock: 10,
//   },
//   {
//     id: 2,
//     name: "Organic Apples 6 pcs",
//     image: "/images/apples.png",
//     price: 4.0,
//     stock: 15,
//   },
//   {
//     id: 3,
//     name: "Sweet Potatoes 1 kg",
//     image: "/images/sweetpotato.png",
//     price: 3.2,
//     stock: 8,
//   },
//   {
//     id: 4,
//     name: "Cucumbers 2 pcs",
//     image: "/images/cucumber.png",
//     price: 1.5,
//     stock: 20,
//   },
//   {
//     id: 4,
//     name: "Cucumbers 2 pcs",
//     image: "/images/cucumber.png",
//     price: 1.5,
//     stock: 20,
//   },
//   {
//     id: 4,
//     name: "Cucumbers 2 pcs",
//     image: "/images/cucumber.png",
//     price: 1.5,
//     stock: 20,
//   },
//   {
//     id: 4,
//     name: "Cucumbers 2 pcs",
//     image: "/images/cucumber.png",
//     price: 1.5,
//     stock: 20,
//   },
// ];

// const ProductCard = ({ product }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={150}
//         height={150}
//         className="mb-4"
//       />
//       <h3 className="text-lg font-semibold text-center">{product.name}</h3>
//       <span className="text-lg font-bold text-green-600">
//         ${product.price.toFixed(2)}
//       </span>
//     </div>
//   );
// };

// const NewArrivals = () => {
//   return (
//     <section id="new-arrivals" className="pt-16 -mt-16 relative">
//       <div className="bg-green-100 py-4 flex justify-between items-center px-6 rounded">
//         <h2 className="text-xl font-bold">New Arrivals</h2>
//         <Link
//           href="/new-arrivals"
//           className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600 transition"
//         >
//           View All
//           <svg
//             className="ml-2 w-4 h-4"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M13 7l5 5-5 5M6 12h12"
//             />
//           </svg>
//         </Link>
//       </div>
//       <div className="new-arrivals-section py-10">
//         {/* <h2 className="text-xl font-bold text-center mb-6">New Arrivals</h2> */}
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 },
//           }}
//           modules={[FreeMode, Mousewheel, Navigation]}
//           freeMode={true}
//           mousewheel={true}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           pagination={{ clickable: true }} // Enable pagination
//           className="mySwiper"
//         >
//           {newArrivals.map((product) => (
//             <SwiperSlide key={product.id}>
//               <ProductCard product={product} />
//             </SwiperSlide>
//           ))}

//           {/* Navigation Buttons */}
//           <div className="swiper-button-prev"></div>
//           <div className="swiper-button-next"></div>
//           <div className="swiper-pagination"></div>
//         </Swiper>
//         <div className="text-center mt-6">
//           {/* <Link
//             href="/new-arrivals"
//             className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
//           >
//             View All
//           </Link> */}
//         </div>
//       </div>

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

// export default NewArrivals;

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

const newArrivals = [
  {
    id: 1,
    name: "Fresh Spinach 1 Bunch",
    image: "/images/spinach.png",
    price: 2.5,
    stock: 10,
  },
  {
    id: 1,
    name: "Fresh Spinach 1 Bunch",
    image: "/images/spinach.png",
    price: 2.5,
    stock: 10,
  },
  {
    id: 1,
    name: "Fresh Spinach 1 Bunch",
    image: "/images/spinach.png",
    price: 2.5,
    stock: 10,
  },
  {
    id: 1,
    name: "Fresh Spinach 1 Bunch",
    image: "/images/spinach.png",
    price: 2.5,
    stock: 10,
  },
  {
    id: 1,
    name: "Fresh Spinach 1 Bunch",
    image: "/images/spinach.png",
    price: 2.5,
    stock: 10,
  },
  {
    id: 2,
    name: "Organic Apples 6 pcs",
    image: "/images/apples.png",
    price: 4.0,
    stock: 15,
  },
  {
    id: 3,
    name: "Sweet Potatoes 1 kg",
    image: "/images/sweetpotato.png",
    price: 3.2,
    stock: 8,
  },
  {
    id: 4,
    name: "Cucumbers 2 pcs",
    image: "/images/cucumber.png",
    price: 1.5,
    stock: 20,
  },
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

const NewArrivals = () => {
  return (
    <section id="new-arrivals" className="pt-16 -mt-16 relative">
      <div className="bg-[#dcb373] md:py-4 py-2  flex justify-between items-center md:px-6 px-4 ">
        <h2 className="text-xl font-bold text-white">New Stores</h2>
        {
          /* <Link
          href="/new-arrivals"
          className="md:bg-[#e2ab52] bg-inherit text-white px-4 py-2 rounded flex items-center  hover:underline transition"
        >
          View All
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
        </Link> */
          <Link
            href="/new-arrivals"
            className="md:bg-[#528353] bg-inherit text-white px-4 py-2 rounded flex items-center hover:bg-inherit md:hover:bg-[#916826] transition"
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
        }
      </div>
      <div className="new-arrivals-section py-10">
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
          mousewheel={true}
          navigation={true} // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination
          className="mySwiper"
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: #557c56;
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
          background: #557c56;
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

export default NewArrivals;
