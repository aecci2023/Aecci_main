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
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApprovalPage() {
  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Approval</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <Card className="border-emerald-500/20 bg-emerald-500/5 text-center shadow-md">
          <CardHeader className="pt-8 pb-4">
            <CheckCircle2 className="size-16 text-emerald-500 mx-auto" />
            <CardTitle className="text-2xl mt-4">Verification Approved!</CardTitle>
            <CardDescription>
              Your organization has been successfully verified.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              AECCI compliance officers have approved your submitted IEC, GST,
              and product catalogue parameters. You now hold full access to the
              B2B Deal Room Marketplace.
            </p>
            <div className="flex justify-center">
              <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 px-3 py-1 flex items-center gap-1.5">
                <ShieldCheck className="size-4" /> AECCI Trade Member Status
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="pb-8 pt-2">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link
                to="/dashboard/marketplace"
                className="flex items-center gap-1.5 justify-center"
              >
                Explore Marketplace <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </Main>
    </>
  );
}
