// // // // // // import Link from "next/link";
// // // // // // import Image from "next/image";

// // // // // // const categories = [
// // // // // //   // { name: "Vegetables", icon: "/icons/vegetables.png", slug: "vegetables" },
// // // // // //   // { name: "Fruits", icon: "/icons/fruits.png", slug: "fruits" },
// // // // // //   // { name: "Milk & Juice", icon: "/icons/milk-juice.png", slug: "milk-juice" },
// // // // // //   // { name: "Bakery", icon: "/icons/bakery.png", slug: "bakery" },
// // // // // //   // {
// // // // // //   //   name: "Personal Care",
// // // // // //   //   icon: "/icons/personal-care.png",
// // // // // //   //   slug: "personal-care",
// // // // // //   // },
// // // // // //   // { name: "Grains", icon: "/icons/grains.png", slug: "grains" },
// // // // // //   // {
// // // // // //   //   name: "Chicken & Egg",
// // // // // //   //   icon: "/icons/chicken-egg.png",
// // // // // //   //   slug: "chicken-egg",
// // // // // //   // },
// // // // // //   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
// // // // // //   { name: "Fruits", icon: "🍊", slug: "fruits" },
// // // // // //   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
// // // // // //   { name: "Bakery", icon: "🥖", slug: "bakery" },
// // // // // //   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
// // // // // //   { name: "Grains", icon: "🌾", slug: "grains" },
// // // // // //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // // // // // ];

// // // // // // // const CategoryCard = ({ name, icon, slug }) => {
// // // // // // //   return (
// // // // // // //     <Link href={`/category/${slug}`} className="block">
// // // // // // //       <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transform transition hover:scale-105 text-center">
// // // // // // //         <Image
// // // // // // //           src={icon}
// // // // // // //           alt={name}
// // // // // // //           width={50}
// // // // // // //           height={50}
// // // // // // //           className="mx-auto"
// // // // // // //         />
// // // // // // //         <div className="mt-2 text-sm font-semibold">{name}</div>
// // // // // // //       </div>
// // // // // // //     </Link>
// // // // // // //   );
// // // // // // // };

// // // // // // const CategoryCard = ({ name, icon, slug }) => {
// // // // // //   return (
// // // // // //     <Link href={`/category/${slug}`} className="category-card">
// // // // // //       <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:bg-green-500 transform transition hover:scale-105 text-center">
// // // // // //         {" "}
// // // // // //         <div className="icon">{icon}</div>
// // // // // //         <div className="category-name mt-2 text-sm font-semibold">{name}</div>
// // // // // //       </div>
// // // // // //     </Link>
// // // // // //   );
// // // // // // };

// // // // // // const CategorySection = () => {
// // // // // //   return (
// // // // // //     <div className="category-section py-10">
// // // // // //       <h2 className="text-xl font-bold text-center mb-6">Shop by Category</h2>
// // // // // //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-4 gap-4">
// // // // // //         {categories.map((category, index) => (
// // // // // //           <CategoryCard
// // // // // //             key={index}
// // // // // //             name={category.name}
// // // // // //             icon={category.icon}
// // // // // //             slug={category.slug}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CategorySection;
// // // // // // "use client";
// // // // // // import Link from "next/link";
// // // // // // import { Swiper, SwiperSlide } from "swiper/react";

// // // // // // import { Navigation, Pagination } from "swiper"; // Import Swiper modules
// // // // // // import "swiper/swiper-bundle.css"; // Import Swiper styles

// // // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // import "swiper/css";

// // // // // // const categories = [
// // // // // //   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
// // // // // //   { name: "Fruits", icon: "🍊", slug: "fruits" },
// // // // // //   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
// // // // // //   { name: "Bakery", icon: "🥖", slug: "bakery" },
// // // // // //   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
// // // // // //   { name: "Grains", icon: "🌾", slug: "grains" },
// // // // // //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // // // // // ];

// // // // // // const CategoryCard = ({ name, icon, slug }) => {
// // // // // //   return (
// // // // // //     <Link href={`/category/${slug}`} className="category-card">
// // // // // //       <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:bg-green-500 transform transition hover:scale-105 text-center">
// // // // // //         <div className="icon text-4xl">{icon}</div>
// // // // // //         <div className="category-name mt-2 text-sm font-semibold">{name}</div>
// // // // // //       </div>
// // // // // //     </Link>
// // // // // //   );
// // // // // // };

