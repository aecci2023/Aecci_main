import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award } from "lucide-react";

export default function AgentProfilePage() {
  const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const user = userStr ? JSON.parse(userStr) : null;

  const fullName = user?.fullName || "Test Agent";
  const email = user?.email || "agent@aecci.org";
  const mobile =
    user?.countryCode && user?.mobileNumber
      ? `${user.countryCode} ${user.mobileNumber}`
      : user?.mobileNumber || "+1 (800) 123-4567";
  const designation = user?.professionalTitle || "Trade Agent";
  const company = user?.organization || user?.company || "AECCI Global Deal Room";
  const country = user?.country || "United States";
  const memberSince = "15 January 2024";

  const expertiseSummary = [
    { label: "International Trade Advisory", value: 92, color: "bg-[#D4A64A]" },
    { label: "Market Entry Strategy", value: 85, color: "bg-[#14B8A6]" },
    { label: "Regulatory Compliance", value: 80, color: "bg-[#A855F7]" },
    { label: "Legal Documentation", value: 75, color: "bg-[#F97316]" },
  ];

  const documents = [
    {
      id: 1,
      title: "Trade Advisory Certification",
      issuer: "Issued by ITC",
      validity: "Valid till 20 Jan 2026",
      status: "Verified",
    },
    {
      id: 2,
      title: "International Compliance Expert",
      issuer: "Issued by IIC",
      validity: "Valid till 15 Mar 2026",
      status: "Verified",
    },
  ];

  return (
    <Main fluid className="bg-[#F8FAFC] min-h-screen p-4 sm:p-8 space-y-6 text-left">
      {/* ── PAGE HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Profile
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Manage your personal and business information
          </p>
        </div>

        <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-sm self-start sm:self-center">
          Update Profile
        </Button>
      </div>

      {/* ── TOP CONTAINER: PERSONAL PROFILE CARD ── */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Avatar & Badge */}
          <div className="lg:col-span-4 flex flex-col items-center text-center lg:border-r lg:border-slate-100 lg:pr-8">
            <div className="relative inline-block">
              <img
                src={
                  user?.profilePicture ||
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&h=250&q=80"
                }
                alt={fullName}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-slate-50 shadow-sm"
              />
              <div className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full p-1 border-2 border-white shadow-sm">
                <CheckCircle2 className="w-4 h-4 fill-blue-600 text-white" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-4 leading-tight">
              {fullName}
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Trade Agent</p>

            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Verified Agent
              </span>
            </div>

            <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-6 py-2 rounded-xl mt-4 shadow-sm">
              Edit Profile
            </Button>
          </div>

          {/* Right Column: Personal Information */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs sm:text-sm pt-1">
              <div className="flex items-center">
                <span className="text-slate-400 font-semibold w-28 shrink-0">Full Name</span>
                <span className="text-slate-900 font-bold truncate">{fullName}</span>
              </div>

              <div className="flex items-center">
                <span className="text-slate-400 font-semibold w-28 shrink-0">Designation</span>
                <span className="text-slate-900 font-bold truncate">{designation}</span>
              </div>

              <div className="flex items-center">
                <span className="text-slate-400 font-semibold w-28 shrink-0">Email</span>
                <span className="text-slate-900 font-bold truncate">{email}</span>
              </div>

              <div className="flex items-center">
                <span className="text-slate-400 font-semibold w-28 shrink-0">Company</span>
                <span className="text-slate-900 font-bold truncate">{company}</span>
              </div>

              <div className="flex items-center">
                <span className="text-slate-400 font-semibold w-28 shrink-0">Phone</span>
                <span className="text-slate-900 font-bold truncate">{mobile}</span>
              </div>

              <div className="flex items-center">
                <span className="text-slate-400 font-semibold w-28 shrink-0">Country</span>
                <span className="text-slate-900 font-bold truncate">{country}</span>
              </div>

              <div className="flex items-center sm:col-span-2">
                <span className="text-slate-400 font-semibold w-28 shrink-0">Member Since</span>
                <span className="text-slate-900 font-bold truncate">{memberSince}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MIDDLE ROW: BUSINESS INFO & EXPERTISE SUMMARY ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Card 1: Business Information */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Business Information
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm pt-1">
              <div className="flex items-start">
                <span className="text-slate-400 font-semibold w-32 shrink-0 pt-0.5">
                  Business Type
                </span>
                <span className="text-slate-900 font-bold">Trade Advisory & Consulting</span>
              </div>

              <div className="flex items-start">
                <span className="text-slate-400 font-semibold w-32 shrink-0 pt-0.5">
                  Area of Expertise
                </span>
                <div className="space-y-0.5">
                  <p className="text-slate-900 font-bold">International Trade</p>
                  <p className="text-xs text-slate-400 font-medium">
                    Market Entry, Trade Strategy, Legal Compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-slate-400 font-semibold w-32 shrink-0 pt-0.5">
                  Experience
                </span>
                <span className="text-slate-900 font-bold">10+ Years</span>
              </div>

              <div className="flex items-start">
                <span className="text-slate-400 font-semibold w-32 shrink-0 pt-0.5">
                  Languages
                </span>
                <span className="text-slate-900 font-bold">English, Spanish, German</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-5 py-2 rounded-xl shadow-sm">
              Edit Business Info
            </Button>
          </div>
        </div>

        {/* Card 2: Expertise Summary */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-5">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6">
              Expertise Summary
            </h3>

            <div className="space-y-5">
              {expertiseSummary.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900">{item.label}</span>
                    <span className="font-bold text-slate-900">{item.value}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CONTAINER: DOCUMENTS & CERTIFICATIONS ── */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          Documents & Certifications
        </h3>

        <div className="divide-y divide-slate-100">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="py-4 first:pt-2 last:pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <p className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                    {doc.title}
                  </p>
                  <p className="text-xs text-slate-400 font-medium truncate">{doc.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-8 shrink-0 pl-13 sm:pl-0">
                <span className="text-xs text-slate-400 font-medium">{doc.validity}</span>
                <span className="text-xs font-semibold text-[#84CC16]">{doc.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-5 py-2 rounded-xl shadow-sm">
            View All Documents
          </Button>
        </div>
      </div>
    </Main>
  );
}
