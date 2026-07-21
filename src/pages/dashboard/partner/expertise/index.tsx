import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { Plus, Globe, TrendingUp, Scale, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function PartnerExpertisePage() {
  const categories = [
    {
      id: "trade",
      title: "International Trade Advisory",
      level: "Expert",
      icon: Globe,
      cardBg: "bg-[#FFF9EA] border-amber-100/80",
      iconBg: "bg-amber-100/70 text-amber-600",
      levelColor: "text-amber-600",
    },
    {
      id: "market",
      title: "Market Entry Strategy",
      level: "Expert",
      icon: TrendingUp,
      cardBg: "bg-[#F2FBF4] border-emerald-100/80",
      iconBg: "bg-emerald-100/70 text-emerald-600",
      levelColor: "text-emerald-600",
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      level: "Expert",
      icon: Scale,
      cardBg: "bg-[#F7F4FE] border-purple-100/80",
      iconBg: "bg-purple-100/70 text-purple-600",
      levelColor: "text-purple-600",
    },
    {
      id: "legal",
      title: "Legal Advisory",
      level: "Expert",
      icon: FileText,
      cardBg: "bg-[#FFF4F4] border-rose-100/80",
      iconBg: "bg-rose-100/70 text-rose-600",
      levelColor: "text-rose-600",
    },
  ];

  const details = [
    {
      id: 1,
      title: "International Trade Advisory",
      description:
        "Providing strategic advisory on international trade, market entry and business expansion.",
      experience: "9+ Years",
      icon: Globe,
      iconBg: "bg-[#FFF9EA] text-amber-600 border-amber-100",
    },
    {
      id: 2,
      title: "Market Entry Strategy",
      description:
        "Helping businesses enter new markets with strategies and partnerships.",
      experience: "8+ Years",
      icon: TrendingUp,
      iconBg: "bg-[#F2FBF4] text-emerald-600 border-emerald-100",
    },
    {
      id: 3,
      title: "Regulatory Compliance",
      description:
        "Ensuring businesses comply with international trade laws and regulations.",
      experience: "7+ Years",
      icon: Scale,
      iconBg: "bg-[#F7F4FE] text-purple-600 border-purple-100",
    },
    {
      id: 4,
      title: "Legal Advisory",
      description:
        "Providing legal guidance and documentation for global trade operations.",
      experience: "6+ Years",
      icon: FileText,
      iconBg: "bg-[#FFF4F4] text-rose-600 border-rose-100",
    },
  ];

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
              Showcase your expert categories and skills
            </p>
          </div>

          <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm flex items-center gap-1.5 self-start sm:self-center">
            <Plus className="w-3.5 h-3.5 stroke-[2.5px]" />
            <span>Add Expertise</span>
          </Button>
        </div>

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
                  <div
                    className={`w-9 h-9 rounded-xl ${cat.iconBg} flex items-center justify-center mb-2 shadow-2xs`}
                  >
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

        {/* ── BOTTOM SECTION: EXPERTISE DETAILS ── */}
        <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 shadow-xs space-y-3.5">
          <h2 className="text-sm sm:text-base font-bold text-slate-900">
            Expertise Details
          </h2>

          <div className="divide-y divide-slate-100/80 space-y-0.5">
            {details.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-slate-50/70 transition-colors first:pt-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl border ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="font-bold text-slate-900 text-xs truncate">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-400 font-medium leading-normal">
                        {item.description}
                      </p>
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

          <div className="pt-1 flex justify-end">
            <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm">
              Manage Expertise
            </Button>
          </div>
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <footer className="w-full border-t border-slate-200/50 pt-4 mt-4 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 font-medium">
        <div>© 2025 AECCI Global. All Rights Reserved.</div>
        <div className="flex items-center gap-3">
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
