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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ProfileSettingsPage() {
  const [successMsg, setSuccessMsg] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("Settings updated successfully!");
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Account</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Profile Settings</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Profile & Chamber Settings
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Update your organization details, edit compliance IDs, and review
              verified documents.
            </p>
          </div>
        </div>

        {successMsg && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs rounded-md font-semibold flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-500" /> {successMsg}
          </div>
        )}

        <Tabs defaultValue="company" className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full max-w-lg text-xs">
            <TabsTrigger value="company">Company Profile</TabsTrigger>
            <TabsTrigger value="compliance">Tax & Compliance</TabsTrigger>
            <TabsTrigger value="documents">My Documents</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Company Profile */}
          <TabsContent value="company" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Company Information</CardTitle>
                <CardDescription>
                  Primary profile visible during matchmaking matchmaking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">
                        Company Name
                      </label>
                      <Input defaultValue="India Exports Ltd." />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">
                        Legal Structure
                      </label>
                      <Input defaultValue="Private Limited" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">
                        Year Established
                      </label>
                      <Input defaultValue="2012" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">
                        Company Size
                      </label>
                      <Input defaultValue="51-200 Employees" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Registered Business Address
                    </label>
                    <Input defaultValue="Export Chambers Road, Mumbai, Maharashtra, 400001" />
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                  >
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tax & Compliance */}
          <TabsContent value="compliance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Compliance Identifiers
                </CardTitle>
                <CardDescription>
                  Verified tax IDs for bilateral custom clearances.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">
                        IEC Number (Import Export Code)
                      </label>
                      <Input defaultValue="0123456789" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">
                        GST Number
                      </label>
                      <Input defaultValue="27AAAAA1111A1Z1" />
                    </div>
                    <div className="space-y-1.5 col-span-2">
                      <label className="text-xs font-semibold text-muted-foreground">
                        PAN Number
                      </label>
                      <Input defaultValue="ABCDE1234F" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                  >
                    Save Details
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Documents */}
          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Uploaded Verification Files
                </CardTitle>
                <CardDescription>
                  Active trade documentation stored in the AECCI registry.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/40 rounded-lg border border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <FileText className="size-5 text-primary shrink-0" />
                    <div>
                      <span className="text-xs font-bold block truncate">
                        IEC_Certificate_IndiaExports.pdf
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Uploaded June 10, 2026
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[10px]">
                    Verified
                  </Badge>
                </div>

                <div className="p-3 bg-muted/40 rounded-lg border border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <FileText className="size-5 text-primary shrink-0" />
                    <div>
                      <span className="text-xs font-bold block truncate">
                        Product_Catalogue_Summer_2026.pdf
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Uploaded June 14, 2026
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[10px]">
                    Active
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Password & Key Settings
                </CardTitle>
                <CardDescription>
                  Keep your account secure with double-check configurations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Current Password
                    </label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">
                      New Password
                    </label>
                    <Input type="password" />
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                  >
                    Change Password
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  );
}
