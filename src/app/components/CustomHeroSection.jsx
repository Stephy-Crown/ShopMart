"use client";
import Image from "next/image";
import Link from "next/link";

const CustomHeroSection = ({ userName }) => {
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
          Welcome, {userName}!
        </h1>
        <p className="text-base md:text-xl mb-6 text-center text-white">
          You're all set! Let's head back to the store.
        </p>
        <button className="bg-[#557C56] hover:bg-green-600 text-white py-2 px-6 rounded-lg">
          <Link href="/stores">Go to the Store</Link>
        </button>
      </div>
    </div>
  );
};

export default CustomHeroSection;
