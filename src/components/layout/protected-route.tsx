import { Navigate, Outlet } from "react-router-dom";
import { AccessDenied } from "@/pages/access-denied";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const token = localStorage.getItem("accessToken");
  const userStr = localStorage.getItem("user");
  let user = null;
  
  if (userStr) {
    try {
      user = JSON.parse(userStr);
    } catch (e) {
      console.error(e, "Failed to parse user from local storage");
    }
  }

  // If not authenticated, redirect to login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin' && user.kycStatus === 'rejected' && window.location.pathname !== '/dashboard/rejected') {
    return <Navigate to="/dashboard/rejected" replace />;
  }

  // If authenticated but role doesn't match, show Access Denied page
  if (!allowedRoles.includes(user.role)) {
    return <AccessDenied />;
  }

  // Valid user, render nested routes
  return <Outlet />;
}
