import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ element }) {
  const [user, setUser] = useState(true);
  return <>{user ? element : <Navigate to={"/register"} replace />}</>;
}

export default PrivateRoutes;
