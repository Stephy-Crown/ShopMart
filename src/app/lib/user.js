// lib/user.js
// import { db } from "../lib/firebase"; // Adjust this path based on your file structure
// import { doc, getDoc } from "firebase/firestore";

// export const fetchUserProfile = async (userId) => {
//   const userDoc = await getDoc(doc(db, "users", userId)); // Assuming user data is stored in a 'users' collection
//   return userDoc.exists() ? userDoc.data() : null;
// };
// lib/user.js
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../lib/firebase";

// export const fetchUserProfile = async (userId) => {
//   const userDocRef = doc(db, "users", userId); // Reference to the user's document
//   const userDoc = await getDoc(userDocRef);

//   if (userDoc.exists()) {
//     return userDoc.data(); // Return user data if it exists
//   } else {
//     console.error("No such document in Firestore!"); // Log error if document not found
//     return null; // Return null if no document is found
//   }
// };

import { getDatabase, ref, get } from "firebase/database";
import { db } from "../lib/firebase"; // Ensure db is the Realtime Database instance

export const fetchUserProfile = async (userId) => {
  try {
    const dbRef = ref(db, `users/${userId}`); // Reference to the user's data
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return snapshot.val(); // Return user data if it exists
    } else {
      console.error("No such document in Realtime Database!"); // Log error if data not found
      return null; // Return null if no data is found
    }
  } catch (error) {
    console.error("Error fetching user data:", error); // Log any errors
    return null; // Return null if there is an error
  }
};
