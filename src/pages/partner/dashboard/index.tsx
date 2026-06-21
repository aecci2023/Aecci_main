import { Main } from "@/components/layout/main";
import { useGetUsersQuery, useSetPricingMutation, useGetPartnerProfileQuery, useSetupPartnerProfileMutation } from "@/store/api/adminApi";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function PartnerDashboard() {
  const { data: profileData, isLoading: isProfileLoading, refetch: refetchProfile } = useGetPartnerProfileQuery();
  const partnerProfile = profileData?.data;

  const { data: usersData, isLoading: isUsersLoading } = useGetUsersQuery({ kycStatus: 'assigned_pending_pricing' });
  const users = usersData?.data || [];

  const [setPricing, { isLoading: isSettingPricing }] = useSetPricingMutation();
  const [setupProfile, { isLoading: isSettingUp }] = useSetupPartnerProfileMutation();

  const [prices, setPrices] = useState<Record<string, string>>({});
  
  const [setupData, setSetupData] = useState({
    bio: "",
    signedAgreement: false
  });

  const handlePriceChange = (userId: string, value: string) => {
    setPrices(prev => ({ ...prev, [userId]: value }));
  };

  const handleSubmitPricing = async (userId: string) => {
    const price = Number(prices[userId]);
    if (!price || isNaN(price) || price <= 0) {
      toast.error("Please enter a valid price.");
      return;
    }

    try {
      await setPricing({ id: userId, dealRoomPrice: price }).unwrap();
      toast.success("Pricing set successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to set pricing.");
    }
  };

  const handleSetupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSetupData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCompleteSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!setupData.signedAgreement) {
      toast.error("You must sign the agreement to proceed.");
      return;
    }
    try {
      await setupProfile({
        bio: setupData.bio,
        signedAgreement: setupData.signedAgreement
      }).unwrap();
      toast.success("Profile setup complete!");
      refetchProfile();
    } catch (err) {
      console.error("Setup error:", err);
      toast.error("Failed to complete setup.");
    }
  };

  if (isProfileLoading || isUsersLoading) {
    return <Main fluid className="flex justify-center p-10"><p className="text-muted-foreground animate-pulse">Loading dashboard...</p></Main>;
  }

  // Check if profile needs setup
  const needsSetup = partnerProfile && (!partnerProfile.bio || !partnerProfile.signedAgreement);

  if (needsSetup) {
    return (
      <Main fluid className="py-12 max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Complete Your Profile</h1>
          <p className="text-muted-foreground mt-1">Please provide the following details to activate your partner dashboard.</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Setup Wizard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCompleteSetup} className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">1. Professional Bio</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bio</label>
                  <Textarea 
                    name="bio"
                    required
                    value={setupData.bio}
                    onChange={handleSetupChange}
                    placeholder="Briefly describe your experience and what you offer to businesses..."
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-lg">2. Digital Agreement</h3>
                <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground h-32 overflow-y-auto">
                  <p>By checking the box below, you agree to the AECCI Partner Terms and Conditions, including but not limited to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Maintaining confidentiality of all client data.</li>
                    <li>Providing accurate market insights and advice.</li>
                    <li>Conducting sessions professionally and on time.</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input 
                    type="checkbox" 
                    id="agreement" 
                    className="w-4 h-4"
                    checked={setupData.signedAgreement}
                    onChange={(e) => setSetupData(prev => ({ ...prev, signedAgreement: e.target.checked }))}
                  />
                  <label htmlFor="agreement" className="text-sm font-medium cursor-pointer">I have read and agree to the Terms and Conditions.</label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSettingUp || !setupData.signedAgreement}>
                <CheckCircle2 className="w-4 h-4 mr-2" /> Complete Setup
              </Button>
            </form>
          </CardContent>
        </Card>
      </Main>
    );
  }

  return (
    <Main fluid className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Partner Dashboard</h1>
        <p className="text-muted-foreground mt-1">Manage assigned clients and set Deal Room pricing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: any) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.fullName || user.companyName}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Badge variant="outline">Pending Pricing</Badge>
              <div className="space-y-2">
                <label className="text-sm font-medium">Set Deal Room Price (USD)</label>
                <div className="flex gap-2">
                  <Input 
                    type="number" 
                    placeholder="e.g. 500" 
                    value={prices[user.id] || ""}
                    onChange={(e) => handlePriceChange(user.id, e.target.value)}
                  />
                  <Button 
                    onClick={() => handleSubmitPricing(user.id)}
                    disabled={isSettingPricing}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {users.length === 0 && (
          <p className="text-muted-foreground col-span-full">No pending clients assigned to you at the moment.</p>
        )}
      </div>
    </Main>
  );
}
