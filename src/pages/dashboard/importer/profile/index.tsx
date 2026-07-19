import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  User,
  MapPin,
  Building2,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ChevronDown,
  Plus,
  ShieldCheck,
  ExternalLink,
  Save,
  Camera,
  X,
} from "lucide-react";

export default function ImporterMyProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    { id: "personal", label: "Personal Information", icon: User },
    { id: "contact", label: "Contact Details", icon: MapPin },
    { id: "preferences", label: "Account Preferences", icon: Building2 },
    { id: "verification", label: "Verification", icon: Shield },
    { id: "security", label: "Security", icon: Lock },
  ];

  const preferredCategories = [
    "Textiles & Garments",
    "Home Textiles",
    "Accessories",
    "Handicrafts",
    "Leather Products",
  ];

  return (
    <Main fluid className="bg-[#F5F7FA] min-h-screen p-6 space-y-6 text-left">
      {/* ── BREADCRUMB + PAGE HEADER ── */}
      <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[13px] text-[#64748B] mb-2 font-medium">
          <Link to="/importer/dashboard" className="hover:text-[#2563EB] transition-colors">
            Dashboard
          </Link>
          <span>&gt;</span>
          <span className="text-[#0B1B3D] font-semibold">My Profile</span>
        </div>

        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[28px] font-bold text-[#0B1B3D] tracking-tight leading-none">
              My Profile
            </h1>
            <p className="text-[15px] text-[#64748B] mt-2 font-medium">
              Manage your personal information and account preferences.
            </p>
          </div>
          
          <button className="flex items-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13.5px] font-bold py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer">
            <Eye className="size-4" />
            <span>View Public Profile</span>
          </button>
        </div>
      </div>

      {/* ── TABS BAR ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-x-auto">
        <div className="flex min-w-max border-b border-[#F1F5F9] px-4">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-[13.5px] font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                  active
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-[#64748B] hover:text-[#0B1B3D]"
                }`}
              >
                <TabIcon className={`size-4.5 ${active ? "text-[#2563EB]" : "text-[#64748B]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── TWO-COLUMN MAIN CONTENT GRID ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "6.8fr 3.2fr" : "1fr",
          gap: "24px",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN: Personal Information Card */}
        <div className="space-y-6">
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-6 text-left">
            <div>
              <h3 className="text-[17px] font-bold text-[#0B1B3D]">
                Personal Information
              </h3>
              <p className="text-[13px] text-gray-500 font-semibold mt-1">
                Update your basic details and profile photo.
              </p>
            </div>

            {/* Photo + Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 pt-2">
              {/* Profile Photo Area */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="John Smith"
                    className="w-28 h-28 rounded-full object-cover border border-[#E2E8F0] shadow-sm bg-slate-50"
                  />
                  <button className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white flex items-center justify-center shadow-md transition-all cursor-pointer border-2 border-white">
                    <Camera className="size-4" />
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] text-gray-500 font-semibold leading-tight">
                    JPG, PNG or WebP.
                  </p>
                  <p className="text-[12px] text-gray-500 font-semibold leading-tight">
                    Max size 2MB.
                  </p>
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-[13px] font-bold text-[#0B1B3D] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Smith"
                    className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] font-medium text-[#0B1B3D] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-white"
                  />
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-[13px] font-bold text-[#0B1B3D] mb-1.5">
                    Designation
                  </label>
                  <input
                    type="text"
                    defaultValue="International Buyer"
                    className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] font-medium text-[#0B1B3D] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-white"
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="block text-[13px] font-bold text-[#0B1B3D] mb-1.5">
                    Department <span className="text-[11.5px] text-gray-400 font-medium">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Purchasing"
                    className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] font-medium text-[#0B1B3D] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-white"
                  />
                </div>

                {/* Date of Birth */}
                <div className="relative">
                  <label className="block text-[13px] font-bold text-[#0B1B3D] mb-1.5">
                    Date of Birth <span className="text-[11.5px] text-gray-400 font-medium">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="15 May 1985"
                      className="w-full border border-[#D1D5DB] rounded-lg pl-3.5 pr-10 py-2.5 text-[14px] font-medium text-[#0B1B3D] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-white"
                    />
                    <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-[13px] font-bold text-[#0B1B3D] mb-1.5">
                    Nationality
                  </label>
                  <div className="relative">
                    <select className="w-full border border-[#D1D5DB] rounded-lg pl-3.5 pr-10 py-2.5 text-[14px] font-medium text-[#0B1B3D] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-white appearance-none cursor-pointer">
                      <option>United States</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none stroke-[2.5px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* About You Section */}
            <div className="space-y-1.5 pt-2">
              <h4 className="text-[13.5px] font-bold text-[#0B1B3D]">
                About You
              </h4>
              <p className="text-[12.5px] text-gray-500 font-semibold leading-none">
                Tell us about your experience and sourcing interests.
              </p>
              <div className="relative mt-2">
                <textarea
                  rows={4}
                  maxLength={500}
                  defaultValue="Experienced importer with 10+ years in global trade.&#10;&#10;Interested in connecting with verified Indian exporters for long term business partnerships."
                  className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-3 text-[14px] font-medium text-[#0B1B3D] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none bg-white leading-relaxed"
                />
                <div className="flex justify-end mt-1 text-[11px] text-gray-400 font-semibold">
                  132/500
                </div>
              </div>
            </div>

            {/* Preferred Categories */}
            <div className="space-y-1.5 pt-2">
              <h4 className="text-[13.5px] font-bold text-[#0B1B3D]">
                Preferred Categories
              </h4>
              <p className="text-[12.5px] text-gray-500 font-semibold leading-none">
                Select your primary sourcing interests.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {preferredCategories.map((cat) => (
                  <div
                    key={cat}
                    className="flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE]/60 text-[#2563EB] px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
                  >
                    <span>{cat}</span>
                    <button className="text-[#2563EB] hover:text-blue-700 cursor-pointer shrink-0">
                      <X className="size-3.5 stroke-[2.5px]" />
                    </button>
                  </div>
                ))}
                
                <button className="flex items-center gap-1 border border-dashed border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer">
                  <Plus className="size-3.5" />
                  <span>Add More</span>
                </button>
              </div>
            </div>

            {/* Cancel & Save Changes buttons */}
            <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-4">
              <button className="border border-gray-300 hover:bg-slate-50 text-gray-700 text-[13.5px] font-bold py-2.5 px-6 rounded-lg transition-all shadow-sm cursor-pointer bg-white">
                Cancel
              </button>
              
              <button className="bg-[#2563EB] hover:bg-blue-700 text-white text-[13.5px] font-bold py-2.5 px-6 rounded-lg transition-all shadow-md cursor-pointer border-none flex items-center gap-2">
                <Save className="size-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Completion + Preview */}
        <div className="space-y-6">
          {/* Card 1: Profile Completion */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-center flex flex-col justify-between space-y-5">
            <h3 className="text-[15px] font-bold text-[#0B1B3D] text-left">
              Profile Completion
            </h3>

            {/* Donut Progress chart */}
            <div className="flex justify-center">
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center shrink-0"
                   style={{
                     background: "conic-gradient(#10B981 0% 85%, #E5E7EB 85% 100%)",
                   }}>
                {/* inner circle mask */}
                <div className="absolute w-[72px] h-[72px] bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-[20px] font-extrabold text-[#0B1B3D] leading-none">85%</span>
                  <span className="text-[9.5px] text-[#64748B] font-bold mt-0.5">Completed</span>
                </div>
              </div>
            </div>

            <p className="text-[12.5px] text-gray-500 font-semibold leading-relaxed">
              Complete your profile to get better matches and recommendations.
            </p>

            {/* Status Checklist items */}
            <div className="space-y-3.5 pt-2 text-left">
              {[
                { label: "Personal Information", status: "Completed", isDone: true },
                { label: "Contact Details", status: "Completed", isDone: true },
                { label: "Company Information", status: "Completed", isDone: true },
                { label: "Verification", status: "Completed", isDone: true },
                { label: "Sourcing Preferences", status: "Pending", isDone: false },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2 text-sm font-semibold">
                  <div className="flex items-center gap-2 truncate">
                    {item.isDone ? (
                      <CheckCircle2 className="size-4 text-[#10B981] shrink-0" />
                    ) : (
                      <AlertCircle className="size-4 text-amber-500 shrink-0" />
                    )}
                    <span className="text-gray-700 truncate">{item.label}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full select-none ${
                    item.isDone ? "bg-slate-100 text-gray-500" : "bg-blue-50 text-blue-600"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Complete Now button */}
            <button className="w-full border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-extrabold py-2.5 rounded-lg shadow-sm transition-all cursor-pointer">
              Complete Now
            </button>
          </div>

          {/* Card 2: Profile Preview */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-[15px] font-bold text-[#0B1B3D] text-left">
                Profile Preview
              </h3>
              <p className="text-[12.5px] text-gray-400 font-semibold text-left mt-0.5">
                This is how others see your profile.
              </p>
            </div>

            {/* Inner Preview Box */}
            <div className="border border-gray-150 rounded-xl p-4 bg-slate-50/30 text-center space-y-4">
              <div className="flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="John Smith"
                  className="w-16 h-16 rounded-full object-cover border border-white shadow-sm"
                />
                
                <h4 className="text-[14.5px] font-bold text-[#0B1B3D] flex items-center gap-1 mt-2.5">
                  <span>John Smith</span>
                  <CheckCircle2 className="size-4 fill-blue-600 text-white shrink-0" />
                </h4>
                
                <span className="block text-[12px] text-gray-500 font-semibold mt-0.5">
                  International Buyer
                </span>
                
                <span className="block text-[12px] text-[#0B1B3D] font-bold mt-1">
                  ABC Trading LLC, USA
                </span>
              </div>

              {/* Location Tag */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 font-semibold">
                <MapPin className="size-3.5 text-gray-400" />
                <span>New York, United States</span>
              </div>

              {/* Categories Pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                {["Textiles & Garments", "Home Textiles", "Accessories"].map((pil) => (
                  <span
                    key={pil}
                    className="bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]/30 rounded px-2 py-0.5 text-[10px] font-bold"
                  >
                    {pil}
                  </span>
                ))}
                <span className="text-[10px] font-extrabold text-gray-500 bg-slate-100 px-2 py-0.5 rounded">
                  +2 More
                </span>
              </div>
            </div>

            {/* View Full Public Profile button */}
            <button className="w-full flex items-center justify-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-extrabold py-2.5 rounded-lg shadow-sm transition-all cursor-pointer">
              <ExternalLink className="size-4 text-[#2563EB]" />
              <span>View Full Public Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── FOOTER DISCLAIMER BAR ── */}
      <footer className="w-full border-t border-gray-200 mt-10 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#64748B]">
        {/* Left: AECCI Disclaimer with Shield Check Icon */}
        <div className="flex items-center gap-2 max-w-[600px] text-center md:text-left leading-relaxed">
          <ShieldCheck className="size-4.5 text-[#10B981] shrink-0" />
          <span>
            <strong className="text-[#0B1B3D]">AECCI Global Deal Room</strong> – A structured B2B business facilitation platform. AECCI does not guarantee transactions, contracts, payments or commercial outcomes.
          </span>
        </div>

        {/* Right: Copyright & Policy Links */}
        <div className="flex items-center flex-wrap justify-center gap-x-3 gap-y-1 font-semibold">
          <span>&copy; 2026 AECCI Global Deal Room. All rights reserved.</span>
          <span className="text-gray-300">|</span>
          <Link to="/terms-conditions" className="hover:text-[#2563EB] transition-colors">
            Terms & Conditions
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/privacy-policy" className="hover:text-[#2563EB] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </Main>
  );
}
