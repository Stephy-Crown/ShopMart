// // // // // // // // "use client";
// // // // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // // // import "swiper/css";

// // // // // // // // export default function HeroSlider() {
// // // // // // // //   return (
// // // // // // // //     <div className="w-full h-96 md:h-[500px]">
// // // // // // // //       <Swiper
// // // // // // // //         spaceBetween={50}
// // // // // // // //         slidesPerView={1}
// // // // // // // //         autoplay={{ delay: 3000 }}
// // // // // // // //         loop={true}
// // // // // // // //         className="w-full h-full"
// // // // // // // //       >
// // // // // // // //         <SwiperSlide>
// // // // // // // //           <div className="bg-green-200 w-full h-full flex items-center justify-center">
// // // // // // // //             <h2 className="text-4xl font-bold">50% OFF - Vegetables Sale</h2>
// // // // // // // //           </div>
// // // // // // // //         </SwiperSlide>
// // // // // // // //         <SwiperSlide>
// // // // // // // //           <div className="bg-blue-200 w-full h-full flex items-center justify-center">
// // // // // // // //             <h2 className="text-4xl font-bold">Fresh Fruits Available</h2>
// // // // // // // //           </div>
// // // // // // // //         </SwiperSlide>
// // // // // // // //         <SwiperSlide>
// // // // // // // //           <div className="bg-yellow-200 w-full h-full flex items-center justify-center">
// // // // // // // //             <h2 className="text-4xl font-bold">Bakery Deals</h2>
// // // // // // // //           </div>
// // // // // // // //         </SwiperSlide>
// // // // // // // //       </Swiper>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";
// // // // // // // // import Image from "next/image";
// // // // // // // // import Link from "next/link";
// // // // // // // // import shopmartHero from "../public/shopmartHero.jpg";

// // // // // // // // const HeroSection = () => {
// // // // // // // //   return (
// // // // // // // //     <div className="relative h-screen pt-">
// // // // // // // //       <Image
// // // // // // // //         src={shopmartHero} // Replace with your image path
// // // // // // // //         alt="Hero Background"
// // // // // // // //         layout="fill"
// // // // // // // //         objectFit="cover"
// // // // // // // //         className="absolute inset-0 opacity-50 top-20"
// // // // // // // //       />
// // // // // // // //       <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60">
// // // // // // // //         <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // // // // // // //           Welcome to ShopMart
// // // // // // // //         </h1>
// // // // // // // //         <p className="text-base md:text-xl mb-6 text-center text-white">
// // // // // // // //           The Leading B2B eCommerce Online Store <br />
// // // // // // // //           Discover a wide range of products tailored just for your needs.
// // // // // // // //         </p>
// // // // // // // //         {/*
// // // // // // // //         <p className="text-lg md:text-xl mb-6 text-center text-white">
// // // // // // // //           Discover a wide range of products tailored just for your needs.
// // // // // // // //         </p>
// // // // // // // //         <p className="text-md md:text-lg mb-8 text-center text-white max-w-md">
// // // // // // // //           We deliver goods rght at your door step and ensuring timely delivery.
// // // // // // // //         </p> */}
// // // // // // // //         <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-6 rounded-lg">
// // // // // // // //           <Link href="/stores">Explore Our Stores</Link>
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default HeroSection;

// // // // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // // // import "swiper/css"; // Core CSS
// // // // // // // // import "swiper/css/autoplay"; // Autoplay CSS
// // // // // // // // import "swiper/css/navigation"; // Optional, if you're using navigation arrows

// // // // // // // // // Import Swiper modules for autoplay and loop
// // // // // // // // import { Autoplay } from "swiper";

