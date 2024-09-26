// // // "use client";
// // // import React, { useState } from "react";
// // // // import { auth } from "../lib/firebase";
// // // // import { createUserWithEmailAndPassword } from "firebase/auth";
// // // // import { useRouter } from "next/router";

// // // const SignUpForm = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [fullName, setFullName] = useState("");
// // //   const [profileImage, setProfileImage] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   // const router = useRouter();

// // //   const handleSignUp = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     setLoading(true);

// // //     // try {
// // //     //   await createUserWithEmailAndPassword(auth, email, password);
// // //     //   console.log("Sign up successful!");
// // //     //   setLoading(false);
// // //     //   router.push("/dashboard");
// // //     // } catch (err) {
// // //     //   setError(err.message);
// // //     //   setLoading(false);
// // //     // }
// // //   };

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files?.[0];
// // //     if (file) {
// // //       setProfileImage(file);
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
// // //       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
// // //         Sign Up
// // //       </h2>
// // //       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
// // //         <div>
// // //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// // //             Full Name
// // //           </label>
// // //           <input
// // //             type="text"
// // //             value={fullName}
// // //             onChange={(e) => setFullName(e.target.value)}
// // //             required
// // //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// // //             Email
// // //           </label>
// // //           <input
// // //             type="email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// // //             Password
// // //           </label>
// // //           <input
// // //             type="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             required
// // //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// // //           />
// // //         </div>

// // //         {error && <p className="text-sm text-red-600">{error}</p>}
// // //         <button
// // //           type="submit"
// // //           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //         >
// // //           {loading ? (
// // //             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// // //           ) : (
// // //             <div className="text-white text-center h-5">Sign up</div>
// // //           )}
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default SignUpForm;

// // // "use client";
// // // import React, { useState } from "react";
// // // import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// // // import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// // // const SignUpForm = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [fullName, setFullName] = useState("");
// // //   const [profileImage, setProfileImage] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   const handleSignUp = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     setLoading(true);

// // //     try {
// // //       const userCredential = await createUserWithEmailAndPassword(
// // //         auth,
// // //         email,
// // //         password
// // //       );
// // //       // You can also handle the profileImage upload here if required
// // //       // Use userCredential.user to get the user details
// // //       console.log("User signed up:", userCredential.user);
// // //       // Redirect or perform any additional logic here
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError(err.message); // Display error message
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleGoogleSignUp = async () => {
// // //     setError(null);
// // //     setLoading(true);

// // //     try {
// // //       const result = await signInWithPopup(auth, provider);
// // //       // Use result.user for user details
// // //       console.log("User signed up with Google:", result.user);
// // //       // Redirect or perform any additional logic here
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError(err.message); // Display error message
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files?.[0];
// // //     if (file) {
// // //       setProfileImage(file);
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
// // //       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
// // //         Sign Up
// // //       </h2>
// // //       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
// // //         <div>
// // //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// // //             Full Name
// // //           </label>
// // //           <input
// // //             type="text"
// // //             value={fullName}
// // //             onChange={(e) => setFullName(e.target.value)}
// // //             required
// // //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// // //             Email
// // //           </label>
// // //           <input
// // //             type="email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// // //             Password
// // //           </label>
// // //           <input
// // //             type="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             required
// // //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// // //           />
// // //         </div>
// // //         {error && <p className="text-sm text-red-600">{error}</p>}
// // //         <button
// // //           type="submit"
// // //           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //         >
// // //           {loading ? (
// // //             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// // //           ) : (
// // //             <div className="text-white text-center h-5">Sign Up</div>
// // //           )}
// // //         </button>
// // //       </form>
// // //       <div className="flex items-center justify-center space-x-4 my-4">
// // //         <div className="h-px w-16 bg-gray-300"></div>
// // //         <span className="text-sm text-gray-500">OR</span>
// // //         <div className="h-px w-16 bg-gray-300"></div>
// // //       </div>
// // //       <button
// // //         onClick={handleGoogleSignUp}
// // //         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
// // //       >
// // //         {loading ? (
// // //           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// // //         ) : (
// // //           <div className="text-white">Sign Up with Google</div>
// // //         )}
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default SignUpForm;

// // "use client";
// // import React, { useState } from "react";
// // import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// // import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// // const SignUpForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [fullName, setFullName] = useState("");
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loadingEmail, setLoadingEmail] = useState(false);
// //   const [loadingGoogle, setLoadingGoogle] = useState(false);

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setLoadingEmail(true); // Set email loading to true
// //     setLoadingGoogle(false); // Ensure Google loading is false

// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       console.log("User signed up:", userCredential.user);
// //       // Redirect or perform any additional logic here
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message); // Display error message
// //     } finally {
// //       setLoadingEmail(false); // Reset email loading state
// //     }
// //   };

// //   const handleGoogleSignUp = async () => {
// //     setError(null);
// //     setLoadingGoogle(true); // Set Google loading to true
// //     setLoadingEmail(false); // Ensure email loading is false

// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       console.log("User signed up with Google:", result.user);
// //       // Redirect or perform any additional logic here
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message); // Display error message
// //     } finally {
// //       setLoadingGoogle(false); // Reset Google loading state
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       setProfileImage(file);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
// //       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
// //         Sign Up
// //       </h2>
// //       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             value={fullName}
// //             onChange={(e) => setFullName(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         {error && <p className="text-sm text-red-600">{error}</p>}
// //         <button
// //           type="submit"
// //           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         >
// //           {loadingEmail ? (
// //             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //           ) : (
// //             <div className="text-white text-center h-5">Sign Up</div>
// //           )}
// //         </button>
// //       </form>
// //       <div className="flex items-center justify-center space-x-4 my-4">
// //         <div className="h-px w-16 bg-gray-300"></div>
// //         <span className="text-sm text-gray-500">OR</span>
// //         <div className="h-px w-16 bg-gray-300"></div>
// //       </div>
// //       <button
// //         onClick={handleGoogleSignUp}
// //         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
// //       >
// //         {loadingGoogle ? (
// //           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //         ) : (
// //           <div className="text-white">Sign Up with Google</div>
// //         )}
// //       </button>
// //     </div>
// //   );
// // };

// // export default SignUpForm;

// // "use client";
// // import React, { useState } from "react";
// // import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// // import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// // import Toast from "./Toast"; // Adjust the import path according to your structure

// // const SignUpForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [fullName, setFullName] = useState("");
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loadingEmail, setLoadingEmail] = useState(false);
// //   const [loadingGoogle, setLoadingGoogle] = useState(false);
// //   const [toast, setToast] = useState({
// //     message: "",
// //     color: "",
// //     visible: false,
// //   });

// //   const showToast = (message, color) => {
// //     setToast({ message, color, visible: true });
// //     setTimeout(() => {
// //       setToast({ ...toast, visible: false });
// //     }, 4000); // Display for 3 seconds
// //   };

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setLoadingEmail(true);
// //     setLoadingGoogle(false);

// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       console.log("User signed up:", userCredential.user);
// //       showToast("Sign up successful!", "#4CAF50"); // Green color for success
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingEmail(false);
// //     }
// //   };

// //   const handleGoogleSignUp = async () => {
// //     setError(null);
// //     setLoadingGoogle(true);
// //     setLoadingEmail(false);

// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       console.log("User signed up with Google:", result.user);
// //       showToast("Google sign up successful!", "#4CAF50"); // Green color for success
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingGoogle(false);
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       setProfileImage(file);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
// //       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
// //         Sign Up
// //       </h2>
// //       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             value={fullName}
// //             onChange={(e) => setFullName(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         {error && <p className="text-sm text-red-600">{error}</p>}
// //         <button
// //           type="submit"
// //           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         >
// //           {loadingEmail ? (
// //             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //           ) : (
// //             <div className="text-white text-center h-5">Sign Up</div>
// //           )}
// //         </button>
// //       </form>
// //       <div className="flex items-center justify-center space-x-4 my-4">
// //         <div className="h-px w-16 bg-gray-300"></div>
// //         <span className="text-sm text-gray-500">OR</span>
// //         <div className="h-px w-16 bg-gray-300"></div>
// //       </div>
// //       <button
// //         onClick={handleGoogleSignUp}
// //         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
// //       >
// //         {loadingGoogle ? (
// //           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //         ) : (
// //           <div className="text-white">Sign Up with Google</div>
// //         )}
// //       </button>

