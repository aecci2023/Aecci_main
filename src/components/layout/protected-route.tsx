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

  if (user.role !== "admin") {
    const isImporter = user.role === "importer";
    const verificationPath = isImporter ? "/importer/verification" : "/dashboard/verification";
    const rejectedPath = isImporter ? "/importer/rejected" : "/dashboard/rejected";

    if (
      user.verificationStatus === "pending_verification" &&
      window.location.pathname !== verificationPath
    ) {
      return <Navigate to={verificationPath} replace />;
    }
    if (
      user.verificationStatus === "rejected" &&
      window.location.pathname !== rejectedPath
    ) {
      return <Navigate to={rejectedPath} replace />;
    }
  }

  // If authenticated but role doesn't match, show Access Denied page
  if (!allowedRoles.includes(user.role)) {
    return <AccessDenied />;
  }

  // Valid user, render nested routes
  return <Outlet />;
}
