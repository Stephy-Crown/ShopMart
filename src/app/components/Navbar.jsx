// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import {
// // // // // // // //   ShoppingCartIcon,
// // // // // // // //   UserIcon,
// // // // // // // //   ChevronDownIcon,
// // // // // // // // } from "@heroicons/react/outline"; // Import Heroicons

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <nav className="flex items-center justify-between p-4 bg-green-600 text-white">
// // // // // // // //       {/* Left Section: Logo, Category, Search */}
// // // // // // // //       <div className="flex items-center space-x-4">
// // // // // // // //         {/* Logo */}
// // // // // // // //         <div className="text-xl font-bold whitespace-nowrap">Grocery Store</div>

// // // // // // // //         {/* Category Dropdown */}
// // // // // // // //         <div className="relative">
// // // // // // // //           <button
// // // // // // // //             onClick={() => setIsOpen(!isOpen)}
// // // // // // // //             className="flex items-center bg-green-800 px-4 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Category
// // // // // // // //             <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // // //           </button>
// // // // // // // //           {isOpen && (
// // // // // // // //             <div className="absolute bg-white text-black mt-2 py-2 w-48 shadow-lg">
// // // // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                 Vegetables
// // // // // // // //               </a>
// // // // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                 Fruits
// // // // // // // //               </a>
// // // // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                 Bakery
// // // // // // // //               </a>
// // // // // // // //               {/* Add more categories as needed */}
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {/* Search Bar */}
// // // // // // // //         <div className="hidden lg:flex items-center">
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Search"
// // // // // // // //             className="p-2 rounded-l-md border-2 border-white"
// // // // // // // //           />
// // // // // // // //           <button className="bg-green-800 px-4 py-2 rounded-r-md">
// // // // // // // //             Search
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Right Section: Cart and Login */}
// // // // // // // //       <div className="flex items-center space-x-6">
// // // // // // // //         {/* Cart Icon */}
// // // // // // // //         <div className="relative">
// // // // // // // //           <ShoppingCartIcon className="w-6 h-6" />
// // // // // // // //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //             0
// // // // // // // //           </span>
// // // // // // // //         </div>

// // // // // // // //         {/* Login Button */}
// // // // // // // //         <button className="flex items-center bg-white text-green-600 px-4 py-2 rounded font-semibold">
// // // // // // // //           <UserIcon className="w-5 h-5 mr-2" />
// // // // // // // //           Login
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import {
// // // // // // // //   ShoppingCartIcon,
// // // // // // // //   UserIcon,
// // // // // // // //   ChevronDownIcon,
// // // // // // // //   MenuIcon,
// // // // // // // //   XIcon,
// // // // // // // // } from "@heroicons/react/outline"; // Import Heroicons

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <nav className="flex items-center justify-between p-4 bg-green-600 text-white z-50 relative">
// // // // // // // //       {/* Left Section: App Name */}
// // // // // // // //       <div className="flex items-center justify-between w-full lg:w-auto">
// // // // // // // //         {/* App Name */}
// // // // // // // //         <div className="text-xl font-bold whitespace-nowrap lg:flex-grow text-center lg:text-left">
// // // // // // // //           Grocery Store
// // // // // // // //         </div>

// // // // // // // //         {/* Hamburger Menu for Mobile */}
// // // // // // // //         <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
// // // // // // // //           {menuOpen ? (
// // // // // // // //             <XIcon className="w-6 h-6" />
// // // // // // // //           ) : (
// // // // // // // //             <MenuIcon className="w-6 h-6" />
// // // // // // // //           )}
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Right Section: Cart and Search */}
// // // // // // // //       <div className="hidden lg:flex items-center space-x-4">
// // // // // // // //         {/* Search Bar */}
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Search"
// // // // // // // //           className="p-2 rounded-l-md border-2 border-white"
// // // // // // // //         />
// // // // // // // //         <button className="bg-green-800 px-4 py-2 rounded-r-md">Search</button>

// // // // // // // //         {/* Home Link */}
// // // // // // // //         <a href="#" className="text-white hover:bg-green-700 px-3 py-2 rounded">
// // // // // // // //           Home
// // // // // // // //         </a>
// // // // // // // //         <a href="#" className="text-white hover:bg-green-700 px-3 py-2 rounded">
// // // // // // // //           Main Shop
// // // // // // // //         </a>
// // // // // // // //         <a href="#" className="text-white hover:bg-green-700 px-3 py-2 rounded">
// // // // // // // //           Featured Products
// // // // // // // //         </a>
// // // // // // // //       </div>

// // // // // // // //       {/* Cart Icon */}
// // // // // // // //       <div className="flex items-center space-x-6">
// // // // // // // //         <div className="relative">
// // // // // // // //           <ShoppingCartIcon className="w-6 h-6" />
// // // // // // // //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //             0
// // // // // // // //           </span>
// // // // // // // //         </div>

// // // // // // // //         {/* Login/Signup Button */}
// // // // // // // //         <button className="hidden lg:flex items-center bg-white text-green-600 px-4 py-2 rounded font-semibold">
// // // // // // // //           <UserIcon className="w-5 h-5 mr-2" />
// // // // // // // //           Login / Sign Up
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Menu */}
// // // // // // // //       {menuOpen && (
// // // // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 p-4 lg:hidden z-50">
// // // // // // // //           <div className="flex flex-col space-y-2">
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Home
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Main Shop
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Featured Products
// // // // // // // //             </a>
// // // // // // // //             <div className="relative mb-4">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // // // //               >
// // // // // // // //                 Category
// // // // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // // //               </button>
// // // // // // // //               {isCategoryOpen && (
// // // // // // // //                 <div className="absolute bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Beverages
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Groceries
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Toiletries
// // // // // // // //                   </a>
// // // // // // // //                   {/* Add more categories as needed */}
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //             {/* Search Bar for Mobile */}
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search"
// // // // // // // //               className="p-2 rounded-md border-2 border-white mb-2"
// // // // // // // //             />
// // // // // // // //             <button className="bg-green-800 px-4 py-2 rounded-md w-full">
// // // // // // // //               Search
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import {
// // // // // // // //   ShoppingCartIcon,
// // // // // // // //   UserIcon,
// // // // // // // //   ChevronDownIcon,
// // // // // // // //   MenuIcon,
// // // // // // // //   XIcon,
// // // // // // // // } from "@heroicons/react/outline"; // Import Heroicons

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <nav className="flex items-center justify-between p-4 bg-green-600 text-white z-50 relative">
// // // // // // // //       {/* Left Section: Hamburger Menu for Mobile */}
// // // // // // // //       <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
// // // // // // // //         {menuOpen ? (
// // // // // // // //           <XIcon className="w-6 h-6" />
// // // // // // // //         ) : (
// // // // // // // //           <MenuIcon className="w-6 h-6" />
// // // // // // // //         )}
// // // // // // // //       </button>

// // // // // // // //       {/* Center Section: App Name */}
// // // // // // // //       <div className="text-xl font-bold whitespace-nowrap flex-grow text-center">
// // // // // // // //         Grocery Store
// // // // // // // //       </div>

// // // // // // // //       {/* Right Section: Cart and User Icons */}
// // // // // // // //       <div className="flex items-center space-x-4">
// // // // // // // //         {/* Cart Icon */}
// // // // // // // //         <div className="relative">
// // // // // // // //           <ShoppingCartIcon className="w-6 h-6 rounded-full bg-white text-green-600 p-1" />
// // // // // // // //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //             0
// // // // // // // //           </span>
// // // // // // // //         </div>

// // // // // // // //         {/* User Icon */}
// // // // // // // //         <UserIcon className="w-6 h-6" />
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Menu */}
// // // // // // // //       {menuOpen && (
// // // // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 p-4 lg:hidden z-50">
// // // // // // // //           <div className="flex flex-col space-y-2">
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Home
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Main Shop
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Featured Products
// // // // // // // //             </a>

// // // // // // // //             {/* Category Dropdown */}
// // // // // // // //             <div className="relative">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // // // //               >
// // // // // // // //                 Category
// // // // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // // //               </button>
// // // // // // // //               {isCategoryOpen && (
// // // // // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Beverages
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Groceries
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Toiletries
// // // // // // // //                   </a>
// // // // // // // //                   {/* Add more categories as needed */}
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             {/* Search Bar for Mobile */}
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search"
// // // // // // // //               className="p-2 rounded-md border-2 border-white"
// // // // // // // //             />
// // // // // // // //             <button className="bg-green-800 px-4 py-2 rounded-md w-full">
// // // // // // // //               Search
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import {
// // // // // // // //   ShoppingCartIcon,
// // // // // // // //   UserIcon,
// // // // // // // //   ChevronDownIcon,
// // // // // // // //   MenuIcon,
// // // // // // // //   XIcon,
// // // // // // // // } from "@heroicons/react/outline"; // Import Heroicons

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <nav className="flex items-center justify-between p-4 bg-green-600 text-white z-50 relative">
// // // // // // // //       {/* Left Section: App Name */}
// // // // // // // //       <div className="flex items-center justify-between w-full lg:w-auto">
// // // // // // // //         {/* App Name */}
// // // // // // // //         <div className="text-xl font-bold whitespace-nowrap lg:flex-grow text-center lg:text-left">
// // // // // // // //           Grocery Store
// // // // // // // //         </div>

// // // // // // // //         {/* Hamburger Menu for Mobile */}
// // // // // // // //         <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
// // // // // // // //           {menuOpen ? (
// // // // // // // //             <XIcon className="w-6 h-6" />
// // // // // // // //           ) : (
// // // // // // // //             <MenuIcon className="w-6 h-6" />
// // // // // // // //           )}
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Right Section: Cart and Search */}
// // // // // // // //       <div className="hidden lg:flex items-center space-x-4">
// // // // // // // //         {/* Search Bar */}
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Search"
// // // // // // // //           className="p-2 rounded-l-md border-2 border-white"
// // // // // // // //         />
// // // // // // // //         <button className="bg-green-800 px-4 py-2 rounded-r-md">Search</button>

// // // // // // // //         {/* Home Link */}
// // // // // // // //         <a href="#" className="text-white hover:bg-green-700 px-3 py-2 rounded">
// // // // // // // //           Home
// // // // // // // //         </a>
// // // // // // // //         <a href="#" className="text-white hover:bg-green-700 px-3 py-2 rounded">
// // // // // // // //           Main Shop
// // // // // // // //         </a>
// // // // // // // //         <a href="#" className="text-white hover:bg-green-700 px-3 py-2 rounded">
// // // // // // // //           Featured Products
// // // // // // // //         </a>
// // // // // // // //       </div>

// // // // // // // //       {/* Cart Icon */}
// // // // // // // //       <div className="flex items-center space-x-6">
// // // // // // // //         <div className="relative">
// // // // // // // //           <ShoppingCartIcon className="w-6 h-6" />
// // // // // // // //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //             0
// // // // // // // //           </span>
// // // // // // // //         </div>

// // // // // // // //         {/* Login/Signup Button */}
// // // // // // // //         <button className="hidden lg:flex items-center bg-white text-green-600 px-4 py-2 rounded font-semibold">
// // // // // // // //           <UserIcon className="w-5 h-5 mr-2" />
// // // // // // // //           Login
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Menu */}
// // // // // // // //       {menuOpen && (
// // // // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 p-4 lg:hidden z-50">
// // // // // // // //           <div className="flex flex-col space-y-2">
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Home
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Main Shop
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Featured Products
// // // // // // // //             </a>

