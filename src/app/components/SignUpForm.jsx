"use client";
import React, { useState } from "react";
// import { auth } from "../lib/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   console.log("Sign up successful!");
    //   setLoading(false);
    //   router.push("/dashboard");
    // } catch (err) {
    //   setError(err.message);
    //   setLoading(false);
    // }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
    }
  };

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

        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full flex justify-center px-4 py-2 font-medium text-white hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loading ? (
            <div className="border-2 border-gray-300 border-t-2 border-t-transparent rounded-full w-5 h-5 spinner"></div>
          ) : (
            <div className="text-white text-center h-5">Sign up</div>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
