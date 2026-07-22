import { Main } from "@/components/layout/main";
import { SupportContent } from "@/components/common/support-content";

export default function AgentSupportPage() {
  return (
    <Main
      fluid
      className="min-h-full space-y-6 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-7 sm:px-5"
    >
      <SupportContent supportUrl="/agent/support" />
    </Main>
  );
}
