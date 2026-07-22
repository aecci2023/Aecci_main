import { Main } from "@/components/layout/main";
import { AecciServicesContent } from "@/components/common/aecci-services-content";

export default function AgentAecciServicesPage() {
  return (
    <Main
      fluid
      className="min-h-full space-y-6 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-7 sm:px-5"
    >
      <AecciServicesContent supportUrl="/agent/support" />
    </Main>
  );
}
