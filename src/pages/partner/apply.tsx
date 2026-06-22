import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { User, FileText, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BecomePartnerPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const storedUser = localStorage.getItem("user");
  let defaultUser = { fullName: "", email: "" };
  if (storedUser) {
    try {
      defaultUser = JSON.parse(storedUser);
    } catch {
      // Ignore
    }
  }

  const [formData, setFormData] = useState({
    fullName: defaultUser.fullName || "",
    email: defaultUser.email || "",
    expertiseCountries: "",
    expertiseSectors: "",
    yearsOfExperience: "",
    linkedinUrl: "",
    professionalCert: "",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, yearsOfExperience: value }));
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
          fullName: formData.fullName,
          email: formData.email,
          expertiseCountries: formData.expertiseCountries.split(",").map(s => s.trim()).filter(Boolean),
          expertiseSectors: formData.expertiseSectors.split(",").map(s => s.trim()).filter(Boolean),
          yearsOfExperience: formData.yearsOfExperience,
          linkedinUrl: formData.linkedinUrl,
          professionalCert: formData.professionalCert,
          motivation: formData.motivation,
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
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Become an AECCI Partner</h1>
          <p className="text-xl text-muted-foreground">
            Join our global network and host your own Deal Room sessions to connect with international businesses.
          </p>
        </div>

        <div className="bg-background rounded-xl p-8 border shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> Professional Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    required 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Professional Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expertiseCountries">Countries of Operation / Expertise (comma separated)</Label>
                  <Input 
                    id="expertiseCountries" 
                    name="expertiseCountries" 
                    required 
                    value={formData.expertiseCountries}
                    onChange={handleInputChange}
                    placeholder="e.g. Kenya, UAE, Germany"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expertiseSectors">Core Trade Expertise (comma separated)</Label>
                  <Input 
                    id="expertiseSectors" 
                    name="expertiseSectors" 
                    required 
                    value={formData.expertiseSectors}
                    onChange={handleInputChange}
                    placeholder="e.g. Customs Clearance, Logistics, Buyer Matchmaking"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="yearsOfExperience">Years of Professional Experience</Label>
                  <Select onValueChange={handleSelectChange} value={formData.yearsOfExperience}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 Years</SelectItem>
                      <SelectItem value="3-5">3-5 Years</SelectItem>
                      <SelectItem value="6-10">6-10 Years</SelectItem>
                      <SelectItem value="10+">10+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
                  <Input 
                    id="linkedinUrl" 
                    name="linkedinUrl" 
                    type="url"
                    required 
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation & Value Proposal</Label>
                <Textarea 
                  id="motivation" 
                  name="motivation" 
                  required 
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Describe how you can support chamber members and facilitate trade..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Credentials & Certifications
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Please provide links to your professional credentials or business profile (e.g. Google Drive, Dropbox link).
              </p>
              
              <div className="space-y-2">
                <Label htmlFor="professionalCert">Credentials Link (Certificates or Professional Profile)</Label>
                <Input 
                  id="professionalCert" 
                  name="professionalCert" 
                  type="url"
                  required 
                  value={formData.professionalCert}
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
