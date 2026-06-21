import { useState } from "react";
import { Main } from "@/components/layout/main";
import { useGetPartnerQuestionsQuery, useAnswerQuestionMutation } from "@/store/api/questionApi";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PartnerQuestionsPage() {
  const { data: response, isLoading } = useGetPartnerQuestionsQuery();
  const [answerQuestion, { isLoading: isSubmitting }] = useAnswerQuestionMutation();
  const questions = response?.data || [];

  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState("");

  const handleAnswerSubmit = async (id: string) => {
    if (!answerText.trim()) {
      toast.error("Please enter an answer");
      return;
    }
    try {
      await answerQuestion({ id, answer: answerText }).unwrap();
      toast.success("Answer submitted successfully!");
      setActiveQuestionId(null);
      setAnswerText("");
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to submit answer");
    }
  };

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pending Questions</h1>
          <p className="text-muted-foreground mt-1">
            Answer inquiries from your assigned clients.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {isLoading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : questions.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 border rounded-md border-dashed">
              <p className="text-muted-foreground">No questions assigned to you.</p>
            </div>
          ) : (
            questions.map((q: any) => (
              <Card key={q.id}>
                <CardHeader className="pb-3 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">From: {q.user?.companyName || q.user?.fullName}</CardTitle>
                      <CardDescription>{q.user?.email}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{q.type}</Badge>
                      <Badge variant={q.status === "answered" ? "default" : "secondary"}>
                        {q.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Question</h4>
                    <p className="text-sm">{q.content}</p>
                  </div>
                  
                  {q.status === "answered" ? (
                    <div className="bg-primary/5 p-3 rounded-md border border-primary/20">
                      <h4 className="font-medium text-sm text-primary mb-1">Your Answer</h4>
                      <p className="text-sm">{q.answer}</p>
                    </div>
                  ) : activeQuestionId === q.id ? (
                    <div className="space-y-3 mt-4 border-t pt-4">
                      <Textarea 
                        rows={4}
                        placeholder="Write your answer here..."
                        value={answerText}
                        onChange={(e) => setAnswerText(e.target.value)}
                      />
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setActiveQuestionId(null)}>Cancel</Button>
                        <Button 
                          onClick={() => handleAnswerSubmit(q.id)} 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Answer"}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button variant="outline" className="w-full mt-2" onClick={() => {
                      setActiveQuestionId(q.id);
                      setAnswerText("");
                    }}>
                      Write Answer
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Provide clear, concise, and professional answers.</p>
              <p>• Avoid sharing sensitive banking or personal details here.</p>
              <p>• If a question is too complex, suggest discussing it in an upcoming live session.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Main>
  );
}
