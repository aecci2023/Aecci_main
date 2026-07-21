import { Link } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppTitle({
  largeLogo = false,
  subtitle = "Deal Room Dashboard",
}: {
  largeLogo?: boolean;
  subtitle?: string;
} = {}) {
  const { setOpenMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="gap-0 py-0 hover:bg-transparent active:bg-transparent"
          asChild
        >
          <div>
            <Link
              to="/"
              onClick={() => setOpenMobile(false)}
              className="flex flex-1 items-center gap-2.5 text-start leading-tight"
            >
              <img
                src="/aecci-logoonly.png"
                alt="AECCI Logo"
                className={`shrink-0 object-contain ${
                  largeLogo ? "h-11 w-11" : "h-8 w-8"
                }`}
              />
              <div className="grid min-w-0">
                <span
                  className={`truncate font-bold text-white ${
                    largeLogo ? "text-[17px]" : "text-lg"
                  }`}
                >
                  AECCI Global
                </span>
                <span className="truncate text-xs text-white/70">{subtitle}</span>
              </div>
            </Link>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