// // // // // // const CategorySection = () => {
// // // // // //   return (
// // // // // //     <div className="category-section py-10">
// // // // // //       <h2 className="text-xl font-bold text-center mb-6">Shop by Category</h2>
// // // // // //       <Swiper
// // // // // //         modules={[Navigation, Pagination]}
// // // // // //         spaceBetween={20}
// // // // // //         slidesPerView={2} // Adjust based on your design
// // // // // //         navigation
// // // // // //         pagination={{ clickable: true }}
// // // // // //         grabCursor={true}
// // // // // //         scrollbar={{ draggable: true }} // Enable draggable scrollbar
// // // // // //         breakpoints={{
// // // // // //           640: { slidesPerView: 3 },
// // // // // //           768: { slidesPerView: 4 },
// // // // // //           1024: { slidesPerView: 5 },
// // // // // //           1280: { slidesPerView: 7 },
// // // // // //         }}
// // // // // //       >
// // // // // //         {categories.map((category, index) => (
// // // // // //           <SwiperSlide key={index}>
// // // // // //             <CategoryCard
// // // // // //               name={category.name}
// // // // // //               icon={category.icon}
// // // // // //               slug={category.slug}
// // // // // //             />
// // // // // //           </SwiperSlide>
// // // // // //         ))}
// // // // // //       </Swiper>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CategorySection;

// // // // // // "use client";

// // // // // // import React from "react";
// // // // // // import Link from "next/link";
// // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // import { FreeMode, Mousewheel, Navigation } from "swiper";
// // // // // // import "swiper/css";
// // // // // // import "swiper/css/free-mode";
// // // // // // import "swiper/css/navigation";

// // // // // // const categories = [
// // // // // //   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
// // // // // //   { name: "Fruits", icon: "🍊", slug: "fruits" },
// // // // // //   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
// // // // // //   { name: "Bakery", icon: "🥖", slug: "bakery" },
// // // // // //   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
// // // // // //   { name: "Grains", icon: "🌾", slug: "grains" },
// // // // // //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // // // // // ];

// // // // // // const CategoryCard = ({ name, icon, slug }) => {
// // // // // //   return (
// // // // // //     <Link href={`/category/${slug}`} className="block">
// // // // // //       <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:bg-green-500 transform transition hover:scale-105 text-center">
// // // // // //         <div className="text-4xl">{icon}</div>
// // // // // //         <div className="mt-2 text-sm font-semibold">{name}</div>
// // // // // //       </div>
// // // // // //     </Link>
// // // // // //   );
// // // // // // };

// // // // // // const CategorySection = () => {
// // // // // //   return (
// // // // // //     <div className="category-section py-10 relative group">
// // // // // //       <h2 className="text-xl font-bold text-center mb-6">Shop by Category</h2>
// // // // // //       <Swiper
// // // // // //         modules={[FreeMode, Mousewheel, Navigation]}
// // // // // //         spaceBetween={20}
// // // // // //         slidesPerView="auto"
// // // // // //         freeMode={true}
// // // // // //         mousewheel={true}
// // // // // //         navigation={{
// // // // // //           nextEl: ".swiper-button-next",
// // // // // //           prevEl: ".swiper-button-prev",
// // // // // //         }}
// // // // // //         breakpoints={{
// // // // // //           640: { slidesPerView: 3 },
// // // // // //           768: { slidesPerView: 4 },
// // // // // //           1024: { slidesPerView: 5 },
// // // // // //           1280: { slidesPerView: 7 },
// // // // // //         }}
// // // // // //         className="mySwiper"
// // // // // //       >
// // // // // //         {categories.map((category, index) => (
// // // // // //           <SwiperSlide key={index} className="!w-auto">
// // // // // //             <CategoryCard
// // // // // //               name={category.name}
// // // // // //               icon={category.icon}
// // // // // //               slug={category.slug}
// // // // // //             />
// // // // // //           </SwiperSlide>
// // // // // //         ))}
// // // // // //       </Swiper>
// // // // // //       <div className="swiper-button-prev"></div>
// // // // // //       <div className="swiper-button-next"></div>
// // // // // //       <style jsx global>{`
// // // // // //         .swiper-button-next,
// // // // // //         .swiper-button-prev {
// // // // // //           background-color: rgba(255, 255, 255, 0.8);
// // // // // //           color: #333;
// // // // // //           width: 30px;
// // // // // //           height: 30px;
// // // // // //           border-radius: 50%;
// // // // // //           opacity: 0;
// // // // // //           transition: opacity 0.3s ease;
// // // // // //         }
// // // // // //         .swiper-button-next:after,
// // // // // //         .swiper-button-prev:after {
// // // // // //           font-size: 14px;
// // // // // //         }
// // // // // //         .group:hover .swiper-button-next,
// // // // // //         .group:hover .swiper-button-prev {
// // // // // //           opacity: 1;
// // // // // //         }
// // // // // //         .swiper-button-next:hover,
// // // // // //         .swiper-button-prev:hover {
// // // // // //           background-color: rgba(255, 255, 255, 1);
// // // // // //         }
// // // // // //         .swiper-button-disabled {
// // // // // //           opacity: 0 !important;
// // // // // //         }
// // // // // //         .swiper-slide {
// // // // // //           width: auto;
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CategorySection;

