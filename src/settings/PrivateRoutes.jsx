import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const [user, setUser] = useState(true);
  return <>{user ? children : <Navigate to={"/register"} replace />}</>;
}

export default PrivateRoutes;
