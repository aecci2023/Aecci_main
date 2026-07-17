import { Link } from "react-router-dom";
import { Globe, Search as SearchIcon, Bell } from "lucide-react";
import { useSearch } from "@/context/search-provider";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function ExporterHeader() {
  const { setOpen } = useSearch();

  return (
    <header className="sticky top-0 z-50 flex h-[64px] shrink-0 items-center border-b border-[#E4E7EC] bg-white">
      <div className="flex h-full w-full items-center gap-4 px-4 sm:px-5">
        <SidebarTrigger
          variant="outline"
          className="border-[#E4E7EC] bg-white text-[#344054] xl:hidden"
        />

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 min-w-0 flex-1 items-center justify-between rounded-full border border-[#E4E7EC] bg-[#F9FAFB] px-4 text-left transition hover:bg-white sm:max-w-none lg:max-w-[520px]"
        >
          <span className="truncate text-[13px] text-[#98A2B3]">
            Search for countries, sessions, partners...
          </span>
          <SearchIcon className="ml-3 size-4 shrink-0 text-[#98A2B3]" />
        </button>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <div className="hidden items-center gap-1.5 text-[13px] font-medium text-[#344054] md:flex">
            <Globe className="size-4 text-[#667085]" />
            GMT +5:30
          </div>

          <Link
            to="/dashboard/notifications"
            className="relative flex size-9 items-center justify-center rounded-full text-[#667085] transition hover:bg-[#F2F4F7]"
            aria-label="Notifications"
          >
            <Bell className="size-[18px]" />
            <span className="absolute -right-0.5 -top-0.5 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#E11D48] px-1 text-[9px] font-bold leading-none text-white">
              1
            </span>
          </Link>

          <ProfileDropdown hideNotifications exporterHeader />
        </div>
      </div>
    </header>
  );
}
