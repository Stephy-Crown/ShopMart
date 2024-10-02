// // // // import Link from "next/link";

// // // // export default function Stores() {
// // // //   const stores = [
// // // //     {
// // // //       name: "Store 1",
// // // //       description: "Description of Store 1",
// // // //       whatsapp: "your-store-whatsapp-number-1",
// // // //     },
// // // //     {
// // // //       name: "Store 2",
// // // //       description: "Description of Store 2",
// // // //       whatsapp: "your-store-whatsapp-number-2",
// // // //     },
// // // //     {
// // // //       name: "Store 3",
// // // //       description: "Description of Store 3",
// // // //       whatsapp: "your-store-whatsapp-number-3",
// // // //     },
// // // //     // Add more stores as needed
// // // //   ];

// // // //   return (
// // // //     <div className="container mx-auto px-4 py-6">
// // // //       <header className="mb-8">
// // // //         <h1 className="text-3xl font-bold">Available Stores</h1>
// // // //       </header>
// // // //       <section>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {stores.map((store, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
// // // //             >
// // // //               <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
// // // //               <p className="mb-4">{store.description}</p>
// // // //               <Link href={`https://wa.me/${store.whatsapp}`}>
// // // //                 <button className="bg-green-600 text-white py-2 px-4 rounded transition hover:bg-green-700">
// // // //                   Contact on WhatsApp
// // // //                 </button>
// // // //               </Link>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";
// // // // import { useEffect, useState } from "react";
// // // // // import { auth } from "../firebase"; // Ensure you have this Firebase config imported
// // // // // import { onAuthStateChanged } from "firebase/auth";
// // // // import { useRouter } from "next/router";

// // // // export default function Stores() {
// // // //   const [user, setUser] = useState(null);
// // // //   const router = useRouter();

// // // //   useEffect(() => {
// // // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // // //       setUser(currentUser);
// // // //     });
// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   const handleWhatsAppClick = (whatsappNumber) => {
// // // //     if (!user) {
// // // //       alert("You need to be logged in to contact stores via WhatsApp!");
// // // //       router.push("/authentication"); // Redirect to login page if not authenticated
// // // //     } else {
// // // //       window.open(`https://wa.me/${whatsappNumber}`, "_blank");
// // // //     }
// // // //   };

// // // //   const stores = [
// // // //     {
// // // //       name: "Store 1",
// // // //       description: "Description of Store 1",
// // // //       whatsapp: "your-store-whatsapp-number-1",
// // // //     },
// // // //     {
// // // //       name: "Store 2",
// // // //       description: "Description of Store 2",
// // // //       whatsapp: "your-store-whatsapp-number-2",
// // // //     },
// // // //     {
// // // //       name: "Store 3",
// // // //       description: "Description of Store 3",
// // // //       whatsapp: "your-store-whatsapp-number-3",
// // // //     },
// // // //     // Add more stores as needed
// // // //   ];

// // // //   return (
// // // //     <div className="container mx-auto px-4 py-6">
// // // //       <header className="mb-8">
// // // //         <h1 className="text-3xl font-bold">Available Stores</h1>
// // // //       </header>
// // // //       <section>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {stores.map((store, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
// // // //             >
// // // //               <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
// // // //               <p className="mb-4">{store.description}</p>
// // // //               <button
// // // //                 onClick={() => handleWhatsAppClick(store.whatsapp)}
// // // //                 className="bg-green-600 text-white py-2 px-4 rounded transition hover:bg-green-700"
// // // //               >
// // // //                 Contact on WhatsApp
// // // //               </button>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";
// // // import { useEffect, useState } from "react";
// // // import { auth } from "../lib/firebase"; // Ensure you have this Firebase config imported
// // // // import { onAuthStateChanged } from "../lib/firebase";
// // // import { onAuthStateChanged } from "firebase/auth"; // Correct import
// // // import { useRouter } from "next/navigation";

// // // export default function Stores() {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const router = useRouter();

// // //   // useEffect(() => {
// // //   //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //   //     setUser(currentUser);
// // //   //     setLoading(false);
// // //   //   });
// // //   //   return () => unsubscribe();
// // //   // }, []);
// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //       console.log("Current user:", currentUser); // Log current user
// // //       setUser(currentUser); // Update user state
// // //       setLoading(false); // Stop loading
// // //     });
// // //     return () => unsubscribe(); // Clean up subscription
// // //   }, []);

// // //   const handleWhatsAppClick = (whatsappNumber) => {
// // //     if (!user) {
// // //       // alert("You need to be logged in to contact stores via WhatsApp!");
// // //       router.push("/authentication");
// // //     } else {
// // //       try {
// // //         router.push("/authentication");
// // //         // window.open(`https://wa.me/${whatsappNumber}`, "_blank");
// // //       } catch (error) {
// // //         console.error("Error opening WhatsApp:", error);
// // //       }
// // //     }
// // //   };