// // // // // "use client";

// // // // // import React from "react";
// // // // // import Link from "next/link";
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper";
// // // // // import "swiper/css";
// // // // // import "swiper/css/free-mode";
// // // // // import "swiper/css/navigation";
// // // // // import "swiper/css/pagination";

// // // // // const categories = [
// // // // //   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
// // // // //   { name: "Fruits", icon: "🍊", slug: "fruits" },
// // // // //   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
// // // // //   { name: "Bakery", icon: "🥖", slug: "bakery" },
// // // // //   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
// // // // //   { name: "Grains", icon: "🌾", slug: "grains" },
// // // // //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // // // // ];

// // // // // const CategoryCard = ({ name, icon, slug }) => {
// // // // //   return (
// // // // //     <Link href={`/category/${slug}`} className="block py-7">
// // // // //       <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:bg-green-500 transform transition hover:scale-105 text-center">
// // // // //         <div className="text-4xl">{icon}</div>
// // // // //         <div className="mt-2 text-sm font-semibold">{name}</div>
// // // // //       </div>
// // // // //     </Link>
// // // // //   );
// // // // // };

// // // // // const CategorySection = () => {
// // // // //   return (
// // // // //     <div className="category-section py-10 relative">
// // // // //       <h2 className="text-xl font-bold text-center mb-6">Shop by Category</h2>
// // // // //       <Swiper
// // // // //         modules={[FreeMode, Mousewheel, Navigation, Pagination]}
// // // // //         spaceBetween={20}
// // // // //         slidesPerView="auto"
// // // // //         freeMode={true}
// // // // //         mousewheel={true}
// // // // //         navigation={{
// // // // //           nextEl: ".swiper-button-next",
// // // // //           prevEl: ".swiper-button-prev",
// // // // //         }}
// // // // //         pagination={{
// // // // //           clickable: true,
// // // // //           el: ".swiper-pagination",
// // // // //         }}
// // // // //         breakpoints={{
// // // // //           640: { slidesPerView: 3 },
// // // // //           768: { slidesPerView: 4 },
// // // // //           1024: { slidesPerView: 5 },
// // // // //           1280: { slidesPerView: 7 },
// // // // //         }}
// // // // //         className="mySwiper"
// // // // //       >
// // // // //         {categories.map((category, index) => (
// // // // //           <SwiperSlide key={index} className="!w-auto">
// // // // //             <CategoryCard
// // // // //               name={category.name}
// // // // //               icon={category.icon}
// // // // //               slug={category.slug}
// // // // //             />
// // // // //           </SwiperSlide>
// // // // //         ))}
// // // // //       </Swiper>
// // // // //       <div className="swiper-button-prev"></div>
// // // // //       <div className="swiper-button-next"></div>
// // // // //       <div className="swiper-pagination"></div>
// // // // //       <style jsx global>{`
// // // // //         .category-section {
// // // // //           position: relative;
// // // // //           padding-bottom: 40px; /* Add space for pagination */
// // // // //         }
// // // // //         .swiper-button-next,
// // // // //         .swiper-button-prev {
// // // // //           margin-top: 10px;
// // // // //           background-color: rgba(65, 224, 89, 0.8);
// // // // //           color: #f9f8f8;
// // // // //           width: 30px;
// // // // //           height: 30px;
// // // // //           border-radius: 50%;
// // // // //           transition: background-color 0.3s ease;
// // // // //         }
// // // // //         .swiper-button-next:after,
// // // // //         .swiper-button-prev:after {
// // // // //           font-size: 14px;
// // // // //         }
// // // // //         .swiper-button-next:hover,
// // // // //         .swiper-button-prev:hover {
// // // // //           background-color: rgba(255, 255, 255, 1);
// // // // //         }
// // // // //         .swiper-button-disabled {
// // // // //           opacity: 0.5 !important;
// // // // //           pointer-events: none;
// // // // //         }
// // // // //         .swiper-slide {
// // // // //           width: auto;
// // // // //         }
// // // // //         .swiper-pagination {
// // // // //           position: absolute;
// // // // //           bottom: 0;
// // // // //           left: 0;
// // // // //           right: 0;
// // // // //         }
// // // // //         .swiper-pagination-bullet {
// // // // //           background: #1fc072;
// // // // //           padding-left: 2px;
// // // // //           opacity: 0.5;
// // // // //         }

