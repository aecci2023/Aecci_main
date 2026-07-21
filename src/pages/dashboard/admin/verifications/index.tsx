import { Main } from "@/components/layout/main";
import { DataTable } from "@/components/ui/data-table";
import { useGetUsersQuery, useGetPartnerProfilesQuery } from "@/store/api/adminApi";
import { ShieldAlert, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type VerificationRow = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  country: string;
  type: "user" | "partner";
  subType: string;
  applicationNumber: string;
  isEmailVerified: boolean;
  createdAt: string;
  navigateTo: string;
};

export default function AdminVerificationsPage() {
  const navigate = useNavigate();

  const { data: usersData, isLoading: usersLoading } = useGetUsersQuery({
    verificationStatus: "pending_verification",
    role: "user",
  });

  const { data: partnersData, isLoading: partnersLoading } =
    useGetPartnerProfilesQuery("pending_review");

  const users: VerificationRow[] = (usersData?.data || []).map((u: any) => ({
    id: u.id,
    name: u.companyName || u.fullName || "N/A",
    email: u.email,
    mobile: u.mobileNumber || "—",
    country: u.country || "—",
    type: "user",
    subType: u.userType || "user",
    applicationNumber: u.applicationNumber || "—",
    isEmailVerified: !!u.isEmailVerified,
    createdAt: u.createdAt,
    navigateTo: `/admin/verifications/${u.id}`,
  }));

  const partners: VerificationRow[] = (partnersData?.data || []).map((p: any) => ({
    id: p.userId,
    name: p.user?.fullName || "N/A",
    email: p.user?.email || "N/A",
    mobile: p.user?.mobileNumber || "—",
    country: p.user?.country || "—",
    type: "partner",
    subType: p.organization || "—",
    applicationNumber: p.user?.applicationNumber || "—",
    isEmailVerified: !!p.user?.isEmailVerified,
    createdAt: p.createdAt,
    navigateTo: `/admin/verifications/partner/${p.userId}`,
  }));

  const rows: VerificationRow[] = [...users, ...partners].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );

  const isLoading = usersLoading || partnersLoading;

  const columns: ColumnDef<VerificationRow>[] = [
    {
      accessorKey: "name",
      header: "Name / Company",
      cell: ({ row }) => (
        <div>
          <div className="font-medium">{row.original.name}</div>
          <div className="text-xs text-muted-foreground">{row.original.email}</div>
        </div>
      ),
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => {
        const isPartner = row.original.type === "partner";
        return (
          <Badge
            variant="outline"
            className={
              isPartner
                ? "text-blue-600 border-blue-500/20 bg-blue-500/10"
                : "text-amber-600 border-amber-500/20 bg-amber-500/10"
            }
          >
            {isPartner ? "Partner" : "User"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "subType",
      header: "Org / User Type",
      cell: ({ row }) => (
        <span className="text-sm capitalize">{row.original.subType}</span>
      ),
    },
    {
      accessorKey: "mobile",
      header: "Mobile",
      cell: ({ row }) => (
        <span className="text-sm">{row.original.mobile}</span>
      ),
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => <span className="text-sm">{row.original.country}</span>,
    },
    {
      accessorKey: "isEmailVerified",
      header: "Email",
      cell: ({ row }) => {
        const v = row.original.isEmailVerified;
        return (
          <Badge
            variant="outline"
            className={
              v
                ? "text-emerald-600 border-emerald-500/20 bg-emerald-500/10"
                : "text-rose-600 border-rose-500/20 bg-rose-500/10"
            }
          >
            {v ? "Verified" : "Unverified"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "applicationNumber",
      header: "Application #",
      cell: ({ row }) => (
        <span className="text-xs font-mono text-muted-foreground">
          {row.original.applicationNumber}
        </span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Applied",
      cell: ({ row }) => (
        <div>
          <div className="text-sm">{format(new Date(row.original.createdAt), "MMM d, yyyy")}</div>
          <div className="text-xs text-muted-foreground">{format(new Date(row.original.createdAt), "h:mm a")}</div>
        </div>
      ),
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(row.original.navigateTo)}
          className="gap-2"
        >
          <Eye className="w-4 h-4 text-primary" /> Review
        </Button>
      ),
    },
  ];

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <ShieldAlert className="size-8 text-amber-500" /> Pending Verifications
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Review submitted documents and partner applications.
          </p>
        </div>
        {rows.length > 0 && (
          <Badge variant="outline" className="text-amber-600 border-amber-500/20 bg-amber-500/10 text-sm px-3 py-1">
            {rows.length} pending
          </Badge>
        )}
      </div>

      {isLoading ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 py-4">
            <Skeleton className="h-9 w-64" />
            <Skeleton className="h-9 w-24 ml-auto" />
          </div>
          <div className="rounded-md border bg-card overflow-hidden">
            <div className="border-b px-4 py-3 grid grid-cols-9 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="h-4" />
              ))}
            </div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="px-4 py-4 grid grid-cols-9 gap-4 border-b last:border-0">
                <div className="space-y-1.5">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-36" />
                </div>
                <Skeleton className="h-6 w-16 rounded-full self-center" />
                <Skeleton className="h-4 w-24 self-center" />
                <Skeleton className="h-4 w-20 self-center" />
                <Skeleton className="h-4 w-16 self-center" />
                <Skeleton className="h-6 w-20 rounded-full self-center" />
                <Skeleton className="h-4 w-32 self-center" />
                <div className="space-y-1 self-center">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-14" />
                </div>
                <Skeleton className="h-8 w-20 rounded-md self-center" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <DataTable columns={columns} data={rows} searchKey="name" />
      )}
    </Main>
  );
}
