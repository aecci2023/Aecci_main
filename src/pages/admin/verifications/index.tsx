import { Main } from "@/components/layout/main";
import { DataTable } from "@/components/ui/data-table";
import type { UserRow } from "../users/columns";
import { useGetUsersQuery } from "@/store/api/adminApi";
import { ShieldAlert, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function AdminVerificationsPage() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUsersQuery({
    kycStatus: "pending_verification",
    userType: "business",
  });
  const users = data?.data || [];

  const handleReview = (user: UserRow) => {
    navigate(`/admin/verifications/${user.id}`);
  };

  const verificationColumns: ColumnDef<UserRow>[] = [
    {
      accessorKey: "companyName",
      header: "Company Name",
      cell: ({ row }) => (
        <div>
          <div className="font-medium">{row.original.companyName || "N/A"}</div>
          <div className="text-xs text-muted-foreground">
            {row.original.email}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "isEmailVerified",
      header: "Email Status",
      cell: ({ row }) => {
        const verified = row.original.isEmailVerified;
        return (
          <Badge
            className={
              verified
                ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                : "bg-amber-500/10 text-amber-600 border-amber-500/20"
            }
            variant="outline"
          >
            {verified ? "Verified" : "Pending"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => (
        <span className="text-sm">{row.original.country || "N/A"}</span>
      ),
    },
    {
      accessorKey: "industrySector",
      header: "Industry",
      cell: ({ row }) => (
        <span className="text-sm">{row.original.industrySector || "N/A"}</span>
      ),
    },
    {
      accessorKey: "mobileNumber",
      header: "Contact",
      cell: ({ row }) => (
        <span className="text-sm">{row.original.mobileNumber || "N/A"}</span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Registered",
      cell: ({ row }) => (
        <span className="text-sm">
          {format(new Date(row.original.createdAt), "MMM d, yyyy")}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleReview(row.original)}
          className="gap-2"
        >
          <Eye className="w-4 h-4 text-primary" /> Review Docs
        </Button>
      ),
    },
  ];

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <ShieldAlert className="size-8 text-amber-500" /> Pending
            Verifications
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Review submitted KYC documents for newly registered business
            accounts.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64 border rounded-md">
          <p className="text-muted-foreground">
            Loading pending verifications...
          </p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-64 border rounded-md border-destructive/50 bg-destructive/10">
          <p className="text-destructive">Failed to load verifications.</p>
        </div>
      ) : (
        <DataTable
          columns={verificationColumns}
          data={users}
          searchKey="companyName"
        />
      )}
    </Main>
  );
}