// // // // //         .swiper-pagination-bullet-active {
// // // // //           opacity: 1;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CategorySection;

// // // // "use client";

// // // // import React, { useEffect, useState } from "react";
// // // // import Link from "next/link";
// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper";
// // // // import "swiper/css";
// // // // import "swiper/css/free-mode";
// // // // import "swiper/css/navigation";
// // // // import "swiper/css/pagination";

// // // // const categories = [
// // // //   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
// // // //   { name: "Fruits", icon: "🍊", slug: "fruits" },
// // // //   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
// // // //   { name: "Bakery", icon: "🥖", slug: "bakery" },
// // // //   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
// // // //   { name: "Grains", icon: "🌾", slug: "grains" },
// // // //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // // // ];

// // // // const CategoryCard = ({ name, icon, slug }) => (
// // // //   <Link href={`/category/${slug}`} className="block py-7">
// // // //     <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:bg-green-500 transform transition hover:scale-105 text-center">
// // // //       <div className="text-4xl">{icon}</div>
// // // //       <div className="mt-2 text-sm font-semibold">{name}</div>
// // // //     </div>
// // // //   </Link>
// // // // );

// // // // const CategorySection = () => {
// // // //   const [isMobile, setIsMobile] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       setIsMobile(window.innerWidth < 640);
// // // //     };

// // // //     handleResize(); // Initial check
// // // //     window.addEventListener("resize", handleResize);
// // // //     return () => window.removeEventListener("resize", handleResize);
// // // //   }, []);

// // // //   return (
// // // //     <div className="category-section py-10 relative">
// // // //       <h2 className="text-xl font-bold text-center mb-6">Shop by Category</h2>
// // // //       {isMobile ? (
// // // //         <Swiper
// // // //           modules={[FreeMode, Mousewheel, Navigation, Pagination]}
// // // //           spaceBetween={20}
// // // //           slidesPerView="auto"
// // // //           freeMode={true}
// // // //           mousewheel={true}
// // // //           navigation
// // // //           pagination={{ clickable: true }}
// // // //           className="mySwiper"
// // // //         >
// // // //           {categories.map((category, index) => (
// // // //             <SwiperSlide key={index} className="!w-auto">
// // // //               <CategoryCard
// // // //                 name={category.name}
// // // //                 icon={category.icon}
// // // //                 slug={category.slug}
// // // //               />
// // // //             </SwiperSlide>
// // // //           ))}
// // // //         </Swiper>
// // // //       ) : (
// // // //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-4 gap-4">
// // // //           {categories.map((category, index) => (
// // // //             <CategoryCard
// // // //               key={index}
// // // //               name={category.name}
// // // //               icon={category.icon}
// // // //               slug={category.slug}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //       {isMobile && (
// // // //         <>
// // // //           {/* <div className="swiper-button-prev"></div>
// // // //           <div className="swiper-button-next"></div> */}
// // // //           <div className="swiper-pagination"></div>
// // // //           <style jsx global>{`
// // // //             .swiper-button-next,
// // // //             .swiper-button-prev {
// // // //               background-color: rgba(16, 198, 70, 0.8);
// // // //               color: #fbfbfb;
// // // //               width: 30px;
// // // //               height: 30px;
// // // //               border-radius: 50%;
// // // //             }
// // // //             .swiper-button-next:after,
// // // //             .swiper-button-prev:after {
// // // //               font-size: 14px;
// // // //             }
// // // //             .swiper-button-disabled {
// // // //               opacity: 0.5 !important;
// // // //               pointer-events: none;
// // // //             }
// // // //             .swiper-pagination {
// // // //               position: absolute;
// // // //               bottom: 10px;
// // // //               left: 0;
// // // //               right: 0;
// // // //               text-align: center;
// // // //             }
// // // //             .swiper-pagination-bullet {
// // // //               background: #1fc072;
// // // //               opacity: 0.5;
// // // //               margin: 0 5px;
// // // //             }
// // // //             .swiper-pagination-bullet-active {
// // // //               opacity: 1;
// // // //             }
// // // //           `}</style>
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CategorySection;

// // // import React from "react";
// // // import Link from "next/link";

// // // const categories = [
// // //   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
// // //   { name: "Fruits", icon: "🍊", slug: "fruits" },
// // //   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
// // //   { name: "Bakery", icon: "🥖", slug: "bakery" },
// // //   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
// // //   { name: "Grains", icon: "🌾", slug: "grains" },
// // //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // // ];

