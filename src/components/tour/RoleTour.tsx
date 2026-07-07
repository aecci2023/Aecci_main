import { useEffect, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useAuth } from "@/hooks/useAuth";

type RoleTourProps = {
  role: "user" | "admin" | "partner";
};

export function RoleTour({ role }: RoleTourProps) {
  const { user } = useAuth();
  const hasRun = useRef(false);

  useEffect(() => {
    // Only run if the user hasn't completed the tour and it hasn't run in this session
    if (!user || user.hasCompletedTour || hasRun.current) return;

    hasRun.current = true;

    // Determine steps based on role
    let steps: any[] = [];
    if (role === "user") {
      steps = [
        {
          element: '[data-sidebar="sidebar"]', // Highlighting the generic sidebar container
          popover: {
            title: "Welcome to your Dashboard!",
            description: "Here you can navigate through all your tools, applications, and services.",
            side: "right",
            align: "start"
          }
        },
        {
          element: '[data-sidebar="header"]', // App Title/Logo area
          popover: {
            title: "Dashboard Overview",
            description: "Click here anytime to return to the main overview page.",
            side: "bottom",
            align: "center"
          }
        },
        {
          element: '[data-sidebar="footer"]', // User Profile area
          popover: {
            title: "Profile & Settings",
            description: "Access your account settings, preferences, and sign out from here.",
            side: "top",
            align: "start"
          }
        }
      ];
    } else if (role === "admin") {
      steps = [
        {
          element: '[data-sidebar="sidebar"]',
          popover: {
            title: "Admin Control Center",
            description: "Welcome to the Admin Dashboard. All your management modules are located here.",
            side: "right",
            align: "start"
          }
        },
        {
          element: 'a[href="/admin/verifications"]', // Assuming this link exists
          popover: {
            title: "Verifications",
            description: "Review and approve incoming verification requests from users and partners.",
            side: "right",
            align: "center"
          }
        },
        {
          element: 'a[href="/admin/users"]',
          popover: {
            title: "User Management",
            description: "Manage all registered users, individuals, and businesses on the platform.",
            side: "right",
            align: "center"
          }
        }
      ];
    } else if (role === "partner") {
      steps = [
        {
          element: '[data-sidebar="sidebar"]',
          popover: {
            title: "Partner Workspace",
            description: "Navigate through your sessions, engagements, and scheduled activities.",
            side: "right",
            align: "start"
          }
        },
        {
          element: 'a[href="/partner/sessions/upcoming"]',
          popover: {
            title: "Upcoming Sessions",
            description: "Keep track of your scheduled deal room sessions with clients.",
            side: "right",
            align: "center"
          }
        },
        {
          element: '[data-sidebar="footer"]',
          popover: {
            title: "Availability & Settings",
            description: "Update your availability schedule and profile details here.",
            side: "top",
            align: "start"
          }
        }
      ];
    }

    if (steps.length > 0) {
      const driverObj = driver({
        showProgress: true,
        allowClose: false, // Force them to complete or dismiss via buttons
        steps: steps,
        onDestroyed: () => {
          // Mark tour as complete when destroyed (finished or skipped)
          completeTourInBackend();
        }
      });
      
      // Add a slight delay to ensure DOM is fully rendered
      setTimeout(() => {
         driverObj.drive();
      }, 500);
    }
  }, [role, user]);

  const completeTourInBackend = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:8000"}/api/users/complete-tour`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Update local storage user object so it doesn't re-trigger
        const userStr = localStorage.getItem("user");
        if (userStr) {
          const userObj = JSON.parse(userStr);
          userObj.hasCompletedTour = true;
          localStorage.setItem("user", JSON.stringify(userObj));
        }
      }
    } catch (error) {
      console.error("Failed to mark tour as complete", error);
    }
  };

  return null; // This component doesn't render any UI itself
}