// // // // // // // //             {/* Category Dropdown */}
// // // // // // // //             <div className="relative">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // // // //               >
// // // // // // // //                 Category
// // // // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // // //               </button>
// // // // // // // //               {isCategoryOpen && (
// // // // // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Beverages
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Groceries
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Toiletries
// // // // // // // //                   </a>
// // // // // // // //                   {/* Add more categories as needed */}
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             {/* Search Bar for Mobile */}
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search"
// // // // // // // //               className="p-2 rounded-md border-2 border-white"
// // // // // // // //             />
// // // // // // // //             <button className="bg-green-800 px-4 py-2 rounded-md w-full">
// // // // // // // //               Search
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import {
// // // // // // // //   ShoppingCartIcon,
// // // // // // // //   UserIcon,
// // // // // // // //   ChevronDownIcon,
// // // // // // // //   MenuIcon,
// // // // // // // //   XIcon,
// // // // // // // // } from "@heroicons/react/outline"; // Import Heroicons

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <nav className="flex items-center justify-between p-4 bg-green-600 text-white z-50 relative">
// // // // // // // //       {/* Left Section: App Name, Category Dropdown, Search Bar */}
// // // // // // // //       <div className="hidden lg:flex items-center w-full">
// // // // // // // //         <div className="flex items-center space-x-4">
// // // // // // // //           {/* App Name */}
// // // // // // // //           <div className="text-xl font-bold whitespace-nowrap">
// // // // // // // //             Grocery Store
// // // // // // // //           </div>

// // // // // // // //           {/* Category Dropdown */}
// // // // // // // //           <div className="relative">
// // // // // // // //             <button
// // // // // // // //               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // // //               className="bg-green-800 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Category
// // // // // // // //               <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // // // // // //             </button>
// // // // // // // //             {isCategoryOpen && (
// // // // // // // //               <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // // //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                   Beverages
// // // // // // // //                 </a>
// // // // // // // //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                   Groceries
// // // // // // // //                 </a>
// // // // // // // //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                   Toiletries
// // // // // // // //                 </a>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>

// // // // // // // //           {/* Search Bar */}
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Search"
// // // // // // // //             className="p-2 rounded-l-md border-2 border-white"
// // // // // // // //           />
// // // // // // // //           <button className="bg-green-800 px-4 py-2 rounded-r-md">
// // // // // // // //             Search
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {/* Center Section: Navigation Links */}
// // // // // // // //         <div className="flex-grow text-center space-x-4">
// // // // // // // //           <a
// // // // // // // //             href="#"
// // // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Home
// // // // // // // //           </a>
// // // // // // // //           <a
// // // // // // // //             href="#"
// // // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Main Shop
// // // // // // // //           </a>
// // // // // // // //           <a
// // // // // // // //             href="#"
// // // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Featured Products
// // // // // // // //           </a>
// // // // // // // //         </div>

// // // // // // // //         {/* Right Section: Cart and Login */}
// // // // // // // //         <div className="flex items-center space-x-4">
// // // // // // // //           {/* Cart Icon */}
// // // // // // // //           <div className="relative">
// // // // // // // //             <ShoppingCartIcon className="w-6 h-6" />
// // // // // // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //               0
// // // // // // // //             </span>
// // // // // // // //           </div>

// // // // // // // //           {/* Login/Signup Button */}
// // // // // // // //           <button className="hidden lg:flex items-center bg-white text-green-600 px-4 py-2 rounded font-semibold">
// // // // // // // //             <UserIcon className="w-5 h-5 mr-2" />
// // // // // // // //             Login / Sign Up
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Menu */}
// // // // // // // //       <div className="flex items-center justify-between w-full lg:hidden">
// // // // // // // //         {/* Hamburger Menu on the Left */}
// // // // // // // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // // // // // // //           {menuOpen ? (
// // // // // // // //             <XIcon className="w-6 h-6 text-white" />
// // // // // // // //           ) : (
// // // // // // // //             <MenuIcon className="w-6 h-6 text-white" />
// // // // // // // //           )}
// // // // // // // //         </button>

// // // // // // // //         {/* App Name Centered */}
// // // // // // // //         <div className="text-xl font-bold text-center flex-grow">
// // // // // // // //           Grocery Store
// // // // // // // //         </div>

// // // // // // // //         {/* Cart and User Icon on the Right */}
// // // // // // // //         <div className="flex items-center space-x-2">
// // // // // // // //           <div className="relative">
// // // // // // // //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// // // // // // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //               0
// // // // // // // //             </span>
// // // // // // // //           </div>
// // // // // // // //           <button className="bg-white text-green-600 px-3 py-1 rounded-full flex items-center">
// // // // // // // //             <UserIcon className="w-4 h-4 mr-1" />
// // // // // // // //             Login / Sign Up
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Dropdown Menu */}
// // // // // // // //       {menuOpen && (
// // // // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 p-4 lg:hidden z-50">
// // // // // // // //           <div className="flex flex-col space-y-2">
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Home
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Main Shop
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Featured Products
// // // // // // // //             </a>

// // // // // // // //             {/* Category Dropdown for Mobile */}
// // // // // // // //             <div className="relative">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // // // //               >
// // // // // // // //                 Category
// // // // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // // //               </button>
// // // // // // // //               {isCategoryOpen && (
// // // // // // // //                 <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Beverages
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Groceries
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Toiletries
// // // // // // // //                   </a>
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             {/* Search Bar for Mobile */}
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search"
// // // // // // // //               className="p-2 rounded-md border-2 border-white"
// // // // // // // //             />
// // // // // // // //             <button className="bg-green-800 px-4 py-2 rounded-md w-full">
// // // // // // // //               Search
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import {
// // // // // // // //   ShoppingCartIcon,
// // // // // // // //   UserIcon,
// // // // // // // //   ChevronDownIcon,
// // // // // // // //   MenuIcon,
// // // // // // // //   XIcon,
// // // // // // // // } from "@heroicons/react/outline"; // Import Heroicons

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // // // // //   const [showUserMenu, setShowUserMenu] = useState(false); // State for user menu

// // // // // // // //   return (
// // // // // // // //     <nav className="flex items-center justify-between p-4 bg-green-600 text-white z-50 relative">
// // // // // // // //       {/* Left Section: App Name, Category Dropdown, Search Bar */}
// // // // // // // //       <div className="hidden lg:flex items-center w-full">
// // // // // // // //         <div className="flex items-center space-x-4">
// // // // // // // //           {/* App Name */}
// // // // // // // //           <div className="text-xl font-bold whitespace-nowrap">
// // // // // // // //             Grocery Store
// // // // // // // //           </div>

// // // // // // // //           {/* Category Dropdown */}
// // // // // // // //           <div className="relative">
// // // // // // // //             <button
// // // // // // // //               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // // //               className="bg-green-800 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Category
// // // // // // // //               <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // // // // // //             </button>
// // // // // // // //           </div>

// // // // // // // //           {/* Search Bar */}
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Search"
// // // // // // // //             className="p-2 rounded-l-md border-2 border-white"
// // // // // // // //           />
// // // // // // // //           <button className="bg-green-800 px-4 py-2 rounded-r-md">
// // // // // // // //             Search
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {/* Center Section: Navigation Links */}
// // // // // // // //         <div className="flex-grow text-center space-x-4">
// // // // // // // //           <a
// // // // // // // //             href="#"
// // // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Home
// // // // // // // //           </a>
// // // // // // // //           <a
// // // // // // // //             href="#"
// // // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Main Shop
// // // // // // // //           </a>
// // // // // // // //           <a
// // // // // // // //             href="#"
// // // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Featured Products
// // // // // // // //           </a>
// // // // // // // //         </div>

// // // // // // // //         {/* Right Section: Cart and Login */}
// // // // // // // //         <div className="flex items-center space-x-4">
// // // // // // // //           {/* Cart Icon */}
// // // // // // // //           <div className="relative">
// // // // // // // //             <ShoppingCartIcon className="w-6 h-6" />
// // // // // // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //               0
// // // // // // // //             </span>
// // // // // // // //           </div>

// // // // // // // //           {/* User Icon with Dropdown for Login/Sign Up */}
// // // // // // // //           <div className="relative">
// // // // // // // //             <button
// // // // // // // //               onClick={() => setShowUserMenu(!showUserMenu)}
// // // // // // // //               className="flex items-center"
// // // // // // // //             >
// // // // // // // //               <UserIcon className="w-6 h-6 text-white" />
// // // // // // // //               <ChevronDownIcon className="w-4 h-4 text-white ml-1" />
// // // // // // // //             </button>
// // // // // // // //             {showUserMenu && (
// // // // // // // //               <div className="absolute right-0 bg-white text-black mt-2 p-2 rounded shadow-lg">
// // // // // // // //                 <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                   Login
// // // // // // // //                 </a>
// // // // // // // //                 <a href="/signup" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                   Sign Up
// // // // // // // //                 </a>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Menu */}
// // // // // // // //       <div className="flex items-center justify-between w-full lg:hidden">
// // // // // // // //         {/* Hamburger Menu on the Left */}
// // // // // // // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // // // // // // //           {menuOpen ? (
// // // // // // // //             <XIcon className="w-6 h-6 text-white" />
// // // // // // // //           ) : (
// // // // // // // //             <MenuIcon className="w-6 h-6 text-white" />
// // // // // // // //           )}
// // // // // // // //         </button>

// // // // // // // //         {/* App Name Centered */}
// // // // // // // //         <div className="text-xl font-bold text-center flex-grow">
// // // // // // // //           Grocery Store
// // // // // // // //         </div>

// // // // // // // //         {/* Cart Icon on the Right */}
// // // // // // // //         <div className="relative pr-1 md:pr-0">
// // // // // // // //           <ShoppingCartIcon className="w-6 h-6 text-white" />
// // // // // // // //           <span className="absolute -top-2 -right-0 md:-right-2 bg-red-500 text-white md:text-xs text-[10px] px-2 py-0.5 rounded-full">
// // // // // // // //             0
// // // // // // // //           </span>
// // // // // // // //         </div>

// // // // // // // //         {/* User Icon with Dropdown for Login/Sign Up */}
// // // // // // // //         <div className="relative">
// // // // // // // //           <button
// // // // // // // //             onClick={() => setShowUserMenu(!showUserMenu)}
// // // // // // // //             className="flex items-center"
// // // // // // // //           >
// // // // // // // //             <UserIcon className="w-6 h-6 text-white" />
// // // // // // // //             <ChevronDownIcon className="w-4 h-4 text-white ml-1" />
// // // // // // // //           </button>
// // // // // // // //           {showUserMenu && (
// // // // // // // //             <div className="absolute right-0 bg-white text-black mt-2 p-2 rounded shadow-lg">
// // // // // // // //               <a
// // // // // // // //                 href="/login"
// // // // // // // //                 className="block w-24 px-4 py-2 hover:bg-gray-100"
// // // // // // // //               >
// // // // // // // //                 Login
// // // // // // // //               </a>
// // // // // // // //               <a
// // // // // // // //                 href="/signup"
// // // // // // // //                 className="block w-24 px-4 py-2 hover:bg-gray-100"
// // // // // // // //               >
// // // // // // // //                 Sign Up
// // // // // // // //               </a>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Dropdown Menu */}
// // // // // // // //       {menuOpen && (
// // // // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 p-4 lg:hidden z-50">
// // // // // // // //           <div className="flex flex-col space-y-2">
// // // // // // // //             {/* Search Bar for Mobile at the Top */}
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search"
// // // // // // // //               className="p-2 rounded-md border-2 border-white mb-2"
// // // // // // // //             />
// // // // // // // //             <button className="bg-green-800 px-4 py-2 rounded-md w-full">
// // // // // // // //               Search
// // // // // // // //             </button>

// // // // // // // //             {/* Category Dropdown for Mobile */}
// // // // // // // //             <div className="relative">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // // // //               >
// // // // // // // //                 Category
// // // // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // // //               </button>
// // // // // // // //               {isCategoryOpen && (
// // // // // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Beverages
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Groceries
// // // // // // // //                   </a>
// // // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // // //                     Toiletries
// // // // // // // //                   </a>
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             {/* Other Links Below the Dropdown */}
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Home
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Main Shop
// // // // // // // //             </a>
// // // // // // // //             <a
// // // // // // // //               href="#"
// // // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // // //             >
// // // // // // // //               Featured Products
// // // // // // // //             </a>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // "use client";
// // // // // // // import { useState } from "react";
// // // // // // // import {
// // // // // // //   ShoppingCartIcon,
// // // // // // //   UserIcon,
// // // // // // //   ChevronDownIcon,
// // // // // // //   MenuIcon,
// // // // // // //   XIcon,
// // // // // // // } from "@heroicons/react/outline"; // Import Heroicons

// // // // // // // export default function Navbar() {
// // // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // // // //   const [showUserMenu, setShowUserMenu] = useState(false); // State for user menu

// // // // // // //   return (
// // // // // // //     <nav className="flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50 relative">
// // // // // // //       {/* Left Section: App Name, Category Dropdown, Search Bar */}
// // // // // // //       <div className="hidden lg:flex items-center w-full">
// // // // // // //         <div className="flex items-center space-x-4">
// // // // // // //           {/* App Name */}
// // // // // // //           <div className="text-xl font-bold whitespace-nowrap">
// // // // // // //             Grocery Store
// // // // // // //           </div>

// // // // // // //           {/* Category Dropdown */}
// // // // // // //           <div className="relative">
// // // // // // //             <button
// // // // // // //               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // //               className="bg-green-800 px-4 py-2 rounded flex items-center"
// // // // // // //             >
// // // // // // //               Category
// // // // // // //               <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // // // // //             </button>
// // // // // // //             {isCategoryOpen && (
// // // // // // //               <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // // // // //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                   Beverages
// // // // // // //                 </a>
// // // // // // //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                   Groceries
// // // // // // //                 </a>
// // // // // // //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                   Toiletries
// // // // // // //                 </a>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>

// // // // // // //           {/* Search Bar */}
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             placeholder="Search"
// // // // // // //             className="p-2 rounded-l-md border-2 border-white"
// // // // // // //           />
// // // // // // //           <button className="bg-green-800 px-4 py-2 rounded-r-md">
// // // // // // //             Search
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {/* Center Section: Navigation Links */}
// // // // // // //         <div className="flex-grow text-center space-x-4">
// // // // // // //           <a
// // // // // // //             href="#"
// // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // //           >
// // // // // // //             Home
// // // // // // //           </a>
// // // // // // //           <a
// // // // // // //             href="#"
// // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // //           >
// // // // // // //             Main Shop
// // // // // // //           </a>
// // // // // // //           <a
// // // // // // //             href="#"
// // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // //           >
// // // // // // //             Featured Products
// // // // // // //           </a>
// // // // // // //         </div>

// // // // // // //         {/* Right Section: Cart and User Icon */}
// // // // // // //         <div className="flex items-center space-x-4">
// // // // // // //           {/* Cart Icon */}
// // // // // // //           <div className="relative">
// // // // // // //             <ShoppingCartIcon className="w-6 h-6" />
// // // // // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //               0
// // // // // // //             </span>
// // // // // // //           </div>

// // // // // // //           {/* User Icon with Dropdown for Login/Sign Up */}
// // // // // // //           <div className="relative">
// // // // // // //             <button
// // // // // // //               onClick={() => setShowUserMenu(!showUserMenu)}
// // // // // // //               className="flex items-center"
// // // // // // //             >
// // // // // // //               <UserIcon className="w-6 h-6 text-white" />
// // // // // // //               <ChevronDownIcon className="w-4 h-4 text-white ml-1" />
// // // // // // //             </button>
// // // // // // //             {showUserMenu && (
// // // // // // //               <div className="absolute right-0 bg-white text-black mt-2 p-2 rounded shadow-lg z-50">
// // // // // // //                 <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                   Login
// // // // // // //                 </a>
// // // // // // //                 <a href="/signup" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                   Sign Up
// // // // // // //                 </a>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Mobile Menu */}
// // // // // // //       <div className="flex items-center justify-between w-full lg:hidden">
// // // // // // //         {/* Hamburger Menu on the Left */}
// // // // // // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // // // // // //           {menuOpen ? (
// // // // // // //             <XIcon className="w-6 h-6 text-white" />
// // // // // // //           ) : (
// // // // // // //             <MenuIcon className="w-6 h-6 text-white" />
// // // // // // //           )}
// // // // // // //         </button>

// // // // // // //         {/* App Name Centered */}
// // // // // // //         <div className="text-xl font-bold text-center flex-grow">
// // // // // // //           Grocery Store
// // // // // // //         </div>

// // // // // // //         {/* Cart Icon on the Right */}
// // // // // // //         <div className="relative pr-2">
// // // // // // //           <ShoppingCartIcon className="w-6 h-6 text-white " />
// // // // // // //           <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //             0
// // // // // // //           </span>
// // // // // // //         </div>

// // // // // // //         {/* User Icon with Dropdown for Login/Sign Up */}
// // // // // // //         <div className="relative">
// // // // // // //           <button
// // // // // // //             onClick={() => setShowUserMenu(!showUserMenu)}
// // // // // // //             className="flex items-center"
// // // // // // //           >
// // // // // // //             <UserIcon className="w-6 h-6 text-white" />
// // // // // // //             <ChevronDownIcon className="w-3 h-4 text-white ml-1" />
// // // // // // //           </button>
// // // // // // //           {showUserMenu && (
// // // // // // //             <div className="absolute right-0 bg-white text-black mt-2 p-2 rounded shadow-lg">
// // // // // // //               <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                 Login
// // // // // // //               </a>
// // // // // // //               <a href="/signup" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                 Sign Up
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Mobile Dropdown Menu */}
// // // // // // //       {menuOpen && (
// // // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 p-4 lg:hidden z-50">
// // // // // // //           <div className="flex flex-col space-y-2">
// // // // // // //             {/* Search Bar for Mobile at the Top */}
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Search"
// // // // // // //               className="p-2 rounded-md border-2 border-white mb-2"
// // // // // // //             />
// // // // // // //             <button className="bg-green-800 px-4 py-2 rounded-md w-full">
// // // // // // //               Search
// // // // // // //             </button>

