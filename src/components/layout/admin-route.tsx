import { Navigate, Outlet } from "react-router-dom";

export function AdminRoute() {
  const token = localStorage.getItem("accessToken");
  const userStr = localStorage.getItem("user");
  let user = null;
  
  if (userStr) {
    try {
      user = JSON.parse(userStr);
    } catch (e) {
      console.error(e,"Failed to parse user from local storage");
    }
  }

  // Check if authenticated and is admin
  if (!token || !user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
