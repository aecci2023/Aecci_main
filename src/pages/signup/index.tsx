import MapBranding from "./components/MapBranding";
import SignupWizard from "./components/SignupWizard";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row w-full overflow-hidden">
      {/* Left Branding / Map Section - Hidden on mobile */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 bg-zinc-950 text-white relative">
        <MapBranding />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col relative bg-background overflow-y-auto h-screen">
        <div className="flex-1 w-full max-w-2xl mx-auto px-6 py-12 md:px-12 flex flex-col">
          <SignupWizard />
        </div>
      </div>
    </div>
  );
}
