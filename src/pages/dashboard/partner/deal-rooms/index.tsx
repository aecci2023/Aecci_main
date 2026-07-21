import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { Plus, Search, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Crisp SVG Country Flag Components for cross-platform/browser rendering
function GermanyFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 5 3">
      <rect width="5" height="1" fill="#000000" />
      <rect y="1" width="5" height="1" fill="#DD0000" />
      <rect y="2" width="5" height="1" fill="#FFCE00" />
    </svg>
  );
}

function USAFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 190 100">
      <rect width="190" height="100" fill="#BB133E" />
      <path d="M0,15.38H190M0,30.77H190M0,46.15H190M0,61.54H190M0,76.92H190M0,92.31H190" stroke="#FFFFFF" strokeWidth="7.69" />
      <rect width="76" height="53.85" fill="#002147" />
    </svg>
  );
}

function UAEFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 12 6">
      <rect width="12" height="2" fill="#00732F" />
      <rect y="2" width="12" height="2" fill="#FFFFFF" />
      <rect y="4" width="12" height="2" fill="#000000" />
      <rect width="3" height="6" fill="#C8102E" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 60 30">
      <clipPath id="uk_s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="uk_t"><path d="M30,15 m-30,0 h60 v30 h-60 z M30,15 m0,-15 v30 h60 v-30 z"/></clipPath>
      <g clipPath="url(#uk_s)">
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#012169" strokeWidth="4"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" clipPath="url(#uk_t)"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

function SingaporeFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 18 12">
      <rect width="18" height="6" fill="#ED2939" />
      <rect y="6" width="18" height="6" fill="#FFFFFF" />
      <circle cx="3.8" cy="3" r="1.8" fill="#FFFFFF" />
      <circle cx="4.2" cy="3" r="1.8" fill="#ED2939" />
    </svg>
  );
}

// Custom SVG Icons matching the reference image avatar graphics
function PrecisionToolsAvatar() {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#8B5CF6] flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6C20 6 23 10 23 13C23 15 21 16.5 20 18C19 16.5 17 15 17 13C17 10 20 6 20 6Z" fill="#FACC15" />
        <rect x="18" y="19" width="4" height="12" rx="1" fill="#FACC15" />
        <path d="M14 22C14 22 17 20 20 20C23 20 26 22 26 22L25 24C25 24 22.5 22.5 20 22.5C17.5 22.5 15 24 15 24L14 22Z" fill="#FACC15" />
        <rect x="13" y="30" width="14" height="3" rx="1.5" fill="#FACC15" />
      </svg>
    </div>
  );
}

function SunriseExportsAvatar() {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2A4B2A] flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12H25V16H15V12Z" fill="#EA580C" />
        <path d="M13 16H27V26C27 28 25 30 20 30C15 30 13 28 13 26V16Z" fill="#EA580C" />
        <rect x="17" y="8" width="6" height="4" rx="1" fill="#EA580C" />
        <rect x="11" y="30" width="18" height="3" rx="1" fill="#EA580C" />
      </svg>
    </div>
  );
}

function AgriSolutionsAvatar() {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#86EFAC] flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8C20 8 13 16 13 21C13 25 16 28 20 28C24 28 27 25 27 21C27 16 20 8 20 8Z" fill="#B91C1C" />
        <path d="M20 12C20 12 24 16 24 20" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 28V33" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function GlobalTextileAvatar() {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FACC15] flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1.5">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="15" r="7" fill="#1E293B" />
        <circle cx="20" cy="16" r="5.5" fill="#FDBA74" />
        <path d="M13 14C13 10 16 8 20 8C24 8 27 10 27 14C27 15 26 15 25 14C24 13 22 12 20 12C18 12 16 13 15 14C14 15 13 15 13 14Z" fill="#0F172A" />
        <path d="M9 34C9 27 14 25 20 25C26 25 31 27 31 34V36H9V34Z" fill="#E2E8F0" />
      </svg>
    </div>
  );
}

function PharmaCareAvatar() {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1E293B] flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10H23V16L29 27C30 29 28.5 31 26 31H14C11.5 31 10 29 11 27L17 16V10Z" stroke="#EF4444" strokeWidth="2" strokeLinejoin="round" fill="#7F1D1D" fillOpacity="0.3" />
        <path d="M13 25L14.5 22.5C15.5 21 17 21 18 22.5L20 24.5C21 26 22.5 26 23.5 24.5L27 20V27C27 29.2 25.2 31 23 31H17C14.8 31 13 29.2 13 27V25Z" fill="#EF4444" />
        <circle cx="17" cy="27" r="1" fill="white" />
        <circle cx="21" cy="25" r="1.2" fill="white" />
        <circle cx="19" cy="28.5" r="0.8" fill="white" />
      </svg>
    </div>
  );
}

