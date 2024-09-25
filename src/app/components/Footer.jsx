// "use client";
// import Link from "next/link";
// import { GlobeAltIcon, UserIcon } from "@heroicons/react/outline"; // Use appropriate icons

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//         {/* Company Info */}
//         <div className="mb-4 md:mb-0">
//           <h5 className="text-lg font-bold">Company Name</h5>
//           <p className="text-sm">Your tagline here.</p>
//         </div>

//         {/* Footer Links */}
//         <div className="flex flex-col md:flex-row">
//           <Link href="/privacy" className="px-2 hover:underline">
//             Privacy Policy
//           </Link>
//           <Link href="/terms" className="px-2 hover:underline">
//             Terms of Service
//           </Link>
//           <Link href="/contact" className="px-2 hover:underline">
//             Contact Us
//           </Link>
//           <Link href="/report-product" className="px-2 hover:underline">
//             Report a Product
//           </Link>
//           <Link href="/report-seller" className="px-2 hover:underline">
//             Report a Seller
//           </Link>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <Link href="https://www.facebook.com" passHref>
//             <GlobeAltIcon
//               className="h-6 w-6 hover:text-blue-500"
//               aria-label="Facebook"
//             />
//           </Link>
//           <Link href="https://www.twitter.com" passHref>
//             <UserIcon
//               className="h-6 w-6 hover:text-blue-400"
//               aria-label="Twitter"
//             />
//           </Link>
//           {/* Use different icons or find a suitable library for social media */}
//         </div>
//       </div>
//       <div className="text-center mt-4">
//         <p className="text-sm">
//           © {new Date().getFullYear()} Your Company Name. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Link from "next/link";
import { GlobeAltIcon, UserIcon } from "@heroicons/react/outline"; // Use appropriate icons

const Footer = () => {
  return (
    <footer className="bg-[#33372C] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4">
        {/* Company Info */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h5 className="text-lg font-bold">Company Name</h5>
          <p className="text-sm">Your tagline here.</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start w-full">
          <div className="flex flex-wrap justify-center">
            <div className="w-1/3 p-1">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
            <div className="w-1/3 p-1">
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
            <div className="w-1/3 p-1">
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </div>
            <div className="w-1/3 p-1">
              <Link href="/report-product" className="hover:underline">
                Report a Product
              </Link>
            </div>
            <div className="w-1/3 p-1">
              <Link href="/report-seller" className="hover:underline">
                Report a Seller
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
          <Link href="https://www.facebook.com" passHref>
            <GlobeAltIcon
              className="h-6 w-6 hover:text-blue-500"
              aria-label="Facebook"
            />
          </Link>
          <Link href="https://www.twitter.com" passHref>
            <UserIcon
              className="h-6 w-6 hover:text-blue-400"
              aria-label="Twitter"
            />
          </Link>
          {/* Use different icons or find a suitable library for social media */}
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
