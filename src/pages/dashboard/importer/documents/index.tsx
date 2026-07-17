import { useState } from "react";
import {
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Folder,
  Search,
  ChevronDown,
  Download,
  MoreVertical,
  HelpCircle,
  ShieldCheck,
  Plus,
  BookOpen,
  MessageCircle,
  FileCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ─── Constants & Mock Data ───
const STATS = [
  { value: "22", label: "All Documents", sub: "Total Uploaded", icon: Folder, color: "bg-[#EFF6FF] text-[#2563EB]" },
  { value: "18", label: "Verified", sub: "Verified Documents", icon: CheckCircle2, color: "bg-[#ECFDF5] text-[#10B981]" },
  { value: "2", label: "Under Review", sub: "Under Verification", icon: Clock, color: "bg-[#FFFBEB] text-[#D97706]" },
  { value: "2", label: "Expiring Soon", sub: "Within 60 Days", icon: AlertTriangle, color: "bg-[#FEF2F2] text-[#EF4444]" },
  { value: "0", label: "Expired", sub: "Expired Documents", icon: FileText, color: "bg-[#FDF2F8] text-[#EC4899]" },
];

const TABS = [
  { id: "all", label: "All Documents" },
  { id: "identity", label: "Identity & Registration" },
  { id: "business", label: "Business & Compliance" },
  { id: "financial", label: "Financial Documents" },
  { id: "certificates", label: "Certificates" },
  { id: "other", label: "Other Documents" },
];

const INITIAL_DOCUMENTS = [
  {
    name: "Business Registration Certificate",
    ext: "PDF",
    size: "1.2 MB",
    category: "Identity & Registration",
    status: "Verified",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    uploadedOn: "20 Aug 2026",
    expiry: "-",
  },
  {
    name: "Articles of Organization (LLC)",
    ext: "PDF",
    size: "1.5 MB",
    category: "Identity & Registration",
    status: "Verified",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    uploadedOn: "18 Aug 2026",
    expiry: "-",
  },
  {
    name: "EIN / Tax Identification Number",
    ext: "PDF",
    size: "0.8 MB",
    category: "Identity & Registration",
    status: "Verified",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    uploadedOn: "18 Aug 2026",
    expiry: "-",
  },
  {
    name: "Import Export Code (IEC)",
    ext: "PNG",
    size: "0.6 MB",
    category: "Business & Compliance",
    status: "Under Review",
    statusColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
    uploadedOn: "21 Aug 2026",
    expiry: "-",
  },
  {
    name: "Certificate of Incorporation",
    ext: "PDF",
    size: "1.1 MB",
    category: "Identity & Registration",
    status: "Verified",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    uploadedOn: "17 Aug 2026",
    expiry: "-",
  },
  {
    name: "Bank Statement (Last 6 Months)",
    ext: "PDF",
    size: "2.4 MB",
    category: "Financial Documents",
    status: "Verified",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    uploadedOn: "15 Aug 2026",
    expiry: "-",
  },
  {
    name: "Trade License",
    ext: "PDF",
    size: "0.9 MB",
    category: "Business & Compliance",
    status: "Expiring Soon",
    statusColor: "bg-[#FEF2F2] text-[#EF4444] border-[#FEE2E2]",
    uploadedOn: "10 Aug 2026",
    expiry: "10 Oct 2026",
  },
  {
    name: "Company Logo",
    ext: "JPG",
    size: "0.3 MB",
    category: "Other Documents",
    status: "Verified",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    uploadedOn: "10 Aug 2026",
    expiry: "-",
  },
];

export default function ImporterDocumentsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortBy, setSortBy] = useState("Latest");

  // Filtered documents list
  const documents = INITIAL_DOCUMENTS.filter((doc) => {
    // Tab filter
    if (activeTab !== "all" && doc.category.toLowerCase() !== activeTab.replace("identity", "identity & registration").replace("business", "business & compliance").replace("financial", "financial documents").replace("other", "other documents").toLowerCase()) {
      // Small helper for exact match
      const mappedCat = doc.category.toLowerCase();
      const currentTab = TABS.find((t) => t.id === activeTab)?.label.toLowerCase() || "";
      if (mappedCat !== currentTab) return false;
    }
    // Search match
    if (searchVal && !doc.name.toLowerCase().includes(searchVal.toLowerCase())) {
      return false;
    }
    // Type Filter (simplified mockup match)
    if (typeFilter !== "All Types" && doc.ext !== typeFilter) {
      return false;
    }
    // Status Filter
    if (statusFilter !== "All Status" && doc.status !== statusFilter) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-full bg-[#F4F6FA] px-6 py-6 text-left">
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-[12px] text-[#64748B] mb-2 font-medium">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span className="text-[#0F172A]">Documents</span>
      </div>

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[26px] font-bold text-[#0F172A]">Documents</h1>
          <p className="text-[14px] text-[#64748B] mt-1">
            Manage and upload all important documents for verification and business operations.
          </p>
        </div>
        <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm shrink-0 self-start sm:self-center transition-colors">
          <Plus className="size-4.5" />
          Upload New Document
        </button>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
                <Icon className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-extrabold text-[#0F172A] leading-tight">{stat.value}</span>
                <span className="text-[12px] text-[#0F172A] font-bold mt-0.5">{stat.label}</span>
                <span className="text-[10px] text-[#64748B] font-medium leading-none mt-0.5">{stat.sub}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Tabs ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl mb-6 overflow-x-auto shadow-sm">
        <div className="flex min-w-max">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  active
                    ? "border-[#2563EB] text-[#2563EB] bg-[#EFF6FF]"
                    : "border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        {/* LEFT COLUMN: Filters + Document Table */}
        <div className="space-y-6">

          {/* Filter Bar */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search documents by name..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full border border-[#D1D5DB] rounded-lg pl-9 pr-4 py-2 text-[13px] outline-none focus:border-[#2563EB]"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            </div>

            {/* Selector Options */}
            <div className="flex flex-wrap gap-2.5 w-full md:w-auto items-center md:justify-end">
              
              {/* Type Select */}
              <div className="relative">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                >
                  <option>All Types</option>
                  <option>PDF</option>
                  <option>PNG</option>
                  <option>JPG</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>

              {/* Status Select */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                >
                  <option>All Status</option>
                  <option>Verified</option>
                  <option>Under Review</option>
                  <option>Expiring Soon</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>

              {/* Sort Select */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                >
                  <option>Sort by: Latest</option>
                  <option>Sort by: Oldest</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>

              {/* Layout Toggle Buttons */}
              <div className="flex border border-[#D1D5DB] rounded-lg overflow-hidden ml-2 h-9">
                <button className="px-3 bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border-r border-[#D1D5DB]">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button className="px-3 bg-white hover:bg-gray-50 text-gray-400 flex items-center justify-center">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Document List Table */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E5E7EB] text-[#475569] font-semibold">
                    <th className="py-3 px-5 text-left font-semibold">Document Name</th>
                    <th className="py-3 px-5 text-left font-semibold">Category</th>
                    <th className="py-3 px-5 text-left font-semibold">Status</th>
                    <th className="py-3 px-5 text-left font-semibold">Uploaded On</th>
                    <th className="py-3 px-5 text-left font-semibold">Expiry Date</th>
                    <th className="py-3 px-5 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
                  {documents.length > 0 ? (
                    documents.map((doc, idx) => {
                      const isPdf = doc.ext === "PDF";
                      const isPng = doc.ext === "PNG";
                      const isJpg = doc.ext === "JPG";
                      
                      const iconBg = isPdf 
                        ? "bg-[#FEF2F2] text-[#EF4444]" 
                        : isPng 
                        ? "bg-[#F0FDF4] text-[#22C55E]" 
                        : "bg-[#F5F3FF] text-[#8B5CF6]";

                      return (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="py-3.5 px-5">
                            <div className="flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-[10px] ${iconBg}`}>
                                {doc.ext}
                              </div>
                              <div className="text-left">
                                <p className="font-bold text-[#0F172A]">{doc.name}</p>
                                <p className="text-[11px] text-[#64748B]">{doc.ext} • {doc.size}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-5 text-[#475569]">{doc.category}</td>
                          <td className="py-3.5 px-5">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border ${doc.statusColor}`}>
                              {doc.status === "Verified" && <span className="mr-1">✓</span>}
                              {doc.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-5 text-[#64748B]">{doc.uploadedOn}</td>
                          <td className="py-3.5 px-5 text-[#64748B]">{doc.expiry}</td>
                          <td className="py-3.5 px-5">
                            <div className="flex items-center justify-center gap-2">
                              <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-[#2563EB] transition-colors">
                                <Download className="size-4" />
                              </button>
                              <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                                <MoreVertical className="size-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-10 text-center text-gray-400">
                        No documents matching the criteria were found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Panel */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-[#E5E7EB]">
              <span className="text-[12px] text-[#64748B]">Showing 1 to {documents.length} of 22 documents</span>
              
              <div className="flex items-center gap-4">
                {/* Pages */}
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-500">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center text-[12px] font-bold">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-600 text-[12px] font-semibold">
                    2
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-600 text-[12px] font-semibold">
                    3
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-500">
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                {/* Limit Select */}
                <div className="relative">
                  <select className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-1.5 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]">
                    <option>10 / page</option>
                    <option>20 / page</option>
                    <option>50 / page</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Instructions & Security */}
        <div className="space-y-6">

          {/* Document Tips */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-3 flex items-center gap-1.5">
              <BookOpen className="size-4 text-[#2563EB]" />
              Document Tips
            </h3>
            <ul className="space-y-3.5 text-[12.5px] text-[#374151] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Upload clear and valid documents for faster verification.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Ensure documents are latest and not expired.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Accepted formats: <strong className="font-semibold text-[#0F172A]">PDF, JPG, PNG (Max 10MB)</strong>.
              </li>
            </ul>

            <button className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[13px] font-semibold py-2 rounded-lg mt-4 transition-colors flex items-center justify-center gap-1.5">
              <BookOpen className="size-4" />
              View Document Guide
            </button>
          </div>

          {/* Verification Info */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-2 flex items-center gap-1.5">
              <FileCheck className="size-4.5 text-[#10B981]" />
              Verification Info
            </h3>
            <p className="text-[12.5px] text-[#64748B] leading-relaxed">
              Documents are verified by AECCI team to ensure trust and security in the platform.
            </p>
          </div>

          {/* Need Help? */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-1">Need Help?</h3>
            <p className="text-[12px] text-[#64748B] mb-4">
              Our support team is here to help you with your document related queries.
            </p>
            <button className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[13px] font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5">
              <MessageCircle className="size-4" />
              Request Assistance
            </button>
          </div>

          {/* Secure & Trusted */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm text-center">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center">
                <ShieldCheck className="size-5.5 text-[#2563EB]" />
              </div>
            </div>
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-1">Secure &amp; Trusted</h3>
            <p className="text-[12px] text-[#64748B] leading-relaxed mb-3">
              Your documents are encrypted and stored securely. We never share your data with third parties.
            </p>
            <a href="#" className="text-[12px] font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1">
              Learn more about our security &rarr;
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
