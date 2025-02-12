import React from "react";
import AdminLoginPopup from "../Components/AdminLoginPopup";

export default function AdminLoginPage({ setIsAuthenticated }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <AdminLoginPopup
        setIsAuthenticated={setIsAuthenticated}
        onClose={() => {}}
      />
    </div>
  );
}
