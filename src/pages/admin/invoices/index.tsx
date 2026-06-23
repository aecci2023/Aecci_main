import { useEffect, useState } from "react";
import { Main } from "@/components/layout/main";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Search, Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";

interface Invoice {
  id: string;
  userId: string;
  planName: string | null;
  amount: number;
  currency: string;
  paymentStatus: string;
  invoiceUrl: string | null;
  orderId: string | null;
  paymentReference: string | null;
  createdAt: string;
  user?: { fullName: string | null; email: string; companyName: string | null };
}

const PLAN_LABELS: Record<string, string> = {
  explorer: "Explorer",
  growth: "Growth",
  market_entry: "Market Entry",
  enterprise: "Enterprise",
};

const PAGE_SIZE = 30;

export default function AdminInvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchInvoices = (p: number, q: string) => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");
    const params = new URLSearchParams({ page: String(p), limit: String(PAGE_SIZE) });
    if (q) params.set("search", q);
    fetch(`${import.meta.env.VITE_API_URL}/api/payment/subscription/history/all?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setInvoices(data.data || []);
          setTotal(data.total || data.data?.length || 0);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchInvoices(page, search);
  }, [page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchInvoices(1, search);
  };

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <Main fluid className="space-y-6 max-w-7xl mx-auto py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices &amp; Payouts</h1>
          <p className="text-muted-foreground text-sm mt-1">
            All subscription purchase invoices across the platform.
          </p>
        </div>
        <Badge variant="outline" className="gap-1">
          <FileText className="h-3 w-3" />
          {total} invoices
        </Badge>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by email or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button type="submit" variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </form>

      <div className="bg-background border rounded-lg overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
            Loading invoices...
          </div>
        ) : invoices.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-2 text-muted-foreground">
            <FileText className="h-8 w-8" />
            <p className="text-sm">No invoices found</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-muted/40">
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead className="text-right">Invoice</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id} className="hover:bg-muted/20">
                  <TableCell>
                    <div className="font-medium text-sm">{inv.user?.fullName || "—"}</div>
                    <div className="text-xs text-muted-foreground">{inv.user?.email || "—"}</div>
                    {inv.user?.companyName && (
                      <div className="text-xs text-muted-foreground">{inv.user.companyName}</div>
                    )}
                  </TableCell>
                  <TableCell>
                    {inv.planName ? (
                      <Badge variant="outline" className="text-xs">
                        {PLAN_LABELS[inv.planName] || inv.planName}
                      </Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="font-semibold text-sm">
                    {inv.currency === "INR" ? "₹" : "$"}
                    {inv.amount.toLocaleString("en-IN")}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        inv.paymentStatus === "paid"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200 text-xs"
                          : "bg-yellow-50 text-yellow-700 border-yellow-200 text-xs"
                      }
                    >
                      {inv.paymentStatus === "paid" ? "Paid" : inv.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    {format(new Date(inv.createdAt), "d MMM yyyy")}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground max-w-28 truncate">
                    {inv.paymentReference || inv.orderId || "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    {inv.invoiceUrl ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1 h-7 text-xs"
                        onClick={() => window.open(inv.invoiceUrl!, "_blank")}
                      >
                        <Download className="h-3 w-3" /> PDF
                      </Button>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Page {page} of {totalPages} · {total} entries
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </Main>
  );
}