// // // // // // //             {/* Category Dropdown for Mobile */}
// // // // // // //             <div className="relative">
// // // // // // //               <button
// // // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // // //               >
// // // // // // //                 Category
// // // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // //               </button>
// // // // // // //               {isCategoryOpen && (
// // // // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                     Beverages
// // // // // // //                   </a>
// // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                     Groceries
// // // // // // //                   </a>
// // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                     Toiletries
// // // // // // //                   </a>
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             {/* Other Links Below the Dropdown */}
// // // // // // //             <a
// // // // // // //               href="#"
// // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // //             >
// // // // // // //               Home
// // // // // // //             </a>
// // // // // // //             <a
// // // // // // //               href="#"
// // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // //             >
// // // // // // //               Main Shop
// // // // // // //             </a>
// // // // // // //             <a
// // // // // // //               href="#"
// // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // //             >
// // // // // // //               Featured Products
// // // // // // //             </a>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // }

// // // // // // // "use client";
// // // // // // // import { useState } from "react";
// // // // // // // import {
// // // // // // //   ShoppingCartIcon,
// // // // // // //   UserIcon,
// // // // // // //   ChevronDownIcon,
// // // // // // //   MenuIcon,
// // // // // // //   XIcon,
// // // // // // //   SearchIcon,
// // // // // // //   ChevronLeftIcon,
// // // // // // // } from "@heroicons/react/outline";

// // // // // // // export default function Navbar() {
// // // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // // // //   const [searchOpen, setSearchOpen] = useState(false);
// // // // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // // // //   const suggestions = [
// // // // // // //     "clothes for men",
// // // // // // //     "clothes for ladies",
// // // // // // //     "clothes hanger rack",
// // // // // // //     "clothes materials",
// // // // // // //     "clothes for men jeans",
// // // // // // //     "clothes racks",
// // // // // // //   ];

// // // // // // //   const filteredSuggestions = suggestions.filter((suggestion) =>
// // // // // // //     suggestion.toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <nav className="flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50 relative">
// // // // // // //       {/* Left Section: App Name */}
// // // // // // //       <div className="hidden lg:flex items-center w-full">
// // // // // // //         <div className="text-xl font-bold whitespace-nowrap">Grocery Store</div>
// // // // // // //         {/* Category Dropdown */}
// // // // // // //         <div className="relative">
// // // // // // //           <button
// // // // // // //             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // //             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
// // // // // // //           >
// // // // // // //             Category
// // // // // // //             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // // // // //           </button>
// // // // // // //           {isCategoryOpen && (
// // // // // // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                 Beverages
// // // // // // //               </a>
// // // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                 Groceries
// // // // // // //               </a>
// // // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                 Toiletries
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {/* Search Bar */}
// // // // // // //         <div className="relative w-full max-w-sm">
// // // // // // //           <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             placeholder="Search"
// // // // // // //             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
// // // // // // //             value={searchQuery}
// // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //         <button className="bg-green-800 px-4 py-2 rounded-md hover:bg-green-700">
// // // // // // //           Search
// // // // // // //         </button>

// // // // // // //         {/* Center Section: Navigation Links */}
// // // // // // //         <div className="flex-grow text-center space-x-4">
// // // // // // //           <a
// // // // // // //             href="#"
// // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // //           >
// // // // // // //             Home
// // // // // // //           </a>
// // // // // // //           <a
// // // // // // //             href="#"
// // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // //           >
// // // // // // //             Main Shop
// // // // // // //           </a>
// // // // // // //           <a
// // // // // // //             href="#"
// // // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // // //           >
// // // // // // //             Featured Products
// // // // // // //           </a>
// // // // // // //         </div>

// // // // // // //         {/* Right Section: Cart Icon and User Icon */}
// // // // // // //         <div className="flex items-center space-x-4">
// // // // // // //           <div className="relative">
// // // // // // //             <ShoppingCartIcon className="w-6 h-6" />
// // // // // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //               0
// // // // // // //             </span>
// // // // // // //           </div>
// // // // // // //           <a href="/login" className="flex items-center">
// // // // // // //             <UserIcon className="w-6 h-6" />
// // // // // // //           </a>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Mobile Menu */}
// // // // // // //       <div className="flex items-center justify-between w-full lg:hidden">
// // // // // // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // // // // // //           {menuOpen ? (
// // // // // // //             <XIcon className="w-6 h-6 text-white" />
// // // // // // //           ) : (
// // // // // // //             <MenuIcon className="w-6 h-6 text-white" />
// // // // // // //           )}
// // // // // // //         </button>
// // // // // // //         <div className="text-xl font-bold flex-grow text-left">
// // // // // // //           Grocery Store
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center space-x-4">
// // // // // // //           <button onClick={() => setSearchOpen(!searchOpen)}>
// // // // // // //             <SearchIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // // // // //           </button>
// // // // // // //           <a href="/login" className="flex items-center">
// // // // // // //             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // // // // //           </a>
// // // // // // //           <div className="relative">
// // // // // // //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// // // // // // //             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //               0
// // // // // // //             </span>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Mobile Dropdown Menu */}
// // // // // // //       {menuOpen && (
// // // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 z-50">
// // // // // // //           <div className="flex flex-col space-y-2 p-4">
// // // // // // //             <div className="relative">
// // // // // // //               <button
// // // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // // //               >
// // // // // // //                 Category
// // // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // // //               </button>
// // // // // // //               {isCategoryOpen && (
// // // // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                     Beverages
// // // // // // //                   </a>
// // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                     Groceries
// // // // // // //                   </a>
// // // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // // //                     Toiletries
// // // // // // //                   </a>
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //             <a
// // // // // // //               href="#"
// // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // //             >
// // // // // // //               Home
// // // // // // //             </a>
// // // // // // //             <a
// // // // // // //               href="#"
// // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // //             >
// // // // // // //               Main Shop
// // // // // // //             </a>
// // // // // // //             <a
// // // // // // //               href="#"
// // // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // // //             >
// // // // // // //               Featured Products
// // // // // // //             </a>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Full-Screen Search Bar for Mobile */}
// // // // // // //       {searchOpen && (
// // // // // // //         <div
// // // // // // //           className="fixed inset-0 z-50 bg-white p-4 flex flex-col"
// // // // // // //           style={{ height: "70vh" }}
// // // // // // //         >
// // // // // // //           <div className="relative w-full">
// // // // // // //             {/* Back Button to go to homepage */}
// // // // // // //             <button
// // // // // // //               onClick={() => setSearchOpen(false)}
// // // // // // //               className="absolute top-2 left-2 flex items-center h-8 w-8"
// // // // // // //             >
// // // // // // //               <ChevronLeftIcon className="w-4 h-4 text-black" />
// // // // // // //             </button>
// // // // // // //             <a
// // // // // // //               href="/"
// // // // // // //               className="absolute top-3 left-8 text-green-500 text-base font-semibold"
// // // // // // //             >
// // // // // // //               Back
// // // // // // //             </a>

