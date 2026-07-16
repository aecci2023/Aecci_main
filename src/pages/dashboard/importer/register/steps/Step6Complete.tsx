import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Step10Complete() {
  return (
    <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-700">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto w-full">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-emerald-500 blur-[40px] opacity-20 rounded-full" />
          <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center relative z-10">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Registration Complete!
        </h1>
        
        <p className="text-muted-foreground mb-8 text-lg">
          Welcome to the AECCI Global Deal Room. Your importer profile is ready.
        </p>

        <div className="w-full space-y-4">
          <Link to="/login" className="w-full block">
            <Button size="lg" className="w-full gap-2">
              Go to Login <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          
          <Link to="/" className="w-full block">
            <Button variant="outline" size="lg" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