// // // // // // // // export default function HeroSlider() {
// // // // // // // //   return (
// // // // // // // //     <div className="w-full h-96 md:h-[500px]">
// // // // // // // //       <Swiper
// // // // // // // //         spaceBetween={50}
// // // // // // // //         slidesPerView={1}
// // // // // // // //         autoplay={{
// // // // // // // //           delay: 3000,
// // // // // // // //           disableOnInteraction: false,
// // // // // // // //         }}
// // // // // // // //         loop={true}
// // // // // // // //         modules={[Autoplay]} // Register Autoplay module here
// // // // // // // //         className="w-full h-full"
// // // // // // // //       >
// // // // // // // //         <SwiperSlide>
// // // // // // // //           <div className="bg-green-200 w-full h-full flex items-center justify-center">
// // // // // // // //             <h2 className="text-4xl font-bold">50% OFF - Vegetables Sale</h2>
// // // // // // // //           </div>
// // // // // // // //         </SwiperSlide>
// // // // // // // //         <SwiperSlide>
// // // // // // // //           <div className="bg-blue-200 w-full h-full flex items-center justify-center">
// // // // // // // //             <h2 className="text-4xl font-bold">Fresh Fruits Available</h2>
// // // // // // // //           </div>
// // // // // // // //         </SwiperSlide>
// // // // // // // //         <SwiperSlide>
// // // // // // // //           <div className="bg-yellow-200 w-full h-full flex items-center justify-center">
// // // // // // // //             <h2 className="text-4xl font-bold">Bakery Deals</h2>
// // // // // // // //           </div>
// // // // // // // //         </SwiperSlide>
// // // // // // // //       </Swiper>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // "use client";
// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";
// // // // // // import shopmartHero from "../public/shopmartHero.jpg";

// // // // // // const HeroSection = () => {
// // // // // //   return (
// // // // // //     <div className="relative h-screen">
// // // // // //       <div className="absolute inset-0 overflow-hidden ">
// // // // // //         <Image
// // // // // //           src={shopmartHero}
// // // // // //           alt="Hero Background"
// // // // // //           layout="fill"
// // // // // //           // height={1700}
// // // // // //           objectFit="cover"
// // // // // //           objectPosition="center"
// // // // // //           quality={100}
// // // // // //           priority
// // // // // //           className="opacity-50 object-fill h-full "
// // // // // //         />
// // // // // //       </div>
// // // // // //       <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60">
// // // // // //         <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // // // // //           Welcome to ShopMart
// // // // // //         </h1>
// // // // // //         <p className="text-base md:text-xl mb-6 text-center text-white">
// // // // // //           The Leading B2B eCommerce Online Store <br />
// // // // // //           Discover a wide range of products tailored just for your needs.
// // // // // //         </p>
// // // // // //         <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-6 rounded-lg">
// // // // // //           <Link href="/stores">Explore Our Stores</Link>
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default HeroSection;

// // // // // // // "use client";
// // // // // // // import Image from "next/image";
// // // // // // // import Link from "next/link";
// // // // // // // import shopmartHero from "../public/shopmartHero.jpg";

// // // // // // // const HeroSection = () => {
// // // // // // //   return (
// // // // // // //     <div className="relative h-screen overflow-hidden">
// // // // // // //       <Image
// // // // // // //         src={shopmartHero}
// // // // // // //         alt="Hero Background"
// // // // // // //         // layout="fill"
// // // // // // //         objectFit="cover"
// // // // // // //         height={1400}
// // // // // // //         objectPosition="center"
// // // // // // //         quality={100}
// // // // // // //         priority
// // // // // // //         className="absolute inset-0"
// // // // // // //       />
// // // // // // //       <div className="absolute inset-0 bg-gray-800 bg-opacity-60">
// // // // // // //         <div className="flex flex-col justify-center items-center h-full">
// // // // // // //           <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // // // // // //             Welcome to ShopMart
// // // // // // //           </h1>
// // // // // // //           <p className="text-base md:text-xl mb-6 text-center text-white">
// // // // // // //             The Leading B2B eCommerce Online Store <br />
// // // // // // //             Discover a wide range of products tailored just for your needs.
// // // // // // //           </p>
// // // // // // //           <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-6 rounded-lg">
// // // // // // //             <Link href="/stores">Explore Our Stores</Link>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default HeroSection;