// // // // // // //             {/* Search Input */}
// // // // // // //             <div className="relative mt-10">
// // // // // // //               <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 placeholder="Search products, brands and categories"
// // // // // // //                 className="pl-10 w-full p-3 border-2 border-gray-300 rounded-lg text-black"
// // // // // // //                 value={searchQuery}
// // // // // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // //               />
// // // // // // //               {searchQuery && (
// // // // // // //                 <button
// // // // // // //                   onClick={() => setSearchQuery("")}
// // // // // // //                   className="absolute right-3 top-1/2 transform -translate-y-1/2"
// // // // // // //                 >
// // // // // // //                   <XIcon className="w-5 h-5 text-black" />
// // // // // // //                 </button>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             {/* Search Suggestions Dropdown */}
// // // // // // //             {searchQuery && (
// // // // // // //               <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // // // // //                 {filteredSuggestions.map((suggestion, index) => (
// // // // // // //                   <a
// // // // // // //                     key={index}
// // // // // // //                     href="#"
// // // // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // // // //                   >
// // // // // // //                     {suggestion}
// // // // // // //                   </a>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import Link from "next/link";
// // // // // // import {
// // // // // //   ShoppingCartIcon,
// // // // // //   UserIcon,
// // // // // //   ChevronDownIcon,
// // // // // //   MenuIcon,
// // // // // //   XIcon,
// // // // // //   SearchIcon,
// // // // // //   ChevronLeftIcon,
// // // // // // } from "@heroicons/react/outline";

// // // // // // export default function Navbar() {
// // // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // // //   const [searchOpen, setSearchOpen] = useState(false);
// // // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // // //   const suggestions = [
// // // // // //     "clothes for men",
// // // // // //     "clothes for ladies",
// // // // // //     "clothes hanger rack",
// // // // // //     "clothes materials",
// // // // // //     "clothes for men jeans",
// // // // // //     "clothes racks",
// // // // // //   ];

// // // // // //   const filteredSuggestions = suggestions.filter((suggestion) =>
// // // // // //     suggestion.toLowerCase().includes(searchQuery.toLowerCase())
// // // // // //   );

// // // // // //   return (
// // // // // //     <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50">
// // // // // //       {/* Left Section: App Name */}
// // // // // //       <div className="hidden lg:flex items-center w-full">
// // // // // //         <div className="text-xl font-bold whitespace-nowrap md:pr-5">
// // // // // //           ShopMart
// // // // // //         </div>
// // // // // //         {/* Category Dropdown */}
// // // // // //         <div className="relative md:pr-5">
// // // // // //           <button
// // // // // //             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // //             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700 "
// // // // // //           >
// // // // // //             Category
// // // // // //             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // // // //           </button>
// // // // // //           {isCategoryOpen && (
// // // // // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // //                 Beverages
// // // // // //               </a>
// // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // //                 Groceries
// // // // // //               </a>
// // // // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // //                 Toiletries
// // // // // //               </a>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Search Bar */}
// // // // // //         <div className="relative w-full max-w-sm md:pr-2">
// // // // // //           <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search"
// // // // // //             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
// // // // // //             value={searchQuery}
// // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //           />
// // // // // //         </div>
// // // // // //         <button className="bg-green-800 px-4 py-3  rounded-md hover:bg-green-700">
// // // // // //           Search
// // // // // //         </button>

// // // // // //         {/* Center Section: Navigation Links */}
// // // // // //         <div className="flex-grow text-center space-x-4">
// // // // // //           <Link
// // // // // //             href="/"
// // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // //           >
// // // // // //             Home
// // // // // //           </Link>
// // // // // //           <Link
// // // // // //             href="/shop"
// // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // //           >
// // // // // //             Shop
// // // // // //           </Link>
// // // // // //           <Link href="#new-arrivals">New Arrivals</Link>
// // // // // //           <a
// // // // // //             href="#"
// // // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // // //           >
// // // // // //             Help
// // // // // //           </a>
// // // // // //         </div>

// // // // // //         {/* Right Section: Cart Icon and User Icon */}
// // // // // //         <div className="flex items-center space-x-4">
// // // // // //           <div className="relative">
// // // // // //             <ShoppingCartIcon className="w-6 h-6" />
// // // // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // //               0
// // // // // //             </span>
// // // // // //           </div>
// // // // // //           <a href="/login" className="flex items-center">
// // // // // //             <UserIcon className="w-6 h-6" />
// // // // // //           </a>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile Menu */}
// // // // // //       <div className="flex items-center justify-between w-full lg:hidden">
// // // // // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // // // // //           {menuOpen ? (
// // // // // //             <XIcon className="w-6 h-6 text-white" />
// // // // // //           ) : (
// // // // // //             <MenuIcon className="w-6 h-6 text-white" />
// // // // // //           )}
// // // // // //         </button>
// // // // // //         <div className="text-xl font-bold flex-grow text-left pl-5">
// // // // // //           MyStore
// // // // // //         </div>
// // // // // //         <div className="flex items-center space-x-4">
// // // // // //           <button onClick={() => setSearchOpen(!searchOpen)}>
// // // // // //             <SearchIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // // // //           </button>
// // // // // //           <a href="/login" className="flex items-center">
// // // // // //             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // // // //           </a>
// // // // // //           <div className="relative">
// // // // // //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// // // // // //             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // //               0
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile Dropdown Menu */}
// // // // // //       {menuOpen && (
// // // // // //         <div className="absolute top-16 left-0 right-0 bg-green-600 z-50">
// // // // // //           <div className="flex flex-col space-y-2 p-4">
// // // // // //             <div className="relative">
// // // // // //               <button
// // // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // // //               >
// // // // // //                 Category
// // // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // // //               </button>
// // // // // //               {isCategoryOpen && (
// // // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // //                     Beverages
// // // // // //                   </a>
// // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // //                     Groceries
// // // // // //                   </a>
// // // // // //                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // // //                     Toiletries
// // // // // //                   </a>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //             <a
// // // // // //               href="#"
// // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // //             >
// // // // // //               Home
// // // // // //             </a>
// // // // // //             <a
// // // // // //               href="#"
// // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // //             >
// // // // // //               Shop
// // // // // //             </a>
// // // // // //             <a
// // // // // //               href="#new-arrivals"
// // // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // // //             >
// // // // // //               New Arrivals
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Full-Screen Search Bar for Mobile */}
// // // // // //       {searchOpen && (
// // // // // //         <div
// // // // // //           className="fixed inset-0 z-50 bg-white p-4 flex flex-col"
// // // // // //           style={{ height: "50vh" }}
// // // // // //         >
// // // // // //           <div className="relative w-full">
// // // // // //             {/* Back Button to go to homepage */}
// // // // // //             <button
// // // // // //               onClick={() => setSearchOpen(false)}
// // // // // //               className="absolute top-2 left-2 flex items-center h-8 w-8"
// // // // // //             >
// // // // // //               <ChevronLeftIcon className="w-4 h-4 text-black" />
// // // // // //             </button>
// // // // // //             <a
// // // // // //               href="/"
// // // // // //               className="absolute top-2 left-12 text-black text-lg font-semibold"
// // // // // //             >
// // // // // //               Home
// // // // // //             </a>

// // // // // //             {/* Search Input */}
// // // // // //             <div className="relative mt-10">
// // // // // //               <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Search products, brands and categories"
// // // // // //                 className="pl-10 w-full p-3 border-2 border-gray-300 rounded-lg text-black"
// // // // // //                 value={searchQuery}
// // // // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //               />
// // // // // //               {searchQuery && (
// // // // // //                 <button
// // // // // //                   onClick={() => setSearchQuery("")}
// // // // // //                   className="absolute right-3 top-1/2 transform -translate-y-1/2"
// // // // // //                 >
// // // // // //                   <XIcon className="w-5 h-5 text-black" />
// // // // // //                 </button>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* Search Suggestions Dropdown */}
// // // // // //             {searchQuery && (
// // // // // //               <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // // // //                 {filteredSuggestions.map((suggestion, index) => (
// // // // // //                   <a
// // // // // //                     key={index}
// // // // // //                     href="#"
// // // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // // //                   >
// // // // // //                     {suggestion}
// // // // // //                   </a>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </nav>
// // // // // //   );
// // // // // // }

// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import Link from "next/link";
// // // // // import {
// // // // //   ShoppingCartIcon,
// // // // //   UserIcon,
// // // // //   ChevronDownIcon,
// // // // //   MenuIcon,
// // // // //   XIcon,
// // // // //   SearchIcon,
// // // // //   ChevronLeftIcon,
// // // // // } from "@heroicons/react/outline";

// // // // // export default function Navbar() {
// // // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // // //   const [isHelpOpen, setIsHelpOpen] = useState(false);
// // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // //   const [searchOpen, setSearchOpen] = useState(false);
// // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // //   const suggestions = [
// // // // //     "clothes for men",
// // // // //     "clothes for ladies",
// // // // //     "clothes hanger rack",
// // // // //     "clothes materials",
// // // // //     "clothes for men jeans",
// // // // //     "clothes racks",
// // // // //   ];

// // // // //   const filteredSuggestions = suggestions.filter((suggestion) =>
// // // // //     suggestion.toLowerCase().includes(searchQuery.toLowerCase())
// // // // //   );

// // // // //   return (
// // // // //     <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50">
// // // // //       {/* Left Section: App Name */}
// // // // //       <div className="hidden lg:flex items-center w-full">
// // // // //         <div className="text-xl font-bold whitespace-nowrap md:pr-5">
// // // // //           ShopMart
// // // // //         </div>
// // // // //         {/* Category Dropdown */}
// // // // //         <div className="relative md:pr-5">
// // // // //           <button
// // // // //             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // //             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700 "
// // // // //           >
// // // // //             Category
// // // // //             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // // //           </button>
// // // // //           {isCategoryOpen && (
// // // // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // //                 Beverages
// // // // //               </Link>
// // // // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // //                 Groceries
// // // // //               </Link>
// // // // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // //                 Toiletries
// // // // //               </Link>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Search Bar */}
// // // // //         <div className="relative w-full max-w-sm md:pr-2">
// // // // //           <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search"
// // // // //             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
// // // // //             value={searchQuery}
// // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // //           />
// // // // //         </div>
// // // // //         <button className="bg-green-800 px-4 py-3 rounded-md hover:bg-green-700">
// // // // //           Search
// // // // //         </button>

// // // // //         {/* Center Section: Navigation Links */}
// // // // //         <div className="flex-grow text-center space-x-4">
// // // // //           <Link
// // // // //             href="/"
// // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // //           >
// // // // //             Home
// // // // //           </Link>
// // // // //           <Link
// // // // //             href="/shop"
// // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // //           >
// // // // //             Shop
// // // // //           </Link>
// // // // //           <Link
// // // // //             href="#new-arrivals"
// // // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // // //           >
// // // // //             New Arrivals
// // // // //           </Link>
// // // // //           {/* Help Dropdown */}
// // // // //           <div className="relative inline-block">
// // // // //             <button
// // // // //               onClick={() => setIsHelpOpen(!isHelpOpen)}
// // // // //               className="text-white hover:bg-green-700 px-3 py-2 rounded flex items-center"
// // // // //             >
// // // // //               Help
// // // // //               <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // //             </button>
// // // // //             {isHelpOpen && (
// // // // //               <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // // //                 <Link
// // // // //                   href="/faqs"
// // // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // // //                 >
// // // // //                   FAQs
// // // // //                 </Link>
// // // // //                 <Link
// // // // //                   href="/place-order"
// // // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // // //                 >
// // // // //                   Place an Order
// // // // //                 </Link>
// // // // //                 <Link
// // // // //                   href="/report-order"
// // // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // // //                 >
// // // // //                   Report an Order
// // // // //                 </Link>
// // // // //                 <Link
// // // // //                   href="/contact-us"
// // // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // // //                 >
// // // // //                   Contact Us
// // // // //                 </Link>
// // // // //                 <Link
// // // // //                   href="/payment-options"
// // // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // // //                 >
// // // // //                   Payment Options
// // // // //                 </Link>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right Section: Cart Icon and User Icon */}
// // // // //         <div className="flex items-center space-x-4">
// // // // //           <div className="relative">
// // // // //             <ShoppingCartIcon className="w-6 h-6" />
// // // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // //               0
// // // // //             </span>
// // // // //           </div>
// // // // //           <Link href="/login" className="flex items-center">
// // // // //             <UserIcon className="w-6 h-6" />
// // // // //           </Link>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Menu */}
// // // // //       <div className="flex items-center justify-between w-full lg:hidden">
// // // // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // // // //           {menuOpen ? (
// // // // //             <XIcon className="w-6 h-6 text-white" />
// // // // //           ) : (
// // // // //             <MenuIcon className="w-6 h-6 text-white" />
// // // // //           )}
// // // // //         </button>
// // // // //         <div className="text-xl font-bold flex-grow text-left pl-5">
// // // // //           MyStore
// // // // //         </div>
// // // // //         <div className="flex items-center space-x-4">
// // // // //           <button onClick={() => setSearchOpen(!searchOpen)}>
// // // // //             <SearchIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // // //           </button>
// // // // //           <Link href="/login" className="flex items-center">
// // // // //             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // // //           </Link>
// // // // //           <div className="relative">
// // // // //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// // // // //             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // //               0
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Dropdown Menu */}
// // // // //       {menuOpen && (
// // // // //         <div className="absolute top-16 left-0 right-0 h-96 bg-green-600 z-50">
// // // // //           <div className="flex flex-col space-y-2 p-4">
// // // // //             <div className="relative">
// // // // //               <button
// // // // //                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // //               >
// // // // //                 Category
// // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // //               </button>
// // // // //               {isCategoryOpen && (
// // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // // //                   <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // //                     Beverages
// // // // //                   </Link>
// // // // //                   <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // //                     Groceries
// // // // //                   </Link>
// // // // //                   <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // // //                     Toiletries
// // // // //                   </Link>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //             <Link
// // // // //               href="/"
// // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // //             >
// // // // //               Home
// // // // //             </Link>
// // // // //             <Link
// // // // //               href="/shop"
// // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // //             >
// // // // //               Shop
// // // // //             </Link>
// // // // //             <Link
// // // // //               href="#new-arrivals"
// // // // //               className="text-white hover:bg-green-500 px-4 py-2 rounded"
// // // // //             >
// // // // //               New Arrivals
// // // // //             </Link>
// // // // //             {/* Help Dropdown for Mobile */}
// // // // //             {/* <div className="relative">
// // // // //               <button
// // // // //                 onClick={() => setIsHelpOpen(!isHelpOpen)}
// // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // //               >
// // // // //                 Help
// // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // //               </button>
// // // // //               {isHelpOpen && (
// // // // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg max-h-60 overflow-y-auto">
// // // // //                   <Link
// // // // //                     href="/faqs"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     FAQs
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/place-order"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Place an Order
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/report-order"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Report an Order
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/contact-us"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Contact Us
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/payment-options"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Payment Options
// // // // //                   </Link>
// // // // //                 </div> */}

