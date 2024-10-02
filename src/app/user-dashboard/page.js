"use client";
import Image from "next/image";
import { useState } from "react";

export default function UserDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    //   <div className="mb-4 text-center">
    //   <h2 className="text-xl font-bold">User Name</h2>
    //   <p className="text-sm text-gray-500">user@example.com</p>
    // </div>
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">User Name</h2>
            <p className="text-sm text-gray-500">user@example.com</p>
          </div> */}
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex lg:w-1/4 bg-white shadow-lg p-4">
       

        <div className="w-full">
          {/* Navigation Links (Now at the top) */}
          <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">User Name</h2>
          <p className="text-sm text-gray-500">user@example.com</p>
        </div>
          <nav className="mb-8">
            <ul>
              <li className="mb-4">
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Orders
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Account Settings
                </a>
              </li>
            </ul>
            <div className="mt-8">
                  <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                    Logout
                  </button>
                </div>
          </nav>

          {/* Profile Section */}
          {/* <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">User Name</h2>
            <p className="text-sm text-gray-500">user@example.com</p>
          </div> */}

          {/* Profile Background */}
          {/* <div className="mb-8">
            <Image
              src="/profile-bg.jpg"
              alt="Profile Background"
              width={686}
              height={1536}
              className="w-full rounded-lg"
            />
          </div> */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">ShopMart</h1>
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Active Shipments</h2>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Completed Orders</h2>
            <p className="text-2xl font-bold">105</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <ul className="space-y-4">
            <li className="bg-white shadow-lg p-4 rounded-lg">
              <div className="flex justify-between">
                <p>Order #12345</p>
                <span className="text-sm text-gray-500">Delivered</span>
              </div>
            </li>
            <li className="bg-white shadow-lg p-4 rounded-lg">
              <div className="flex justify-between">
                <p>Order #12346</p>
                <span className="text-sm text-gray-500">In Transit</span>
              </div>
            </li>
          </ul>
        </div>
      </main>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <aside className="lg:hidden fixed inset-0 z-50 bg-white shadow-lg p-4 w-3/4">
          {/* Profile Section */}
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">User Name</h2>
            <p className="text-sm text-gray-500">user@example.com</p>

            <nav className="mt-4">
              <ul>
                <li className="mb-4">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Dashboard
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Orders
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Account Settings
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Profile
                  </a>
                </li>
                {/* Added History Link */}
                <li className="mb-4">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    History
                  </a>
                </li>
                {/* Logout Button */}
                <div className="mt-8">
                  <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                    Logout
                  </button>
                </div>
              </ul>
            </nav>
          </div>

          {/* Profile Background */}
          {/* <div className="mb-8">
            <Image
              src="/profile-bg.jpg"
              alt="Profile Background"
              width={686}
              height={1536}
              className="w-full rounded-lg"
            />
          </div> */}

          {/* Navigation Links */}
        </aside>
      )}
      <footer className="bg-white text-gray-600 w-full md:hidden block p-4 mt-4 shadow-inner text-center">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
