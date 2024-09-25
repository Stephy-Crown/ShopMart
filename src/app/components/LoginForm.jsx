// // // src/app/components/LoginForm.js
// // "use client";

// // import { useState } from "react";

// // const LoginForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess("");

// //     // Simple validation
// //     if (!email || !password) {
// //       setError("Both fields are required.");
// //       return;
// //     }

// //     // Simulate API call
// //     try {
// //       console.log("Logged in:", { email, password });
// //       setSuccess("Login successful! Redirecting...");
// //       // Redirect logic can be added here
// //     } catch (err) {
// //       setError("Login failed. Please try again.");
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="max-w-md mx-auto p-4 bg-white rounded shadow"
// //     >
// //       <h2 className="text-xl font-bold mb-4">Login</h2>
// //       {error && <p className="text-red-500">{error}</p>}
// //       {success && <p className="text-green-500">{success}</p>}
// //       <div className="mb-4">
// //         <label className="block mb-1">Email:</label>
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="border rounded w-full px-3 py-2"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block mb-1">Password:</label>
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="border rounded w-full px-3 py-2"
// //           required
// //         />
// //       </div>
// //       <button
// //         type="submit"
// //         className="bg-blue-500 text-white px-4 py-2 rounded"
// //       >
// //         Login
// //       </button>
// //     </form>
// //   );
// // };

// // export default LoginForm;
// "use client";
// import React, { useState } from "react";
// // import { auth } from "../lib/firebase";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("Login successful!");
//       setLoading(false);
//       router.push("/dashboard");
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg mt-20">
//       <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] lg:pt-4">
//         Login
//       </h2>
//       <form
//         onSubmit={handleLogin}
//         className="space-y-4 lg:space-y-6 pb-11 lg:pb-10"
//       >
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-700">
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
//           <label className="block mb-2 text-sm font-medium text-gray-700">
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
//         {error && <p className="text-sm text-red-600">Invalid credentials</p>}
//         <button
//           type="submit"
//           className="w-full flex justify-center px-4 pt-2 pb-3 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           {loading ? (
//             <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
//           ) : (
//             <div className="text-white text-center h-5">Login</div>
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// import React, { useState } from "react";
// // import { auth } from "../lib/firebase"; // Make sure this path is correct
// // import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/navigation"; // Use this import for App Router

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter(); // Ensure this is in the correct context

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     // try {
//     //   await signInWithEmailAndPassword(auth, email, password);
//     //   console.log("Login successful!");
//     //   setLoading(false);
//     //   router.push("/dashboard"); // Redirect to dashboard after login
//     // } catch (err) {
//     //   setError(err.message);
//     //   setLoading(false);
//     // }
//   };

//   return (
//     <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg">
//       <h2 className="text-lg font-bold text-center">Login</h2>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full border border-gray-300 rounded"
//           />
//         </div>
//         {error && <p className="text-red-600">{error}</p>}
//         <button type="submit" className="w-full bg-blue-500 text-white rounded">
//           {loading ? "Loading..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";
// import { auth } from "../lib/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   console.log("Login successful!");
    //   router.push("/dashboard");
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded-xl shadow-lg mt-20">
      <h2 className="text-lg lg:text-2xl font-bold text-center text-[#003366] lg:pt-4">
        Login
      </h2>
      <form
        onSubmit={handleLogin}
        className="space-y-4 lg:space-y-6 pb-11 lg:pb-10"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
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
          <label className="block mb-2 text-sm font-medium text-gray-700">
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
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full flex justify-center px-4 pt-2 pb-3 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loading ? (
            <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
          ) : (
            <div className="text-white text-center h-5">Login</div>
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
