import { Main } from "@/components/layout/main";
import { ResourcesContent } from "@/components/common/resources-content";

export default function AgentResourcesPage() {
  return (
    <Main
      fluid
      className="min-h-full space-y-5 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-6 sm:px-5"
    >
      <ResourcesContent />
    </Main>
  );
}