// // // // // // "use client";
// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";
// // // // // // // import shopmartHero from "../public/shopmartHero.jpg";
// // // // // // import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// // // // // // const HeroSection = () => {
// // // // // //   return (
// // // // // //     <div className="relative h-screen">
// // // // // //       <Image
// // // // // //         src={shopmartHero}
// // // // // //         alt="Hero Background"
// // // // // //         layout="fill"
// // // // // //         // height={1200}
// // // // // //         // width={1200}
// // // // // //         objectFit="cover"
// // // // // //         className="absolute inset-0 opacity-50 top-[1900px]"
// // // // // //       />
// // // // // //       <div
// // // // // //         className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60"
// // // // // //         style={{ paddingTop: "120px" }} // Adjust this value if necessary
// // // // // //       >
// // // // // //         <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // // // // //           Welcome to ShopMart
// // // // // //         </h1>
// // // // // //         <p className="text-base md:text-xl mb-6 text-center text-white">
// // // // // //           The Leading B2B eCommerce Online Store <br />
// // // // // //           Discover a wide range of products tailored just for your needs.
// // // // // //         </p>
// // // // // //         <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-6 rounded-lg">
// // // // // //           <Link href="/stores">Explore Our Stores</Link>
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default HeroSection;

// // // // // "use client";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // // import shopmartHero from "../public/shopmartHero.jpg";
// // // // // import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// // // // // const HeroSection = () => {
// // // // //   return (
// // // // //     <div className="relative h-screen">
// // // // //       <Image
// // // // //         src={shopmartHero}
// // // // //         alt="Hero Background"
// // // // //         layout="fill"
// // // // //         objectFit="cover"
// // // // //         className="absolute inset-0 opacity-50"
// // // // //       />
// // // // //       <div
// // // // //         className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60"
// // // // //         style={{ paddingTop: "30px", paddingTop: "30px" }} // Adjust this value if necessary
// // // // //       >
// // // // //         <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // // // //           Welcome to ShopMart
// // // // //         </h1>
// // // // //         <p className="text-sm md:text-xl mb-6 text-center text-white">
// // // // //           The Leading Delivery Platform that connects you to Businesses. <br />
// // // // //           Fast, reliable and seamless delivery services at your doorstep!
// // // // //         </p>
// // // // //         <div className="flex flex-row space-x-2 md:space-x-4 px-3 md:px-0">
// // // // //           <Link href="/stores">
// // // // //             <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-4 rounded-lg text-[12px] md:text-base">
// // // // //               Explore Our Stores
// // // // //             </button>
// // // // //           </Link>
// // // // //           <Link href="/business-signup">
// // // // //             <button className="bg-[#FF9800] hover:bg-yellow-600 text-white py-2 px-4 text-[12px] rounded-lg md:text-base">
// // // // //               Join as a Business
// // // // //             </button>
// // // // //           </Link>
// // // // //           <Link href="/driver-signup">
// // // // //             <button className="bg-[#3F51B5] hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-[12px] md:text-base">
// // // // //               Sign Up as a Driver
// // // // //             </button>
// // // // //           </Link>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;

// // // // // "use client";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// // // // // const HeroSection = () => {
// // // // //   return (
// // // // //     <div className="relative h-screen flex items-center justify-center bg-gray-900">
// // // // //       <Image
// // // // //         src={shopmartHero}
// // // // //         alt="Hero Background"
// // // // //         layout="fill"
// // // // //         objectFit="cover"
// // // // //         className="absolute inset-0 z-0 opacity-60"
// // // // //       />
// // // // //       <div className="relative z-10 text-center p-4 md:p-8 bg-gray-800 bg-opacity-40 rounded-lg">
// // // // //         <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
// // // // //           Welcome to ShopMart
// // // // //         </h1>
// // // // //         <p className="text-md md:text-xl text-white mb-8">
// // // // //           The Leading Delivery Platform that connects you to Businesses.
// // // // //           <br />
// // // // //           Fast, reliable, and seamless delivery services at your doorstep!
// // // // //         </p>
// // // // //         <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center">
// // // // //           <div className="flex flex-col items-center">
// // // // //             <Link href="/stores">
// // // // //               <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-base">
// // // // //                 Explore Our Stores
// // // // //               </button>
// // // // //             </Link>
// // // // //             <p className="text-white text-sm md:text-lg mt-4 max-w-xs">
// // // // //               Discover a wide variety of stores offering unique products and
// // // // //               deals.
// // // // //             </p>
// // // // //           </div>
// // // // //           <div className="flex flex-col items-center">
// // // // //             <Link href="/business-signup">
// // // // //               <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-lg text-base">
// // // // //                 Join as a Business
// // // // //               </button>
// // // // //             </Link>
// // // // //             <p className="text-white text-sm md:text-lg mt-4 max-w-xs">
// // // // //               Become a part of our business community and expand your reach.
// // // // //             </p>
// // // // //           </div>
// // // // //           <div className="flex flex-col items-center">
// // // // //             <Link href="/driver-signup">
// // // // //               <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-base">
// // // // //                 Sign Up as a Driver
// // // // //               </button>
// // // // //             </Link>
// // // // //             <p className="text-white text-sm md:text-lg mt-4 max-w-xs">
// // // // //               Join as a driver to earn and support our reliable delivery
// // // // //               network.
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;

