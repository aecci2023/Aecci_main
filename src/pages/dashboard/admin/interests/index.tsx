import { useState } from "react";
import { format } from "date-fns";
import { Search } from "lucide-react";
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

export default function AdminInterests() {
  const { data, isLoading } = useGetAllInterestsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const interests = data?.data || [];

  const filteredInterests = interests.filter(
    (interest: any) =>
      interest.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interest.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interest.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Interest Submissions</h1>
          <p className="text-muted-foreground">
            Manage and view all submitted interest forms.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, company, or email..."
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
              <TableHead>Company</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone / WhatsApp</TableHead>
              <TableHead>Country</TableHead>
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
                  <TableCell>{interest.companyName}</TableCell>
                  <TableCell>{interest.email}</TableCell>
                  <TableCell>{interest.phoneWhatsapp}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{interest.country || "-"}</Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
