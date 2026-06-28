import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function AccessDenied() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex items-center justify-center py-16 px-4 md:py-24 md:px-20 bg-background">
      <div className="absolute hidden md:flex inset-0 items-center justify-center text-secondary/30 py-24 px-20">
        <ShieldAlert className="w-full h-full max-w-[400px] max-h-[400px] text-muted/20" />
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-8 md:gap-12 max-w-2xl text-center">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <div className="p-4 bg-destructive/10 rounded-full mb-2">
            <ShieldAlert className="size-12 text-destructive" />
          </div>
          <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-tight">
            Access Denied
          </h1>
          <p className="text-center text-lg md:text-xl text-muted-foreground">
            You do not have the necessary permissions to view this page. If you
            believe this is an error, please contact support.
          </p>
        </div>
        <div className="flex gap-3 flex-col md:flex-row w-full items-center justify-center mt-4">
          <Button
            className="w-full md:w-fit"
            size={isMobile ? "default" : "lg"}
            variant="outline"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 size-4" /> Go back
          </Button>
          <Button
            className="w-full md:w-fit"
            size={isMobile ? "default" : "lg"}
            onClick={() => {
              const userStr = localStorage.getItem("user");
              if (userStr) {
                try {
                  const user = JSON.parse(userStr);
                  if (user.role === "admin") navigate("/admin/dashboard");
                  else if (user.role === "partner")
                    navigate("/partner/dashboard");
                  else navigate("/dashboard");
                } catch (e) {
                  console.log(e);
                  navigate("/dashboard");
                }
              } else {
                navigate("/login");
              }
            }}
          >
            Go to My Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