// // // // // "use client";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// // // // // const HeroSection = () => {
// // // // //   return (
// // // // //     <div className="relative h-screen">
// // // // //       <Image
// // // // //         src={shopmartHero}
// // // // //         alt="Hero Background"
// // // // //         layout="fill"
// // // // //         objectFit="cover"
// // // // //         className="absolute inset-0 opacity-50"
// // // // //       />
// // // // //       <div
// // // // //         className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60"
// // // // //         style={{ paddingTop: "120px" }} // Adjust this value if necessary
// // // // //       >
// // // // //         <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // // // //           Welcome to ShopMart
// // // // //         </h1>
// // // // //         <p className="text-base md:text-xl mb-6 text-center text-white">
// // // // //           The Leading B2B eCommerce Online Store <br />
// // // // //           Discover a wide range of products tailored just for your needs.
// // // // //         </p>

// // // // //         {/* Button Section */}
// // // // //         <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
// // // // //           <div className="flex flex-col items-center">
// // // // //             <Link href="/stores">
// // // // //               <div className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-4 md:px-6 rounded-lg cursor-pointer text-sm md:text-base">
// // // // //                 Explore Our Stores
// // // // //               </div>
// // // // //             </Link>
// // // // //             <p className="mt-2 text-gray-300 text-center text-xs md:text-sm">
// // // // //               “Grow your reach by connecting with local customers and providing
// // // // //               quick delivery services.”
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="flex flex-col items-center">
// // // // //             <Link href="/business-signup">
// // // // //               <div className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 md:px-6 rounded-lg cursor-pointer text-sm md:text-base">
// // // // //                 Join as a Business
// // // // //               </div>
// // // // //             </Link>
// // // // //             <p className="mt-2 text-gray-300 text-center text-xs md:text-sm">
// // // // //               “Grow your reach by connecting with local customers and providing
// // // // //               quick delivery services.”
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="flex flex-col items-center">
// // // // //             <Link href="/driver-signup">
// // // // //               <div className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 md:px-6 rounded-lg cursor-pointer text-sm md:text-base">
// // // // //                 Sign Up as a Driver
// // // // //               </div>
// // // // //             </Link>
// // // // //             <p className="mt-2 text-gray-300 text-center text-xs md:text-sm">
// // // // //               “Join our network and start earning by delivering for local
// // // // //               businesses.”
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;

// // // // "use client";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { CheckCircleIcon } from "@heroicons/react/24/outline";
// // // // // import shopmartHero from "../public/shopmartHero.jpg";
// // // // import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// // // // const HeroSection = () => {
// // // //   return (
// // // //     <div className="relative h-screen">
// // // //       <Image
// // // //         src={shopmartHero}
// // // //         alt="Hero Background"
// // // //         layout="fill"
// // // //         objectFit="cover"
// // // //         className="absolute inset-0 opacity-50"
// // // //       />
// // // //       <div
// // // //         className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60"
// // // //         style={{ paddingTop: "30px" }} // Adjust this value if necessary
// // // //       >
// // // //         <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // // //           Welcome to ShopMart
// // // //         </h1>
// // // //         <p className="text-sm md:text-xl mb-6 text-center text-white">
// // // //           The Leading Delivery Platform that connects you to Businesses and
// // // //           provides fast, reliable and seamless delivery services at your
// // // //           doorstep!
// // // //         </p>

