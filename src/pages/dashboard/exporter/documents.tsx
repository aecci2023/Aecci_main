import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  ShieldCheck,
  Clock,
  XCircle,
  Download,
  CloudUpload,
  Headphones,
  Upload,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterPageHeader,
  ExporterTabs,
  ExporterCard,
} from "@/components/exporter/exporter-page-layout";

const GUIDELINES = [
  "All documents must be valid and unexpired.",
  "Ensure documents are clear, legible and in color.",
  "Upload authorized and official documents only.",
  "Accepted formats: PDF, JPG, PNG (Max 10MB).",
  "All mandatory documents are required for verification.",
];

const TABS = ["My Documents", "Verification Status", "Document History"];

const STATS = [
  {
    label: "Uploaded Documents",
    value: "6",
    icon: FileText,
    bg: "bg-[#ECFDF3]",
    color: "text-[#039855]",
  },
  {
    label: "Verified Documents",
    value: "4",
    icon: ShieldCheck,
    bg: "bg-[#EFF8FF]",
    color: "text-[#175CD3]",
  },
  {
    label: "Pending Verification",
    value: "2",
    icon: Clock,
    bg: "bg-[#FFFAEB]",
    color: "text-[#F79009]",
  },
  {
    label: "Rejected Documents",
    value: "1",
    icon: XCircle,
    bg: "bg-[#FEF3F2]",
    color: "text-[#D92D20]",
  },
  {
    label: "Total Required Documents",
    value: "7",
    icon: FileText,
    bg: "bg-[#F2F4F7]",
    color: "text-[#667085]",
  },
];

/** Matches Figma Required Documents table */
const DOCUMENTS = [
  {
    name: "Business Registration Certificate",
    desc: "Certificate of incorporation / registration",
    mandatory: true,
    status: "Missing",
    date: "—",
    action: "upload" as const,
  },
  {
    name: "GST Registration Certificate",
    desc: "Valid GST registration document",
    mandatory: true,
    status: "Verified",
    date: "12 Mar 2025",
    action: "download" as const,
  },
  {
    name: "IEC Certificate",
    desc: "Valid IEC certificate from DGFT",
    mandatory: true,
    status: "Verified",
    date: "12 Mar 2025",
    action: "download" as const,
  },
  {
    name: "PAN Card",
    desc: "Company / proprietor PAN card",
    mandatory: true,
    status: "Missing",
    date: "—",
    action: "upload" as const,
  },
  {
    name: "Cancelled Cheque",
    desc: "Cancelled cheque of company bank account",
    mandatory: true,
    status: "Missing",
    date: "—",
    action: "upload" as const,
  },
  {
    name: "Bank Statement (6 Months)",
    desc: "Last 6 months bank statement",
    mandatory: true,
    status: "Missing",
    date: "—",
    action: "upload" as const,
  },
  {
    name: "Company Profile / Brochure",
    desc: "Company profile or product brochure PDF",
    mandatory: false,
    status: "Missing",
    date: "—",
    action: "upload" as const,
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Verified: "bg-[#ECFDF3] text-[#027A48]",
    Pending: "bg-[#FFFAEB] text-[#B54708]",
    Rejected: "bg-[#FEF3F2] text-[#D92D20]",
    Missing: "bg-[#F2F4F7] text-[#667085]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${styles[status] || ""}`}
    >
      {status === "Missing" && <AlertCircle className="size-3" />}
      {status}
    </span>
  );
}

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState("My Documents");

  return (
    <ExporterPageShell>
      <ExporterPageHeader
        title="Documents"
        subtitle="Upload and manage your business documents to build trust and unlock more opportunities."
        completion={65}
        completionLabel="Documents Completion"
        secondaryAction={{
          label: "Document Guidelines",
          to: "/dashboard/documents",
        }}
      />

      <ExporterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#E4E7EC] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] leading-tight text-[#667085]">{s.label}</p>
                    <p className="mt-1 text-[20px] font-bold text-[#101828] sm:text-[22px]">
                      {s.value}
                    </p>
                  </div>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${s.bg} ${s.color}`}
                  >
                    <s.icon className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <ExporterCard className="overflow-hidden p-0">
            <div className="border-b border-[#E4E7EC] px-4 py-3 sm:px-5">
              <h2 className="text-[15px] font-bold text-[#101828]">Required Documents</h2>
              <p className="mt-0.5 text-[11px] text-[#667085]">
                Upload all mandatory documents to complete verification.
              </p>
            </div>
            <div className="-mx-1 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-[12px]">
                <thead className="border-b border-[#E4E7EC] bg-[#F9FAFB] text-[10px] font-bold uppercase tracking-wide text-[#667085]">
                  <tr>
                    <th className="px-4 py-3">Document Name</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Uploaded On</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {DOCUMENTS.map((doc) => (
                    <tr
                      key={doc.name}
                      className="border-b border-[#F2F4F7] last:border-0"
                    >
                      <td className="px-4 py-3">
                        <p className="font-semibold text-[#101828]">{doc.name}</p>
                        {doc.mandatory && (
                          <span className="mt-0.5 inline-block text-[9px] font-semibold text-[#D92D20]">
                            Mandatory
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-[#667085]">{doc.desc}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={doc.status} />
                      </td>
                      <td className="px-4 py-3 text-[#667085]">{doc.date}</td>
                      <td className="px-4 py-3">
                        {doc.action === "download" ? (
                          <button
                            type="button"
                            className="flex size-7 items-center justify-center rounded-lg border border-[#E4E7EC] text-[#175CD3]"
                            aria-label="Download"
                          >
                            <Download className="size-3.5" />
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#175CD3]"
                          >
                            <Upload className="size-3.5" />
                            Upload
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ExporterCard>

          <div className="rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] px-4 py-4 sm:px-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[14px] font-bold text-[#027A48]">
                  Why Documents are Important?
                </p>
                <p className="mt-1 max-w-2xl text-[12px] leading-relaxed text-[#027A48]/85">
                  Verified documents help build trust with global buyers, unlock premium deal
                  rooms, and speed up partner matching. Complete your uploads to get verified
                  faster.
                </p>
              </div>
              <Button
                variant="outline"
                className="h-9 w-full shrink-0 rounded-lg border-[#039855] bg-white text-[12px] font-semibold text-[#027A48] sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Upload New Document</h3>
            <div className="mt-3 rounded-xl border-2 border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-4 py-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#EFF8FF]">
                <CloudUpload className="size-6 text-[#175CD3]" />
              </div>
              <p className="mt-3 text-[12px] font-semibold text-[#344054]">
                Drag & drop files here
              </p>
              <p className="mt-1 text-[11px] text-[#98A2B3]">or</p>
              <Button className="mt-3 h-9 rounded-lg bg-[#175CD3] px-5 text-[12px] font-semibold hover:bg-[#1448B0]">
                Choose File
              </Button>
              <p className="mt-3 text-[10px] text-[#98A2B3]">PDF, JPG, PNG (Max. 10MB)</p>
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Document Guidelines</h3>
            <ul className="mt-3 space-y-2.5">
              {GUIDELINES.map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#039855]">
                    <ShieldCheck className="size-2.5 text-white" />
                  </span>
                  <span className="text-[11px] leading-relaxed text-[#344054]">{text}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard className="border-[#D1E9FF] bg-[#EFF8FF]">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#D1E9FF]">
                <Headphones className="size-5 text-[#175CD3]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#101828]">Need Help?</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
                  Our team is here to help you with document upload and verification.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-4 h-9 w-full rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#175CD3] shadow-sm"
            >
              <Link to="/dashboard/need-help">Contact Support</Link>
            </Button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