// //       {/* Toast Notification */}
// //       {toast.visible && (
// //         <Toast
// //           message={toast.message}
// //           color={toast.color}
// //           onClose={() => setToast({ ...toast, visible: false })}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default SignUpForm;

// // "use client"; // Next.js client component
// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation"; // Import useRouter
// // import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithPopup,
// //   updateProfile,
// // } from "firebase/auth";
// // import Toast from "./Toast"; // Adjust the import path according to your structure

// // const SignUpForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [fullName, setFullName] = useState("");
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loadingEmail, setLoadingEmail] = useState(false);
// //   const [loadingGoogle, setLoadingGoogle] = useState(false);
// //   const [toast, setToast] = useState({
// //     message: "",
// //     color: "",
// //     visible: false,
// //   });

// //   const router = useRouter(); // Initialize the router

// //   const showToast = (message, color) => {
// //     setToast({ message, color, visible: true });
// //     setTimeout(() => {
// //       setToast({ ...toast, visible: false });
// //     }, 4000); // Display for 4 seconds
// //   };

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setLoadingEmail(true);
// //     setLoadingGoogle(false);

// //     try {
// //       // Create user with email and password
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       console.log("User signed up:", userCredential.user);

// //       // Update user profile with displayName and photoURL
// //       await updateProfile(userCredential.user, {
// //         displayName: fullName,
// //         photoURL: profileImage ? URL.createObjectURL(profileImage) : null, // Use image blob URL if provided
// //       });

// //       showToast("Sign up successful!", "#4CAF50"); // Green color for success

// //       // Redirect to the login page
// //       router.push("/login"); // Redirect to the login page
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingEmail(false);
// //     }
// //   };

// //   const handleGoogleSignUp = async () => {
// //     setError(null);
// //     setLoadingGoogle(true);
// //     setLoadingEmail(false);

// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       console.log("User signed up with Google:", result.user);
// //       showToast("Google sign up successful!", "#4CAF50"); // Green color for success
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingGoogle(false);
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       setProfileImage(file);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
// //       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
// //         Sign Up
// //       </h2>
// //       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             value={fullName}
// //             onChange={(e) => setFullName(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Profile Image
// //           </label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={handleImageChange}
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         {error && <p className="text-sm text-red-600">{error}</p>}
// //         <button
// //           type="submit"
// //           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         >
// //           {loadingEmail ? (
// //             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //           ) : (
// //             <div className="text-white text-center h-5">Sign Up</div>
// //           )}
// //         </button>
// //       </form>
// //       <div className="flex items-center justify-center space-x-4 my-4">
// //         <div className="h-px w-16 bg-gray-300"></div>
// //         <span className="text-sm text-gray-500">OR</span>
// //         <div className="h-px w-16 bg-gray-300"></div>
// //       </div>
// //       <button
// //         onClick={handleGoogleSignUp}
// //         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
// //       >
// //         {loadingGoogle ? (
// //           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //         ) : (
// //           <div className="text-white">Sign Up with Google</div>
// //         )}
// //       </button>

// //       {/* Toast Notification */}
// //       {toast.visible && (
// //         <Toast
// //           message={toast.message}
// //           color={toast.color}
// //           onClose={() => setToast({ ...toast, visible: false })}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default SignUpForm;

// // "use client"; // Next.js client component
// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation"; // Import useRouter
// // import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithPopup,
// //   updateProfile,
// // } from "firebase/auth";
// // import Toast from "../components/Toast"; // Adjust the import path according to your structure

