import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContentManagement from "./Pages/ContentManagement";
import NewsPage from "./Pages/News";
import AdminLoginPage from "./Pages/AdminLoginPage"; // ✅ New dedicated login page
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // ✅ Check if the user is logged in
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />

        {/* ✅ Dedicated Login Page */}
        <Route
          path="/admin-login"
          element={<AdminLoginPage setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* ✅ Protected Route for Content Management */}
        <Route
          path="/content-management"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ContentManagement setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
