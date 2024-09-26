// import React from "react";

// const Toast = ({ message, color, onClose }) => {
//   return (
//     <div
//       className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg text-white transition-opacity duration-300`}
//       style={{ backgroundColor: color }}
//     >
//       {message}
//       <button
//         onClick={onClose}
//         className="absolute top-1 right-1 text-white focus:outline-none"
//       >
//         &times;
//       </button>
//     </div>
//   );
// };

// export default Toast;

import React from "react";

const Toast = ({ message, color, onClose }) => {
  return (
    <div
      className={`fixed top-4 left-4 p-4 rounded shadow-lg text-white transition-opacity duration-300`}
      style={{ backgroundColor: color }}
    >
      {message}
      <button
        onClick={onClose}
        className="absolute top-1 right-1 text-white focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
