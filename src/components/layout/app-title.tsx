import { Link } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { GlobeHemisphereWest } from "@phosphor-icons/react";

export function AppTitle() {
  const { setOpenMobile, state } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className={`gap-0 py-0 hover:bg-transparent active:bg-transparent ${isExpanded ? "h-auto mt-4 mb-2" : ""}`}
          asChild
        >
          <div>
            <Link
              to="/"
              onClick={() => setOpenMobile(false)}
              className="flex flex-1 items-center justify-center text-center leading-tight w-full"
            >
              {isExpanded ? (
                <div className="flex flex-col items-center justify-center w-full py-2 gap-3">
                  <img
                    src="/aecci-logoonly.png"
                    alt="AECCI Logo"
                    className="w-32 h-32 object-contain drop-shadow-2xl"
                  />
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#E5B869] tracking-wider drop-shadow-sm">
                      AECCI
                    </span>
                    <span className="text-sm font-bold text-white tracking-widest mt-1">
                      GLOBAL DEAL ROOM
                    </span>
                    <span className="text-[11px] text-[#E5B869] tracking-wide mt-1.5 font-medium">
                      Connect &bull; Collaborate &bull; Grow Globally
                    </span>
                  </div>
                  <div className="flex items-center w-full px-2 mt-2">
                    <div className="flex-1 border-t border-white/10"></div>
                    <GlobeHemisphereWest className="w-4 h-4 text-[#E5B869] mx-2 opacity-80" weight="fill" />
                    <div className="flex-1 border-t border-white/10"></div>
                  </div>
                </div>
              ) : (
                <img
                  src="/aecci-logoonly.png"
                  alt="AECCI Logo"
                  className="shrink-0 object-contain h-8 w-8"
                />
              )}
            </Link>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
