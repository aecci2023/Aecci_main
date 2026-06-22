import { Bell, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: number;
  text: string;
  isNew?: boolean;
  link?: string;
  date?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    text: "Trade Agreement concluded after nearly two decades of negotiations.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 2,
    text: "Agreement covers goods, services, investment, customs facilitation & regulatory cooperation.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 3,
    text: "EU to eliminate or reduce tariffs on 96–97% of goods exported to India.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 4,
    text: "Tariff cuts could save EU exporters up to €4 billion annually.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 5,
    text: "India to cut tariffs on 90–93% of bilateral trade over a phased period.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 6,
    text: "Key sectors opened: automobiles, wines & spirits, processed foods.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 7,
    text: "Indian exporters in textiles, gems & jewellery, leather & electronics to benefit.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 8,
    text: "Sensitive agricultural products excluded to protect domestic interests.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 9,
    text: "Implementation expected by late 2026 to early 2027 after approvals.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
  {
    id: 10,
    text: "FTA expected to boost trade, jobs, investments & economic growth.",
    isNew: true,
    link: "#",
    date: "2026-06-04",
  },
];

export function NotificationsTicker() {
  return (
    <div className="w-full bg-gradient-to-r from-background via-primary/5 to-background border-b border-border py-2.5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center gap-4">
        {/* Static label */}
        <div className="flex items-center gap-1.5 shrink-0 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 rounded-full px-3 py-1 text-primary">
          <Bell className="h-3.5 w-3.5 animate-pulse text-primary" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Notifications
          </span>
        </div>

        {/* Scrolling content */}
        <div className="relative flex-1 overflow-hidden mask-gradient">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {/* Duplicate for seamless loop */}
            {[...notifications, ...notifications].map((notif, idx) => {
              const isExternal = notif.link?.startsWith("http");

              if (isExternal) {
                return (
                  <a
                    key={`${notif.id}-${idx}`}
                    href={notif.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-[450] text-foreground/80 hover:text-primary transition-colors duration-150 group no-underline"
                  >
                    {notif.isNew && (
                      <Badge
                        variant="destructive"
                        className="text-[9px] leading-none px-1.5 py-0 h-4 border-none flex items-center justify-center font-bold"
                      >
                        NEW
                      </Badge>
                    )}
                    <span className="group-hover:underline decoration-primary/45 underline-offset-4">
                      {notif.text}
                    </span>
                    <ExternalLink className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-primary/20 mx-4 select-none font-normal">
                      •
                    </span>
                  </a>
                );
              }

              return (
                <Link
                  key={`${notif.id}-${idx}`}
                  to={notif.link || "#"}
                  className="inline-flex items-center gap-2 text-[13px] font-[450] text-foreground/80 hover:text-primary transition-colors duration-150 group no-underline"
                >
                  {notif.isNew && (
                    <Badge
                      variant="destructive"
                      className="text-[9px] leading-none px-1.5 py-0 h-4 border-none flex items-center justify-center font-bold"
                    >
                      NEW
                    </Badge>
                  )}
                  <span className="group-hover:underline decoration-primary/45 underline-offset-4">
                    {notif.text}
                  </span>
                  <span className="text-[10px] text-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-150 translate-x-[-4px] group-hover:translate-x-0">
                    →
                  </span>
                  <span className="text-primary/20 mx-4 select-none font-normal">
                    •
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
