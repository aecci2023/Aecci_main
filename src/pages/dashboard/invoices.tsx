import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface Invoice {
  id: string;
  planName: string;
  amount: number;
  currency: string;
  paymentStatus: string;
  invoiceUrl: string | null;
  createdAt: string;
}

export default function UserInvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(`${import.meta.env.VITE_API_URL}/api/payment/subscription/history`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setInvoices(data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const planLabel: Record<string, string> = {
    explorer: "Explorer Plan",
    growth: "Growth Plan",
    market_entry: "Market Entry Plan",
    enterprise: "Enterprise Plan",
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Invoices &amp; Payments</h1>
        <p className="text-muted-foreground">Receipts and billing history for your plan purchases</p>
      </div>

      {invoices.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No invoices yet</p>
            <p className="text-muted-foreground text-sm mt-1">
              Invoices will appear here after you purchase a plan
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {invoices.map((invoice) => (
            <Card key={invoice.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">
                    {planLabel[invoice.planName] || invoice.planName}
                  </CardTitle>
                  <Badge
                    variant={invoice.paymentStatus === "paid" ? "default" : "secondary"}
                    className={invoice.paymentStatus === "paid" ? "bg-green-100 text-green-700 border-green-200" : ""}
                  >
                    {invoice.paymentStatus === "paid" ? "Paid" : invoice.paymentStatus}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(invoice.createdAt), "d MMM yyyy")}</span>
                    </div>
                    <p className="text-lg font-semibold text-foreground">
                      {invoice.currency === "INR" ? "₹" : "$"}
                      {invoice.amount.toLocaleString("en-IN")}
                    </p>
                  </div>
                  {invoice.invoiceUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(invoice.invoiceUrl!, "_blank")}
                    >
                      <Download className="h-4 w-4" />
                      Download Invoice
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
