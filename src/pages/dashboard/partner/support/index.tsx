import { Main } from "@/components/layout/main";
import { SupportContent } from "@/components/common/support-content";

export default function PartnerSupportPage() {
  return (
    <Main
      fluid
      className="px-6 pt-4 pb-8 bg-[#F8FAFC] min-h-screen"
    >
      <SupportContent supportUrl="/partner/support" />
    </Main>
  );
}
