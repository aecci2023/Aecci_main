import { Link, useLocation } from "react-router-dom";
import type React from "react";
import { Headphones, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { AppTitle } from "./app-title";
import { importerSidebarData } from "../data/importer-sidebar-data";
import type { NavLink } from "./types";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export function AppImporterSidebar() {
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

  const name = user?.fullName || user?.companyName || "AECCI Member";
  const role = user?.role || "Importer";
  const avatar = user?.profilePicture || "";
  const initials = getInitials(name) || "AM";

  return (
    <Sidebar
      collapsible="none"
      className="border-0 bg-[#061A33] text-white h-full"
      style={{ 
        "--sidebar-width": "240px",
        "--sidebar": "#061A33"
      } as React.CSSProperties}
    >
      <SidebarHeader className="px-4 pt-4 pb-2 bg-[#061A33]">
        <AppTitle />
      </SidebarHeader>
      <SidebarContent className="flex flex-col bg-[#061A33] px-4 h-full">
        <div className="mb-5 flex items-center gap-3 rounded-2xl bg-white/6 p-3">
          <Avatar className="size-11 border border-white/10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-[#5DADE2] text-sm font-bold text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-bold text-white">
              {name}
            </div>
            <div className="text-[11px] text-white/55 capitalize">{role}</div>
            <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-[#86EFAC]">
              <span className="size-1.5 rounded-full bg-[#22C55E]" />
              Verified Member
            </div>
          </div>
        </div>

        <nav className="space-y-5">
          {importerSidebarData.navGroups.map((group) => (
            <div key={group.title || "dashboard"}>
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
                  const active = pathname === link.url;

                  return (
                    <Link
                      key={`${link.title}-${link.url}`}
                      to={link.url}
                      onClick={() => setOpenMobile(false)}
                      className={`group flex h-9 items-center gap-3 rounded-lg px-3 text-[13px] font-semibold transition ${active
                          ? "bg-[#174CFF] text-white shadow-[0_8px_18px_rgba(23,76,255,0.35)]"
                          : "text-white/76 hover:bg-white/[0.07] hover:text-white"
                        }`}
                    >
                      {Icon && <Icon className="size-4 shrink-0" />}
                      <span className="min-w-0 flex-1 truncate">
                        {link.title}
                      </span>
                      {link.badge && (
                        <span className="flex min-w-5 items-center justify-center rounded-full bg-[#174CFF] px-1.5 py-0.5 text-[10px] font-bold text-white">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <Link
            to="/importer/submit-questions"
            className="flex items-center gap-3 rounded-xl bg-[#174CFF] px-3 py-3 text-white shadow-[0_12px_24px_rgba(23,76,255,0.28)]"
          >
            <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Headphones className="size-5" />
            </span>
            <span>
              <span className="block text-[13px] font-bold">Need Help?</span>
              <span className="block text-[10px] text-white/75">
                Chat with our support team
              </span>
            </span>
            <MessageCircle className="ml-auto size-4 text-white/70" />
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
