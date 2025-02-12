import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate(); // ✅ Enables navigation

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; 2025 Spokane Helpers. All rights reserved.
        </p>
        <button
          onClick={() => navigate("/admin-login")} // ✅ Redirects to login page
          className="text-brand-peach hover:underline"
        >
          Admin Login
        </button>
      </div>
    </footer>
  );
}
