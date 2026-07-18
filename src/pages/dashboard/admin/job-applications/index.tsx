import { Main } from "@/components/layout/main";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllJobApplicationsQuery } from "@/store/api/jobApplicationApi";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AdminJobApplicationsPage() {
  const { data: response, isLoading } = useGetAllJobApplicationsQuery();
  const applications = response?.data || [];

  const handleDownloadCv = (cvUrl: string) => {
    window.open(cvUrl, "_blank");
  };

  return (
    <Main fluid className="flex-1 space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Job Applications</h2>
          <p className="text-muted-foreground">
            View and manage all job applications submitted via the portal.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Applications</CardTitle>
          <CardDescription>
            A list of recent job applications and CVs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No job applications found.
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email ID</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app: any) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-medium">{app.name}</TableCell>
                      <TableCell>{app.email || "N/A"}</TableCell>
                      <TableCell>{app.positionAppliedFor}</TableCell>
                      <TableCell>{app.basicQualification}</TableCell>
                      <TableCell>{app.phoneNumber}</TableCell>
                      <TableCell>{app.address}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownloadCv(app.cvUrl)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          View CV
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </Main>
  );
}
