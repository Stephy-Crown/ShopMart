// import React from "react";
// import Navbar from "../components/Navbar";
// export default function page() {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       <p>SHOP PAGE</p>SHOP PAGE
//       <p>yesooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
//     </div>
//   );
// }

// src/app/shop.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import PromotionBanner from "../components/PromotionBanner"; // Optional promotions banner
// import FeaturedProducts from "../components/FeaturedProducts"; // Component to showcase featured items

const ShopPage = () => {
  return (
    <div>
      <Navbar />
      {/* <PromotionBanner /> */}
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Shop</h1>
        {/* <FeaturedProducts /> */}
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