// // // // //             {/* )}
// // // // //             </div> */}

// // // // //             {/* Help Dropdown for Mobile */}
// // // // //             <div className="relative">
// // // // //               <button
// // // // //                 onClick={() => setIsHelpOpen(!isHelpOpen)}
// // // // //                 className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
// // // // //               >
// // // // //                 Help
// // // // //                 <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // // //               </button>
// // // // //               {isHelpOpen && (
// // // // //                 <div className="bg-white text-black mt-2 py-2 w-full rounded shadow-lg z-50">
// // // // //                   <Link
// // // // //                     href="/faqs"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     FAQs
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/place-order"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Place an Order
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/report-order"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Report an Order
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/contact-us"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Contact Us
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     href="/payment-options"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     Payment Options
// // // // //                   </Link>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // }

// // // // "use client";
// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import {
// // // //   ShoppingCartIcon,
// // // //   UserIcon,
// // // //   ChevronDownIcon,
// // // //   MenuIcon,
// // // //   XIcon,
// // // //   SearchIcon,
// // // //   ChevronLeftIcon,
// // // // } from "@heroicons/react/outline";

// // // // export default function Navbar() {
// // // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // // //   const [isHelpOpen, setIsHelpOpen] = useState(false);
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [searchOpen, setSearchOpen] = useState(false);
// // // //   const [searchQuery, setSearchQuery] = useState("");

// // // //   const suggestions = [
// // // //     "clothes for men",
// // // //     "clothes for ladies",
// // // //     "clothes hanger rack",
// // // //     "clothes materials",
// // // //     "clothes for men jeans",
// // // //     "clothes racks",
// // // //   ];

// // // //   const filteredSuggestions = suggestions.filter((suggestion) =>
// // // //     suggestion.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50">
// // // //       {/* Left Section: App Name */}
// // // //       <div className="hidden lg:flex items-center w-full">
// // // //         <div className="text-xl font-bold whitespace-nowrap md:pr-5">
// // // //           ShopMart
// // // //         </div>
// // // //         {/* Category Dropdown */}
// // // //         <div className="relative md:pr-5">
// // // //           <button
// // // //             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // //             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
// // // //           >
// // // //             Category
// // // //             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // //           </button>
// // // //           {isCategoryOpen && (
// // // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // //                 Beverages
// // // //               </Link>
// // // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // //                 Groceries
// // // //               </Link>
// // // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // //                 Toiletries
// // // //               </Link>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Search Bar */}
// // // //         <div className="relative w-full max-w-sm md:pr-2">
// // // //           <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search"
// // // //             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
// // // //             value={searchQuery}
// // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // //           />
// // // //         </div>
// // // //         <button className="bg-green-800 px-4 py-3 rounded-md hover:bg-green-700">
// // // //           Search
// // // //         </button>

// // // //         {/* Center Section: Navigation Links */}
// // // //         <div className="flex-grow text-center space-x-4">
// // // //           <Link
// // // //             href="/"
// // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // //           >
// // // //             Home
// // // //           </Link>
// // // //           <Link
// // // //             href="/shop"
// // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // //           >
// // // //             Shop
// // // //           </Link>
// // // //           <Link
// // // //             href="#new-arrivals"
// // // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // // //           >
// // // //             New Arrivals
// // // //           </Link>

// // // //           {/* Help Dropdown */}
// // // //           <div className="relative">
// // // //             <button
// // // //               onClick={() => setIsHelpOpen(!isHelpOpen)}
// // // //               className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
// // // //             >
// // // //               Help
// // // //               <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // // //             </button>
// // // //             {isHelpOpen && (
// // // //               <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // // //                 <Link
// // // //                   href="/faqs"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   FAQs
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/place-order"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Place an Order
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/report-order"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Report an Order
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/contact-us"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Contact Us
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/payment-options"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Payment Options
// // // //                 </Link>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Section: Cart Icon and User Icon */}
// // // //         <div className="flex items-center space-x-4">
// // // //           <div className="relative">
// // // //             <ShoppingCartIcon className="w-6 h-6" />
// // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // //               0
// // // //             </span>
// // // //           </div>
// // // //           <a href="/login" className="flex items-center">
// // // //             <UserIcon className="w-6 h-6" />
// // // //           </a>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       <div className="flex items-center justify-between w-full lg:hidden">
// // // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // // //           {menuOpen ? (
// // // //             <XIcon className="w-6 h-6 text-white" />
// // // //           ) : (
// // // //             <MenuIcon className="w-6 h-6 text-white" />
// // // //           )}
// // // //         </button>
// // // //         <div className="text-xl font-bold flex-grow text-left pl-5">
// // // //           MyStore
// // // //         </div>
// // // //         <div className="flex items-center space-x-4">
// // // //           <button onClick={() => setSearchOpen(!searchOpen)}>
// // // //             <SearchIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // //           </button>
// // // //           <a href="/login" className="flex items-center">
// // // //             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // // //           </a>
// // // //           <div className="relative">
// // // //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// // // //             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // //               0
// // // //             </span>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Dropdown Menu */}
// // // //       {menuOpen && (
// // // //         <div className="absolute top-16 left-0 right-0 max-h-60 overflow-y-auto bg-green-600 z-50">
// // // //           {/* Category Dropdown */}
// // // //           <div className="relative">
// // // //             <button
// // // //               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // // //               className="flex items-center bg-green-800 px-4 py-2 rounded w-full text-white"
// // // //             >
// // // //               Category
// // // //               <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // //             </button>
// // // //             {isCategoryOpen && (
// // // //               <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // //                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // //                   Beverages
// // // //                 </Link>
// // // //                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // //                   Groceries
// // // //                 </Link>
// // // //                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // // //                   Toiletries
// // // //                 </Link>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Help Dropdown */}
// // // //           <div className="relative">
// // // //             <button
// // // //               onClick={() => setIsHelpOpen(!isHelpOpen)}
// // // //               className="flex items-center bg-green-800 px-4 py-2 rounded w-full text-white"
// // // //             >
// // // //               Help
// // // //               <ChevronDownIcon className="w-5 h-5 ml-2" />
// // // //             </button>
// // // //             {isHelpOpen && (
// // // //               <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // // //                 <Link
// // // //                   href="/faqs"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   FAQs
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/place-order"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Place an Order
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/report-order"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Report an Order
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/contact-us"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Contact Us
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/payment-options"
// // // //                   className="block px-4 py-2 hover:bg-gray-100"
// // // //                 >
// // // //                   Payment Options
// // // //                 </Link>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Additional Links */}
// // // //           <div className="flex flex-col px-4 py-2">
// // // //             <Link
// // // //               href="/"
// // // //               className="block text-white hover:bg-green-700 px-3 py-2 rounded"
// // // //             >
// // // //               Home
// // // //             </Link>
// // // //             <Link
// // // //               href="/shop"
// // // //               className="block text-white hover:bg-green-700 px-3 py-2 rounded"
// // // //             >
// // // //               Shop
// // // //             </Link>
// // // //             <Link
// // // //               href="#new-arrivals"
// // // //               className="block text-white hover:bg-green-700 px-3 py-2 rounded"
// // // //             >
// // // //               New Arrivals
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }

// // // "use client";
// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import {
// // //   ShoppingCartIcon,
// // //   UserIcon,
// // //   ChevronDownIcon,
// // //   MenuIcon,
// // //   XIcon,
// // // } from "@heroicons/react/outline";

// // // export default function Navbar() {
// // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [isHelpOpen, setIsHelpOpen] = useState(false);

// // //   return (
// // //     <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50">
// // //       {/* Left Section: App Name */}
// // //       <div className="hidden lg:flex items-center w-full">
// // //         <div className="text-xl font-bold whitespace-nowrap md:pr-5">
// // //           ShopMart
// // //         </div>
// // //         {/* Category Dropdown */}
// // //         <div className="relative md:pr-5">
// // //           <button
// // //             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // //             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
// // //           >
// // //             Category
// // //             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // //           </button>
// // //           {isCategoryOpen && (
// // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // //                 Beverages
// // //               </Link>
// // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // //                 Groceries
// // //               </Link>
// // //               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
// // //                 Toiletries
// // //               </Link>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Search Bar */}
// // //         <div className="relative w-full max-w-sm md:pr-2">
// // //           <input
// // //             type="text"
// // //             placeholder="Search"
// // //             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
// // //           />
// // //         </div>
// // //         <button className="bg-green-800 px-4 py-3 rounded-md hover:bg-green-700">
// // //           Search
// // //         </button>

// // //         {/* Center Section: Navigation Links */}
// // //         <div className="flex-grow text-center space-x-4">
// // //           <Link
// // //             href="/"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //           >
// // //             Home
// // //           </Link>
// // //           <Link
// // //             href="/shop"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //           >
// // //             Shop
// // //           </Link>
// // //           <Link
// // //             href="#new-arrivals"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //           >
// // //             New Arrivals
// // //           </Link>
// // //           <a
// // //             href="#"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //             onClick={() => setIsHelpOpen(!isHelpOpen)}
// // //           >
// // //             Help
// // //             <ChevronDownIcon className="w-5 h-5 inline ml-1" />
// // //           </a>
// // //           {isHelpOpen && (
// // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // //               <Link href="/faqs" className="block px-4 py-2 hover:bg-gray-100">
// // //                 FAQs
// // //               </Link>
// // //               <Link
// // //                 href="/place-order"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //               >
// // //                 Place an Order
// // //               </Link>
// // //               <Link
// // //                 href="/report-order"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //               >
// // //                 Report an Order
// // //               </Link>
// // //               <Link
// // //                 href="/contact-us"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //               >
// // //                 Contact Us
// // //               </Link>
// // //               <Link
// // //                 href="/payment-options"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //               >
// // //                 Payment Options
// // //               </Link>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Right Section: Cart Icon and User Icon */}
// // //         <div className="flex items-center space-x-4">
// // //           <div className="relative">
// // //             <ShoppingCartIcon className="w-6 h-6" />
// // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // //               0
// // //             </span>
// // //           </div>
// // //           <Link href="/login" className="flex items-center">
// // //             <UserIcon className="w-6 h-6" />
// // //           </Link>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu Button */}
// // //       <div className="flex items-center justify-between w-full lg:hidden">
// // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // //           {menuOpen ? (
// // //             <XIcon className="w-6 h-6 text-white" />
// // //           ) : (
// // //             <MenuIcon className="w-6 h-6 text-white" />
// // //           )}
// // //         </button>
// // //         <div className="text-xl font-bold flex-grow text-left pl-5">
// // //           MyStore
// // //         </div>
// // //         <div className="flex items-center space-x-4">
// // //           <Link href="/login" className="flex items-center">
// // //             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // //           </Link>
// // //           <div className="relative">
// // //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// // //             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // //               0
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Dropdown Menu */}
// // //       {menuOpen && (
// // //         <div className="fixed inset-0 z-50 bg-green-600 transition-transform transform translate-x-0 duration-300 ease-in-out">
// // //           <div className="flex flex-col space-y-2 p-4  h-full overflow-y-auto">
// // //             {/* Close Button */}
// // //             <div className="flex justify-end">
// // //               <button onClick={() => setMenuOpen(false)} className="text-white">
// // //                 <XIcon className="w-6 h-6" />
// // //               </button>
// // //             </div>

