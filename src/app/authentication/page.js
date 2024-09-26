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
import LoginForm from "../components/LoginForm"; // Ensure this path is correct
import SignUpForm from "../components/SignUpForm"; // Ensure this path is correct

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp((prev) => !prev); // Use the previous state to toggle
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 relative">
      {/* Pass toggleMode to SignUpForm */}
      {isSignUp ? (
        <SignUpForm toggleMode={toggleMode} />
      ) : (
        <LoginForm toggleMode={toggleMode} />
      )}
      <div className="text-center">
        <button
          onClick={toggleMode}
          className="mt-4 text-[#003366] hover:text-[#21578e] hover:underline"
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
