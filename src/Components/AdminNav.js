import React from "react";
import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <nav className="bg-deep text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left: Admin Panel Title */}
        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* Right: Navigation Links */}
        <div className="flex space-x-6">
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
            onClick={() => (window.location.href = "/")}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
