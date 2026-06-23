import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, FileText } from "lucide-react";

const schema = z.object({
  summary: z.string().min(50, "Summary must be at least 50 characters").max(5000),
});

type FormValues = z.infer<typeof schema>;

export default function PartnerSubmitSummaryPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { summary: "" },
  });

  const onSubmit = async (values: FormValues) => {
    if (!sessionId) {
      setError("Session ID is missing.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/sessions/${sessionId}/summary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ summary: values.summary }),
        }
      );
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Failed to submit summary");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] gap-4 text-center px-4">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h2 className="text-2xl font-bold">Summary Submitted</h2>
        <p className="text-muted-foreground max-w-md">
          Your post-session summary has been sent to the AECCI team. They will generate the
          Opportunity Report within 2–3 working days.
        </p>
        <Button onClick={() => navigate("/partner/sessions/past")}>View Past Sessions</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Post-Session Summary</h1>
        <p className="text-muted-foreground">
          This summary will be used by the AECCI team to generate the official Opportunity Report for the client.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Session Summary Form
          </CardTitle>
          <CardDescription>
            Detail the discussion, advice given, and actionable next steps. Be thorough — this directly
            informs the client's Opportunity Report.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the session outcomes, market insights shared, recommended contacts or next steps..."
                        className="min-h-48 resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Submitting..." : "Submit Summary"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
