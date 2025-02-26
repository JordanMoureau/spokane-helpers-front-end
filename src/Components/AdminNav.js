import React from "react";
import { PlusCircle } from "lucide-react";

export default function AdminNav({ setIsAuthenticated, setShowNewPost }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-deep text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left: Admin Panel Title */}
        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* Right: Navigation Links */}
        <div className="flex space-x-6 flex items-center">
          <button
            onClick={() => setShowNewPost(true)} // ✅ Open the modal
            className="hover:underline flex flex-row gap-2 items-center"
          >
            <PlusCircle className="w-5 h-5 text-white" /> New Post
          </button>
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