// // // //         {/* <div className="md:block hidden">
// // // //           <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center ">
// // // //             <div className="flex flex-col items-center">
// // // //               <Link href="/stores">
// // // //                 <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-base">
// // // //                   Explore Our Stores
// // // //                 </button>
// // // //               </Link>
// // // //               <p className="text-white text-sm text-center md:text-lg mt-4 max-w-xs">
// // // //                 Discover a wide variety of stores offering unique products and
// // // //                 deals.
// // // //               </p>
// // // //             </div>
// // // //             <div className="flex flex-col items-center">
// // // //               <Link href="/business-signup">
// // // //                 <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-lg text-base">
// // // //                   Join as a Business
// // // //                 </button>
// // // //               </Link>
// // // //               <p className="text-white text-sm md:text-lg mt-4 max-w-xs text-center">
// // // //                 Become a part of our business community and expand your reach.
// // // //               </p>
// // // //             </div>
// // // //             <div className="flex flex-col items-center">
// // // //               <Link href="/driver-signup">
// // // //                 {" "}
// // // //                 <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-base">
// // // //                   Sign Up as a Driver
// // // //                 </button>
// // // //               </Link>
// // // //               <p className="text-white text-sm md:text-lg mt-4 max-w-xs text-center">
// // // //                 Join as a driver to earn and support our reliable delivery
// // // //                 network.
// // // //               </p>
// // // //             </div>
// // // //           </div> */}
// // // //         {/* </div> */}

// // // //         <div className=" lg:block mt-4 lg:mt-9 text-left">
// // // //           <ul
// // // //             className="flex flex-col justify-center items-start text-gray-700 space-y-4 text-base md:text-lg lg:text-xl"
// // // //             data-aos="fade-in"
// // // //             data-aos-duration="800"
// // // //             data-aos-delay="500"
// // // //           >
// // // //             <li className="flex justify-center items-start space-x-3">
// // // //               <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
// // // //               <p className="text-sm lg:text-base">
// // // //                 Real-time Collaboration for seamless teamwork.
// // // //               </p>
// // // //             </li>
// // // //             <li className="flex justify-center items-start space-x-3">
// // // //               <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
// // // //               <p className="text-sm lg:text-base">
// // // //                 Customizable Themes to suit your style.
// // // //               </p>
// // // //             </li>
// // // //             <li className="flex justify-center items-start space-x-3">
// // // //               <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
// // // //               <p className="text-sm lg:text-base">
// // // //                 Powerful Editing Tools for enhanced productivity.
// // // //               </p>
// // // //             </li>
// // // //             <li className="flex justify-center items-start space-x-3">
// // // //               <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
// // // //               <p className="text-sm lg:text-base">
// // // //                 Flexible Settings to tailor your experience.
// // // //               </p>
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //         <div className="mt-8 lg:mt-12">
// // // //           <Link
// // // //             href="/authentication"
// // // //             className="inline-block px-4  w-full md:w-[200px]  text-center lg:px-6 py-3 text-lg font-medium text-white  bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e]  rounded-md shadow-lg  transition duration-300"
// // // //             // data-aos="zoom-in"
// // // //             // data-aos-duration="800"
// // // //             // data-aos-delay="600"
// // // //           >
// // // //             Get Started
// // // //           </Link>
// // // //         </div>

// // // //         {/* Supporting Text for Mobile as Bullet Points */}
// // // //         <ul className="text-white text-[10px] mt-4 space-y-2 md:hidden list-disc list-inside pb-10">
// // // //           <li>
// // // //             Discover a wide variety of stores offering unique products and
// // // //             deals.
// // // //           </li>
// // // //           <li>
// // // //             Become a part of our business community and expand your reach.
// // // //           </li>
// // // //           <li>
// // // //             Join as a driver to earn and support our reliable delivery network.
// // // //           </li>
// // // //         </ul>
// // // //         <div className="flex flex-row space-x-2 md:space-x-4 px-3 md:px-0 md:hidden">
// // // //           <Link href="/stores">
// // // //             <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-4 rounded-lg text-[12px] md:text-base">
// // // //               Explore Our Stores
// // // //             </button>
// // // //           </Link>
// // // //           <Link href="/business-signup">
// // // //             <button className="bg-[#FF9800] hover:bg-yellow-600 text-white py-2 px-4 text-[12px] rounded-lg md:text-base">
// // // //               Join as a Business
// // // //             </button>
// // // //           </Link>
// // // //           <Link href="/driver-signup">
// // // //             <button className="bg-[#3F51B5] hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-[12px] md:text-base">
// // // //               Sign Up as a Driver
// // // //             </button>
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HeroSection;

