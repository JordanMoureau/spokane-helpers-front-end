import React from "react";
import AdminNav from "../Components/AdminNav";
import Dashboard from "../Components/Dashboard";

export default function ContentManagement({ setIsAuthenticated }) {
  console.log(
    "debug: is authenticated received at content manage?",
    setIsAuthenticated
  );

  return (
    <div className="bg-gray-100 text-gray-900">
      <AdminNav setIsAuthenticated={setIsAuthenticated} />
      <Dashboard />
    </div>
  );
}
