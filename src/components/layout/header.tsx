import { ExporterHeader } from "@/components/layout/exporter-header";
import { cn } from "@/lib/utils";

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
  /** When true, skip rendering — layout already shows ExporterHeader */
  skip?: boolean;
};

/**
 * Pages historically rendered their own Header.
 * AuthenticatedLayout now mounts one shared ExporterHeader,
 * so this component is a no-op to avoid duplicate headers.
 */
export function Header({ className, fixed, children, skip, ...props }: HeaderProps) {
  // Shared layout header is the single source of truth for exporter shell.
  // Keep the component exported so existing pages don't break.
  void className;
  void fixed;
  void children;
  void skip;
  void props;
  return null;
}

/** Explicit shared header alias if a page needs to force-render it */
export function SharedExporterHeader({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <ExporterHeader />
    </div>
  );
}
