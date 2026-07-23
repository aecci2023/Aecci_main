import { useEffect, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useAuth } from "@/hooks/useAuth";

type RoleTourProps = {
  role: "exporter" | "admin" | "partner" | "agent" | "importer";
};

export function RoleTour({ role }: RoleTourProps) {
  const { user } = useAuth();
  const hasRun = useRef(false);

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

  useEffect(() => {
    // Only run if the user hasn't completed the tour and it hasn't run in this session
    if (!user || user.hasCompletedTour || hasRun.current) return;

    hasRun.current = true;

    // Determine steps based on role
    let steps: any[] = [];
    if (role === "exporter") {
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
            title: "Welcome to AECCI Partner Workspace 👋",
            description:
              "Thanks for joining. Before you can host deal rooms, let's complete your profile together. This quick tour shows you exactly where to go and what to fill in.",
            side: "right",
            align: "start",
          },
        },
        {
          element: 'a[href="/partner/dashboard"]',
          popover: {
            title: "1. Your Dashboard",
            description:
              "This is your home base. The banner at the top always shows your profile completion — you must reach 100% to start receiving client sessions.",
            side: "right",
            align: "start",
          },
        },
        {
          element: 'a[href="/partner/profile"]',
          popover: {
            title: "2. Complete My Profile",
            description:
              "Start here. Fill in your Professional Profile (name, country, title, expertise) and your Partner Brief (photo, languages, and a short bio). These make up most of your completion.",
            side: "right",
            align: "start",
          },
        },
        {
          element: 'a[href="/partner/expertise"]',
          popover: {
            title: "3. Add Your Expertise",
            description:
              "List the sectors and markets you can advise on. This is how clients discover you in the marketplace.",
            side: "right",
            align: "start",
          },
        },
        {
          element: '[data-sidebar="sidebar"]',
          popover: {
            title: "4. Set Your Availability",
            description:
              "The final step. In the sidebar open <b>Deal Room &amp; Services → Deal Rooms</b>, then use the calendar to open time slots (in IST). Saving your availability completes your profile — then you're ready to go!",
            side: "right",
            align: "center",
          },
        },
        {
          element: '[data-sidebar="footer"]',
          popover: {
            title: "Account & Sign Out",
            description:
              "Manage your account and sign out from here anytime. You can revisit each section from the menu whenever you like. Good luck! 🚀",
            side: "top",
            align: "start",
          },
        },
      ];
    }

    if (steps.length > 0) {
      injectTourTheme();
      const driverObj = driver({
        showProgress: true,
        allowClose: false, // Force them to complete or dismiss via buttons
        popoverClass: "aecci-tour",
        nextBtnText: "Next →",
        prevBtnText: "← Back",
        doneBtnText: "Got it!",
        progressText: "Step {{current}} of {{total}}",
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

  return null; // This component doesn't render any UI itself
}

// Injects theme-matched styling for the driver.js popover once per session.
function injectTourTheme() {
  if (typeof document === "undefined") return;
  if (document.getElementById("aecci-tour-theme")) return;
  const style = document.createElement("style");
  style.id = "aecci-tour-theme";
  style.textContent = `
    .driver-popover.aecci-tour {
      background: #07192F;
      color: #E2E8F0;
      border-radius: 14px;
      box-shadow: 0 18px 40px rgba(3, 12, 24, 0.45);
      max-width: 340px;
    }
    .driver-popover.aecci-tour .driver-popover-title {
      color: #ffffff;
      font-size: 15px;
      font-weight: 800;
    }
    .driver-popover.aecci-tour .driver-popover-description {
      color: #CBD5E1;
      font-size: 13px;
      line-height: 1.5;
    }
    .driver-popover.aecci-tour .driver-popover-progress-text {
      color: #D4A64A;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .driver-popover.aecci-tour .driver-popover-footer button {
      background: #D4A64A;
      color: #07192F;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      text-shadow: none;
      padding: 6px 14px;
    }
    .driver-popover.aecci-tour .driver-popover-footer button:hover {
      background: #C5973A;
    }
    .driver-popover.aecci-tour .driver-popover-prev-btn {
      background: transparent !important;
      color: #94A3B8 !important;
      font-weight: 600 !important;
    }
    .driver-popover.aecci-tour .driver-popover-prev-btn:hover {
      color: #E2E8F0 !important;
    }
    .driver-popover.aecci-tour .driver-popover-arrow-side-right.driver-popover-arrow {
      border-right-color: #07192F;
    }
    .driver-popover.aecci-tour .driver-popover-arrow-side-left.driver-popover-arrow {
      border-left-color: #07192F;
    }
    .driver-popover.aecci-tour .driver-popover-arrow-side-top.driver-popover-arrow {
      border-top-color: #07192F;
    }
    .driver-popover.aecci-tour .driver-popover-arrow-side-bottom.driver-popover-arrow {
      border-bottom-color: #07192F;
    }
  `;
  document.head.appendChild(style);
}
