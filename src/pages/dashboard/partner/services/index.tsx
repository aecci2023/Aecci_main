import { Main } from "@/components/layout/main";
import { AecciServicesContent } from "@/components/common/aecci-services-content";

export default function PartnerServicesPage() {
  return (
    <Main
      fluid
      className="px-6 pt-4 pb-8 bg-[#F8FAFC] min-h-screen"
    >
      <AecciServicesContent supportUrl="/partner/support" />
    </Main>
  );
}
