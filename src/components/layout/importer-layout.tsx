import { Outlet, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { getCookie } from "@/lib/cookies";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppImporterSidebar } from "@/components/layout/app-importer-sidebar";
import { SkipToMain } from "@/components/skip-to-main";
import { RoleTour } from "@/components/tour/RoleTour";
import { useGetUserByIdQuery } from "@/store/api/adminApi";
import {
  ChevronDown,
  Globe,
  Bell,
  Search as SearchIcon,
  MessageSquareMore,
} from "lucide-react";

type ImporterLayoutProps = {
  children?: React.ReactNode;
};

export function ImporterLayout({ children }: ImporterLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  const location = useLocation();

  const isOnRoomPage =
    location.pathname.includes("/waiting-room") ||
    location.pathname.includes("/live-deal-room");

  const [currentUser] = useState<any>(() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  });

  const userId = currentUser?.id || currentUser?._id;
  const { data: userData } = useGetUserByIdQuery(userId as string, {
    skip: !userId,
  });
  const dbUser = userData?.data || currentUser;

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedFlagCode, setSelectedFlagCode] = useState("in");

  const toggleCountry = () => {
    if (selectedCountry === "India") {
      setSelectedCountry("Kenya");
      setSelectedFlagCode("ke");
    } else if (selectedCountry === "Kenya") {
      setSelectedCountry("Egypt");
      setSelectedFlagCode("eg");
    } else {
      setSelectedCountry("India");
      setSelectedFlagCode("in");
    }
  };

  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider 
          defaultOpen={defaultOpen}
          style={{ "--sidebar": "#061A33" } as React.CSSProperties}
        >
          <SkipToMain />
          {/* App-shell: full viewport, sidebar fixed left, content scrolls */}
          <div className="flex h-screen w-full overflow-hidden bg-[#061A33]">
            
            {/* SIDEBAR — fixed height, scrolls internally if needed */}
            <div className="w-[240px] shrink-0 h-full overflow-y-auto bg-[#061A33]">
              <AppImporterSidebar />
            </div>

            {/* MAIN CONTENT AREA — takes remaining width, scrolls independently */}
            <div className="flex flex-1 flex-col min-w-0 h-full overflow-y-auto bg-white">
              {!isOnRoomPage && (
                <header className="h-16 bg-white border-b border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] sticky top-0 z-40 px-6 flex items-center shrink-0 w-full">
                  <div className="flex items-center justify-between gap-4 w-full h-full">
                    
                    {/* Left: Country selector */}
                    <div 
                      onClick={toggleCountry}
                      className="flex items-center gap-2.5 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-lg cursor-pointer shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors h-[38px]"
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${selectedFlagCode}.png`} 
                        alt={selectedCountry} 
                        className="w-5.5 h-3.5 object-cover rounded-[1px] border border-gray-100" 
                      />
                      <span className="font-bold text-[#0B1B3D] text-[14px]">{selectedCountry}</span>
                      <ChevronDown className="size-4 text-[#0B1B3D] ml-0.5 stroke-[2.5px]" />
                    </div>

                    {/* Center: Search input */}
                    <div className="flex-1 max-w-[420px] relative w-full md:mx-4">
                      <input
                        type="text"
                        placeholder="Search exporters, industries, products, countries..."
                        className="w-full bg-[#F4F6F9] hover:bg-[#EBEFF4] focus:bg-white border border-transparent focus:border-[#2563EB]/40 rounded-full pl-5 pr-11 py-2.5 text-[13px] text-[#0F172A] placeholder-[#8A99AD] outline-none transition-all shadow-inner h-[38px]"
                      />
                      <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 size-[18px] text-[#0B1B3D] stroke-[2.5px]" />
                    </div>

                    {/* Right: GMT, Notifications, Messages, Profile */}
                    <div className="flex items-center justify-between w-full md:w-auto gap-6 shrink-0 h-full">
                      {/* GMT Timezone */}
                      <div className="flex items-center gap-2.5 text-left">
                        <Globe className="size-6 text-[#0B1B3D] stroke-[1.8px] shrink-0" />
                        <div className="flex flex-col">
                          <span className="font-bold text-[#0B1B3D] text-[13px] leading-tight">GMT -05:00</span>
                          <span className="text-[#64748B] text-[11px] font-medium leading-none mt-0.5">New York</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 h-full">
                        {/* Notifications */}
                        <button className="relative p-1 text-[#0B1B3D] hover:text-[#2563EB] transition-colors shrink-0">
                          <Bell className="size-[22px] stroke-[2px]" />
                          <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                            4
                          </span>
                        </button>

                        {/* Messages */}
                        <Link to="/importer/messages" className="relative p-1 text-[#0B1B3D] hover:text-[#2563EB] transition-colors shrink-0">
                          <MessageSquareMore className="size-[22px] stroke-[2px]" />
                        </Link>

                        {/* User profile */}
                        <div className="flex items-center gap-2.5 cursor-pointer group h-full">
                          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-100 flex items-center justify-center bg-gray-50 shadow-sm shrink-0">
                            <img 
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" 
                              alt={dbUser?.fullName || "User Avatar"} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <ChevronDown className="size-4 text-[#0B1B3D] stroke-[2.5px] group-hover:text-[#2563EB] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              )}
              <div className="flex-1">
                {children ?? <Outlet />}
                <RoleTour role="importer" />
              </div>
            </div>

          </div>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
