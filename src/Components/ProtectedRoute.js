import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  isAuthenticated,
  setIsAuthenticated,
  children,
}) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children
    ? React.cloneElement(children, { setIsAuthenticated }) // ✅ Pass down setIsAuthenticated
    : null;
}
