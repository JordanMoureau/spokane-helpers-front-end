import React, { useState } from "react";
import AdminLoginPopup from "./AdminLoginPopup";

export default function Footer() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-6 ">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">
            &copy; 2025 Spokane Helpers. All rights reserved.
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="text-brand-peach hover:underline"
          >
            Admin Login
          </button>
        </div>
      </footer>

      {showLogin && (
        <AdminLoginPopup
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
}
