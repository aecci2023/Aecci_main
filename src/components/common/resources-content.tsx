import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ClipboardList,
  FileText,
  FolderKanban,
  Scale,
  Search,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  {
    title: "Guides & Manuals",
    count: 34,
    icon: BookOpen,
    iconBg: "bg-[#EFF8FF]",
    iconColor: "text-[#175CD3]",
  },
  {
    title: "Templates",
    count: 18,
    icon: FileText,
    iconBg: "bg-[#ECFDF3]",
    iconColor: "text-[#039855]",
  },
  {
    title: "Legal Documents",
    count: 22,
    icon: Scale,
    iconBg: "bg-[#F4F3FF]",
    iconColor: "text-[#6938EF]",
  },
  {
    title: "Market Reports",
    count: 15,
    icon: FolderKanban,
    iconBg: "bg-[#EEF4FF]",
    iconColor: "text-[#3538CD]",
  },
  {
    title: "Forms & Tools",
    count: 12,
    icon: Wrench,
    iconBg: "bg-[#FFFAEB]",
    iconColor: "text-[#DC6803]",
  },
];

const CATEGORY_COLOR: Record<string, string> = {
  "Guides & Manuals": "text-[#175CD3]",
  Templates: "text-[#039855]",
  "Legal Documents": "text-[#6938EF]",
  "Market Reports": "text-[#DC6803]",
  "Forms & Tools": "text-[#B54708]",
};

const RESOURCES = [
  {
    name: "International Trade Guide 2025",
    category: "Guides & Manuals",
    type: "PDF",
    updated: "20 May 2025",
  },
  {
    name: "Market Entry Strategy Template",
    category: "Templates",
    type: "DOCX",
    updated: "19 May 2025",
  },
  {
    name: "Export Compliance Checklist",
    category: "Legal Documents",
    type: "PDF",
    updated: "15 May 2025",
  },
  {
    name: "EU Market Report - May 2025",
    category: "Market Reports",
    type: "PDF",
    updated: "14 May 2025",
  },
  {
    name: "Agency Representation Form",
    category: "Forms & Tools",
    type: "DOCX",
    updated: "12 May 2025",
  },
  {
    name: "Trade Dispute Resolution Guide",
    category: "Guides & Manuals",
    type: "PDF",
    updated: "10 May 2025",
  },
];

const QUICK_ACCESS = [
  "Download Templates",
  "Compliance Checklists",
  "Market Reports",
  "Legal Documents",
  "Trade Guides",
];

const POPULAR = [
  "International Trade Guide 2025",
  "Market Entry Strategy Template",
  "Export Compliance Checklist",
  "EU Market Report – May 2025",
  "Agency Representation Form",
];