// // //             {/* Centered Links */}
// // //             <div className="flex flex-col  items-center justify-center flex-grow">
// // //               <Link
// // //                 href="/"
// // //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //               >
// // //                 Home
// // //               </Link>
// // //               <Link
// // //                 href="/shop"
// // //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //               >
// // //                 Shop
// // //               </Link>
// // //               <Link
// // //                 href="/new-arrivals"
// // //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //               >
// // //                 New Arrivals
// // //               </Link>

// // //               {/* Category Dropdown in Mobile Menu */}
// // //               <div className="relative w-full  pt-4">
// // //                 <button
// // //                   onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // //                   className="bg-green-800 px-4 py-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
// // //                 >
// // //                   Category
// // //                   <ChevronDownIcon className="w-5 h-5 inline ml-1" />
// // //                 </button>
// // //                 {isCategoryOpen && (
// // //                   <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // //                     <Link
// // //                       href="#"
// // //                       className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     >
// // //                       Beverages
// // //                     </Link>
// // //                     <Link
// // //                       href="#"
// // //                       className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     >
// // //                       Groceries
// // //                     </Link>
// // //                     <Link
// // //                       href="#"
// // //                       className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     >
// // //                       Toiletries
// // //                     </Link>
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Help Dropdown */}
// // //               <button
// // //                 className="text-white mt-6 bg-green-800 hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //                 onClick={() => setIsHelpOpen(!isHelpOpen)}
// // //               >
// // //                 Help
// // //                 <ChevronDownIcon className="w-5 h-5 inline ml-1" />
// // //               </button>
// // //               {isHelpOpen && (
// // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // //                   <Link
// // //                     href="/faqs"
// // //                     className="block px-4 py-2 hover:bg-gray-100 w-full text-center"
// // //                   >
// // //                     FAQs
// // //                   </Link>
// // //                   <Link
// // //                     href="/place-order"
// // //                     className="block px-4 py-2 hover:bg-gray-100 w-full text-center"
// // //                   >
// // //                     Place an Order
// // //                   </Link>
// // //                   <Link
// // //                     href="/report-order"
// // //                     className="block px-4 py-2 hover:bg-gray-100 w-full text-center"
// // //                   >
// // //                     Report an Order
// // //                   </Link>
// // //                   <Link
// // //                     href="/contact-us"
// // //                     className="block px-4 py-2 hover:bg-gray-100 w-full text-center"
// // //                   >
// // //                     Contact Us
// // //                   </Link>
// // //                   <Link
// // //                     href="/payment-options"
// // //                     className="block px-4 py-2 hover:bg-gray-100 w-full text-center"
// // //                   >
// // //                     Payment Options
// // //                   </Link>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }

// // // "use client";
// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import {
// // //   ShoppingCartIcon,
// // //   UserIcon,
// // //   ChevronDownIcon,
// // //   MenuIcon,
// // //   XIcon,
// // // } from "@heroicons/react/outline";

// // // export default function Navbar() {
// // //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [isHelpOpen, setIsHelpOpen] = useState(false);

// // //   const handleLinkClick = () => {
// // //     setMenuOpen(false); // Close the menu when a link is clicked
// // //     setIsCategoryOpen(false); // Close the category dropdown if it's open
// // //     setIsHelpOpen(false); // Close the help dropdown if it's open
// // //   };

// // //   return (
// // //     <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50">
// // //       {/* Left Section: App Name */}
// // //       <div className="hidden lg:flex items-center w-full">
// // //         <div className="text-xl font-bold whitespace-nowrap md:pr-5">
// // //           ShopMart
// // //         </div>
// // //         {/* Category Dropdown */}
// // //         <div className="relative md:pr-5">
// // //           <button
// // //             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // //             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
// // //           >
// // //             Category
// // //             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// // //           </button>
// // //           {isCategoryOpen && (
// // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // //               <Link
// // //                 href="#"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Beverages
// // //               </Link>
// // //               <Link
// // //                 href="#"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Groceries
// // //               </Link>
// // //               <Link
// // //                 href="#"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Toiletries
// // //               </Link>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Search Bar */}
// // //         <div className="relative w-full max-w-sm md:pr-2">
// // //           <input
// // //             type="text"
// // //             placeholder="Search"
// // //             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
// // //           />
// // //         </div>
// // //         <button className="bg-green-800 px-4 py-3 rounded-md hover:bg-green-700">
// // //           Search
// // //         </button>

// // //         {/* Center Section: Navigation Links */}
// // //         <div className="flex-grow text-center space-x-4">
// // //           <Link
// // //             href="/"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //             onClick={handleLinkClick}
// // //           >
// // //             Home
// // //           </Link>
// // //           <Link
// // //             href="/shop"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //             onClick={handleLinkClick}
// // //           >
// // //             Shop
// // //           </Link>
// // //           <Link
// // //             href="#new-arrivals"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //             onClick={handleLinkClick}
// // //           >
// // //             New Arrivals
// // //           </Link>
// // //           <a
// // //             href="#"
// // //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// // //             onClick={() => {
// // //               handleLinkClick();
// // //               setIsHelpOpen(!isHelpOpen);
// // //             }}
// // //           >
// // //             Help
// // //             <ChevronDownIcon className="w-5 h-5 inline ml-1" />
// // //           </a>
// // //           {isHelpOpen && (
// // //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// // //               <Link
// // //                 href="/faqs"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 FAQs
// // //               </Link>
// // //               <Link
// // //                 href="/place-order"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Place an Order
// // //               </Link>
// // //               <Link
// // //                 href="/report-order"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Report an Order
// // //               </Link>
// // //               <Link
// // //                 href="/contact-us"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Contact Us
// // //               </Link>
// // //               <Link
// // //                 href="/payment-options"
// // //                 className="block px-4 py-2 hover:bg-gray-100"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Payment Options
// // //               </Link>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Right Section: Cart Icon and User Icon */}
// // //         <div className="flex items-center space-x-4">
// // //           <Link href="/login" className="flex items-center">
// // //             <UserIcon className="w-6 h-6" />
// // //           </Link>
// // //           <div className="relative">
// // //             <ShoppingCartIcon className="w-6 h-6" />
// // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // //               0
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu Button */}
// // //       <div className="flex items-center justify-between w-full lg:hidden">
// // //         <button onClick={() => setMenuOpen(!menuOpen)}>
// // //           {menuOpen ? (
// // //             <XIcon className="w-6 h-6 text-white" />
// // //           ) : (
// // //             <MenuIcon className="w-6 h-6 text-white" />
// // //           )}
// // //         </button>
// // //         <div className="text-xl font-bold flex-grow text-left pl-5">
// // //           MyStore
// // //         </div>
// // //         <div className="flex items-center space-x-4">
// // //           <Link href="/login" className="flex items-center">
// // //             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
// // //           </Link>
// // //           <div className="relative">
// // //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// // //             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // //               0
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Dropdown Menu */}
// // //       {menuOpen && (
// // //         <div className="fixed inset-0 z-50 bg-green-600 transition-transform transform translate-x-0 duration-300 ease-in-out">
// // //           <div className="flex flex-col space-y-2 p-4 h-full overflow-y-auto">
// // //             {/* Close Button */}
// // //             <div className="flex justify-end">
// // //               <button onClick={() => setMenuOpen(false)} className="text-white">
// // //                 <XIcon className="w-6 h-6" />
// // //               </button>
// // //             </div>

// // //             {/* Centered Links */}
// // //             <div className="flex flex-col items-center justify-center flex-grow">
// // //               <Link
// // //                 href="/"
// // //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Home
// // //               </Link>
// // //               <Link
// // //                 href="/shop"
// // //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 Shop
// // //               </Link>
// // //               <Link
// // //                 href="#new-arrivals"
// // //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //                 onClick={handleLinkClick}
// // //               >
// // //                 New Arrivals
// // //               </Link>

// // //               {/* Category Dropdown in Mobile Menu */}
// // //               <div className="relative w-full">
// // //                 <button
// // //                   onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// // //                   className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
// // //                 >
// // //                   Category
// // //                   <ChevronDownIcon className="w-5 h-5 inline ml-1" />
// // //                 </button>
// // //                 {isCategoryOpen && (
// // //                   <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // //                     <Link
// // //                       href="#"
// // //                       className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                       onClick={handleLinkClick}
// // //                     >
// // //                       Beverages
// // //                     </Link>
// // //                     <Link
// // //                       href="#"
// // //                       className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                       onClick={handleLinkClick}
// // //                     >
// // //                       Groceries
// // //                     </Link>
// // //                     <Link
// // //                       href="#"
// // //                       className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                       onClick={handleLinkClick}
// // //                     >
// // //                       Toiletries
// // //                     </Link>
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Help Dropdown */}
// // //               <button
// // //                 className="text-white bg-green-800 mt-4 hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// // //                 onClick={() => {
// // //                   handleLinkClick();
// // //                   setIsHelpOpen(!isHelpOpen);
// // //                 }}
// // //               >
// // //                 Help
// // //                 <ChevronDownIcon className="w-5 h-5 inline ml-1" />
// // //               </button>
// // //               {isHelpOpen && (
// // //                 <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
// // //                   <Link
// // //                     href="/faqs"
// // //                     className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     onClick={handleLinkClick}
// // //                   >
// // //                     FAQs
// // //                   </Link>
// // //                   <Link
// // //                     href="/place-order"
// // //                     className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     onClick={handleLinkClick}
// // //                   >
// // //                     Place an Order
// // //                   </Link>
// // //                   <Link
// // //                     href="/report-order"
// // //                     className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     onClick={handleLinkClick}
// // //                   >
// // //                     Report an Order
// // //                   </Link>
// // //                   <Link
// // //                     href="/contact-us"
// // //                     className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     onClick={handleLinkClick}
// // //                   >
// // //                     Contact Us
// // //                   </Link>
// // //                   <Link
// // //                     href="/payment-options"
// // //                     className="block px-4 py-2 hover:bg-gray-100 text-center"
// // //                     onClick={handleLinkClick}
// // //                   >
// // //                     Payment Options
// // //                   </Link>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }

// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";
// // import {
// //   ShoppingCartIcon,
// //   UserIcon,
// //   ChevronDownIcon,
// //   MenuIcon,
// //   XIcon,
// // } from "@heroicons/react/outline";

// // export default function Navbar() {
// //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [isHelpOpen, setIsHelpOpen] = useState(false);
// //   const [isAccountOpen, setIsAccountOpen] = useState(false); // State for account dropdown

// //   const handleLinkClick = () => {
// //     setMenuOpen(false); // Close the menu when a link is clicked
// //     setIsCategoryOpen(false); // Close the category dropdown if it's open
// //     setIsHelpOpen(false); // Close the help dropdown if it's open
// //     setIsAccountOpen(false); // Close the account dropdown if it's open
// //   };

// //   return (
// //     <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50">
// //       {/* Left Section: App Name */}
// //       <div className="hidden lg:flex items-center w-full">
// //         <div className="text-xl font-bold whitespace-nowrap md:pr-5">
// //           ShopMart
// //         </div>
// //         {/* Category Dropdown */}
// //         <div className="relative md:pr-5">
// //           <button
// //             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
// //             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
// //           >
// //             Category
// //             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
// //           </button>
// //           {isCategoryOpen && (
// //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// //               <Link
// //                 href="#"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 Beverages
// //               </Link>
// //               <Link
// //                 href="#"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 Groceries
// //               </Link>
// //               <Link
// //                 href="#"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 Toiletries
// //               </Link>
// //             </div>
// //           )}
// //         </div>

