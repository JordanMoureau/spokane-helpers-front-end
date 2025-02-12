import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />; // ✅ Redirect to login
  }
  return children;
}
