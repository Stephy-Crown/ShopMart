// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// export default function HeroSlider() {
//   return (
//     <div className="w-full h-96 md:h-[500px]">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="w-full h-full"
//       >
//         <SwiperSlide>
//           <div className="bg-green-200 w-full h-full flex items-center justify-center">
//             <h2 className="text-4xl font-bold">50% OFF - Vegetables Sale</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-blue-200 w-full h-full flex items-center justify-center">
//             <h2 className="text-4xl font-bold">Fresh Fruits Available</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-yellow-200 w-full h-full flex items-center justify-center">
//             <h2 className="text-4xl font-bold">Bakery Deals</h2>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero-background.jpg" // Replace with your image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50"
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-60">
        <h1 className="text-2xl md:text-6xl text-center font-bold mb-4 text-white">
          Welcome to ShopMart
        </h1>
        <p className="text-base md:text-xl mb-6 text-center text-white">
          The Leading B2B eCommerce Online Store <br />
          Discover a wide range of products tailored just for your needs.
        </p>
        {/* 
        <p className="text-lg md:text-xl mb-6 text-center text-white">
          Discover a wide range of products tailored just for your needs.
        </p>
        <p className="text-md md:text-lg mb-8 text-center text-white max-w-md">
          We deliver goods rght at your door step and ensuring timely delivery.
        </p> */}
        <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-6 rounded-lg">
          <Link href="/shop">Explore our Collections</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Core CSS
// import "swiper/css/autoplay"; // Autoplay CSS
// import "swiper/css/navigation"; // Optional, if you're using navigation arrows

// // Import Swiper modules for autoplay and loop
// import { Autoplay } from "swiper";

// export default function HeroSlider() {
//   return (
//     <div className="w-full h-96 md:h-[500px]">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         modules={[Autoplay]} // Register Autoplay module here
//         className="w-full h-full"
//       >
//         <SwiperSlide>
//           <div className="bg-green-200 w-full h-full flex items-center justify-center">
//             <h2 className="text-4xl font-bold">50% OFF - Vegetables Sale</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-blue-200 w-full h-full flex items-center justify-center">
//             <h2 className="text-4xl font-bold">Fresh Fruits Available</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-yellow-200 w-full h-full flex items-center justify-center">
//             <h2 className="text-4xl font-bold">Bakery Deals</h2>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
