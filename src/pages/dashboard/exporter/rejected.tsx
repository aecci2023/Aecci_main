import { Main } from "@/components/layout/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RejectedApplicationPage() {
  const navigate = useNavigate();
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) {
    try {
      user = JSON.parse(userStr);
    } catch (e) {
      console.log(e);
    }
  }

  const handleResubmit = () => {
    navigate("/interest-form?resubmit=true");
  };

  return (
    <>
      <header className="border-b px-6 py-4 flex items-center space-x-2 bg-background">
        <span className="font-semibold text-sm text-muted-foreground">
          AECCI Hub
        </span>
        <span className="text-muted-foreground">/</span>
        <span className="font-semibold text-sm text-destructive">
          Application Rejected
        </span>
      </header>
      <Main fluid className="flex items-center justify-center p-6 h-[80vh]">
        <Card className="w-full max-w-2xl border-destructive/20 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="size-8 text-destructive" />
            </div>
            <CardTitle className="text-2xl text-foreground">
              Application Rejected
            </CardTitle>
            <CardDescription className="text-base mt-2">
              We reviewed your application but unfortunately, we could not
              approve it at this time.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Reason for Rejection
              </h4>
              <p className="text-foreground whitespace-pre-wrap">
                {user?.rejectionReason ||
                  "Does not meet the criteria. Please ensure all your details are correct."}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                You can review your submitted information, make the necessary
                corrections, and resubmit your application.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleResubmit}
                  className="gap-2"
                >
                  <RefreshCw className="size-4" />
                  Modify Details and Resubmit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Main>
    </>
  );
}