// // const SignUpForm = ({ toggleMode }) => {
// //   // Accept toggleMode as a prop
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [fullName, setFullName] = useState("");
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loadingEmail, setLoadingEmail] = useState(false);
// //   const [loadingGoogle, setLoadingGoogle] = useState(false);
// //   const [toast, setToast] = useState({
// //     message: "",
// //     color: "",
// //     visible: false,
// //   });

// //   const router = useRouter(); // Initialize the router

// //   const showToast = (message, color) => {
// //     setToast({ message, color, visible: true });
// //     setTimeout(() => {
// //       setToast({ ...toast, visible: false });
// //     }, 4000); // Display for 4 seconds
// //   };

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setLoadingEmail(true);
// //     setLoadingGoogle(false);

// //     try {
// //       // Create user with email and password
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       console.log("User signed up:", userCredential.user);

// //       // Update user profile with displayName and photoURL
// //       await updateProfile(userCredential.user, {
// //         displayName: fullName,
// //         photoURL: profileImage ? URL.createObjectURL(profileImage) : null, // Use image blob URL if provided
// //       });

// //       showToast("Sign up successful!", "#4CAF50"); // Green color for success

// //       // Call toggleMode to switch to the login form
// //       toggleMode(); // Switch to login after sign-up
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingEmail(false);
// //     }
// //   };

// //   const handleGoogleSignUp = async () => {
// //     setError(null);
// //     setLoadingGoogle(true);
// //     setLoadingEmail(false);

// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       console.log("User signed up with Google:", result.user);
// //       showToast("Google sign up successful!", "#4CAF50"); // Green color for success
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingGoogle(false);
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       setProfileImage(file);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
// //       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
// //         Sign Up
// //       </h2>
// //       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             value={fullName}
// //             onChange={(e) => setFullName(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Profile Image
// //           </label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={handleImageChange}
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         {error && <p className="text-sm text-red-600">{error}</p>}
// //         <button
// //           type="submit"
// //           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         >
// //           {loadingEmail ? (
// //             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //           ) : (
// //             <div className="text-white text-center h-5">Sign Up</div>
// //           )}
// //         </button>
// //       </form>
// //       <div className="flex items-center justify-center space-x-4 my-4">
// //         <div className="h-px w-16 bg-gray-300"></div>
// //         <span className="text-sm text-gray-500">OR</span>
// //         <div className="h-px w-16 bg-gray-300"></div>
// //       </div>
// //       <button
// //         onClick={handleGoogleSignUp}
// //         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
// //       >
// //         {loadingGoogle ? (
// //           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //         ) : (
// //           <div className="text-white">Sign Up with Google</div>
// //         )}
// //       </button>

// //       {/* Toast Notification */}
// //       {toast.visible && (
// //         <Toast
// //           message={toast.message}
// //           color={toast.color}
// //           onClose={() => setToast({ ...toast, visible: false })}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default SignUpForm;

// // "use client"; // Next.js client component
// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation"; // Import useRouter
// // import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithPopup,
// //   updateProfile,
// // } from "firebase/auth";
// // import Toast from "../components/Toast"; // Adjust the import path according to your structure

// // const SignUpForm = ({ toggleMode }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [fullName, setFullName] = useState("");
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loadingEmail, setLoadingEmail] = useState(false);
// //   const [loadingGoogle, setLoadingGoogle] = useState(false);
// //   const [toast, setToast] = useState({
// //     message: "",
// //     color: "",
// //     visible: false,
// //   });

// //   const router = useRouter(); // Initialize the router

// //   const showToast = (message, color) => {
// //     setToast({ message, color, visible: true });
// //     setTimeout(() => {
// //       setToast((prev) => ({ ...prev, visible: false })); // Ensure previous toast state is used
// //     }, 4000); // Display for 4 seconds
// //   };

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setLoadingEmail(true);
// //     setLoadingGoogle(false);

// //     try {
// //       // Create user with email and password
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       console.log("User signed up:", userCredential.user);

