import { Main } from "@/components/layout/main";
import { DataTable } from "@/components/ui/data-table";
import { userColumns } from "../users/columns";
import {
  useGetUsersQuery,
  useCreatePartnerManuallyMutation,
} from "@/store/api/adminApi";
import { Globe, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function AdminPartnersPage() {
  const { data, isLoading, error } = useGetUsersQuery({ role: "partner" });
  const [createPartner, { isLoading: isCreating }] =
    useCreatePartnerManuallyMutation();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newPartner, setNewPartner] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    country: "",
    organization: "",
  });

  const users = data?.data || [];

  const handleCreatePartner = async () => {
    if (!newPartner.fullName || !newPartner.email) {
      toast.error("Full Name and Email are required.");
      return;
    }
    try {
      await createPartner(newPartner).unwrap();
      toast.success("Partner created successfully.");
      setIsCreateOpen(false);
      setNewPartner({
        fullName: "",
        email: "",
        mobileNumber: "",
        country: "",
        organization: "",
      });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create partner.");
    }
  };

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Globe className="size-8 text-teal-500" /> Global Partners
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage associated global trade chambers, attachés, and embassies.
          </p>
        </div>
        <Button onClick={() => setIsCreateOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Create Partner
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64 border rounded-md">
          <p className="text-muted-foreground">Loading partners...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-64 border rounded-md border-destructive/50 bg-destructive/10">
          <p className="text-destructive">Failed to load partners.</p>
        </div>
      ) : (
        <DataTable columns={userColumns} data={users} searchKey="name" />
      )}

      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Partner</DialogTitle>
            <DialogDescription>
              Directly onboard a global partner. A random secure password will
              be generated automatically.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                value={newPartner.fullName}
                onChange={(e) =>
                  setNewPartner({ ...newPartner, fullName: e.target.value })
                }
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input
                value={newPartner.email}
                onChange={(e) =>
                  setNewPartner({ ...newPartner, email: e.target.value })
                }
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Mobile Number</Label>
              <Input
                value={newPartner.mobileNumber}
                onChange={(e) =>
                  setNewPartner({ ...newPartner, mobileNumber: e.target.value })
                }
                placeholder="+1 234 567 890"
              />
            </div>
            <div className="space-y-2">
              <Label>Country</Label>
              <Input
                value={newPartner.country}
                onChange={(e) =>
                  setNewPartner({ ...newPartner, country: e.target.value })
                }
                placeholder="United States"
              />
            </div>
            <div className="space-y-2">
              <Label>Organization</Label>
              <Input
                value={newPartner.organization}
                onChange={(e) =>
                  setNewPartner({ ...newPartner, organization: e.target.value })
                }
                placeholder="US Chamber of Commerce"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreatePartner}
              disabled={isCreating || !newPartner.fullName || !newPartner.email}
            >
              Create Partner
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Main>
  );
}
