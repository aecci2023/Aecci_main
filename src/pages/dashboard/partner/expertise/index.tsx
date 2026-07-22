import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Scale, FileText, Briefcase, Building2, Loader2, ShieldCheck, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useGetMyPartnerProfileQuery } from "@/store/api/adminApi";

const ICON_MAP: Record<string, any> = {
  "Legal Services": Scale,
  "Trade Advisory": Globe,
  "Export Consulting": TrendingUp,
  "Market Entry": TrendingUp,
  "Pharmaceuticals": ShieldCheck,
  "Agriculture & Food": BookOpen,
  "Textiles & Apparel": Briefcase,
  "Technology & IT": FileText,
  "Manufacturing": Building2,
  "Finance & Banking": Briefcase,
  "Real Estate": Building2,
  "Energy & Mining": Globe,
  "Logistics & Supply Chain": TrendingUp,
  "FMCG": Briefcase,
  "Automotive": Building2,
  "Arbitration": Scale,
  "Other": FileText,
};

const COLOR_VARIANTS = [
  { cardBg: "bg-[#FFF9EA] border-amber-100/80", iconBg: "bg-amber-100/70 text-amber-600", levelColor: "text-amber-600" },
  { cardBg: "bg-[#F2FBF4] border-emerald-100/80", iconBg: "bg-emerald-100/70 text-emerald-600", levelColor: "text-emerald-600" },
  { cardBg: "bg-[#F7F4FE] border-purple-100/80", iconBg: "bg-purple-100/70 text-purple-600", levelColor: "text-purple-600" },
  { cardBg: "bg-[#FFF4F4] border-rose-100/80", iconBg: "bg-rose-100/70 text-rose-600", levelColor: "text-rose-600" },
  { cardBg: "bg-[#EFF6FF] border-blue-100/80", iconBg: "bg-blue-100/70 text-blue-600", levelColor: "text-blue-600" },
  { cardBg: "bg-[#FFF7ED] border-orange-100/80", iconBg: "bg-orange-100/70 text-orange-600", levelColor: "text-orange-600" },
];

export default function PartnerExpertisePage() {
  const navigate = useNavigate();
  const { data: profileData, isLoading } = useGetMyPartnerProfileQuery();
  const profile = profileData?.data;
  const user = profile?.user || {};

  if (isLoading) {
    return (
      <Main fluid className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </Main>
    );
  }

  const expertiseSectors: string[] = profile?.expertiseSectors || [];
  const expertiseCountries: string[] = profile?.expertiseCountries || [];
  const yearsOfExperience = user.yearsOfExperience || "N/A";
  const professionalTitle = user.professionalTitle || "Collaboration Partner";
  const bio = profile?.bio || "";

  // Build categories from actual sectors
  const categories = expertiseSectors.map((sector, idx) => {
    const colors = COLOR_VARIANTS[idx % COLOR_VARIANTS.length];
    const IconComp = ICON_MAP[sector] || Briefcase;
    return {
      id: sector,
      title: sector,
      level: "Expert",
      icon: IconComp,
      ...colors,
    };
  });

  // Build details from sectors
  const details = expertiseSectors.map((sector, idx) => {
    const colors = COLOR_VARIANTS[idx % COLOR_VARIANTS.length];
    const IconComp = ICON_MAP[sector] || Briefcase;
    return {
      id: idx + 1,
      title: sector,
      description: `Professional expertise in ${sector.toLowerCase()} for international trade and business collaboration.`,
      experience: yearsOfExperience.includes("+") ? `${yearsOfExperience} Years` : `${yearsOfExperience} Years`,
      icon: IconComp,
      iconBg: `${colors.iconBg.replace("/70", "")} border-${colors.cardBg.includes("amber") ? "amber" : colors.cardBg.includes("emerald") ? "emerald" : colors.cardBg.includes("purple") ? "purple" : colors.cardBg.includes("rose") ? "rose" : colors.cardBg.includes("blue") ? "blue" : "orange"}-100`,
    };
  });

  const hasData = expertiseSectors.length > 0;

  return (
    <Main fluid className="bg-[#F8FAFC] min-h-screen p-4 sm:p-6 space-y-4 text-left flex flex-col justify-between">
      <div className="space-y-4">
        {/* ── PAGE HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              My Expertise
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {hasData ? `${professionalTitle} · ${expertiseCountries.length} market(s) covered` : "Showcase your expert categories and skills"}
            </p>
          </div>

          <Button
            onClick={() => navigate("/partner/profile")}
            className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm flex items-center gap-1.5 self-start sm:self-center"
          >
            Manage Expertise
          </Button>
        </div>

        {!hasData ? (
          <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-xs text-center space-y-3">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-700">No expertise added yet</h3>
            <p className="text-sm text-slate-500">Complete your profile to showcase your expertise areas and attract businesses.</p>
            <Button onClick={() => navigate("/partner/profile")} className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-5 py-2 rounded-lg">
              Complete Profile
            </Button>
          </div>
        ) : (
          <>
            {/* ── TOP SECTION: EXPERTISE CATEGORIES ── */}
            <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 shadow-xs space-y-3.5">
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Expertise Categories
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {categories.map((cat) => {
                  const IconComp = cat.icon;
                  return (
                    <div
                      key={cat.id}
                      className={`${cat.cardBg} border rounded-xl p-3.5 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-xs`}
                    >
                      <div className={`w-9 h-9 rounded-xl ${cat.iconBg} flex items-center justify-center mb-2 shadow-2xs`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-xs leading-snug">
                        {cat.title}
                      </h3>
                      <p className={`text-[11px] font-bold mt-1 ${cat.levelColor}`}>
                        {cat.level}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── MARKETS COVERED ── */}
            {expertiseCountries.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 shadow-xs space-y-3.5">
                <h2 className="text-sm sm:text-base font-bold text-slate-900">
                  Markets / Countries Covered
                </h2>
                <div className="flex flex-wrap gap-2">
                  {expertiseCountries.map((country) => (
                    <span key={country} className="bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Globe className="w-3 h-3" /> {country}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ── EXPERTISE DETAILS ── */}
            <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 shadow-xs space-y-3.5">
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Expertise Details
              </h2>

              <div className="divide-y divide-slate-100/80 space-y-0.5">
                {details.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-slate-50/70 transition-colors first:pt-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-xl border ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <h4 className="font-bold text-slate-900 text-xs truncate">{item.title}</h4>
                          <p className="text-[11.5px] text-slate-400 font-medium leading-normal">{item.description}</p>
                        </div>
                      </div>
                      <div className="shrink-0 self-start sm:self-center pl-12 sm:pl-0">
                        <span className="bg-slate-50 border border-slate-100 text-slate-700 font-bold text-[11px] px-3 py-1 rounded-md inline-block">
                          {item.experience}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── BIO SECTION ── */}
            {bio && (
              <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 shadow-xs space-y-2">
                <h2 className="text-sm sm:text-base font-bold text-slate-900">Professional Overview</h2>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{bio}</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* ── FOOTER BAR ── */}
      <footer className="w-full border-t border-slate-200/50 pt-4 mt-4 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 font-medium">
        <div>© 2025 AECCI Global. All Rights Reserved.</div>
        <div className="flex items-center gap-3">
          <Link to="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          <Link to="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-slate-600 transition-colors">Cookie Policy</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="#" className="hover:text-slate-600 transition-colors">Support</Link>
          <span>|</span>
          <Link to="#" className="hover:text-slate-600 transition-colors">Help Center</Link>
        </div>
      </footer>
    </Main>
  );
}