// //       // Update user profile with displayName and photoURL
// //       await updateProfile(userCredential.user, {
// //         displayName: fullName,
// //         photoURL: profileImage ? URL.createObjectURL(profileImage) : null, // Use image blob URL if provided
// //       });

// //       showToast("Sign up successful!", "#4CAF50"); // Green color for success

// //       // Call toggleMode to switch to the login form
// //       toggleMode(); // Switch to login after sign-up
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingEmail(false);
// //     }
// //   };

// //   const handleGoogleSignUp = async () => {
// //     setError(null);
// //     setLoadingGoogle(true);
// //     setLoadingEmail(false);

// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       console.log("User signed up with Google:", result.user);
// //       showToast("Google sign up successful!", "#4CAF50"); // Green color for success
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message);
// //       showToast(err.message, "#F44336"); // Red color for error
// //     } finally {
// //       setLoadingGoogle(false);
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       setProfileImage(file);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
// //       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
// //         Sign Up
// //       </h2>
// //       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             value={fullName}
// //             onChange={(e) => setFullName(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-2 text-sm font-medium text-[#003366]">
// //             Profile Image
// //           </label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={handleImageChange}
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>
// //         {error && <p className="text-sm text-red-600">{error}</p>}
// //         <button
// //           type="submit"
// //           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         >
// //           {loadingEmail ? (
// //             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //           ) : (
// //             <div className="text-white text-center h-5">Sign Up</div>
// //           )}
// //         </button>
// //       </form>
// //       <div className="flex items-center justify-center space-x-4 my-4">
// //         <div className="h-px w-16 bg-gray-300"></div>
// //         <span className="text-sm text-gray-500">OR</span>
// //         <div className="h-px w-16 bg-gray-300"></div>
// //       </div>
// //       <button
// //         onClick={handleGoogleSignUp}
// //         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
// //       >
// //         {loadingGoogle ? (
// //           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
// //         ) : (
// //           <div className="text-white">Sign Up with Google</div>
// //         )}
// //       </button>

// //       {/* Toast Notification */}
// //       {toast.visible && (
// //         <Toast
// //           message={toast.message}
// //           color={toast.color}
// //           onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
// //         />
// //       )}
// //       {/* Toggle to Login Form */}
// //       <div className="text-center mt-4">
// //         <p className="text-sm text-gray-500">
// //           Already have an account?{" "}
// //           <button
// //             onClick={toggleMode} // Call toggleMode to switch to login form
// //             className="text-blue-600 hover:underline"
// //           >
// //             Log in
// //           </button>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUpForm;

// "use client"; // Next.js client component
// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter
// import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   updateProfile,
// } from "firebase/auth";
// import Toast from "../components/Toast"; // Adjust the import path according to your structure

// const SignUpForm = ({ toggleMode }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [profileImage, setProfileImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [loadingEmail, setLoadingEmail] = useState(false);
//   const [loadingGoogle, setLoadingGoogle] = useState(false);
//   const [toast, setToast] = useState({
//     message: "",
//     color: "",
//     visible: false,
//   });

//   const router = useRouter(); // Initialize the router

//   const showToast = (message, color) => {
//     setToast({ message, color, visible: true });
//     setTimeout(() => {
//       setToast((prev) => ({ ...prev, visible: false })); // Ensure previous toast state is used
//     }, 4000); // Display for 4 seconds
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoadingEmail(true);
//     setLoadingGoogle(false);

//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("User signed up:", userCredential.user);

//       // Update user profile with displayName and photoURL
//       await updateProfile(userCredential.user, {
//         displayName: fullName,
//         photoURL: profileImage ? URL.createObjectURL(profileImage) : null, // Use image blob URL if provided
//       });

//       showToast("Sign up successful!", "#4CAF50"); // Green color for success

//       // Use setTimeout to delay the toggle to login
//       setTimeout(() => {
//         toggleMode(); // Switch to login after sign-up
//       }, 4000); // Adjust the delay time as needed
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//       showToast(err.message, "#F44336"); // Red color for error
//     } finally {
//       setLoadingEmail(false);
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     setError(null);
//     setLoadingGoogle(true);
//     setLoadingEmail(false);