// //         {/* Search Bar */}
// //         <div className="relative w-full max-w-sm md:pr-2">
// //           <input
// //             type="text"
// //             placeholder="Search"
// //             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
// //           />
// //         </div>
// //         <button className="bg-green-800 px-4 py-3 rounded-md hover:bg-green-700">
// //           Search
// //         </button>

// //         {/* Center Section: Navigation Links */}
// //         <div className="flex-grow text-center space-x-4">
// //           <Link
// //             href="/"
// //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// //             onClick={handleLinkClick}
// //           >
// //             Home
// //           </Link>
// //           <Link
// //             href="/shop"
// //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// //             onClick={handleLinkClick}
// //           >
// //             Shop
// //           </Link>
// //           <Link
// //             href="#new-arrivals"
// //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// //             onClick={handleLinkClick}
// //           >
// //             New Arrivals
// //           </Link>
// //           <a
// //             href="#"
// //             className="text-white hover:bg-green-700 px-3 py-2 rounded"
// //             onClick={() => {
// //               handleLinkClick();
// //               setIsHelpOpen(!isHelpOpen);
// //             }}
// //           >
// //             Help
// //             <ChevronDownIcon className="w-5 h-5 inline ml-1" />
// //           </a>
// //           {isHelpOpen && (
// //             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
// //               <Link
// //                 href="/faqs"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 FAQs
// //               </Link>
// //               <Link
// //                 href="/place-order"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 Place an Order
// //               </Link>
// //               <Link
// //                 href="/report-order"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 Report an Order
// //               </Link>
// //               <Link
// //                 href="/contact-us"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 Contact Us
// //               </Link>
// //               <Link
// //                 href="/payment-options"
// //                 className="block px-4 py-2 hover:bg-gray-100"
// //                 onClick={handleLinkClick}
// //               >
// //                 Payment Options
// //               </Link>
// //             </div>
// //           )}
// //         </div>

// //         {/* Right Section: Cart Icon and User Icon with Account Dropdown */}
// //         <div className="flex items-center space-x-4">
// //           <div className="relative">
// //             <button
// //               onClick={() => setIsAccountOpen(!isAccountOpen)}
// //               className="flex items-center text-white hover:bg-green-700 px-3 py-2 rounded"
// //             >
// //               <UserIcon className="w-6 h-6" />
// //               <span className="ml-1">Account</span>
// //               <ChevronDownIcon className="w-5 h-5 ml-1" />
// //             </button>
// //             {isAccountOpen && (
// //               <div className="absolute right-0 bg-white text-black mt-2 py-2 w-48 rounded shadow-lg z-50">
// //                 <Link
// //                   href="/login"
// //                   className="block px-4 py-2 hover:bg-gray-100"
// //                   onClick={handleLinkClick}
// //                 >
// //                   Sign In
// //                 </Link>
// //                 <Link
// //                   href="/my-account"
// //                   className="block px-4 py-2 hover:bg-gray-100"
// //                   onClick={handleLinkClick}
// //                 >
// //                   My Account
// //                 </Link>
// //                 <Link
// //                   href="/orders"
// //                   className="block px-4 py-2 hover:bg-gray-100"
// //                   onClick={handleLinkClick}
// //                 >
// //                   Orders
// //                 </Link>
// //                 <Link
// //                   href="/saved-items"
// //                   className="block px-4 py-2 hover:bg-gray-100"
// //                   onClick={handleLinkClick}
// //                 >
// //                   Saved Items
// //                 </Link>
// //                 <Link
// //                   href="/login"
// //                   className="block px-4 py-2 hover:bg-gray-100"
// //                   onClick={handleLinkClick}
// //                 >
// //                   Log Out
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //           <div className="relative">
// //             <ShoppingCartIcon className="w-6 h-6" />
// //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// //               0
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu Button */}
// //       <div className="flex items-center justify-between w-full lg:hidden">
// //         <button onClick={() => setMenuOpen(!menuOpen)}>
// //           {menuOpen ? (
// //             <XIcon className="w-6 h-6 text-white" />
// //           ) : (
// //             <MenuIcon className="w-6 h-6 text-white" />
// //           )}
// //         </button>
// //         <div className="text-xl font-bold flex-grow text-left pl-5">
// //           MyStore
// //         </div>
// //         <div className="flex items-center space-x-4">
// //           <Link href="/login" className="flex items-center">
// //             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
// //           </Link>
// //           <div className="relative">
// //             <ShoppingCartIcon className="w-6 h-6 text-white" />
// //             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// //               0
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Dropdown Menu */}
// //       {menuOpen && (
// //         <div className="fixed inset-0 z-50 bg-green-600 transition-transform transform translate-x-0 duration-300 ease-in-out">
// //           <div className="flex flex-col space-y-2 p-4 h-full overflow-y-auto">
// //             {/* Close Button */}
// //             <div className="flex justify-end">
// //               <button onClick={() => setMenuOpen(false)} className="text-white">
// //                 <XIcon className="w-6 h-6" />
// //               </button>
// //             </div>

// //             {/* Centered Links */}
// //             <div className="flex flex-col items-center justify-center flex-grow">
// //               <Link
// //                 href="/"
// //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// //                 onClick={handleLinkClick}
// //               >
// //                 Home
// //               </Link>
// //               <Link
// //                 href="/shop"
// //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// //                 onClick={handleLinkClick}
// //               >
// //                 Shop
// //               </Link>
// //               <Link
// //                 href="#new-arrivals"
// //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// //                 onClick={handleLinkClick}
// //               >
// //                 New Arrivals
// //               </Link>
// //               <Link
// //                 href="#"
// //                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
// //                 onClick={() => {
// //                   handleLinkClick();
// //                   setIsHelpOpen(!isHelpOpen);
// //                 }}
// //               >
// //                 Help
// //               </Link>
// //               {isHelpOpen && (
// //                 <div className="flex flex-col mt-2 space-y-1 w-full">
// //                   <Link
// //                     href="/faqs"
// //                     className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                     onClick={handleLinkClick}
// //                   >
// //                     FAQs
// //                   </Link>
// //                   <Link
// //                     href="/place-order"
// //                     className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                     onClick={handleLinkClick}
// //                   >
// //                     Place an Order
// //                   </Link>
// //                   <Link
// //                     href="/report-order"
// //                     className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                     onClick={handleLinkClick}
// //                   >
// //                     Report an Order
// //                   </Link>
// //                   <Link
// //                     href="/contact-us"
// //                     className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                     onClick={handleLinkClick}
// //                   >
// //                     Contact Us
// //                   </Link>
// //                   <Link
// //                     href="/payment-options"
// //                     className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                     onClick={handleLinkClick}
// //                   >
// //                     Payment Options
// //                   </Link>
// //                 </div>
// //               )}
// //               <div className="relative">
// //                 <button
// //                   onClick={() => setIsAccountOpen(!isAccountOpen)}
// //                   className="flex items-center text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                 >
// //                   <UserIcon className="w-6 h-6" />
// //                   <span className="ml-1">Account</span>
// //                   <ChevronDownIcon className="w-5 h-5 ml-1" />
// //                 </button>
// //                 {isAccountOpen && (
// //                   <div className="flex flex-col mt-2 space-y-1 w-full">
// //                     <Link
// //                       href="/login"
// //                       className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                       onClick={handleLinkClick}
// //                     >
// //                       Sign In
// //                     </Link>
// //                     <Link
// //                       href="/my-account"
// //                       className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                       onClick={handleLinkClick}
// //                     >
// //                       My Account
// //                     </Link>
// //                     <Link
// //                       href="/orders"
// //                       className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                       onClick={handleLinkClick}
// //                     >
// //                       Orders
// //                     </Link>
// //                     <Link
// //                       href="/saved-items"
// //                       className="block text-white hover:bg-green-700 px-3 py-2 rounded w-full text-left"
// //                       onClick={handleLinkClick}
// //                     >
// //                       Saved Items
// //                     </Link>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import {
//   ShoppingCartIcon,
//   UserIcon,
//   ChevronDownIcon,
//   MenuIcon,
//   XIcon,
// } from "@heroicons/react/outline";

// export default function Navbar() {
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isHelpOpen, setIsHelpOpen] = useState(false);
//   const [isAccountOpen, setIsAccountOpen] = useState(false);

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//     setIsCategoryOpen(false);
//     setIsHelpOpen(false);
//     setIsAccountOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-green-600 text-white z-50">
//       {/* Left Section: App Name */}
//       <div className="hidden lg:flex items-center w-full">
//         <div className="text-xl font-bold whitespace-nowrap md:pr-5">
//           ShopMart
//         </div>
//         {/* Category Dropdown */}
//         <div className="relative md:pr-5">
//           <button
//             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//             className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
//           >
//             Category
//             <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
//           </button>
//           {isCategoryOpen && (
//             <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
//               <Link
//                 href="#"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 Beverages
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 Groceries
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 Toiletries
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Search Bar */}
//         <div className="relative w-full max-w-sm md:pr-2">
//           <input
//             type="text"
//             placeholder="Search"
//             className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
//           />
//         </div>
//         <button className="bg-green-800 px-4 py-3 rounded-md hover:bg-green-700">
//           Search
//         </button>

//         {/* Center Section: Navigation Links */}
//         <div className="flex-grow text-center space-x-4">
//           <Link
//             href="/"
//             className="text-white hover:bg-green-700 px-3 py-2 rounded"
//             onClick={handleLinkClick}
//           >
//             Home
//           </Link>
//           <Link
//             href="/shop"
//             className="text-white hover:bg-green-700 px-3 py-2 rounded"
//             onClick={handleLinkClick}
//           >
//             Shop
//           </Link>
//           <Link
//             href="#new-arrivals"
//             className="text-white hover:bg-green-700 px-3 py-2 rounded"
//             onClick={handleLinkClick}
//           >
//             New Arrivals
//           </Link>
//           {/* <a
//             href="#"
//             className="text-white hover:bg-green-700 px-3 py-2 rounded"
//             onClick={() => {
//               handleLinkClick();
//               setIsHelpOpen(!isHelpOpen);
//             }}
//           >
//             Help
//             <ChevronDownIcon className="w-5 h-5 inline ml-1" />
//           </a>
//           {isHelpOpen && (
//             <div className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black mt-2 py-2 rounded shadow-lg z-50 max-w-sm w-full">
//               <Link
//                 href="/faqs"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 FAQs
//               </Link>
//               <Link
//                 href="/place-order"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 Place an Order
//               </Link>
//               <Link
//                 href="/report-order"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 Report an Order
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 href="/payment-options"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={handleLinkClick}
//               >
//                 Payment Options
//               </Link>
//             </div>
//           )} */}
//           <div className="relative inline-block text-left">
//             <a
//               href="#"
//               className="text-white hover:bg-green-700 px-3 py-2 rounded"
//               onClick={() => {
//                 handleLinkClick();
//                 setIsHelpOpen(!isHelpOpen);
//               }}
//             >
//               Help
//               <ChevronDownIcon className="w-5 h-5 inline ml-1" />
//             </a>

//             {isHelpOpen && (
//               <div className="absolute left-0 md:mt-4 w-48 bg-white text-black rounded shadow-lg z-50">
//                 <Link
//                   href="/faqs"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   FAQs
//                 </Link>
//                 <Link
//                   href="/place-order"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   Place an Order
//                 </Link>
//                 <Link
//                   href="/report-order"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   Report an Order
//                 </Link>
//                 <Link
//                   href="/contact-us"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   Contact Us
//                 </Link>
//                 <Link
//                   href="/payment-options"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   Payment Options
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Section: Cart Icon and User Icon */}
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <button
//               onClick={() => setIsAccountOpen(!isAccountOpen)}
//               className="flex items-center text-white hover:bg-green-700 px-3 py-2 rounded"
//             >
//               <UserIcon className="w-6 h-6" />
//               <span className="ml-1">Account</span>
//               <ChevronDownIcon className="w-5 h-5 ml-1" />
//             </button>
//             {isAccountOpen && (
//               <div className="absolute right-0 bg-white text-black mt-2 py-2 w-48 rounded shadow-lg z-50">
//                 <Link
//                   href="/login"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   href="/my-account"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   My Account
//                 </Link>
//                 <Link
//                   href="/orders"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   Orders
//                 </Link>
//                 <Link
//                   href="/saved-items"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleLinkClick}
//                 >
//                   Saved Items
//                 </Link>
//               </div>
//             )}
//           </div>
//           <div className="relative">
//             <ShoppingCartIcon className="w-6 h-6" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//               0
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}

