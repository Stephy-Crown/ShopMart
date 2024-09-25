import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar"; // Adjust the path accordingly
import CategorySection from "./components/CategorySection";
import PopularProducts from "./components/PopularProducts";
import NewArrivals from "./components/NewArrivals"; // Import the NewArrivals component
import DispatchOrder from "./components/DispatchOrder";
import Footer from "./components/Footer"; // Import the Footer component
import ScrollToTopButton from "../app/components/ScrollToTopButton"; // Import the ScrollToTopButton component
import FAQSection from "../app/components/FAQSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <div>
        {/* <h1>Welcome to the Shop</h1> */}
        <CategorySection />
      </div>
      <NewArrivals />
      <PopularProducts />
      <DispatchOrder />
      <FAQSection /> {/* Add FAQ section here */}
      <Footer /> {/* Include the Footer */}
      <ScrollToTopButton />
      {/* Other components */}
    </div>
  );
}
