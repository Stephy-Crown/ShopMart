// // // // "use client";
// // // // import React, { useEffect, useState } from "react"; // Ensure React is imported
// // // // import HeroSlider from "./components/HeroSlider";
// // // // import Navbar from "./components/Navbar"; // Adjust the path accordingly
// // // // import CategorySection from "./components/CategorySection";
// // // // import PopularProducts from "./components/PopularProducts";
// // // // import NewArrivals from "./components/NewArrivals"; // Import the NewArrivals component
// // // // import DispatchOrder from "./components/DispatchOrder";
// // // // import Footer from "./components/Footer"; // Import the Footer component
// // // // import ScrollToTopButton from "../app/components/ScrollToTopButton"; // Import the ScrollToTopButton component
// // // // import FAQSection from "../app/components/FAQSection";
// // // // import { auth } from "../app/lib/firebase";
// // // // import HeroSection from "./components/HeroSlider";
// // // // import CustomHeroSection from "./components/CustomHeroSection.jsx";

// // // // export default function Home() {
// // // //   const [user, setUser] = React.useState(null);

// // // //   React.useEffect(() => {
// // // //     const unsubscribe = auth.onAuthStateChanged(setUser);
// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   const userName = user ? user.email.split("@")[0] : null;
// // // //   return (
// // // //     <div>
// // // //       <Navbar />
// // // //       <div>
// // // //         {user ? <CustomHeroSection userName={userName} /> : <HeroSection />}
// // // //       </div>
// // // //       {/* <HeroSlider /> */}
// // // //       <div>
// // // //         {/* <h1>Welcome to the Shop</h1> */}
// // // //         <CategorySection />
// // // //       </div>
// // // //       <NewArrivals />
// // // //       <PopularProducts />
// // // //       <DispatchOrder />
// // // //       <FAQSection /> {/* Add FAQ section here */}
// // // //       <Footer /> {/* Include the Footer */}
// // // //       <ScrollToTopButton />
// // // //       {/* Other components */}
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";
// // // import React, { useEffect, useState } from "react"; // Ensure React is imported
// // // import HeroSlider from "./components/HeroSlider";
// // // import Navbar from "./components/Navbar"; // Adjust the path accordingly
// // // import CategorySection from "./components/CategorySection";
// // // import PopularProducts from "./components/PopularProducts";
// // // import NewArrivals from "./components/NewArrivals"; // Import the NewArrivals component
// // // import DispatchOrder from "./components/DispatchOrder";
// // // import Footer from "./components/Footer"; // Import the Footer component
// // // import ScrollToTopButton from "../app/components/ScrollToTopButton"; // Import the ScrollToTopButton component
// // // import FAQSection from "../app/components/FAQSection";
// // // import { auth } from "../app/lib/firebase";
// // // import HeroSection from "./components/HeroSlider";
// // // import CustomHeroSection from "./components/CustomHeroSection.jsx";
// // // import { fetchUserProfile } from "../app/lib/user"; // Import the fetchUserProfile function

// // // export default function Home() {
// // //   const [user, setUser] = React.useState(null);
// // //   const [userProfile, setUserProfile] = React.useState(null);

// // //   React.useEffect(() => {
// // //     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
// // //       setUser(currentUser);
// // //       if (currentUser) {
// // //         const profile = await fetchUserProfile(currentUser.uid); // Fetch the profile using the user's UID
// // //         setUserProfile(profile);
// // //       } else {
// // //         setUserProfile(null); // Reset profile if user is logged out
// // //       }
// // //     });
// // //     return () => unsubscribe();
// // //   }, []);

// // //   const userName = userProfile ? userProfile.firstName : null; // Get the user's first name

// // //   return (
// // //     <div>
// // //       <Navbar />
// // //       <div>
// // //         {user ? <CustomHeroSection userName={userName} /> : <HeroSection />}
// // //       </div>
// // //       <CategorySection />
// // //       <NewArrivals />
// // //       <PopularProducts />
// // //       <DispatchOrder />
// // //       <FAQSection /> {/* Add FAQ section here */}
// // //       <Footer /> {/* Include the Footer */}
// // //       <ScrollToTopButton />
// // //       {/* Other components */}
// // //     </div>
// // //   );
// // // }

