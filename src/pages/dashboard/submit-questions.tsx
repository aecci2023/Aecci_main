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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { useState } from "react";

export default function SubmitQuestionsPage() {
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        setFileError("Only PDF files are allowed.");
        setAttachedFile(null);
      } else if (file.size > 5 * 1024 * 1024) {
        setFileError("File size must be under 5MB.");
        setAttachedFile(null);
      } else {
        setFileError("");
        setAttachedFile(file);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !subject || !details) return;
    setSubmitted(true);
  };

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Submit Questions</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Submit Inquiry to Trade Desk
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Ask trade commissioners, compliance managers, or moderators about
            target markets and bilateral agreements.
          </p>
        </div>

        {submitted ? (
          <Card className="border-emerald-500/20 bg-emerald-500/5 py-8 text-center max-w-xl mx-auto">
            <CardContent className="space-y-4">
              <CheckCircle2 className="size-12 text-emerald-500 mx-auto" />
              <CardTitle className="text-xl">
                Inquiry Submitted Successfully
              </CardTitle>
              <CardDescription className="max-w-md mx-auto">
                Your question has been routed to the AECCI Secretariat and the
                Kenya trade desk. An officer will reply in the Message Hub
                within 24-48 hours.
              </CardDescription>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="mt-4"
              >
                Submit Another Question
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Form */}
            <Card className="md:col-span-2 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Inquiry Form</CardTitle>
                <CardDescription>
                  Fill out details regarding your trade specifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Inquiry Category <span className="text-red-500">*</span>
                    </label>
                    <Select onValueChange={setCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Inquiry Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">
                          Product Customization & Standards
                        </SelectItem>
                        <SelectItem value="tariffs">
                          Market Regulations & Tariffs
                        </SelectItem>
                        <SelectItem value="logistics">
                          Logistics, Shipping & Mombasa Port
                        </SelectItem>
                        <SelectItem value="financial">
                          Bilateral Letters of Credit (L/C)
                        </SelectItem>
                        <SelectItem value="other">
                          Other Chamber Support
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="e.g. HS Code classifications for cotton woven labels"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Inquiry Details <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Please write your questions clearly. Include exact product specifications if applicable..."
                      className="h-32"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Attachment (Optional, PDF under 5MB)
                    </label>
                    <Input
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                    />
                    {fileError && (
                      <p className="text-destructive text-xs mt-1">
                        {fileError}
                      </p>
                    )}
                    {attachedFile && (
                      <p className="text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-1 mt-1">
                        <FileText className="size-3.5" /> Attached:{" "}
                        {attachedFile.name}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={!category || !subject || !details}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-1.5 pt-2"
                  >
                    <Send className="size-4" /> Submit Inquiry to Desk
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Submission guide info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Response Protocol</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                  <p>
                    Submitted inquiries are assigned directly to trade
                    specialists at the co-hosting chamber desk (e.g. KNCCI
                    Nairobi) or the AECCI Legal Wing.
                  </p>
                  <p>
                    Answers are returned directly to your **Message Hub**. You
                    will receive an email alert when a commissioner responds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-500/20 bg-amber-500/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <ShieldAlert className="size-4" /> Non-Solicitation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground leading-relaxed">
                  Do not submit direct bank details or bypass payment escrow
                  questions here. General financial inquiries concerning Letter
                  of Credit (L/C) matching terms are allowed.
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </Main>
    </>
  );
}
