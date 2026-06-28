import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export type UserRow = {
  id: string;
  fullName: string | null;
  companyName: string | null;
  email: string;
  role: string;
  userType: string | null;
  country: string | null;
  isEmailVerified: boolean;
  kycStatus: string;
  industrySector?: string;
  mobileNumber?: string;
  iecDocument?: string;
  gstDocument?: string;
  panDocument?: string;
  companyProfileDocument?: string;
  productCatalogue?: string[];
  createdAt: string;
};

export const userColumns: ColumnDef<UserRow>[] = [
  {
    id: "name",
    accessorFn: (row) =>
      row.userType === "business" ? row.companyName : row.fullName,
    header: "Name / Company",
    cell: ({ row }) => {
      const isBusiness = row.original.userType === "business";
      return (
        <div>
          <div className="font-medium">
            {isBusiness
              ? row.original.companyName || "N/A"
              : row.original.fullName || "N/A"}
          </div>
          <div className="text-xs text-muted-foreground">
            {row.original.email}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "userType",
    header: "Account Type",
    cell: ({ row }) => {
      const type = row.original.userType;
      if (!type)
        return <span className="text-muted-foreground text-xs">Unknown</span>;
      return (
        <Badge variant="outline" className="capitalize text-xs">
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <span className="capitalize text-sm">{row.original.role}</span>;
    },
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) =>
      row.original.country || (
        <span className="text-muted-foreground text-sm">Not set</span>
      ),
  },
  {
    accessorKey: "isEmailVerified",
    header: "Status",
    cell: ({ row }) => {
      const verified = row.original.isEmailVerified;
      return (
        <Badge
          className={
            verified
              ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20"
              : "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/20"
          }
          variant="outline"
        >
          {verified ? "Verified" : "Pending"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Joined",
    cell: ({ row }) => (
      <span className="text-sm">
        {format(new Date(row.original.createdAt), "MMM d, yyyy")}
      </span>
    ),
  },
];
