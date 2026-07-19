import { Link, useLocation } from "react-router-dom";
import type React from "react";
import { ChevronDown, Headphones, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { sidebarData } from "../data/sidebar-data";
import type { NavLink } from "./types";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();
  const { pathname } = useLocation();
  const storedUser = localStorage.getItem("user");
  const user = storedUser
    ? (() => {
        try {
          return JSON.parse(storedUser);
        } catch {
          return null;
        }
      })()
    : null;

  const name = user?.fullName || user?.companyName || "Swarn Dhiman";
  const role = user?.role || "Exporter";
  const avatar = user?.profilePicture || "";
  const initials = getInitials(name) || "SD";

  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-0 bg-[#061A33] text-white"
      style={{ "--sidebar-width": "240px" } as React.CSSProperties}
    >
      <SidebarContent className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto bg-[#061A33] py-4 pl-3 pr-4">
        <Link
          to="/dashboard"
          onClick={() => setOpenMobile(false)}
          className="mb-5 flex min-w-0 items-center gap-2.5 px-1"
        >
          <img
            src="/aecci-logoonly.png"
            alt="AECCI"
            className="size-9 shrink-0 object-contain"
          />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[18px] font-extrabold leading-none tracking-wide text-white">
              AECCI
            </div>
            <div className="mt-0.5 truncate text-[8px] font-semibold uppercase tracking-[0.1em] text-white/80">
              Global Deal Room
            </div>
          </div>
          <ChevronDown className="size-3.5 shrink-0 text-white/50" />
        </Link>
        <div className="mb-4 px-1 text-[7px] uppercase tracking-[0.12em] text-white/40">
          Connect · Collaborate · Grow Globally
        </div>

        <div className="mb-5 flex min-w-0 items-center gap-3 rounded-2xl bg-white/6 p-3">
          <Avatar className="size-11 shrink-0 border border-white/10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-[#5DADE2] text-sm font-bold text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="truncate text-[13px] font-bold text-white">{name}</div>
            <div className="truncate text-[11px] text-white/55 capitalize">{role}</div>
            <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-[#86EFAC]">
              <span className="size-1.5 shrink-0 rounded-full bg-[#22C55E]" />
              <span className="truncate">Verified Member</span>
            </div>
          </div>
        </div>

        <nav className="min-w-0 space-y-5">
          {sidebarData.navGroups.map((group) => (
            <div key={group.title || "dashboard"} className="min-w-0">
              {group.title && (
                <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                  {group.title}
                </div>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  if ("items" in item && item.items) return null;
                  const link = item as NavLink;
                  const Icon = link.icon;
                  const active =
                    pathname === link.url ||
                    (typeof link.url === "string" && link.url !== "/dashboard" && pathname.startsWith(link.url));

                  return (
                    <Link
                      key={`${link.title}-${link.url}`}
                      to={link.url}
                      onClick={() => setOpenMobile(false)}
                      className={`group flex h-9 w-full min-w-0 items-center gap-2.5 rounded-lg px-2.5 text-[13px] font-semibold transition ${
                        active
                          ? "bg-[#174CFF] text-white shadow-[0_8px_18px_rgba(23,76,255,0.35)]"
                          : "text-white/76 hover:bg-white/[0.07] hover:text-white"
                      }`}
                    >
                      {Icon && <Icon className="size-4 shrink-0" />}
                      <span className="min-w-0 flex-1 truncate">{link.title}</span>
                      {link.badge ? (
                        <span
                          className={`ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold leading-none ${
                            active
                              ? "bg-white text-[#174CFF]"
                              : "bg-[#174CFF] text-white"
                          }`}
                        >
                          {link.badge}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto min-w-0 pt-6">
          <Link
            to="/dashboard/need-help"
            onClick={() => setOpenMobile(false)}
            className="flex min-w-0 items-center gap-3 rounded-xl bg-[#174CFF] px-3 py-3 text-white shadow-[0_12px_24px_rgba(23,76,255,0.28)]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Headphones className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-bold">Need Help?</span>
              <span className="block truncate text-[10px] text-white/75">
                Chat with our support team
              </span>
            </span>
            <MessageCircle className="size-4 shrink-0 text-white/70" />
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

