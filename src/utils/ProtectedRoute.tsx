import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const isAuth = localStorage.getItem("auth");

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
