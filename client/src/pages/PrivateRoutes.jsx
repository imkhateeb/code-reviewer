import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  return !localStorage.getItem("github_user_token") ? (
    <Navigate to="/auth" />
  ) : (
    <Outlet />
  );
}
