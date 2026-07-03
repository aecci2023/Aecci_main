import ImporterBranding from "./ImporterBranding";
import ImporterRegisterWizard from "./ImporterRegisterWizard";

export default function ImporterRegisterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row w-full overflow-hidden">
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 bg-zinc-950 text-white relative">
        <ImporterBranding />
      </div>
      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col relative bg-background overflow-y-auto h-screen">
        <div className="flex-1 w-full max-w-2xl mx-auto px-6 py-12 md:px-12 flex flex-col">
          <ImporterRegisterWizard />
        </div>
      </div>
    </div>
  );
}
