import { useState } from "react";
import { Main } from "@/components/layout/main";
import {
  useGetCountryBriefsQuery,
  useCreateCountryBriefMutation,
  useUpdateCountryBriefMutation,
  useDeleteCountryBriefMutation,
} from "@/store/api/countryIntelligenceApi";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AdminCountryIntelligencePage() {
  const { data: response, isLoading } = useGetCountryBriefsQuery();
  const [createBrief] = useCreateCountryBriefMutation();
  const [updateBrief] = useUpdateCountryBriefMutation();
  const [deleteBrief] = useDeleteCountryBriefMutation();

  const briefs = response?.data || [];

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [formData, setFormData] = useState({
    country: "",
    marketOverview: "",
    importRequirements: "",
    distributionStructure: "",
    opportunities: "",
    risks: "",
  });

  const handleOpenNew = () => {
    setIsEditing(false);
    setFormData({
      country: "",
      marketOverview: "",
      importRequirements: "",
      distributionStructure: "",
      opportunities: "",
      risks: "",
    });
    setIsOpen(true);
  };

  const handleOpenEdit = (brief: any) => {
    setIsEditing(true);
    setCurrentId(brief.id);
    setFormData({
      country: brief.country || "",
      marketOverview: brief.marketOverview || "",
      importRequirements: brief.importRequirements || "",
      distributionStructure: brief.distributionStructure || "",
      opportunities: brief.opportunities || "",
      risks: brief.risks || "",
    });
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this brief?")) return;
    try {
      await deleteBrief(id).unwrap();
      toast.success("Brief deleted successfully");
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to delete brief");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateBrief({ id: currentId, body: formData }).unwrap();
        toast.success("Brief updated successfully");
      } else {
        await createBrief(formData).unwrap();
        toast.success("Brief created successfully");
      }
      setIsOpen(false);
    } catch (error: any) {
      toast.error(error.data?.message || "Operation failed");
    }
  };

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Country Intelligence
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage data and insights for various countries.
          </p>
        </div>
        <Button onClick={handleOpenNew}>
          <Plus className="mr-2 h-4 w-4" /> Add Brief
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Country</TableHead>
              <TableHead>Market Overview</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : briefs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center text-muted-foreground"
                >
                  No country intelligence data found.
                </TableCell>
              </TableRow>
            ) : (
              briefs.map((brief: any) => (
                <TableRow key={brief.id}>
                  <TableCell className="font-medium">{brief.country}</TableCell>
                  <TableCell className="truncate max-w-xs">
                    {brief.marketOverview}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenEdit(brief)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDelete(brief.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Brief" : "Add Brief"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Country</label>
              <Input
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                placeholder="e.g. United Arab Emirates"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">
                Market Overview
              </label>
              <Textarea
                rows={3}
                value={formData.marketOverview}
                onChange={(e) =>
                  setFormData({ ...formData, marketOverview: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">
                Import Requirements
              </label>
              <Textarea
                rows={3}
                value={formData.importRequirements}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    importRequirements: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">
                Distribution Structure
              </label>
              <Textarea
                rows={3}
                value={formData.distributionStructure}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    distributionStructure: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">
                Opportunities
              </label>
              <Textarea
                rows={3}
                value={formData.opportunities}
                onChange={(e) =>
                  setFormData({ ...formData, opportunities: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Risks</label>
              <Textarea
                rows={3}
                value={formData.risks}
                onChange={(e) =>
                  setFormData({ ...formData, risks: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end pt-4">
              <Button type="submit">{isEditing ? "Update" : "Create"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </Main>
  );
}
