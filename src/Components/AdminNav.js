import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminNav({ setIsAuthenticated }) {
  // ✅ Proper props declaration
  const navigate = useNavigate(); // ✅ Correctly placed outside of props

  const handleLogout = () => {
    console.log("Logging out..."); // ✅ Step 1: Confirm function runs

    localStorage.removeItem("token"); // ✅ Step 2: Remove JWT token
    console.log("Token removed:", localStorage.getItem("token")); // ✅ Step 3: Verify token removal

    setIsAuthenticated(false); // ✅ Step 4: Update authentication state
    console.log("Authentication status set to false"); // ✅ Step 5: Confirm state update
  };

  console.log("debug is auth at admin nav?", setIsAuthenticated);

  return (
    <nav className="bg-deep text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left: Admin Panel Title */}
        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* Right: Navigation Links */}
        <div className="flex space-x-6 flex items-center ">
          <Link to="/content-management" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/manage-pages" className="hover:underline">
            Manage Pages
          </Link>
          <Link to="/manage-users" className="hover:underline">
            Manage Users
          </Link>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