// // // app/page.js (or wherever your home component is defined)
// // "use client";
// // import React, { useEffect, useState } from "react";
// // import Navbar from "./components/Navbar";
// // import CategorySection from "./components/CategorySection";
// // import PopularProducts from "./components/PopularProducts";
// // import NewArrivals from "./components/NewArrivals";
// // import DispatchOrder from "./components/DispatchOrder";
// // import Footer from "./components/Footer";
// // import ScrollToTopButton from "./components/ScrollToTopButton";
// // import FAQSection from "./components/FAQSection";
// // import { auth } from "../app/lib/firebase"; // Adjust the path to your Firebase configuration
// // import HeroSection from "./components/HeroSlider";
// // import CustomHeroSection from "./components/CustomHeroSection";
// // import { fetchUserProfile } from "../app/lib/user"; // Import the fetchUserProfile function

// // export default function Home() {
// //   const [user, setUser] = useState(null);
// //   const [userProfile, setUserProfile] = useState(null);

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
// //       setUser(currentUser);
// //       if (currentUser) {
// //         const profile = await fetchUserProfile(currentUser.uid);
// //         console.log("Fetched User Profile:", profile); // Log the fetched profile
// //         setUserProfile(profile);
// //       } else {
// //         setUserProfile(null); // Reset profile if user is logged out
// //       }
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const userName = userProfile ? userProfile.firstName : "Guest"; // Default to "Guest" if userProfile is null

// //   return (
// //     <div>
// //       <Navbar />
// //       <div>
// //         {user ? <CustomHeroSection userName={userName} /> : <HeroSection />}
// //       </div>
// //       <CategorySection />
// //       <NewArrivals />
// //       <PopularProducts />
// //       <DispatchOrder />
// //       <FAQSection />
// //       <Footer />
// //       <ScrollToTopButton />
// //     </div>
// //   );
// // }

// "use client";
// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import CategorySection from "./components/CategorySection";
// import PopularProducts from "./components/PopularProducts";
// import NewArrivals from "./components/NewArrivals";
// import DispatchOrder from "./components/DispatchOrder";
// import Footer from "./components/Footer";
// import ScrollToTopButton from "./components/ScrollToTopButton";
// import FAQSection from "./components/FAQSection";
// import { auth } from "../app/lib/firebase"; // Adjust the path to your Firebase configuration
// import HeroSection from "./components/HeroSlider";
// import CustomHeroSection from "./components/CustomHeroSection";
// import { fetchUserProfile } from "../app/lib/user"; // Import the fetchUserProfile function

// export default function Home() {
//   const [user, setUser] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
//       console.log("Current User:", currentUser); // Log the current user
//       setUser(currentUser);
//       if (currentUser) {
//         const profile = await fetchUserProfile(currentUser.uid);
//         console.log("Fetched User Profile:", profile); // Log the fetched profile
//         setUserProfile(profile);
//       } else {
//         setUserProfile(null); // Reset profile if user is logged out
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const userName =
//     userProfile && userProfile.firstName ? userProfile.firstName : "Guest"; // Default to "Guest"

//   return (
//     <div>
//       <Navbar />
//       <div>
//         {user ? <CustomHeroSection userName={userName} /> : <HeroSection />}
//       </div>
//       <CategorySection />
//       <NewArrivals />
//       <PopularProducts />
//       <DispatchOrder />
//       <FAQSection />
//       <Footer />
//       <ScrollToTopButton />
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CategorySection from "./components/CategorySection";
import PopularProducts from "./components/PopularProducts";
import NewArrivals from "./components/NewArrivals";
import DispatchOrder from "./components/DispatchOrder";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FAQSection from "./components/FAQSection";
import { auth } from "../app/lib/firebase"; // Adjust the path to your Firebase configuration
import HeroSection from "./components/HeroSlider";
import CustomHeroSection from "./components/CustomHeroSection";
import { fetchUserProfile } from "../app/lib/user"; // Import the fetchUserProfile function

export default function Home() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      console.log("Current User:", currentUser); // Log the current user
      setUser(currentUser);
      if (currentUser) {
        const profile = await fetchUserProfile(currentUser.uid);
        console.log("Fetched User Profile:", profile); // Log the fetched profile
        setUserProfile(profile);
      } else {
        setUserProfile(null); // Reset profile if user is logged out
      }
    });
    return () => unsubscribe();
  }, []);
  const userName =
    userProfile && userProfile.firstName ? userProfile.firstName : "Guest"; // Default to "Guest"

  return (
    <div>
      <Navbar />
      <div>
        {user ? <CustomHeroSection userName={userName} /> : <HeroSection />}
      </div>
      <CategorySection />
      <NewArrivals />
      <PopularProducts />
      <DispatchOrder />
      <FAQSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