// // // "use client";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { useState, useEffect } from "react";
// // // import { CheckCircleIcon } from "@heroicons/react/24/outline";
// // // import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// // // const HeroSection = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 100);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div>
// // //       {/* Navigation Bar */}
// // //       <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow-lg flex justify-between items-center px-6 py-4">
// // //         <div className="text-lg font-bold">ShopMart</div>
// // //         <div className={`flex-1 ${isScrolled ? "visible" : "invisible"}`}>
// // //           <input
// // //             type="text"
// // //             placeholder="Search products..."
// // //             className="w-full px-4 py-2 rounded-md border border-gray-300"
// // //           />
// // //         </div>
// // //         <div className="flex items-center space-x-4">
// // //           {/* Conditional rendering based on user's login state */}
// // //           {true ? ( // Replace with your authentication logic
// // //             <Link href="/profile">
// // //               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
// // //                 Profile
// // //               </button>
// // //             </Link>
// // //           ) : (
// // //             <>
// // //               <Link href="/sign-up">
// // //                 <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
// // //                   Sign Up
// // //                 </button>
// // //               </Link>
// // //               <Link href="/sign-in">
// // //                 <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
// // //                   Sign In
// // //                 </button>
// // //               </Link>
// // //             </>
// // //           )}
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <div className="relative h-screen pt-16">
// // //         <Image
// // //           src={shopmartHero}
// // //           alt="Hero Background"
// // //           layout="fill"
// // //           objectFit="cover"
// // //           className="absolute inset-0 opacity-50"
// // //         />
// // //         <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60">
// // //           <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// // //             Welcome to ShopMart
// // //           </h1>
// // //           <div className="w-full max-w-md">
// // //             <input
// // //               type="text"
// // //               placeholder="Search products..."
// // //               className="w-full px-4 py-2 rounded-md text-black"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Features Section */}
// // //       <div className="py-12 bg-gray-100">
// // //         <div className="container mx-auto px-6">
// // //           <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// // //               <h3 className="text-xl font-semibold mb-2">
// // //                 Real-time Collaboration
// // //               </h3>
// // //               <p className="text-gray-600">
// // //                 Seamless teamwork with real-time collaboration features.
// // //               </p>
// // //             </div>
// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// // //               <h3 className="text-xl font-semibold mb-2">
// // //                 Customizable Themes
// // //               </h3>
// // //               <p className="text-gray-600">
// // //                 Personalize your experience with customizable themes.
// // //               </p>
// // //             </div>
// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// // //               <h3 className="text-xl font-semibold mb-2">
// // //                 Powerful Editing Tools
// // //               </h3>
// // //               <p className="text-gray-600">
// // //                 Enhance productivity with powerful editing tools.
// // //               </p>
// // //             </div>
// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// // //               <h3 className="text-xl font-semibold mb-2">Flexible Settings</h3>
// // //               <p className="text-gray-600">
// // //                 Tailor your experience with flexible settings.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HeroSection;

