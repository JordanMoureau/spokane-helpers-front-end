import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./index.css";
import ContentManagement from "./Pages/ContentManagement";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/content-management" element={<ContentManagement />} />
        </Routes>
      </div>
    </Router>
  );
}
