import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // No admin token → go to login
  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  // Token exists → allow access
  return children;
};

export default ProtectedRoute;