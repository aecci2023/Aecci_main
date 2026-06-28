import { Main } from "@/components/layout/main";

export default function AdminAnnouncementsPage() {
  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage global announcements and notifications.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-64 border rounded-md border-dashed">
        <p className="text-muted-foreground">
          This section is currently under development.
        </p>
      </div>
    </Main>
  );
}