function RightSidebar() {
  return (
    <aside className="space-y-4 xl:sticky xl:top-4">
      <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
        <h3 className="text-[14px] font-bold text-[#101828]">Quick Access</h3>
        <ul className="mt-3.5 space-y-1">
          {QUICK_ACCESS.map((item, i) => (
            <li key={item}>
              <button
                type="button"
                className="flex w-full items-center gap-2.5 rounded-lg px-1 py-2 text-left transition hover:bg-[#F9FAFB]"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EFF8FF] text-[10px] font-bold text-[#175CD3]">
                  {i + 1}
                </span>
                <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#344054]">
                  <ClipboardList className="size-3.5 text-[#175CD3]" />
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
        <h3 className="text-[14px] font-bold text-[#101828]">Popular Resources</h3>
        <ol className="mt-3.5 space-y-3">
          {POPULAR.map((item, i) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-[12px] font-bold text-[#B54708]">
                {i + 1}.
              </span>
              <span className="text-[12px] font-medium leading-snug text-[#344054]">
                {item}
              </span>
            </li>
          ))}
        </ol>
        <Button className="mt-5 h-10 w-full rounded-lg bg-[#D4A574] text-[13px] font-semibold text-[#061A33] hover:bg-[#C4935F]">
          View All Popular
        </Button>
      </div>
    </aside>
  );
}

export function ResourcesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredResources = RESOURCES.filter((res) => {
    const matchesSearch = res.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || res.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h1 className="text-[22px] font-bold tracking-tight text-[#101828] sm:text-[24px]">
          Resources
        </h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Access important documents, guides and templates.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0 space-y-5">
          {/* Search + filter */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-[#E4E7EC] bg-white px-3.5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
              <Search className="size-4 shrink-0 text-[#98A2B3]" />
              <input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-[13px] text-[#101828] outline-none placeholder:text-[#98A2B3]"
              />
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex h-11 w-full items-center justify-between gap-3 rounded-xl border border-[#E4E7EC] bg-white px-3.5 text-[13px] font-medium text-[#344054] shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:min-w-[180px]"
              >
                <span>{selectedCategory || "All Categories"}</span>
                <ChevronDown className="size-4 text-[#98A2B3]" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 top-full z-10 mt-1 w-full min-w-[180px] rounded-xl border border-[#E4E7EC] bg-white py-1 shadow-lg">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(null);
                      setShowDropdown(false);
                    }}
                    className="flex w-full px-4 py-2 text-left text-[13px] text-[#344054] hover:bg-[#F9FAFB]"
                  >
                    All Categories
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.title}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.title);
                        setShowDropdown(false);
                      }}
                      className="flex w-full px-4 py-2 text-left text-[13px] text-[#344054] hover:bg-[#F9FAFB]"
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category cards */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.title;
              return (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => handleCategorySelect(cat.title)}
                  className={`rounded-2xl border p-4 text-left shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:shadow-sm ${
                    isSelected
                      ? "border-[#D4A574] bg-[#FFFDF9]"
                      : "border-[#E4E7EC] bg-white hover:border-[#D0D5DD]"
                  }`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-xl ${cat.iconBg} ${cat.iconColor}`}
                  >
                    <cat.icon className="size-6" />
                  </span>
                  <p className="mt-3 text-[13px] font-bold leading-snug text-[#101828]">
                    {cat.title}
                  </p>
                  <p className="mt-1 text-[12px] font-semibold text-[#667085]">
                    {cat.count}
                  </p>
                </button>
              );
            })}
          </div>

          {/* All Resources table */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
            <h2 className="text-[15px] font-bold text-[#101828]">All Resources</h2>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead>
                  <tr className="border-b border-[#E4E7EC] text-[11px] font-semibold text-[#98A2B3]">
                    <th className="pb-3 pr-4 font-semibold">Resource Name</th>
                    <th className="pb-3 pr-4 font-semibold">Category</th>
                    <th className="pb-3 pr-4 font-semibold">Type</th>
                    <th className="pb-3 pr-4 font-semibold">Updated On</th>
                    <th className="pb-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResources.length > 0 ? (
                    filteredResources.map((row) => (
                      <tr
                        key={row.name}
                        className="border-b border-[#F2F4F7] last:border-0"
                      >
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2.5">
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F2F4F7] text-[#475467]">
                              <FileText className="size-3.5" />
                            </span>
                            <span className="text-[13px] font-semibold text-[#101828]">
                              {row.name}
                            </span>
                          </div>
                        </td>
                        <td
                          className={`py-3.5 pr-4 text-[12px] font-semibold ${
                            CATEGORY_COLOR[row.category] || "text-[#667085]"
                          }`}
                        >
                          {row.category}
                        </td>
                        <td className="py-3.5 pr-4 text-[12px] text-[#667085]">
                          {row.type}
                        </td>
                        <td className="py-3.5 pr-4 text-[12px] text-[#667085]">
                          {row.updated}
                        </td>
                        <td className="py-3.5">
                          <button
                            type="button"
                            className="text-[12px] font-semibold text-[#B54708] hover:underline"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-[13px] text-[#667085]">
                        No resources found matching the criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-center border-t border-[#F2F4F7] pt-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
                className="text-[13px] font-semibold text-[#175CD3] hover:underline"
              >
                Clear Filters / View All
              </button>
            </div>
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
}
