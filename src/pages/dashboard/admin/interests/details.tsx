import { useParams, useNavigate } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  useGetInterestByIdQuery,
  useUpdateInterestStatusMutation,
} from "@/store/api/interestApi";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Building2,
  User,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

export default function AdminInterestDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetInterestByIdQuery(id as string, {
    skip: !id,
  });
  const [updateInterestStatus, { isLoading: isUpdating }] =
    useUpdateInterestStatusMutation();

  const interest = data?.data;

  if (isLoading) {
    return (
      <Main fluid className="flex items-center justify-center h-screen">
        <p className="text-muted-foreground animate-pulse">
          Loading interest details...
        </p>
      </Main>
    );
  }

  if (error || !interest) {
    return (
      <Main
        fluid
        className="flex items-center justify-center h-screen flex-col gap-4"
      >
        <p className="text-destructive">Failed to load interest details.</p>
        <Button
          variant="outline"
          onClick={() => navigate("/admin/interests")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Interests
        </Button>
      </Main>
    );
  }

  const handleUpdateStatus = async (status: string) => {
    try {
      await updateInterestStatus({ id: interest.id, status }).unwrap();
      toast.success(`Interest marked as ${status}`);
    } catch (err) {
      console.error("Update Error:", err);
      toast.error("Failed to update status.");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1"><CheckCircle2 className="w-4 h-4 mr-2" /> Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100 px-3 py-1"><XCircle className="w-4 h-4 mr-2" /> Rejected</Badge>;
      case "reviewed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-3 py-1"><CheckCircle2 className="w-4 h-4 mr-2" /> Reviewed</Badge>;
      default:
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1"><Clock className="w-4 h-4 mr-2" /> Pending</Badge>;
    }
  };

  return (
    <Main fluid className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/admin/interests")}
            className="shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight">
                {interest.companyName || interest.fullName || "Interest Submission"}
              </h1>
              {getStatusBadge(interest.status || "pending")}
            </div>
            <p className="text-muted-foreground">
              Submitted on {format(new Date(interest.createdAt), "MMMM d, yyyy 'at' h:mm a")}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          {(interest.status === "pending" || !interest.status) && (
            <>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                onClick={() => handleUpdateStatus("rejected")}
                disabled={isUpdating}
              >
                <XCircle className="w-4 h-4 mr-2" /> Reject
              </Button>
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => handleUpdateStatus("reviewed")}
                disabled={isUpdating}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" /> Mark as Reviewed
              </Button>
            </>
          )}
          {interest.status === "reviewed" && (
            <Button
              variant="outline"
              onClick={() => handleUpdateStatus("pending")}
              disabled={isUpdating}
            >
              <Clock className="w-4 h-4 mr-2" /> Revert to Pending
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Primary contact details</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Contact Person</p>
                <p className="font-medium">{interest.fullName || interest.contactPerson || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium capitalize">{interest.category || "—"} ({interest.userType || "—"})</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Business Email</p>
                <p className="font-medium">{interest.email || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Personal Email</p>
                <p className="font-medium">{interest.emailAddress || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                <p className="font-medium">{interest.phoneWhatsapp || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Alternative Phone</p>
                <p className="font-medium">{interest.contactPerson !== interest.fullName ? interest.contactPerson : "—"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Company and operational details</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Company Name</p>
                <p className="font-medium">{interest.companyName || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Country</p>
                <p className="font-medium">{interest.country || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">City/State</p>
                <p className="font-medium">{interest.cityState || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sector / Industry</p>
                <p className="font-medium">{interest.sector || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Products</p>
                <p className="font-medium">{interest.products || "—"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
            <CardDescription>Specific requirements, markets, and expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {interest.targetMarkets && interest.targetMarkets.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Target Markets</p>
                  <div className="flex flex-wrap gap-2">
                    {interest.targetMarkets.map((m: string) => (
                      <Badge key={m} variant="secondary">{m}</Badge>
                    ))}
                  </div>
                </div>
              )}
              {interest.targetSourcingMarkets && interest.targetSourcingMarkets.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Target Sourcing Markets</p>
                  <div className="flex flex-wrap gap-2">
                    {interest.targetSourcingMarkets.map((m: string) => (
                      <Badge key={m} variant="secondary">{m}</Badge>
                    ))}
                  </div>
                </div>
              )}
              {interest.sourcingRequirements && (
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Sourcing Requirements</p>
                  <p className="text-sm bg-muted p-3 rounded-md">{interest.sourcingRequirements}</p>
                </div>
              )}
              {interest.objectives && interest.objectives.length > 0 && (
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-2">Objectives</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {interest.objectives.map((obj: string) => (
                      <li key={obj}>{obj}</li>
                    ))}
                  </ul>
                </div>
              )}
              {interest.expertiseAreas && (
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Expertise Areas</p>
                  <p className="text-sm bg-muted p-3 rounded-md">{interest.expertiseAreas}</p>
                </div>
              )}
              {interest.sectorsOfInterest && (
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Sectors of Interest</p>
                  <p className="text-sm bg-muted p-3 rounded-md">{interest.sectorsOfInterest}</p>
                </div>
              )}
              {interest.professionalTitle && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Professional Title</p>
                  <p className="text-sm font-medium">{interest.professionalTitle}</p>
                </div>
              )}
              {interest.yearsOfExperience && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Years of Experience</p>
                  <p className="text-sm font-medium">{interest.yearsOfExperience}</p>
                </div>
              )}
            </div>
            <Separator className="my-6" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Information Accurate</span>
                <span className="font-medium">{interest.infoAccurate ? "Yes" : "No"}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Agreed to Terms</span>
                <span className="font-medium">{interest.agreeTerms ? "Yes" : "No"}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Understands Facilitation</span>
                <span className="font-medium">{interest.understandFacilitation ? "Yes" : "No"}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Shared Info Consent</span>
                <span className="font-medium">{interest.shareInfo ? "Yes" : "No"}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Main>
  );
}