//       {/* Mobile Menu Button */}
//       <div className="flex items-center justify-between w-full lg:hidden">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? (
//             <XIcon className="w-6 h-6 text-white" />
//           ) : (
//             <MenuIcon className="w-6 h-6 text-white" />
//           )}
//         </button>
//         <div className="text-xl font-bold flex-grow text-left pl-5">
//           MyStore
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link href="/login" className="flex items-center">
//             <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
//           </Link>
//           <div className="relative">
//             <ShoppingCartIcon className="w-6 h-6 text-white" />
//             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//               0
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-green-600 transition-transform transform translate-x-0 duration-300 ease-in-out">
//           <div className="flex flex-col space-y-2 p-4 h-full overflow-y-auto">
//             {/* Close Button */}
//             <div className="flex justify-end">
//               <button onClick={() => setMenuOpen(false)} className="text-white">
//                 <XIcon className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Centered Links */}
//             <div className="flex flex-col items-center justify-center flex-grow">
//               <Link
//                 href="/"
//                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
//                 onClick={handleLinkClick}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/shop"
//                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
//                 onClick={handleLinkClick}
//               >
//                 Shop
//               </Link>
//               <Link
//                 href="#new-arrivals"
//                 className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
//                 onClick={handleLinkClick}
//               >
//                 New Arrivals
//               </Link>

//               {/* Category Dropdown in Mobile Menu */}
//               <div className="relative w-full">
//                 <button
//                   onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//                   className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
//                 >
//                   Category
//                   <ChevronDownIcon className="w-5 h-5 inline ml-1" />
//                 </button>
//                 {isCategoryOpen && (
//                   <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
//                     <Link
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Beverages
//                     </Link>
//                     <Link
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Groceries
//                     </Link>
//                     <Link
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Toiletries
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Help Dropdown */}
//               <div className="relative w-full">
//                 <button
//                   onClick={() => {
//                     handleLinkClick();
//                     setIsHelpOpen(!isHelpOpen);
//                   }}
//                   className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
//                 >
//                   Help
//                   <ChevronDownIcon className="w-5 h-5 inline ml-1" />
//                 </button>
//                 {isHelpOpen && (
//                   <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
//                     <Link
//                       href="/faqs"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       FAQs
//                     </Link>
//                     <Link
//                       href="/place-order"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Place an Order
//                     </Link>
//                     <Link
//                       href="/report-order"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Report an Order
//                     </Link>
//                     <Link
//                       href="/contact-us"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Contact Us
//                     </Link>
//                     <Link
//                       href="/payment-options"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Payment Options
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Account Dropdown in Mobile Menu */}
//               <div className="relative w-full">
//                 <button
//                   onClick={() => setIsAccountOpen(!isAccountOpen)}
//                   className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
//                 >
//                   <UserIcon className="w-6 h-6" />
//                   <span className="ml-1">Account</span>
//                   <ChevronDownIcon className="w-5 h-5 ml-1" />
//                 </button>
//                 {isAccountOpen && (
//                   <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
//                     <Link
//                       href="/login"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Sign In
//                     </Link>
//                     <Link
//                       href="/my-account"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       My Account
//                     </Link>
//                     <Link
//                       href="/orders"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Orders
//                     </Link>
//                     <Link
//                       href="/saved-items"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Saved Items
//                     </Link>
//                     <Link
//                       href="/logout"
//                       className="block px-4 py-2 hover:bg-gray-100 text-center"
//                       onClick={handleLinkClick}
//                     >
//                       Logout
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCartIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export default function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false); // State for Help dropdown
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const suggestions = [
    "clothes for men",
    "clothes for ladies",
    "clothes hanger rack",
    "clothes materials",
    "clothes for men jeans",
    "clothes racks",
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
    setIsCategoryOpen(false);
    setIsHelpOpen(false);
    setIsAccountOpen(false);
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-col lg:flex-row items-center justify-between p-4 bg-gradient-to-l from-[#557C56] to-[#3D593E]  w-full text-white z-50">
      {/* Left Section: App Name */}
      <div className="hidden lg:flex items-center w-full">
        <div className="text-xl font-bold whitespace-nowrap md:pr-5">
          ShopMart
        </div>
        {/* Category Dropdown */}
        <div className="relative md:pr-5">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
          >
            Category
            <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
          </button>
          {isCategoryOpen && (
            <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Beverages
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Groceries
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Toiletries
              </a>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm md:pr-2">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 p-2 rounded-md border-2 border-white text-black w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="bg-green-800 px-4 py-3 rounded-md hover:bg-green-700">
          Search
        </button>

        {/* Center Section: Navigation Links */}
        <div className="flex-grow text-center space-x-4">
          <Link
            href="/"
            className="text-white hover:bg-green-700 px-3 py-2 rounded"
          >
            Home
          </Link>
          {/* <Link
            href="/shop"
            className="text-white hover:bg-green-700 px-3 py-2 rounded"
          >
            Shop
          </Link> */}
          {/* <Link
            href="#new-arrivals"
            className="text-white hover:bg-green-700 px-3 py-2 rounded"
          >
            New Arrivals
          </Link> */}
          <Link
            href="/products"
            className="text-white hover:bg-green-700 px-3 py-2 rounded"
          >
            Products
          </Link>
          {/* Help Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setIsHelpOpen(!isHelpOpen)}
              className="bg-green-800 px-4 py-2 rounded flex items-center hover:bg-green-700"
            >
              Help
              <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
            </button>
            {isHelpOpen && (
              <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
                <Link
                  href="/faqs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  FAQs
                </Link>
                <Link
                  href="/place-order"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Place an Order
                </Link>
                <Link
                  href="/report-order"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Report an Order
                </Link>
                <Link
                  href="/contact-us"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
                <Link
                  href="/payment-options"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Payment Options
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Cart Icon and User Icon */}
        {/* <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              0
            </span>
          </div>
          <a href="/login" className="flex items-center">
            <UserIcon className="w-6 h-6" />
          </a>
        </div>
      </div> */}
        {/* Right Section: Cart Icon and User Icon */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className="flex items-center text-white hover:bg-green-700 px-3 py-2 rounded"
            >
              <UserIcon className="w-6 h-6" />
              <span className="ml-1">Account</span>
              <ChevronDownIcon className="w-5 h-5 ml-1" />
            </button>
            {isAccountOpen && (
              <div className="absolute right-0 bg-white text-black mt-2 py-2 w-48 rounded shadow-lg z-50">
                <Link
                  href="/authentication"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Sign In
                </Link>
                <Link
                  href="/my-account"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  My Account
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Orders
                </Link>
                <Link
                  href="/saved-items"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Saved Items
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XIcon className="w-6 h-6 text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" />
          )}
        </button>
        <div className="text-xl font-bold flex-grow text-left pl-5">
          ShopMart
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Icon - only opens search input on click */}
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <SearchIcon className="w-6 h-6 text-white hover:text-gray-300" />
          </button>
          <a href="/authentication" className="flex items-center">
            <UserIcon className="w-6 h-6 text-white hover:text-gray-300" />
          </a>
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {/* {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-green-600 z-50">
          <div className="flex flex-col space-y-2 p-4">
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
              >
                Category
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </button>
              {isCategoryOpen && (
                <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Beverages
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Groceries
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Toiletries
                  </a>
                </div>
              )}
            </div>
            <Link
              href="/"
              className="text-white hover:bg-green-500 px-4 py-2 rounded"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-white hover:bg-green-500 px-4 py-2 rounded"
            >
              Shop
            </Link>
            <Link
              href="#new-arrivals"
              className="text-white hover:bg-green-500 px-4 py-2 rounded"
            >
              New Arrivals
            </Link>
            {/* Help Dropdown for Mobile */}
      {/* <div className="relative">
              <button
                onClick={() => setIsHelpOpen(!isHelpOpen)}
                className="flex items-center bg-green-800 px-4 py-2 rounded w-full"
              >
                Help
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </button>
              {isHelpOpen && (
                <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
                  <Link
                    href="/faqs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/place-order"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Place an Order
                  </Link>
                  <Link
                    href="/report-order"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Report an Order
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/payment-options"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Payment Options
                  </Link>
                </div>
              )}
            </div>
          </div> */}
      {/* </div> */}
      {/* )} */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#557C56] transition-transform transform translate-x-0 duration-300 ease-in-out">
          <div className="flex flex-col space-y-2 p-4 h-full overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Centered Links */}
            <div className="flex flex-col items-center justify-center flex-grow">
              <Link
                href="/"
                className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              {/* <Link
                href="/shop"
                className="text-white hover:bg-[#3e9141] px-3 py-2 rounded w-full text-center"
                onClick={handleLinkClick}
              >
                Shop
              </Link> */}
              {/* <Link
                href="#new-arrivals"
                className="text-white hover:bg-green-700 px-3 py-2 rounded w-full text-center"
                onClick={handleLinkClick}
              >
                New Arrivals
              </Link> */}
              <Link
                href="/products
            "
                className="text-white hover:bg-green-700 px-3 py-2 rounded"
              >
                Products
              </Link>

              {/* Category Dropdown in Mobile Menu */}
              <div className="relative w-full">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
                >
                  Category
                  <ChevronDownIcon className="w-5 h-5 inline ml-1" />
                </button>
                {isCategoryOpen && (
                  <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
                    <Link
                      href="#beverages"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Beverages
                    </Link>
                    <Link
                      href="#groceries"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Groceries
                    </Link>
                    <Link
                      href="#toiletries"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Toiletries
                    </Link>
                  </div>
                )}
              </div>

              {/* Help Dropdown in Mobile Menu */}
              <div className="relative w-full">
                {/* <button
                  onClick={() => {
                    handleLinkClick();
                    setIsHelpOpen(!isHelpOpen);
                  }}
                  className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
                >
                  Help
                  <ChevronDownIcon className="w-5 h-5 inline ml-1" />
                </button> */}
                <button
                  onClick={() => setIsHelpOpen(!isHelpOpen)}
                  className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
                >
                  <UserIcon className="w-6 h-6" />
                  <span className="ml-1">Help</span>
                  <ChevronDownIcon className="w-5 h-5 ml-1" />
                </button>
                {isHelpOpen && (
                  <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
                    <Link
                      href="/faqs"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      FAQs
                    </Link>
                    <Link
                      href="/place-order"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Place an Order
                    </Link>
                    <Link
                      href="/report-order"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Report an Order
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/payment-options"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Payment Options
                    </Link>
                  </div>
                )}
              </div>

              {/* Account Dropdown in Mobile Menu */}
              <div className="relative w-full">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="bg-green-800 px-4 py-2 mt-2 rounded flex items-center justify-center w-full text-white hover:bg-green-700"
                >
                  <UserIcon className="w-6 h-6" />
                  <span className="ml-1">Account</span>
                  <ChevronDownIcon className="w-5 h-5 ml-1" />
                </button>
                {isAccountOpen && (
                  <div className="bg-white text-black mt-2 py-2 w-full shadow-lg">
                    <Link
                      href="/authentication"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/my-account"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      My Account
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Orders
                    </Link>
                    <Link
                      href="/saved-items"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Saved Items
                    </Link>
                    <Link
                      href="/logout"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                      onClick={handleLinkClick}
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Search Input for Mobile */}
      {/* Full-Screen Search Bar for Mobile */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-white p-4 flex flex-col"
          style={{ height: "50vh" }}
        >
          <div className="relative w-full">
            {/* Back Button to go to homepage */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-2 left-2 flex items-center h-8 w-8"
            >
              <ChevronLeftIcon className="w-4 h-4 text-black" />
            </button>
            <a
              href="/"
              className="absolute top-2 left-12 text-black text-lg font-semibold"
            >
              Home
            </a>

            {/* Search Input */}
            <div className="relative mt-10">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="pl-10 w-full p-3 border-2 border-gray-300 rounded-lg text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <XIcon className="w-5 h-5 text-black" />
                </button>
              )}
            </div>

            {/* Search Suggestions Dropdown */}
            {searchQuery && (
              <div className="absolute left-0 right-0 bg-white text-black mt-2 py-2 rounded shadow-lg z-50">
                {filteredSuggestions.map((suggestion, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {suggestion}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