//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log("User signed up with Google:", result.user);
//       showToast("Google sign up successful!", "#4CAF50"); // Green color for success
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//       showToast(err.message, "#F44336"); // Red color for error
//     } finally {
//       setLoadingGoogle(false);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setProfileImage(file);
//     }
//   };

//   return (
//     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
//       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
//         Sign Up
//       </h2>
//       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Full Name
//           </label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Email
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Password
//           </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Profile Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         {error && <p className="text-sm text-red-600">{error}</p>}
//         <button
//           type="submit"
//           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           {loadingEmail ? (
//             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
//           ) : (
//             <div className="text-white text-center h-5">Sign Up</div>
//           )}
//         </button>
//       </form>
//       <div className="flex items-center justify-center space-x-4 my-4">
//         <div className="h-px w-16 bg-gray-300"></div>
//         <span className="text-sm text-gray-500">OR</span>
//         <div className="h-px w-16 bg-gray-300"></div>
//       </div>
//       <button
//         onClick={handleGoogleSignUp}
//         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
//       >
//         {loadingGoogle ? (
//           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
//         ) : (
//           <div className="text-white">Sign Up with Google</div>
//         )}
//       </button>

//       {/* Toast Notification */}
//       {toast.visible && (
//         <Toast
//           message={toast.message}
//           color={toast.color}
//           onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
//         />
//       )}
//     </div>
//   );
// };

// export default SignUpForm;

// "use client"; // Next.js client component
// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter
// import { auth, provider } from "../lib/firebase"; // Ensure you import provider
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   updateProfile,
// } from "firebase/auth";
// import Toast from "../components/Toast"; // Adjust the import path according to your structure

// const SignUpForm = ({ toggleMode }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [profileImage, setProfileImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [loadingEmail, setLoadingEmail] = useState(false);
//   const [loadingGoogle, setLoadingGoogle] = useState(false);
//   const [toast, setToast] = useState({
//     message: "",
//     color: "",
//     visible: false,
//   });

//   const router = useRouter(); // Initialize the router

//   const showToast = (message, color) => {
//     setToast({ message, color, visible: true });
//     setTimeout(() => {
//       setToast((prev) => ({ ...prev, visible: false })); // Ensure previous toast state is used
//     }, 4000); // Display for 4 seconds
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoadingEmail(true);
//     setLoadingGoogle(false);

//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("User signed up:", userCredential.user);

//       // Update user profile with displayName and photoURL
//       await updateProfile(userCredential.user, {
//         displayName: fullName,
//         photoURL: profileImage ? URL.createObjectURL(profileImage) : null,
//       });

//       showToast("Sign up successful!", "#4CAF50"); // Show success toast

//       // Use setTimeout to delay the toggle to login
//       setTimeout(() => {
//         toggleMode(); // Switch to login after sign-up
//       }, 4000); // Adjust the delay time as needed
//     } catch (err) {
//       console.error(err);
//       // Check for specific Firebase error codes
//       if (err.code === "auth/email-already-in-use") {
//         setError("This email address is already in use.");
//         showToast("This email address is already in use.", "#F44336");
//       } else {
//         setError(err.message);
//         showToast(err.message, "#F44336"); // Show error toast for other errors
//       }
//     } finally {
//       setLoadingEmail(false);
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     setError(null);
//     setLoadingGoogle(true);
//     setLoadingEmail(false);

//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log("User signed up with Google:", result.user);
//       showToast("Google sign up successful!", "#4CAF50"); // Green color for success
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//       showToast(err.message, "#F44336"); // Red color for error
//     } finally {
//       setLoadingGoogle(false);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setProfileImage(file);
//     }
//   };

