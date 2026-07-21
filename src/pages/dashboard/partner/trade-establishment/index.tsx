import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Building2,
  Rocket,
  Award,
  FlaskConical,
  MoreVertical,
  CheckCircle2,
  Factory,
  Package,
  Shirt,
  ShoppingCart,
  Link2,
} from "lucide-react";
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

function USAFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 190 100">
      <rect width="190" height="100" fill="#BB133E" />
      <path d="M0,15.38H190M0,30.77H190M0,46.15H190M0,61.54H190M0,76.92H190M0,92.31H190" stroke="#FFFFFF" strokeWidth="7.69" />
      <rect width="76" height="53.85" fill="#002147" />
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

function UKFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 60 30">
      <clipPath id="uk_s_te"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="uk_t_te"><path d="M30,15 m-30,0 h60 v30 h-60 z M30,15 m0,-15 v30 h60 v-30 z"/></clipPath>
      <g clipPath="url(#uk_s_te)">
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#012169" strokeWidth="4"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" clipPath="url(#uk_t_te)"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

export default function PartnerTradeEstablishmentPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Initiatives" },
    { id: "inprogress", label: "In Progress" },
    { id: "completed", label: "Completed" },
    { id: "archived", label: "Archived" },
  ];

  const kpiData = [
    {
      id: 1,
      value: "11",
      title: "Active Initiatives",
      change: "+2 this month",
      icon: Building2,
      iconBg: "bg-[#E0F2FE] text-[#2563EB]",
      changeColor: "text-emerald-600",
    },
    {
      id: 2,
      value: "7",
      title: "In Progress",
      change: "+1 this month",
      icon: Rocket,
      iconBg: "bg-[#DCFCE7] text-[#16A34A]",
      changeColor: "text-emerald-600",
    },
    {
      id: 3,
      value: "5",
      title: "Completed",
      change: "+1 this week",
      icon: Award,
      iconBg: "bg-[#F3E8FF] text-[#9333EA]",
      changeColor: "text-purple-600",
    },
    {
      id: 4,
      value: "3",
      title: "Extensions Granted",
      change: "+1 this week",
      icon: FlaskConical,
      iconBg: "bg-[#FFEDD5] text-[#EA580C]",
      changeColor: "text-amber-600",
    },
  ];

  const initiativesData = [
    {
      id: 1,
      title: "Industrial Machinery Export",
      subtitle: "Market Entry Initiative",
      country: "Germany",
      renderFlag: GermanyFlag,
      industry: "Machinery",
      stage: "In Progress",
      stageBg: "bg-[#E0F2FE] text-[#0284C7]",
      progress: 65,
      progressColor: "bg-[#2563EB]",
      dueDate: "29 May 2025",
      icon: Factory,
      tabType: "inprogress",
    },
    {
      id: 2,
      title: "Consumer Goods Distribution",
      subtitle: "Distribution Partnership",
      country: "UAE",
      renderFlag: UAEFlag,
      industry: "FMCG",
      stage: "In Progress",
      stageBg: "bg-[#E0F2FE] text-[#0284C7]",
      progress: 40,
      progressColor: "bg-[#2563EB]",
      dueDate: "30 May 2025",
      icon: Package,
      tabType: "inprogress",
    },
    {
      id: 3,
      title: "Textile Products Export",
      subtitle: "Export Establishment",
      country: "USA",
      renderFlag: USAFlag,
      industry: "Textiles",
      stage: "Completed",
      stageBg: "bg-[#D1FAE5] text-[#059669]",
      progress: 100,
      progressColor: "bg-[#10B981]",
      dueDate: "19 May 2025",
      icon: Shirt,
      tabType: "completed",
    },
    {
      id: 4,
      title: "Food Products Market Entry",
      subtitle: "New Market Development",
      country: "Singapore",
      renderFlag: SingaporeFlag,
      industry: "Food & Beverages",
      stage: "In Progress",
      stageBg: "bg-[#E0F2FE] text-[#0284C7]",
      progress: 20,
      progressColor: "bg-[#B45309]",
      dueDate: "25 May 2025",
      icon: ShoppingCart,
      tabType: "inprogress",
    },
    {
      id: 5,
      title: "Pharma Distribution Setup",
      subtitle: "Distribution Channel",
      country: "UK",
      renderFlag: UKFlag,
      industry: "Pharmaceuticals",
      stage: "Pending",
      stageBg: "bg-[#FEF3C7] text-[#D97706]",
      progress: 15,
      progressColor: "bg-[#F59E0B]",
      dueDate: "02 Jun 2025",
      icon: Link2,
      tabType: "inprogress",
    },
  ];

  const filteredInitiatives = initiativesData.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "inprogress") return item.stage === "In Progress" || item.stage === "Pending";
    if (activeTab === "completed") return item.stage === "Completed";
    if (activeTab === "archived") return item.stage === "Archived";
    return true;
  });

  const journeySteps = [
    {
      id: 1,
      title: "Market Research",
      subtitle: "Identify opportunities",
      status: "completed",
    },
    {
      id: 2,
      title: "Partner Identification",
      subtitle: "Find right partners",
      status: "completed",
    },
    {
      id: 3,
      title: "Documentation",
      subtitle: "Prepare legal docs",
      status: "current",
    },
    {
      id: 4,
      title: "Compliance Check",
      subtitle: "Verify regulations",
      status: "upcoming",
    },
    {
      id: 5,
      title: "Trade Setup",
      subtitle: "Establish operation",
      status: "upcoming",
    },
    {
      id: 6,
      title: "Go Live",
      subtitle: "Launch initiative",
      status: "upcoming",
    },
  ];

  return (
    <Main fluid className="bg-[#F8FAFC] min-h-screen p-6 sm:p-8 space-y-6 text-left flex flex-col justify-between">
      <div className="space-y-6 max-w-[1600px] mx-auto w-full">
        {/* ── PAGE HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trade Establishment
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              Manage your new trade establishments and partnerships
            </p>
          </div>

          <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 self-start sm:self-center">
            <Plus className="w-4 h-4 stroke-[2.5px]" />
            <span>New Trade Initiative</span>
          </Button>
        </div>

        {/* ── KPI SECTION (4 EQUAL CARDS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpiData.map((kpi) => {
            const IconComp = kpi.icon;
            return (
              <div
                key={kpi.id}
                className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm flex items-center gap-4 transition-all hover:shadow-md"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${kpi.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
                >
                  <IconComp className="w-6 h-6 stroke-[2.2px]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-2xl font-extrabold text-slate-900 leading-none block">
                    {kpi.value}
                  </span>
                  <span className="text-xs font-bold text-slate-500 block">
                    {kpi.title}
                  </span>
                  <span className={`text-xs font-semibold ${kpi.changeColor} block mt-0.5`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MAIN INITIATIVES TABLE CARD ── */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Status Tabs */}
          <div className="flex items-center gap-8 border-b border-slate-100 overflow-x-auto text-xs sm:text-sm font-semibold">
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

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[950px]">
              <thead>
                <tr className="text-xs sm:text-sm font-semibold text-slate-500 border-b border-slate-100">
                  <th className="pb-4 pl-2 w-[28%] font-semibold text-slate-500">Initiative / Project</th>
                  <th className="pb-4 w-[16%] font-semibold text-slate-500">Country / Region</th>
                  <th className="pb-4 w-[14%] font-semibold text-slate-500">Industry</th>
                  <th className="pb-4 text-center w-[12%] font-semibold text-slate-500">Stage</th>
                  <th className="pb-4 text-center w-[12%] font-semibold text-slate-500">Progress</th>
                  <th className="pb-4 w-[11%] font-semibold text-slate-500">Due Date</th>
                  <th className="pb-4 text-right pr-2 w-[7%] font-semibold text-slate-500">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInitiatives.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400 text-sm font-medium">
                      No initiatives found for this status tab.
                    </td>
                  </tr>
                ) : (
                  filteredInitiatives.map((item) => {
                    const IconComp = item.icon;
                    const FlagComp = item.renderFlag;
                    return (
                      <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                        {/* Initiative / Project */}
                        <td className="py-4 pl-2">
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <IconComp className="w-5 h-5" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                                {item.title}
                              </h4>
                              <p className="text-xs text-slate-400 font-medium truncate">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Country / Region */}
                        <td className="py-4 text-xs font-bold text-slate-900 whitespace-nowrap">
                          <span className="inline-flex items-center gap-2">
                            <FlagComp />
                            <span>{item.country}</span>
                          </span>
                        </td>

                        {/* Industry */}
                        <td className="py-4 text-xs font-semibold text-slate-800 whitespace-nowrap">
                          {item.industry}
                        </td>

                        {/* Stage Badge */}
                        <td className="py-4 text-center whitespace-nowrap">
                          <span
                            className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold ${item.stageBg}`}
                          >
                            {item.stage}
                          </span>
                        </td>

                        {/* Progress */}
                        <td className="py-4 text-center whitespace-nowrap">
                          <div className="flex flex-col items-center gap-1 min-w-[70px]">
                            <span className="text-[11px] font-bold text-slate-700">
                              {item.progress}%
                            </span>
                            <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${item.progressColor} rounded-full transition-all duration-300`}
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>

                        {/* Due Date */}
                        <td className="py-4 text-xs font-semibold text-slate-800 whitespace-nowrap">
                          {item.dueDate}
                        </td>

                        {/* Action */}
                        <td className="py-4 text-right pr-2 whitespace-nowrap">
                          <div className="inline-flex items-center gap-1">
                            <Link
                              to="#"
                              className="inline-block bg-[#F1F3F4] hover:bg-[#E8EAED] text-slate-800 font-bold text-xs px-3 py-1.5 rounded-lg transition-colors"
                            >
                              View
                            </Link>
                            <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER / PAGINATION */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-semibold">
              Showing 1 to {filteredInitiatives.length} of 11 initiatives
            </span>

            <div className="flex items-center gap-1.5 self-center">
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                «
              </button>
              <button className="w-7 h-7 rounded-lg bg-[#0B1727] text-white flex items-center justify-center font-bold">
                1
              </button>
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                2
              </button>
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                3
              </button>
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                »
              </button>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CARDS SECTION: JOURNEY STEPPER & ASSISTANCE BANNER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Card: Trade Establishment Journey (~70%) */}
          <div className="lg:col-span-8 xl:col-span-9 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              Trade Establishment Journey
            </h3>

            {/* Stepper Steps Container */}
            <div className="relative py-4">
              {/* Connecting Horizontal Line */}
              <div className="absolute top-8 left-6 right-6 h-0.5 bg-slate-200/80 -z-0"></div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                {journeySteps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center text-center space-y-2">
                    {/* Circle Icon Badge */}
                    {step.status === "completed" ? (
                      <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center shadow-sm">
                        <CheckCircle2 className="w-5 h-5 fill-white text-[#059669]" />
                      </div>
                    ) : step.status === "current" ? (
                      <div className="w-10 h-10 rounded-full bg-[#D1FAE5] border-2 border-[#059669] text-[#059669] flex items-center justify-center shadow-xs">
                        <CheckCircle2 className="w-5 h-5 fill-[#059669] text-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                      </div>
                    )}

                    {/* Step Titles */}
                    <div className="space-y-0.5">
                      <p
                        className={`text-xs font-bold ${
                          step.status === "completed" || step.status === "current"
                            ? "text-[#059669]"
                            : "text-slate-600"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium leading-tight">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Need Assistance Banner (~30%) */}
          <div
            className="lg:col-span-4 xl:col-span-3 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden space-y-4 bg-cover bg-right bg-no-repeat bg-[#07192F]"
            style={{ backgroundImage: "url('/MarketPlaceBG.png')" }}
          >
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07192F]/90 via-[#07192F]/70 to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-1">
              <h3 className="font-extrabold text-white text-base sm:text-lg">
                Need Assistance?
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                Our experts are here to help
              </p>
            </div>

            <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm self-start relative z-10 cursor-pointer">
              Request Consultation
            </Button>
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