// // "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// // import {
// //   CheckCircleIcon,
// //   SearchIcon,
// //   ChevronDownIcon,
// //   UserIcon,
// // } from "@heroicons/react/24/outline";
// // import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// // const HeroSection = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 100);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       {/* Navigation Bar */}
// //       <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow-lg flex justify-between items-center px-6 py-4">
// //         <div className="text-lg font-bold">ShopMart</div>
// //         <div className={`flex-1 ${isScrolled ? "visible" : "invisible"}`}>
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             className="w-full px-4 py-2 rounded-md border border-gray-300"
// //           />
// //         </div>
// //         <div className="flex items-center space-x-4">
// //           {true ? (
// //             <Link href="/profile">
// //               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
// //                 Profile
// //               </button>
// //             </Link>
// //           ) : (
// //             <>
// //               <Link href="/sign-up">
// //                 <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
// //                   Sign Up
// //                 </button>
// //               </Link>
// //               <Link href="/sign-in">
// //                 <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
// //                   Sign In
// //                 </button>
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <div className="relative h-screen pt-16">
// //         <Image
// //           src={shopmartHero}
// //           alt="Hero Background"
// //           layout="fill"
// //           objectFit="cover"
// //           className="absolute inset-0 opacity-50"
// //         />
// //         <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60">
// //           <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
// //             Welcome to ShopMart
// //           </h1>
// //           <div className="w-full max-w-md">
// //             <input
// //               type="text"
// //               placeholder="Search products..."
// //               className="w-full px-4 py-2 rounded-md text-black"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Features Section */}
// //       <div className="py-12 bg-gray-100">
// //         <div className="container mx-auto px-6">
// //           <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="bg-white p-6 rounded-lg shadow-lg">
// //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">
// //                 Real-time Collaboration
// //               </h3>
// //               <p className="text-gray-600">
// //                 Seamless teamwork with real-time collaboration features.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg">
// //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">
// //                 Customizable Themes
// //               </h3>
// //               <p className="text-gray-600">
// //                 Personalize your experience with customizable themes.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg">
// //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">
// //                 Powerful Editing Tools
// //               </h3>
// //               <p className="text-gray-600">
// //                 Enhance productivity with powerful editing tools.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg">
// //               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">Flexible Settings</h3>
// //               <p className="text-gray-600">
// //                 Tailor your experience with flexible settings.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import {
//   CheckCircleIcon,
//   SearchIcon,
//   ShoppingCartIcon,
//   UserIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";
// import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";