// // // const CategorySection = () => {
// // //   return (
// // //     <section className="py-8 px-4 lg:px-12 bg-gray-100">
// // //       <h2 className="text-3xl font-semibold text-center mb-8">
// // //         Shop by Category
// // //       </h2>
// // //       <div className="grid grid-cols-4 gap-4">
// // //         {categories.map((category) => (
// // //           <Link
// // //             href={`/category/${category.slug}`}
// // //             key={category.slug}
// // //             className="flex flex-col items-center justify-center p-2 sm:p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-sm sm:text-base"
// // //           >
// // //             {/* <a className=""> */}
// // //             <span className="text-2xl sm:text-4xl mb-1 sm:mb-2">
// // //               {category.icon}
// // //             </span>
// // //             <span className="text-sm sm:text-lg font-medium">
// // //               {category.name}
// // //             </span>
// // //             {/* </a> */}
// // //           </Link>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default CategorySection;

// // import React from "react";
// // import Link from "next/link";

// // const categories = [
// //   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
// //   { name: "Fruits", icon: "🍊", slug: "fruits" },
// //   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
// //   { name: "Bakery", icon: "🥖", slug: "bakery" },
// //   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
// //   { name: "Grains", icon: "🌾", slug: "grains" },
// //   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// // ];

// // const CategorySection = () => {
// //   return (
// //     <section className="py-8 px-4 lg:px-12 bg-gray-100">
// //       <h2 className="text-3xl font-semibold text-center mb-8">
// //         Shop by Category
// //       </h2>
// //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
// //         {categories.map((category) => (
// //           <Link
// //             href={`/category/${category.slug}`}
// //             key={category.slug}
// //             className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-sm sm:text-base"
// //           >
// //             <span className="text-2xl sm:text-4xl mb-2">{category.icon}</span>
// //             <span className="text-sm sm:text-lg font-medium text-center">
// //               {category.name}
// //             </span>
// //           </Link>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default CategorySection;

// import React from "react";
// import Link from "next/link";

// const categories = [
//   { name: "Vegetables", icon: "🥦", slug: "vegetables" },
//   { name: "Fruits", icon: "🍊", slug: "fruits" },
//   { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
//   { name: "Bakery", icon: "🥖", slug: "bakery" },
//   { name: "Personal Care", icon: "🧴", slug: "personal-care" },
//   { name: "Grains", icon: "🌾", slug: "grains" },
//   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
//   { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
// ];

// const CategorySection = () => {
//   return (
//     <section className="py-8 md:px-4 px-2 lg:px-12 bg-gray-100">
//       <h2 className="text-3xl font-semibold text-center mb-8">
//         Shop by Category
//       </h2>
//       <div className="grid grid-cols-4 md:gap-4 gap-2">
//         {categories.map((category) => (
//           <div key={category.slug} className="flex flex-col items-center">
//             <Link
//               href={`/category/${category.slug}`}
//               className="flex items-center justify-center w-full h-32 sm:h-40 md:h-48 bg-white hover:bg-green-500  shadow-md rounded-lg hover:shadow-lg transition-shadow text-sm sm:text-base"
//             >
//               <span className="text-2xl sm:text-4xl">{category.icon}</span>
//             </Link>
//             <span className="text-sm sm:text-lg font-medium mt-2 text-center w-full">
//               {category.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategorySection;

import React from "react";
import Link from "next/link";

const categories = [
  { name: "Vegetables", icon: "🥦", slug: "vegetables" },
  { name: "Fruits", icon: "🍊", slug: "fruits" },
  { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
  { name: "Bakery", icon: "🥖", slug: "bakery" },
  { name: "Personal Care", icon: "🧴", slug: "personal-care" },
  { name: "Grains", icon: "🌾", slug: "grains" },
  { name: "Chicken & Egg", icon: "🍗", slug: "chicken-egg" },
  { name: "Milk & Juice", icon: "🥛", slug: "milk-juice" },
];

const CategorySection = () => {
  return (
    <section className="py-8 pt-0 px-3 lg:px-12 bg-[#f7f5f4]">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {categories.map((category) => (
          <div key={category.slug} className="flex flex-col items-center">
            <Link
              href={`/category/${category.slug}`}
              className="flex items-center justify-center w-full h-32 sm:h-40 md:h-48 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow transform hover:-translate-y-2 hover:bg-[#557C56] duration-300"
            >
              <span className="text-2xl sm:text-4xl text-gray-800 hover:text-white transition-colors duration-300">
                {category.icon}
              </span>
            </Link>
            <span className="text-sm sm:text-lg font-medium mt-2 text-center w-full text-gray-800 hover:text-white transition-colors duration-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