export default function PartnerDealRoomsPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "active", label: "Active" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
    { id: "archived", label: "Archived" },
  ];

  const dealRooms = [
    {
      id: 1,
      name: "Precision Tools Pvt. Ltd.",
      category: "Industrial Tools & Equipment",
      participants: 8,
      country: "Germany",
      renderFlag: GermanyFlag,
      status: "Active",
      renderAvatar: PrecisionToolsAvatar,
      tab: "active",
    },
    {
      id: 2,
      name: "Sunrise Exports",
      category: "Textiles & Garments",
      participants: 6,
      country: "USA",
      renderFlag: USAFlag,
      status: "Active",
      renderAvatar: SunriseExportsAvatar,
      tab: "active",
    },
    {
      id: 3,
      name: "Agri Solutions Ltd.",
      category: "Agricultural Products",
      participants: 7,
      country: "UAE",
      renderFlag: UAEFlag,
      status: "Active",
      renderAvatar: AgriSolutionsAvatar,
      tab: "active",
    },
    {
      id: 4,
      name: "Global Textile Corp.",
      category: "Textiles & Fabrics",
      participants: 5,
      country: "UK",
      renderFlag: UKFlag,
      status: "Upcoming",
      renderAvatar: GlobalTextileAvatar,
      tab: "upcoming",
    },
    {
      id: 5,
      name: "PharmaCare Alliance",
      category: "Pharmaceuticals",
      participants: 6,
      country: "Singapore",
      renderFlag: SingaporeFlag,
      status: "Active",
      renderAvatar: PharmaCareAvatar,
      tab: "active",
    },
  ];

  const filteredRooms = dealRooms.filter((room) => {
    const matchesTab =
      activeTab === "all" ||
      room.tab === activeTab ||
      (activeTab === "active" && room.status === "Active") ||
      (activeTab === "upcoming" && room.status === "Upcoming");
    const matchesSearch =
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <Main fluid className="bg-[#F8FAFC] min-h-screen p-6 sm:p-8 space-y-6 text-left flex flex-col justify-between">
      <div className="space-y-6 max-w-[1600px] mx-auto w-full">
        {/* ── PAGE HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Deal Rooms
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              Access and manage your deal rooms
            </p>
          </div>

          <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 self-start sm:self-center">
            <Plus className="w-4 h-4 stroke-[2.5px]" />
            <span>Create New Deal Room</span>
          </Button>
        </div>

        {/* ── MAIN CONTAINER CARD ── */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
          {/* TABS & SEARCH BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            {/* Left Tabs */}
            <div className="flex items-center gap-8 overflow-x-auto text-xs sm:text-sm font-semibold">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 transition-all relative whitespace-nowrap cursor-pointer ${
                      isActive ? "text-[#2563EB] font-bold" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Search Input */}
            <div className="relative w-full sm:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search deal rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <ChevronLeft className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* DEAL ROOMS TABLE / LIST */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="text-xs sm:text-sm font-semibold text-slate-500 border-b border-slate-100">
                  <th className="pb-4 pl-4 w-[40%] font-semibold text-slate-500">Deal Room</th>
                  <th className="pb-4 text-center w-[15%] font-semibold text-slate-500">Participants</th>
                  <th className="pb-4 text-center w-[18%] font-semibold text-slate-500">Country</th>
                  <th className="pb-4 text-center w-[15%] font-semibold text-slate-500">Status</th>
                  <th className="pb-4 text-right pr-4 w-[12%] font-semibold text-slate-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRooms.map((room) => {
                  const AvatarComp = room.renderAvatar;
                  const FlagComp = room.renderFlag;
                  return (
                    <tr key={room.id} className="hover:bg-slate-50/50 transition-colors">
                      {/* Deal Room Name + Category */}
                      <td className="py-4 pl-4">
                        <div className="flex items-center gap-4">
                          <AvatarComp />
                          <div className="space-y-0.5 min-w-0">
                            <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                              {room.name}
                            </h4>
                            <p className="text-xs text-slate-400 font-medium truncate">
                              {room.category}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Participants */}
                      <td className="py-4 text-center text-xs sm:text-sm font-bold text-slate-900">
                        {room.participants}
                      </td>

                      {/* Country */}
                      <td className="py-4 text-center text-xs sm:text-sm font-bold text-slate-900">
                        <span className="inline-flex items-center justify-center gap-2">
                          <FlagComp />
                          <span>{room.country}</span>
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-4 text-center">
                        <span
                          className={`inline-block px-4 py-1 rounded-full text-xs font-bold ${
                            room.status === "Active"
                              ? "bg-[#E6F4EA] text-[#137333]"
                              : "bg-[#FCE8E6] text-[#C5221F]"
                          }`}
                        >
                          {room.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 text-right pr-4">
                        <Link
                          to={`/partner/live-deal-room`}
                          className="inline-block bg-[#F1F3F4] hover:bg-[#E8EAED] text-slate-800 font-bold text-xs px-4 py-1.5 rounded-lg transition-colors"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* VIEW ALL LINK */}
          <div className="pt-4 text-center border-t border-slate-100">
            <button className="text-[#2563EB] hover:text-blue-800 font-bold text-sm transition-colors cursor-pointer">
              View All Deal Rooms
            </button>
          </div>
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <footer className="w-full border-t border-slate-200/60 pt-6 mt-8 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400 font-medium max-w-[1600px] mx-auto">
        <div>© 2025 AECCI Global. All Rights Reserved.</div>
        <div className="flex items-center gap-4">
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Cookie Policy
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Support
          </Link>
          <span>|</span>
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Help Center
          </Link>
        </div>
      </footer>
    </Main>
  );
}
