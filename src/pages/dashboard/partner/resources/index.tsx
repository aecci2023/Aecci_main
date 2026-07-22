import { Main } from "@/components/layout/main";
import { ResourcesContent } from "@/components/common/resources-content";

export default function PartnerResourcesPage() {
  return (
    <Main
      fluid
      className="px-6 pt-4 pb-8 bg-[#F8FAFC] min-h-screen"
    >
      <ResourcesContent />
    </Main>
  );
}
