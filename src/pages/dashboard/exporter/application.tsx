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
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

export default function ApplicationPage() {
  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Application</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Membership Application
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Review your submission state and corporate registration parameters.
          </p>
        </div>

        <Card className="hover:shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                Registered Profile Details
              </CardTitle>
              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 px-2 py-0.5 text-xs">
                Approved
              </Badge>
            </div>
            <CardDescription>
              Verified by AECCI compliance officers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-muted-foreground block">
                  Corporate Legal Entity
                </span>
                <span className="font-semibold text-foreground">
                  India Exports Ltd.
                </span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">
                  Primary Trade Representative
                </span>
                <span className="font-semibold text-foreground">
                  AECCI Member
                </span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">
                  Verification Tier
                </span>
                <span className="font-semibold text-primary">
                  Export Facilitation Partner
                </span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">
                  Registered Under Code
                </span>
                <span className="font-mono font-semibold text-foreground">
                  IEC-0123456789
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4 text-emerald-500" />
              <span>
                This profile is digitally signed and authorized under Mumbai
                Chamber jurisdiction rules.
              </span>
            </div>
          </CardContent>
        </Card>
      </Main>
    </>
  );
}