// export default function HeroSection() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Navigation Bar
//       <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow-lg flex justify-between items-center px-6 py-4">
//         <div className="text-lg font-bold">ShopMart</div>
//         <div className={`flex-1 ${isScrolled ? "visible" : "invisible"}`}>
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full px-4 py-2 rounded-md border border-gray-300"
//           />
//         </div>
//         <div className="flex items-center space-x-4">
//           {true ? (
//             <Link href="/profile">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
//                 Profile
//               </button>
//             </Link>
//           ) : (
//             <>
//               <Link href="/sign-up">
//                 <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//                   Sign Up
//                 </button>
//               </Link>
//               <Link href="/sign-in">
//                 <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
//                   Sign In
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <div className="relative h-screen pt-16">
//         <Image
//           src={shopmartHero}
//           alt="Hero Background"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 opacity-50"
//         />
//         <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60">
//           <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
//             Welcome to ShopMart
//           </h1>
//           <div className="w-full max-w-md">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full px-4 py-2 rounded-md text-black"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-12 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">
//                 Real-time Collaboration
//               </h3>
//               <p className="text-gray-600">
//                 Seamless teamwork with real-time collaboration features.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">
//                 Customizable Themes
//               </h3>
//               <p className="text-gray-600">
//                 Personalize your experience with customizable themes.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">
//                 Powerful Editing Tools
//               </h3>
//               <p className="text-gray-600">
//                 Enhance productivity with powerful editing tools.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Flexible Settings</h3>
//               <p className="text-gray-600">
//                 Tailor your experience with flexible settings.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import shopmartHero from "../public/couriers-delivering-package_1030879-47607.jpg";
import ServicesSlider from "../components/ServicesSlider";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen pt-15">
        <Image
          src={shopmartHero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-70"
        />
        <div className="relative  z-10 md:flex md:flex-col md:justify-center items-center h-full bg-gray-800 bg-opacity-60">
          <h1 className="text-2xl md:text-6xl text-center font-bold pt-28 md:pt-0 mb-4 text-[#f0e7dd] ">
            Welcome to ShopMart
          </h1>
          <p className="text-sm text-center text-[#e3dacf] mb-4 px-2 md:px-0">
            The One-Stop Delivery Online Store where you connect with local
            stores and get your orders delivered quickly and efficiently.
            <br />
            {/* Your
            one-stop shop for everything you need! */}
            {/* Connect with local stores and get your orders delivered quickly and
            efficiently. */}
          </p>

          {/* Search Bar with Button */}
          <div className="hidden md:block">
            <div className="flex items-center w-full max-w-xl mt-4 ">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow px-4 w-[1500px] py-2 rounded-l-md border h-16 border-gray-300 text-black"
              />
              <button className="bg-gradient-to-l from-[#557C56] to-[#3D593E] text-white h-16 px-4 py-2 rounded-r-md">
                Search
              </button>
            </div>
            <div className="hidden md:block">
              {" "}
              <Link href="/authentication" className="flex justify-center ">
                <button className="mt-10 ml-10 text-2xl bg-gradient-to-l from-[#557C56] to-[#3D593E] text-white px-4 py-2 text rounded-lg">
                  Join ShopMart Today!
                </button>
              </Link>
            </div>
          </div>

          {/* Bullet Points and Get Started Button for Mobile */}
          <div className="md:hidden flex-col mt-6">
            <div className="flex flex-col  pl-20">
              <div className="flex  ">
                <CheckCircleIcon className="w-5  mb-2 text-[#e8af9b] mr-2" />
                <span className=" text-[#f0e7dd]  text-sm">
                  Real-time Collaboration
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 mb-2  text-[#e8af9b]  mr-2" />
                <span className="text-[#f0e7dd]  text-sm">
                  Customizable Themes
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 mb-2 text-[#e8af9b]  mr-2" />
                <span className="text-[#f0e7dd]  text-sm">
                  Powerful Editing Tools
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 mb-2 text-[#e8af9b]  mr-2" />
                <span className="text-[#f0e7dd]  text-sm">
                  Flexible Settings
                </span>
              </div>
            </div>
            <Link href="/authentication" className="flex justify-center">
              <button className="mt-6  bg-gradient-to-l from-[#557C56] to-[#3D593E] text-[#f0e7dd]  px-4 py-2 rounded-lg">
                Join ShopMart Today!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ServicesSlider />
      <div className="py-12 pt-6 bg-gray-100 hidden md:block">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#33372C]">
            Explore Our Services
          </h2>
          <div className="flex flex-row md:flex-row md:space-y-0 md:space-x-6 md:justify-center">
            {/* Explore Our Stores Button */}
            <div className="flex flex-col p-[3px] border border-slate-400 bg-slate-200 items-center  rounded-lg mr-1 transition-transform transform hover:bg-gray-300 hover:shadow-xl hover:-translate-y-1">
              <p className=" p-1 text-[10px] md:text-lg mt-2 max-w-xs text-center">
                Get to discover a wide variety of stores offering unique
                products and deals tailored just for your needs.
              </p>
              <Link href="/stores">
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-[5px] rounded-lg text-[10px] md:text-sm">
                  Explore Our Stores
                </button>
              </Link>
            </div>

            {/* Join as a Business Button */}
            <div className="flex flex-col items-center  p-[3px] border border-slate-400 bg-slate-200 rounded-lg mr-1 transition-transform transform hover:bg-gray-300 hover:shadow-xl hover:-translate-y-1">
              <p className="text-black text-[10px] md:text-lg mt-2 max-w-xs text-center">
                Become a part of our business community and expand your reach.
              </p>
              <Link href="/business-authentication">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-[2px] rounded-lg text-[100px] md:text-sm">
                  Join as a Business
                </button>
              </Link>
            </div>

            {/* Sign Up as a Driver Button */}
            <div className="flex flex-col p-[3px] border border-slate-400 bg-slate-200 items-center  rounded-lg transition-transform transform hover:bg-gray-300 hover:shadow-xl hover:-translate-y-1">
              <p className="text-black text-[10px] md:text-lg mt-2 max-w-xs text-center">
                Join as a driver to earn and support our reliable delivery
                network.
              </p>
              <Link href="/driver-signup">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-[1px] rounded-lg text-[10px] md:text-sm">
                  Sign Up as a Driver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="py-12 bg-gray-100 hidden md:block">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 hidden md:block">
            Features
          </h2>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Real-time Collaboration
              </h3>
              <p className="text-gray-600">
                Seamless teamwork with real-time collaboration features.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Customizable Themes
              </h3>
              <p className="text-gray-600">
                Personalize your experience with customizable themes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Powerful Editing Tools
              </h3>
              <p className="text-gray-600">
                Enhance productivity with powerful editing tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Settings</h3>
              <p className="text-gray-600">
                Tailor your experience with flexible settings.
              </p>
            </div>
          </div> */}

      {/* Mobile Features Section */}
      {/* <div className="md:hidden flex flex-col items-center">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span>Real-time Collaboration</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span>Customizable Themes</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span>Powerful Editing Tools</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span>Flexible Settings</span>
              </div>
            </div>
            <Link href="/get-started">
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Get Started
              </button>
            </Link>
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
