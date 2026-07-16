import { useState } from "react";
import { Main } from "@/components/layout/main";
import {
  useAskQuestionMutation,
  useGetMyQuestionsQuery,
} from "@/store/api/questionApi";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SubmitQuestionsPage() {
  const { data: response, isLoading } = useGetMyQuestionsQuery();
  const [askQuestion, { isLoading: isSubmitting }] = useAskQuestionMutation();
  const questions = response?.data || [];

  const [type, setType] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !content) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      await askQuestion({ type, content }).unwrap();
      toast.success("Question submitted successfully!");
      setType("");
      setContent("");
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to submit question");
    }
  };

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ask Questions</h1>
          <p className="text-muted-foreground mt-1">
            Submit questions to your assigned expert partner.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Submit a New Question</CardTitle>
            <CardDescription>
              We'll route your question to the right expert.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Question Type
                </label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Product">Product Specific</SelectItem>
                    <SelectItem value="Market">Market Insights</SelectItem>
                    <SelectItem value="Expansion">
                      Expansion Strategy
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Question Details
                </label>
                <Textarea
                  rows={5}
                  placeholder="Describe your question in detail..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Question"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your Previous Questions</CardTitle>
            <CardDescription>
              Track the status and answers to your questions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : questions.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 border rounded-md border-dashed">
                <p className="text-muted-foreground">
                  You haven't asked any questions yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {questions.map((q: any) => (
                  <div key={q.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline">{q.type}</Badge>
                      <Badge
                        variant={
                          q.status === "answered" ? "default" : "secondary"
                        }
                      >
                        {q.status}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">
                        Question
                      </h4>
                      <p className="mt-1">{q.content}</p>
                    </div>
                    {q.answer && (
                      <div className="bg-primary/5 p-3 rounded-md border border-primary/20">
                        <h4 className="font-medium text-sm text-primary mb-1">
                          Answer from {q.partner?.fullName || "Partner"}
                        </h4>
                        <p className="text-sm">{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Main>
  );
}
