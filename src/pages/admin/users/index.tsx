import { Main } from "@/components/layout/main";
import { DataTable } from "@/components/ui/data-table";
import { userColumns } from "./columns";
import { useGetUsersQuery } from "@/store/api/adminApi";
import { Users } from "lucide-react";

export default function AdminUsersPage() {
  const { data, isLoading, error } = useGetUsersQuery({});
  
  const users = data?.data || [];

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="size-8 text-primary" /> All Users
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage and view all registered platform users.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64 border rounded-md">
          <p className="text-muted-foreground">Loading users...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-64 border rounded-md border-destructive/50 bg-destructive/10">
          <p className="text-destructive">Failed to load users.</p>
        </div>
      ) : (
        <DataTable columns={userColumns} data={users} searchKey="name" />
      )}
    </Main>
  );
}
