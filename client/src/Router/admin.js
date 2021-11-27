import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  console.log('token'+ auth);

  return auth != null ? children : <Navigate to="/Login" />;
}

export default PrivateRoute;
