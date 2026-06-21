import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building2, FileText, Send } from "lucide-react";

export default function BecomePartnerPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  
  const [formData, setFormData] = useState({
    organization: "",
    expertiseCountries: "",
    expertiseSectors: "",
    motivation: "",
    governmentId: "",
    professionalCert: "",
    businessProof: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      toast.error("Please log in to apply as a partner.");
      navigate("/login");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/partners/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          expertiseCountries: formData.expertiseCountries.split(",").map(s => s.trim()),
          expertiseSectors: formData.expertiseSectors.split(",").map(s => s.trim()),
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Partnership application submitted successfully!");
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Apply error:", error);
      toast.error("An error occurred while submitting the application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Main fluid className="py-12 bg-muted/20">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Become an AECCI Partner</h1>
          <p className="text-xl text-muted-foreground">
            Join our global network and host your own Deal Room sessions to connect with international businesses.
          </p>
        </div>

        <div className="bg-background rounded-xl p-8 border shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" /> Organization Details
              </h2>
              
              <div className="space-y-2">
                <Label htmlFor="organization">Organization Name</Label>
                <Input 
                  id="organization" 
                  name="organization" 
                  required 
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="e.g. Global Trade Advisory Ltd."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expertiseCountries">Expertise Countries (comma separated)</Label>
                  <Input 
                    id="expertiseCountries" 
                    name="expertiseCountries" 
                    required 
                    value={formData.expertiseCountries}
                    onChange={handleInputChange}
                    placeholder="e.g. USA, UK, Germany"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expertiseSectors">Expertise Sectors (comma separated)</Label>
                  <Input 
                    id="expertiseSectors" 
                    name="expertiseSectors" 
                    required 
                    value={formData.expertiseSectors}
                    onChange={handleInputChange}
                    placeholder="e.g. Tech, Manufacturing"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to partner with AECCI?</Label>
                <Textarea 
                  id="motivation" 
                  name="motivation" 
                  required 
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your motivation and how you can add value..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Verification Documents
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Please provide links to your verification documents (Google Drive, Dropbox, etc. with public access).
              </p>
              
              <div className="space-y-2">
                <Label htmlFor="governmentId">Government ID / Registration Proof Link</Label>
                <Input 
                  id="governmentId" 
                  name="governmentId" 
                  type="url"
                  required 
                  value={formData.governmentId}
                  onChange={handleInputChange}
                  placeholder="https://..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="professionalCert">Professional Certifications Link (Optional)</Label>
                <Input 
                  id="professionalCert" 
                  name="professionalCert" 
                  type="url"
                  value={formData.professionalCert}
                  onChange={handleInputChange}
                  placeholder="https://..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessProof">Business Proof / Profile Link</Label>
                <Input 
                  id="businessProof" 
                  name="businessProof" 
                  type="url"
                  required 
                  value={formData.businessProof}
                  onChange={handleInputChange}
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="pt-6 border-t flex justify-end">
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
}