// // //   const stores = [
// // //     {
// // //       name: "Store 1",
// // //       description: "Description of Store 1",
// // //       whatsapp: "your-store-whatsapp-number-1",
// // //     },
// // //     {
// // //       name: "Store 2",
// // //       description: "Description of Store 2",
// // //       whatsapp: "your-store-whatsapp-number-2",
// // //     },
// // //     {
// // //       name: "Store 3",
// // //       description: "Description of Store 3",
// // //       whatsapp: "your-store-whatsapp-number-3",
// // //     },
// // //   ];

// // //   if (loading) {
// // //     return <p>Loading...</p>; // Add a loading state here
// // //   }

// // //   return (
// // //     <div className="container mx-auto px-4 py-6">
// // //       <header className="mb-8">
// // //         <h1 className="text-3xl font-bold">Available Stores</h1>
// // //       </header>
// // //       <section>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {stores.map((store, index) => (
// // //             <div
// // //               key={index}
// // //               className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
// // //               <p className="mb-4">{store.description}</p>
// // //               <button
// // //                 onClick={() => handleWhatsAppClick(store.whatsapp)}
// // //                 className="bg-green-600 text-white py-2 px-4 rounded transition hover:bg-green-700"
// // //               >
// // //                 Contact on WhatsApp
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { useEffect, useState } from "react";
// // import { auth } from "../lib/firebase"; // Ensure you have this Firebase config imported
// // import { onAuthStateChanged } from "firebase/auth"; // Correct import
// // import { useRouter } from "next/navigation";

// // export default function Stores() {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const router = useRouter();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const handleWhatsAppClick = (whatsappNumber) => {
// //     if (!user) {
// //       router.push("/authentication"); // Redirect to login page if not authenticated
// //     } else if (user) {
// //       router.push("/authentication"); // Open WhatsApp link if logged in
// //     } else if (user) {
// //       window.open(`https://wa.me/${whatsappNumber}`, "_blank"); // Open WhatsApp link if logged in
// //     }
// //   };

// //   const stores = [
// //     {
// //       name: "Store 1",
// //       description: "Description of Store 1",
// //       whatsapp: "your-store-whatsapp-number-1",
// //     },
// //     {
// //       name: "Store 2",
// //       description: "Description of Store 2",
// //       whatsapp: "your-store-whatsapp-number-2",
// //     },
// //     {
// //       name: "Store 3",
// //       description: "Description of Store 3",
// //       whatsapp: "your-store-whatsapp-number-3",
// //     },
// //   ];

// //   if (loading) {
// //     return <p>Loading...</p>; // Add a loading state here
// //   }

// //   return (
// //     <div className="container mx-auto px-4 py-6">
// //       <header className="mb-8">
// //         <h1 className="text-3xl font-bold">Available Stores</h1>
// //       </header>
// //       <section>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {stores.map((store, index) => (
// //             <div
// //               key={index}
// //               className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
// //             >
// //               <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
// //               <p className="mb-4">{store.description}</p>
// //               <button
// //                 onClick={() => handleWhatsAppClick(store.whatsapp)}
// //                 className="bg-green-600 text-white py-2 px-4 rounded transition hover:bg-green-700"
// //               >
// //                 Contact on WhatsApp
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // "use client";
// // import { useEffect, useState } from "react";
// // import { auth } from "../lib/firebase"; // Ensure you have this Firebase config imported
// // import { onAuthStateChanged } from "firebase/auth"; // Correct import
// // import { useRouter } from "next/navigation";

// // export default function Stores() {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const router = useRouter();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser); // Update user state
// //       setLoading(false); // Stop loading once we know the auth state
// //     });
// //     return () => unsubscribe(); // Clean up subscription
// //   }, []);

// //   const handleWhatsAppClick = (whatsappNumber) => {
// //     if (!user) {
// //       // If the user is not logged in, redirect to authentication page
// //       router.push("/authentication");
// //     } else {
// //       // Open WhatsApp link if the user is logged in
// //       window.open(`https://wa.me/${whatsappNumber}`, "_blank");
// //     }
// //   };

// //   const stores = [
// //     {
// //       name: "Store 1",
// //       description: "Description of Store 1",
// //       whatsapp: "your-store-whatsapp-number-1",
// //     },
// //     {
// //       name: "Store 2",
// //       description: "Description of Store 2",
// //       whatsapp: "your-store-whatsapp-number-2",
// //     },
// //     {
// //       name: "Store 3",
// //       description: "Description of Store 3",
// //       whatsapp: "your-store-whatsapp-number-3",
// //     },
// //   ];

// //   if (loading) {
// //     return <p>Loading...</p>; // Display this while loading auth state
// //   }

// //   return (
// //     <div className="container mx-auto px-4 py-6">
// //       <header className="mb-8">
// //         <h1 className="text-3xl font-bold">Available Stores</h1>
// //       </header>
// //       <section>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {stores.map((store, index) => (
// //             <div
// //               key={index}
// //               className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
// //             >
// //               <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
// //               <p className="mb-4">{store.description}</p>
// //               <button
// //                 onClick={() => handleWhatsAppClick(store.whatsapp)}
// //                 className="bg-green-600 text-white py-2 px-4 rounded transition hover:bg-green-700"
// //               >
// //                 Contact on WhatsApp
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";
// import { useEffect, useState } from "react";
// import { auth, db } from "../lib/firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
// import { useRouter } from "next/navigation";

