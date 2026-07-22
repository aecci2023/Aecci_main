import { useState } from "react";
import { format } from "date-fns";
import { Main } from "@/components/layout/main";
import { Search, Eye, CheckCircle, XCircle, Clock, Users, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllInterestsQuery } from "@/store/api/interestApi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminInterests() {
  const { data, isLoading } = useGetAllInterestsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("pending");
  const navigate = useNavigate();

  const interests = data?.data || [];

  const filteredInterests = interests.filter((interest: any) => {
    // Status filter
    if (statusFilter !== "all") {
      const interestStatus = interest.status || "pending";
      if (interestStatus !== statusFilter) return false;
    }

    // Search filter
    if (searchTerm) {
      return (
        interest.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        interest.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        interest.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        interest.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" /> Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100"><XCircle className="w-3 h-3 mr-1" /> Rejected</Badge>;
      case "reviewed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100"><CheckCircle className="w-3 h-3 mr-1" /> Reviewed</Badge>;
      default:
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100"><Clock className="w-3 h-3 mr-1" /> Pending</Badge>;
    }
  };

  const pendingCount = interests.filter((i: any) => !i.status || i.status === "pending").length;
  const approvedCount = interests.filter((i: any) => i.status === "approved").length;

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="size-8 text-amber-500" /> Interest Submissions
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage and view all submitted interest forms.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {pendingCount > 0 && (
            <Badge variant="outline" className="text-amber-600 border-amber-500/20 bg-amber-500/10 text-sm px-3 py-1">
              {pendingCount} pending
            </Badge>
          )}
          {approvedCount > 0 && (
            <Badge variant="outline" className="text-green-600 border-green-500/20 bg-green-500/10 text-sm px-3 py-1">
              {approvedCount} approved
            </Badge>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, company, role or email..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[160px]">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Contact Person</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Loading interests...
                </TableCell>
              </TableRow>
            ) : filteredInterests.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No {statusFilter !== "all" ? statusFilter : ""} interest submissions found.
                </TableCell>
              </TableRow>
            ) : (
              filteredInterests.map((interest: any) => (
                <TableRow key={interest.id}>
                  <TableCell>
                    {format(new Date(interest.createdAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="font-medium">
                    {interest.fullName || interest.contactPerson || "-"}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{interest.category || "Unknown"}</Badge>
                  </TableCell>
                  <TableCell>{interest.email}</TableCell>
                  <TableCell>
                    {getStatusBadge(interest.status || "pending")}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/admin/interests/${interest.id}`)}>
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Main>
  );
}