//   return (
//     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
//       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
//         Sign Up
//       </h2>
//       <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Full Name
//           </label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Email
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Password
//           </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-[#003366]">
//             Profile Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         {error && <p className="text-sm text-red-600">{error}</p>}
//         <button
//           type="submit"
//           className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           {loadingEmail ? (
//             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
//           ) : (
//             <div className="text-white text-center h-5">Sign Up</div>
//           )}
//         </button>
//       </form>
//       <div className="flex items-center justify-center space-x-4 my-4">
//         <div className="h-px w-16 bg-gray-300"></div>
//         <span className="text-sm text-gray-500">OR</span>
//         <div className="h-px w-16 bg-gray-300"></div>
//       </div>
//       <button
//         onClick={handleGoogleSignUp}
//         className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
//       >
//         {loadingGoogle ? (
//           <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
//         ) : (
//           <div className="text-white text-center h-5">Sign Up with Google</div>
//         )}
//       </button>
//       <p className="text-sm text-center text-gray-500">
//         Already have an account?{" "}
//         <button
//           type="button"
//           onClick={toggleMode}
//           className="text-blue-600 hover:underline"
//         >
//           Login
//         </button>
//       </p>
//       {toast.visible && (
//         <Toast
//           message={toast.message}
//           color={toast.color}
//           close={() => setToast((prev) => ({ ...prev, visible: false }))}
//         />
//       )}
//     </div>
//   );
// };

// export default SignUpForm;

"use client"; // Next.js client component
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { auth, provider } from "../lib/firebase"; // Ensure you import provider
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import Toast from "../components/Toast"; // Adjust the import path according to your structure

const SignUpForm = ({ toggleMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    color: "",
    visible: false,
  });

  const router = useRouter(); // Initialize the router

  const showToast = (message, color) => {
    setToast({ message, color, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false })); // Ensure previous toast state is used
    }, 4000); // Display for 4 seconds
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setLoadingEmail(true);
    setLoadingGoogle(false);

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);

      // Update user profile with displayName and photoURL
      await updateProfile(userCredential.user, {
        displayName: fullName,
        photoURL: profileImage ? URL.createObjectURL(profileImage) : null,
      });

      showToast("Sign up successful!", "#4CAF50"); // Show success toast

      // Use setTimeout to delay the toggle to login
      setTimeout(() => {
        toggleMode(); // Switch to login after sign-up
      }, 4000); // Adjust the delay time as needed
    } catch (err) {
      console.error(err);
      // Check for specific Firebase error codes
      if (err.code === "auth/email-already-in-use") {
        setError("This email address is already in use.");
        showToast("This email address is already in use.", "#F44336");
      } else {
        setError(err.message);
        showToast(err.message, "#F44336"); // Show error toast for other errors
      }
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    setLoadingGoogle(true);
    setLoadingEmail(false);

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed up with Google:", result.user);
      showToast("Google sign up successful!", "#4CAF50"); // Green color for success
    } catch (err) {
      console.error(err);
      setError(err.message);
      showToast(err.message, "#F44336"); // Red color for error
    } finally {
      setLoadingGoogle(false);
    }
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setProfileImage(file);
  //   }
  // };

  return (
    <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] ">
        Sign Up
      </h2>
      <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-[#003366]">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-[#003366]">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-[#003366]">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {/* <div>
          <label className="block mb-2 text-sm font-medium text-[#003366]">
            Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div> */}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loadingEmail ? (
            <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
          ) : (
            <div className="text-white text-center h-5">Sign Up</div>
          )}
        </button>
      </form>
      <div className="flex items-center justify-center space-x-4 my-4">
        <div className="h-px w-16 bg-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="h-px w-16 bg-gray-300"></div>
      </div>
      <button
        onClick={handleGoogleSignUp}
        className="w-full flex justify-center px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {loadingGoogle ? (
          <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
        ) : (
          <div className="text-white text-center h-5">Sign Up with Google</div>
        )}
      </button>
      {/* <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <button
          type="button"
          onClick={toggleMode}
          className="text-blue-600 hover:underline"
        >
          Login
        </button>
      </p> */}
      {toast.visible && (
        <Toast
          message={toast.message}
          color={toast.color}
          close={() => setToast((prev) => ({ ...prev, visible: false }))}
        />
      )}
    </div>
  );
};

export default SignUpForm;
