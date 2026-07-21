import { useState } from "react";
import { format } from "date-fns";
import { Main } from "@/components/layout/main";
import { Search, Eye, CheckCircle, XCircle, Clock, Users } from "lucide-react";
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

export default function AdminInterests() {
  const { data, isLoading } = useGetAllInterestsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const interests = data?.data || [];

  const filteredInterests = interests.filter(
    (interest: any) =>
      interest.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interest.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interest.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interest.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const pendingCount = interests.filter((i: any) => i.status === "pending").length;

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
        {pendingCount > 0 && (
          <Badge variant="outline" className="text-amber-600 border-amber-500/20 bg-amber-500/10 text-sm px-3 py-1">
            {pendingCount} pending
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, company, role or email..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
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
                  No interest submissions found.
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
