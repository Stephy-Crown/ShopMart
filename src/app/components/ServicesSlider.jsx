// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation"; // Import Swiper navigation styles
// import { Pagination, Autoplay, Navigation } from "swiper"; // Include Navigation module
// import "swiper/css/pagination";
// import Link from "next/link";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"; // Import Hero Icons

// const ServicesSlider = () => {
//   const services = [
//     {
//       text: "Discover a wide variety of stores offering unique products and deals.",
//       buttonText: "Explore Our Stores",
//       link: "/stores",
//       buttonColor: "bg-green-600 hover:bg-green-700",
//     },
//     {
//       text: "Become a part of our business community and expand your reach.",
//       buttonText: "Join as a Business",
//       link: "/business-signup",
//       buttonColor: "bg-yellow-600 hover:bg-yellow-700",
//     },
//     {
//       text: "Join as a driver to earn and support our reliable delivery network.",
//       buttonText: "Sign Up as a Driver",
//       link: "/driver-signup",
//       buttonColor: "bg-blue-600 hover:bg-blue-700",
//     },
//   ];

//   return (
//     <div className="py-12 pt-6 bg-gray-100 md:hidden block">
//       <div className="container mx-auto px-9 relative">
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#33372C]">
//           Explore Our Services
//         </h2>
//         <Swiper
//           modules={[Pagination, Autoplay, Navigation]} // Swiper modules with Navigation
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000 }}
//           loop={true}
//           navigation // Enable navigation
//           className="px-9"
//         >
//           {services.map((service, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center">
//                 <div className="flex flex-col py-16 bg-[#557C56] items-center rounded-lg transition-transform transform shadow-xl hover:-translate-y-1">
//                   <p className="p-1 text-[10px] md:text-lg mt-2 max-w-xs text-center">
//                     {service.text}
//                   </p>
//                   <Link href={service.link}>
//                     <button
//                       className={`${service.buttonColor} text-white py-2 px-[5px] rounded-lg text-[10px] md:text-sm`}
//                     >
//                       {service.buttonText}
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         {/* <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer">
//           <ChevronLeftIcon className="w-8 h-8" />
//         </div>
//         <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer">
//           <ChevronRightIcon className="w-8 h-8" />
//         </div> */}

//         {/* Custom Styles */}
//         <style jsx global>{`
//           .swiper-button-next,
//           .swiper-button-prev {
//             background-color: #557c56;
//             color: #fbfbfb;
//             width: 30px;
//             height: 30px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
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
//             position: relative; /* Set to relative for positioning */
//             margin-top: 20px; /* Add margin to separate from the slider */
//             text-align: center; /* Center align the bullets */
//           }
//           .swiper-pagination-bullet {
//             background: #557c56;
//             opacity: 0.5;
//             margin: 0 5px;
//           }
//           .swiper-pagination-bullet-active {
//             opacity: 1;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default ServicesSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { Pagination, Autoplay, Navigation } from "swiper"; // Include Navigation module
import "swiper/css/pagination";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"; // Import Hero Icons

const ServicesSlider = () => {
  const services = [
    {
      text: "Discover a wide variety of stores offering unique products and deals.",
      buttonText: "Explore Our Stores",
      link: "/explore-stores",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
    {
      text: "Become a part of our business community and expand your reach.",
      buttonText: "Join as a Business",
      link: "/business-authentication",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
    {
      text: "Join as a driver to earn and support our reliable delivery network.",
      buttonText: "Sign Up as a Driver",
      link: "/driver-signup",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  ];

  return (
    <div className="py-12 pt-6 bg-gray-100 md:hidden block">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#33372C]">
          Explore Our Services
        </h2>

        {/* Custom Navigation Buttons positioned outside of the cards */}
        {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer">
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer">
          <ChevronRightIcon className="w-8 h-8 text-white" />
        </div> */}

        <Swiper
          modules={[Pagination, Autoplay, Navigation]} // Swiper modules with Navigation
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000 }}
          loop={true}
          navigation // Enable navigation
          className="px-9"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center mx-10">
                <div className="flex flex-col py-16 bg-gradient-to-l from-[#557C56] to-[#3D593E] items-center rounded-lg transition-transform transform shadow-xl hover:-translate-y-1">
                  <p className="p-1 text-lg text-[#f0e7dd]  mt-2 max-w-xs text-center">
                    {service.text}
                  </p>
                  <Link href={service.link}>
                    <button
                      className={`${service.buttonColor} text-white bg-[#E8B86D] py-2 px-[5px] rounded-lg text-[10px] md:text-sm mt-6`}
                    >
                      {service.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            /* background-color: transparent;  */
            background: rgb(232, 184, 109) !important;;
            /* Make background transparent */
            color: #fbfbfb;
            padding-left:3px;
            padding-right:3px
            width: 40px; /* Adjust size if needed */
            height: 40px; /* Adjust size if needed */
            border-radius: 50%;
            display: flex;
            align-items: center;
            /* justify-content: center; */
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
      </div>
    </div>
  );
};

export default ServicesSlider;
