import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Plus,
  FileCheck,
  ShieldCheck,
  Hourglass,
  Shield,
  FileText,
  ChevronRight,
  Upload,
  FileSearch,
  Calendar,
  Download,
  Info,
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

function EUFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block bg-[#003399]" viewBox="0 0 12 8">
      <circle cx="6" cy="4" r="2.2" stroke="#FFCC00" strokeWidth="0.7" strokeDasharray="0.1 0.7" fill="none" />
    </svg>
  );
}

function IndiaFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 9 6">
      <rect width="9" height="2" fill="#FF9933" />
      <rect y="2" width="9" height="2" fill="#FFFFFF" />
      <rect y="4" width="9" height="2" fill="#138808" />
      <circle cx="4.5" cy="3" r="0.7" fill="#000080" />
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

export default function PartnerLegalCompliancePage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Cases" },
    { id: "pending", label: "Pending Review" },
    { id: "inprogress", label: "In Progress" },
    { id: "completed", label: "Completed" },
    { id: "archived", label: "Archived" },
  ];

  const kpiData = [
    {
      id: 1,
      value: "12",
      title: "Active Cases",
      change: "+2 this month",
      icon: FileCheck,
      iconBg: "bg-[#E0F2FE] text-[#2563EB]",
      changeColor: "text-emerald-600",
    },
    {
      id: 2,
      value: "8",
      title: "Documents Verified",
      change: "+3 this month",
      icon: ShieldCheck,
      iconBg: "bg-[#DCFCE7] text-[#16A34A]",
      changeColor: "text-emerald-600",
    },
    {
      id: 3,
      value: "3",
      title: "Pending Actions",
      change: "+1 this week",
      icon: Hourglass,
      iconBg: "bg-[#FFEDD5] text-[#EA580C]",
      changeColor: "text-amber-600",
    },
    {
      id: 4,
      value: "100%",
      title: "Compliance Score",
      change: "Excellent",
      icon: Shield,
      iconBg: "bg-[#F3E8FF] text-[#9333EA]",
      changeColor: "text-emerald-600",
    },
  ];

  const casesData = [
    {
      id: 1,
      title: "Export License Compliance",
      subtitle: "Industrial Machinery Export",
      jurisdiction: "Germany",
      renderFlag: GermanyFlag,
      category: "Export Compliance",
      categoryBadgeStyle: "bg-blue-50 text-[#2563EB] border border-blue-100/70",
      assignedName: "James Carter",
      assignedRole: "Compliance Expert",
      assignedAvatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80",
      dueDate: "28 May 2025",
      status: "In Progress",
      statusBg: "bg-[#E0F2FE] text-[#0284C7]",
      progress: 65,
      progressColor: "bg-[#2563EB]",
      icon: FileText,
      iconBg: "bg-[#2563EB] text-white",
    },
    {
      id: 2,
      title: "Trade Agreement Compliance",
      subtitle: "EU-India Trade Agreement",
      jurisdiction: "European Union",
      renderFlag: EUFlag,
      category: "Trade Agreement",
      categoryBadgeStyle: "bg-emerald-50 text-[#059669] border border-emerald-100/70",
      assignedName: "Olivia Bennett",
      assignedRole: "Legal Advisor",
      assignedAvatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      dueDate: "30 May 2025",
      status: "In Progress",
      statusBg: "bg-[#E0F2FE] text-[#0284C7]",
      progress: 40,
      progressColor: "bg-[#2563EB]",
      icon: ShieldCheck,
      iconBg: "bg-[#10B981] text-white",
    },
    {
      id: 3,
      title: "Customs Documentation",
      subtitle: "Import Documentation Review",
      jurisdiction: "India",
      renderFlag: IndiaFlag,
      category: "Customs Compliance",
      categoryBadgeStyle: "bg-amber-50 text-[#D97706] border border-amber-100/70",
      assignedName: "Daniel Wright",
      assignedRole: "Compliance Expert",
      assignedAvatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
      dueDate: "22 May 2025",
      status: "Pending Review",
      statusBg: "bg-[#FEF3C7] text-[#D97706]",
      progress: 30,
      progressColor: "bg-[#F59E0B]",
      icon: FileText,
      iconBg: "bg-[#F59E0B] text-white",
    },
    {
      id: 4,
      title: "Certifications & Standards",
      subtitle: "Product Certification Review",
      jurisdiction: "USA",
      renderFlag: USAFlag,
      category: "Certification",
      categoryBadgeStyle: "bg-purple-50 text-[#7C3AED] border border-purple-100/70",
      assignedName: "Isabella Clark",
      assignedRole: "Certification Expert",
      assignedAvatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
      dueDate: "19 May 2025",
      status: "Completed",
      statusBg: "bg-[#D1FAE5] text-[#059669]",
      progress: 100,
      progressColor: "bg-[#10B981]",
      icon: ShieldCheck,
      iconBg: "bg-[#8B5CF6] text-white",
    },
    {
      id: 5,
      title: "IP & Patent Registration",
      subtitle: "Cross-border Patent Audit",
      jurisdiction: "Germany",
      renderFlag: GermanyFlag,
      category: "Legal Advisory",
      categoryBadgeStyle: "bg-purple-50 text-[#7C3AED] border border-purple-100/70",
      assignedName: "James Carter",
      assignedRole: "Compliance Expert",
      assignedAvatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80",
      dueDate: "10 Apr 2025",
      status: "Archived",
      statusBg: "bg-slate-100 text-slate-600 border border-slate-200",
      progress: 100,
      progressColor: "bg-slate-400",
      icon: FileText,
      iconBg: "bg-slate-600 text-white",
    },
    {
      id: 6,
      title: "Environmental Clearance",
      subtitle: "Sustainability Audit & Clearance",
      jurisdiction: "European Union",
      renderFlag: EUFlag,
      category: "Regulatory Compliance",
      categoryBadgeStyle: "bg-emerald-50 text-[#059669] border border-emerald-100/70",
      assignedName: "Olivia Bennett",
      assignedRole: "Legal Advisor",
      assignedAvatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      dueDate: "15 Jun 2025",
      status: "Pending Review",
      statusBg: "bg-[#FEF3C7] text-[#D97706]",
      progress: 15,
      progressColor: "bg-[#F59E0B]",
      icon: ShieldCheck,
      iconBg: "bg-[#F59E0B] text-white",
    },
  ];

  const filteredCases = casesData.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "pending") return item.status === "Pending Review";
    if (activeTab === "inprogress") return item.status === "In Progress";
    if (activeTab === "completed") return item.status === "Completed";
    if (activeTab === "archived") return item.status === "Archived";
    return true;
  });

  const quickActions = [
    { id: 1, label: "Upload Document", icon: Upload },
    { id: 2, label: "Request Compliance Review", icon: FileSearch },
    { id: 3, label: "View Compliance Calendar", icon: Calendar },
    { id: 4, label: "Download Templates", icon: Download },
  ];

  return (
    <Main fluid className="bg-[#F8FAFC] min-h-screen p-6 sm:p-8 space-y-6 text-left flex flex-col justify-between">
      <div className="space-y-6 max-w-[1600px] mx-auto w-full">
        {/* ── PAGE HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Legal Compliance
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              Track compliance requirements and manage documentation
            </p>
          </div>

          <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 self-start sm:self-center">
            <Plus className="w-4 h-4 stroke-[2.5px]" />
            <span>New Compliance Case</span>
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

        {/* ── TABS & MAIN CONTENT GRID ── */}
        <div className="space-y-4">
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

          {/* Grid Layout: Left Table (~75%) & Right Sidebar (~25%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* ── LEFT COLUMN: CASES TABLE CARD ── */}
            <div className="lg:col-span-8 xl:col-span-9 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 overflow-hidden">
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-left border-collapse min-w-[1050px]">
                  <thead>
                    <tr className="text-xs font-semibold text-slate-500 border-b border-slate-100 bg-[#FAFBFD]/60 h-11">
                      <th className="py-3 px-4 w-[28%] font-semibold text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <span>Case / Requirement</span>
                          <Info className="w-3.5 h-3.5 text-slate-400" />
                        </span>
                      </th>
                      <th className="py-3 px-4 w-[14%] font-semibold text-slate-500">Jurisdiction</th>
                      <th className="py-3 px-4 w-[15%] font-semibold text-slate-500">Category</th>
                      <th className="py-3 px-4 w-[18%] font-semibold text-slate-500">Assigned To</th>
                      <th className="py-3 px-4 w-[11%] font-semibold text-slate-500">Due Date</th>
                      <th className="py-3 px-4 text-center w-[11%] font-semibold text-slate-500">Status</th>
                      <th className="py-3 px-4 text-center w-[10%] font-semibold text-slate-500">Progress</th>
                      <th className="py-3 px-4 text-center w-[10%] font-semibold text-slate-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100/80">
                    {filteredCases.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-slate-400 text-sm font-medium">
                          No cases found for this status tab.
                        </td>
                      </tr>
                    ) : (
                      filteredCases.map((item) => {
                        const IconComp = item.icon;
                        const FlagComp = item.renderFlag;
                        return (
                          <tr key={item.id} className="hover:bg-[#F8FAFC] transition-colors h-[80px]">
                            {/* Case / Requirement */}
                            <td className="py-4 px-4 align-middle">
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-11 h-11 rounded-full ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                                >
                                  <IconComp className="w-5 h-5" />
                                </div>
                                <div className="space-y-1 min-w-0">
                                  <h4 className="font-bold text-slate-900 text-sm truncate leading-snug">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-slate-400 font-medium truncate leading-none">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* Jurisdiction */}
                            <td className="py-4 px-4 align-middle text-xs font-bold text-slate-900 whitespace-nowrap">
                              <span className="inline-flex items-center gap-2.5">
                                <FlagComp />
                                <span>{item.jurisdiction}</span>
                              </span>
                            </td>

                            {/* Category Badge */}
                            <td className="py-4 px-4 align-middle whitespace-nowrap">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${item.categoryBadgeStyle}`}
                              >
                                {item.category}
                              </span>
                            </td>

                            {/* Assigned To */}
                            <td className="py-4 px-4 align-middle">
                              <div className="flex items-center gap-3">
                                <img
                                  src={item.assignedAvatar}
                                  alt={item.assignedName}
                                  className="w-9 h-9 rounded-full object-cover border border-slate-100 shrink-0"
                                />
                                <div className="space-y-0.5 min-w-0">
                                  <p className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                                    {item.assignedName}
                                  </p>
                                  <p className="text-[11.5px] text-slate-400 font-medium truncate">
                                    {item.assignedRole}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* Due Date */}
                            <td className="py-4 px-4 align-middle text-xs font-semibold text-slate-700 whitespace-nowrap">
                              {item.dueDate}
                            </td>

                            {/* Status Badge */}
                            <td className="py-4 px-4 align-middle text-center whitespace-nowrap">
                              <span
                                className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold whitespace-nowrap ${item.statusBg}`}
                              >
                                {item.status}
                              </span>
                            </td>

                            {/* Progress */}
                            <td className="py-4 px-4 align-middle text-center whitespace-nowrap">
                              <div className="flex items-center justify-center gap-2.5">
                                <span className="text-xs font-bold text-slate-800 w-8 text-right">
                                  {item.progress}%
                                </span>
                                <div className="w-14 sm:w-16 bg-slate-100 h-2 rounded-full overflow-hidden shrink-0">
                                  <div
                                    className={`h-full ${item.progressColor} rounded-full transition-all duration-300`}
                                    style={{ width: `${item.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            </td>

                            {/* Action */}
                            <td className="py-4 px-4 align-middle text-center whitespace-nowrap">
                              <Link
                                to="#"
                                className="inline-block bg-[#F1F3F4] hover:bg-[#E8EAED] text-slate-800 font-bold text-xs px-4 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                              >
                                View Case
                              </Link>
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
                  Showing 1 to {filteredCases.length} of 12 cases
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

            {/* ── RIGHT COLUMN: SIDEBAR CARDS ── */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-6">
              
              {/* Card 1: Compliance Overview Donut Chart */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-slate-900 text-base">
                  Compliance Overview
                </h3>

                {/* Donut Chart Container */}
                <div className="flex flex-col items-center justify-center py-2 relative">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      {/* Segment 1: In Progress (42%) - Blue */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#2563EB"
                        strokeWidth="12"
                        strokeDasharray="100.3 138.4"
                        strokeDashoffset="0"
                        fill="none"
                      />
                      {/* Segment 2: Pending Review (25%) - Amber */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#F59E0B"
                        strokeWidth="12"
                        strokeDasharray="59.7 179"
                        strokeDashoffset="-100.3"
                        fill="none"
                      />
                      {/* Segment 3: Completed (33%) - Green */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#10B981"
                        strokeWidth="12"
                        strokeDasharray="78.8 159.9"
                        strokeDashoffset="-160"
                        fill="none"
                      />
                    </svg>

                    {/* Donut Center Label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-extrabold text-slate-900 leading-none">
                        12
                      </span>
                      <span className="text-xs font-semibold text-slate-400 mt-1">
                        Total Cases
                      </span>
                    </div>
                  </div>

                  {/* Legend Below Chart */}
                  <div className="w-full space-y-2.5 pt-4 border-t border-slate-100 text-xs mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-xs bg-[#2563EB]"></span>
                        <span className="font-semibold text-slate-700">In Progress</span>
                      </div>
                      <span className="font-bold text-slate-900">5 (42%)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-xs bg-[#F59E0B]"></span>
                        <span className="font-semibold text-slate-700">Pending Review</span>
                      </div>
                      <span className="font-bold text-slate-900">3 (25%)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-xs bg-[#10B981]"></span>
                        <span className="font-semibold text-slate-700">Completed</span>
                      </div>
                      <span className="font-bold text-slate-900">4 (33%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Quick Actions */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Quick Actions
                </h3>

                <div className="space-y-2.5">
                  {quickActions.map((action) => {
                    const IconComp = action.icon;
                    return (
                      <button
                        key={action.id}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-left group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                            <IconComp className="w-4 h-4 stroke-[2.2px]" />
                          </div>
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {action.label}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
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
