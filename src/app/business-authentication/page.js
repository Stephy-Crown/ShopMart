// // "use client";
// // import React, { useState } from "react";
// // import LoginForm from "../components/LoginForm"; // Ensure this path is correct
// // import SignUpForm from "../components/SignUpForm"; // Ensure this path is correct
// // // import GoBackButton from "../components/GoBackButton"; // Ensure this path is correct

// // const AuthPage = () => {
// //   const [isSignUp, setIsSignUp] = useState(false);

// //   const toggleMode = () => {
// //     setIsSignUp(!isSignUp);
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 relative">
// //       {/* <GoBackButton fallbackUrl="/" /> Use fallbackUrl if needed */}
// //       {isSignUp ? <SignUpForm /> : <LoginForm />}
// //       <div className="text-center">
// //         <button
// //           onClick={toggleMode}
// //           className="mt-4 text-[#003366] hover:text-[#21578e] hover:underline"
// //         >
// //           {isSignUp
// //             ? "Already have an account? Login"
// //             : "Don't have an account? Sign Up"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AuthPage;

// "use client";
// import React, { useState } from "react";
// import LoginForm from "../components/LoginForm"; // Ensure this path is correct
// import SignUpForm from "../components/SignUpForm"; // Ensure this path is correct

// const AuthPage = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const toggleMode = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 relative">
//       {isSignUp ? <SignUpForm toggleMode={toggleMode} /> : <LoginForm />}
//       <div className="text-center">
//         <button
//           onClick={toggleMode}
//           className="mt-4 text-[#003366] hover:text-[#21578e] hover:underline"
//         >
//           {isSignUp
//             ? "Already have an account? Login"
//             : "Don't have an account? Sign Up"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

"use client";
import React, { useState } from "react";
import BusinessLoginForm from "../components/BusinessLoginForm"; // Ensure this path is correct
import BusinessSignUpForm from "../components/BusinessSignUpForm"; // Ensure this path is correct

const BusinessAuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp((prev) => !prev); // Use the previous state to toggle
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 relative">
      {/* Pass toggleMode to SignUpForm */}
      {isSignUp ? (
        <BusinessLoginForm toggleMode={toggleMode} />
      ) : (
        <BusinessSignUpForm toggleMode={toggleMode} />
      )}
      <div className="text-center">
        {/* <button
          onClick={toggleMode}
          className="mt-4 text-[#709c70] hover:text-[#21578e] hover:underline"
        > */}
        {isSignUp ? (
          <div className="text-center py-2">
            Don&apos;t have an account?
            <button onClick={toggleMode} className="underline">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="text-center">
            Already have an account?{" "}
            <button onClick={toggleMode} className="underline">
              Login
            </button>
          </div>
          // "Don't have an account? Sign Up"
        )}
        {/* </button> */}
      </div>
    </div>
  );
};

export default BusinessAuthPage;
