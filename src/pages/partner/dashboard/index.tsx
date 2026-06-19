import { Main } from "@/components/layout/main";
import { useGetUsersQuery, useSetPricingMutation } from "@/store/api/adminApi";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export default function PartnerDashboard() {
  const { data, isLoading } = useGetUsersQuery({ kycStatus: 'assigned_pending_pricing' });
  const users = data?.data || [];

  const [setPricing, { isLoading: isSettingPricing }] = useSetPricingMutation();
  const [prices, setPrices] = useState<Record<string, string>>({});

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
      console.log(err)
      toast.error("Failed to set pricing.");
    }
  };

  if (isLoading) {
    return <Main fluid className="flex justify-center p-10"><p>Loading clients...</p></Main>;
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