// export default function Stores() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [stores, setStores] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
//         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//         if (userDoc.exists()) {
//           setUserData(userDoc.data());
//         } else {
//           await setDoc(doc(db, "users", currentUser.uid), {
//             email: currentUser.email,
//             createdAt: new Date(),
//           });
//           setUserData({ email: currentUser.email });
//         }
//         const storesData = await fetchStores(); // Fetch stores after user authentication
//         setStores(storesData); // Store it in state
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const fetchStores = async () => {
//     try {
//       const storesCollection = collection(db, "stores");
//       const storeDocs = await getDocs(storesCollection);
//       return storeDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     } catch (error) {
//       console.error("Error fetching stores:", error);
//       return []; // Return an empty array on error
//     }
//   };

//   const handleWhatsAppClick = (whatsappNumber) => {
//     if (!user) {
//       router.push("/authentication");
//     } else {
//       window.open(`https://wa.me/${whatsappNumber}`, "_blank");
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/authentication");
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold">Available Stores</h1>
//       </header>
//       <section>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {stores.map((store, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
//             >
//               <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
//               <p className="mb-4">{store.description}</p>
//               <button
//                 onClick={() => handleWhatsAppClick(store.whatsapp)}
//                 className="bg-green-600 text-white py-2 px-4 rounded-full transition hover:bg-green-700 focus:outline-none"
//               >
//                 Contact on WhatsApp
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//       {userData && (
//         <div className="mt-4">
//           <h2 className="text-xl">Welcome, {userData.email}</h2>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white py-2 px-4 rounded transition hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// // import CategorySection from "./components/CategorySection";
// // import PopularProducts from "./components/PopularProducts";
// // import NewArrivals from "./components/NewArrivals";
// // import DispatchOrder from "./components/DispatchOrder";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// // import ScrollToTopButton from "./components/ScrollToTopButton";
// // import FAQSection from "./components/FAQSection";
// import { useEffect, useState } from "react";
// import { auth } from "../lib/firebase"; // Ensure you have Firebase initialized
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useRouter } from "next/navigation";

// export default function Stores() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false); // Stop loading once we know the auth state
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleWhatsAppClick = (whatsappNumber) => {
//     if (!user) {
//       router.push("/authentication");
//     } else {
//       window.open(`https://wa.me/${whatsappNumber}`, "_blank");
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/authentication");
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const stores = [
//     {
//       name: "Store 1",
//       description: "Description of Store 1",
//       whatsapp: "your-store-whatsapp-number-1",
//     },
//     {
//       name: "Store 2",
//       description: "Description of Store 2",
//       whatsapp: "your-store-whatsapp-number-2",
//     },
//     {
//       name: "Store 3",
//       description: "Description of Store 3",
//       whatsapp: "your-store-whatsapp-number-3",
//     },
//   ];

//   if (loading) {
//     return <p>Loading...</p>; // Display this while loading auth state
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <Navbar />

//       <header className="mb-8">
//         <h1 className="text-3xl font-bold">Available Stores</h1>
//       </header>
//       <section>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {stores.map((store, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
//               <p className="mb-4">{store.description}</p>
//               <button
//                 onClick={() => handleWhatsAppClick(store.whatsapp)}
//                 className="bg-green-600 text-white py-2 px-4 rounded transition hover:bg-green-700"
//               >
//                 Contact on WhatsApp
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//       {user && (
//         <div className="mt-4">
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white py-2 px-4 rounded transition hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       )}

//       {/* <ScrollToTopButton /> */}
//       <Footer />
//     </div>

//   );

// }

"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase"; // Ensure you have Firebase initialized
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Stores() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once we know the auth state
    });
    return () => unsubscribe();
  }, []);

  const handleWhatsAppClick = (whatsappNumber) => {
    if (!user) {
      router.push("/authentication");
    } else {
      window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/authentication");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const stores = [
    {
      name: "Store 1",
      description: "Description of Store 1",
      whatsapp: "your-store-whatsapp-number-1",
    },
    {
      name: "Store 2",
      description: "Description of Store 2",
      whatsapp: "your-store-whatsapp-number-2",
    },
    {
      name: "Store 3",
      description: "Description of Store 3",
      whatsapp: "your-store-whatsapp-number-3",
    },
  ];

  if (loading) {
    return <p>Loading...</p>; // Display this while loading auth state
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-6 pt-32">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Available Stores</h1>
        </header>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <div
                key={index}
                className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
                <p className="mb-4">{store.description}</p>
                <button
                  onClick={() => handleWhatsAppClick(store.whatsapp)}
                  className="bg-green-600 text-white py-2 px-4 rounded transition hover:bg-green-700"
                >
                  Contact on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </section>
        {user && (
          <div className="mt-4">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
