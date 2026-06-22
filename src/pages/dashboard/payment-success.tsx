import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentSuccessPage() {
  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Payment Status</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <Card className="border-emerald-500/20 bg-emerald-500/5 text-center shadow-md max-w-2xl mx-auto">
          <CardHeader className="pt-8 pb-4">
            <CheckCircle2 className="size-16 text-emerald-500 mx-auto animate-bounce" />
            <CardTitle className="text-2xl mt-4">Subscription Activated!</CardTitle>
            <CardDescription>
              Thank you. Your AECCI Global Deal Room plan has been successfully activated and slots are now available.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm pb-6">
            <div className="bg-background border border-border rounded-lg p-4 space-y-2 text-xs text-muted-foreground text-left max-w-sm mx-auto">
              <div className="flex justify-between">
                <span>Transaction Status</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Paid & Settled
                </span>
              </div>
              <div className="flex justify-between">
                <span>Activation Status</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Instant Access Granted
                </span>
              </div>
              <div className="flex justify-between">
                <span>Verification Method</span>
                <span className="font-semibold text-foreground">
                  Razorpay Secure Gateway
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground max-w-md mx-auto mt-2">
              Your official tax invoice PDF has been queued for generation. You can view and download it anytime from the Billing & Invoice history section on the Subscription Plans page.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 pb-8 pt-2">
            <Button
              asChild
              className="w-full max-w-sm mx-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link
                to="/dashboard/marketplace"
                className="flex items-center gap-1.5 justify-center"
              >
                Go to Partner Marketplace <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full max-w-sm mx-auto text-xs"
            >
              <Link to="/dashboard">Back to Dashboard Overview</Link>
            </Button>
          </CardFooter>
        </Card>
      </Main>
    </>
  );
}
