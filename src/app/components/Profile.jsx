// src/app/components/Profile.js
"use client";

const Profile = () => {
  // Simulate user data
  const user = {
    email: "user@example.com",
    orderHistory: ["Order 1", "Order 2", "Order 3"],
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="mb-2">Email: {user.email}</p>
      <h2 className="text-xl mt-4">Order History:</h2>
      <ul className="list-disc ml-5">
        {user.orderHistory.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
