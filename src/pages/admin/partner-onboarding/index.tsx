import { useState } from "react";
import { Main } from "@/components/layout/main";
import { useGetPartnerProfilesQuery, useUpdatePartnerStatusMutation } from "@/store/api/adminApi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AdminPartnerOnboardingPage() {
  const { data, isLoading, refetch } = useGetPartnerProfilesQuery();
  const [updateStatus, { isLoading: isUpdating }] = useUpdatePartnerStatusMutation();
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const profiles = data?.data || [];

  const handleUpdateStatus = async (userId: string, status: string, tier?: string) => {
    try {
      await updateStatus({ userId, status, tier }).unwrap();
      toast.success(`Partner status updated to ${status}`);
      setSelectedProfile(null);
      refetch();
    } catch (error) {
      toast.error("Failed to update partner status.");
    }
  };

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Partner Onboarding</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage partner applications and onboarding workflows.
          </p>
        </div>
      </div>

      <div className="bg-background rounded-md border">
        {isLoading ? (
          <div className="p-8 text-center text-muted-foreground">Loading applications...</div>
        ) : profiles.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">No partner applications found.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization</TableHead>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profiles.map((profile: any) => (
                <TableRow key={profile.id}>
                  <TableCell className="font-medium">{profile.organization}</TableCell>
                  <TableCell>{profile.user?.fullName}</TableCell>
                  <TableCell>
                    <Badge variant={profile.status === 'approved' ? 'default' : 'outline'}>
                      {profile.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setSelectedProfile(profile)}>
                      <Eye className="w-4 h-4 mr-1" /> View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <Dialog open={!!selectedProfile} onOpenChange={(open) => !open && setSelectedProfile(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Partner Application Details</DialogTitle>
            <DialogDescription>
              Review the organization details and verify documents.
            </DialogDescription>
          </DialogHeader>
          
          {selectedProfile && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Organization</p>
                  <p>{selectedProfile.organization}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Applicant Name</p>
                  <p>{selectedProfile.user?.fullName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Applicant Email</p>
                  <p>{selectedProfile.user?.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Status</p>
                  <p className="capitalize">{selectedProfile.status.replace('_', ' ')}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Expertise Countries</p>
                  <p>{selectedProfile.expertiseCountries.join(", ")}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Expertise Sectors</p>
                  <p>{selectedProfile.expertiseSectors.join(", ")}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Motivation</p>
                  <p className="bg-muted p-3 rounded-md mt-1 text-sm">{selectedProfile.motivation}</p>
                </div>
              </div>

              <div className="pt-4 border-t space-y-3">
                <h3 className="font-semibold">Verification Links</h3>
                {selectedProfile.governmentId && (
                  <div>
                    <a href={selectedProfile.governmentId} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-2">
                      <Eye className="w-4 h-4" /> View Government ID / Reg Proof
                    </a>
                  </div>
                )}
                {selectedProfile.businessProof && (
                  <div>
                    <a href={selectedProfile.businessProof} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-2">
                      <Eye className="w-4 h-4" /> View Business Proof
                    </a>
                  </div>
                )}
                {selectedProfile.professionalCert && (
                  <div>
                    <a href={selectedProfile.professionalCert} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-2">
                      <Eye className="w-4 h-4" /> View Professional Cert
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          <DialogFooter className="flex items-center justify-between sm:justify-between w-full">
            {selectedProfile?.status === 'pending_review' ? (
              <>
                <Button 
                  variant="outline" 
                  className="text-destructive hover:bg-destructive/10"
                  onClick={() => handleUpdateStatus(selectedProfile.userId, 'rejected')}
                  disabled={isUpdating}
                >
                  <XCircle className="w-4 h-4 mr-2" /> Reject
                </Button>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => setSelectedProfile(null)}>Cancel</Button>
                  <Button 
                    className="bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleUpdateStatus(selectedProfile.userId, 'approved', 'Standard')}
                    disabled={isUpdating}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Approve & Sign Agreement
                  </Button>
                </div>
              </>
            ) : (
              <Button onClick={() => setSelectedProfile(null)} className="ml-auto">Close</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Main>
  );
}
