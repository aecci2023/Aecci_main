import { type ReactNode, useState, isValidElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  type NavCollapsible,
  type NavItem,
  type NavLink,
  type NavGroup as NavGroupProps,
} from "./types";
import { SignOutDialog } from "@/components/sign-out-dialog";

export function NavGroup({ title, items }: NavGroupProps) {
  const { state, isMobile } = useSidebar();
  const location = useLocation();
  const href = location.pathname;
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const key = `${item.title}-${item.url}`;

          if (!item.items)
            return (
              <SidebarMenuLink key={key} item={item as NavLink} href={href} />
            );

          if (state === "collapsed" && !isMobile)
            return (
              <SidebarMenuCollapsedDropdown
                key={key}
                item={item as NavCollapsible}
                href={href}
              />
            );

          return (
            <SidebarMenuCollapsible
              key={key}
              item={item as NavCollapsible}
              href={href}
            />
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function RenderIcon({ icon: Icon }: { icon: any }) {
  if (!Icon) return null;
  if (typeof Icon === "object" && isValidElement(Icon)) return Icon;
  return <Icon />;
}

function NavBadge({ children }: { children: ReactNode }) {
  const isNumeric = !isNaN(Number(children));
  const variantClass =
    isNumeric || children === "3"
      ? "bg-amber-500 hover:bg-amber-600 text-white border-none"
      : children === "New"
        ? "bg-emerald-600 hover:bg-emerald-600 text-white border-none"
        : "bg-primary text-primary-foreground";
  return (
    <Badge
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${variantClass}`}
    >
      {children}
    </Badge>
  );
}

function SidebarMenuLink({ item, href }: { item: NavLink; href: string }) {
  const { setOpenMobile } = useSidebar();
  const [logoutOpen, setLogoutOpen] = useState(false);

  if (item.url === "#logout" || item.url === "logout") {
    return (
      <>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip={item.title}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenMobile(false);
                setLogoutOpen(true);
              }}
              className="w-full flex items-center text-left"
            >
              <RenderIcon icon={item.icon} />
              <span className="flex-1 truncate">{item.title}</span>
              {item.badge && <NavBadge>{item.badge}</NavBadge>}
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SignOutDialog open={logoutOpen} onOpenChange={setLogoutOpen} />
      </>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
      >
        <Link to={item.url} onClick={() => setOpenMobile(false)}>
          <RenderIcon icon={item.icon} />
          <span className="flex-1 truncate">{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function SidebarMenuCollapsible({
  item,
  href,
}: {
  item: NavCollapsible;
  href: string;
}) {
  const { setOpenMobile } = useSidebar();
  return (
    <Collapsible
      asChild
      defaultOpen={checkIsActive(href, item, true)}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            <RenderIcon icon={item.icon} />
            <span className="flex-1 truncate">{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="CollapsibleContent">
          <SidebarMenuSub>
            {item.items.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  isActive={checkIsActive(href, subItem)}
                >
                  <Link to={subItem.url} onClick={() => setOpenMobile(false)}>
                    <RenderIcon icon={subItem.icon} />
                    <span className="flex-1 truncate">{subItem.title}</span>
                    {subItem.badge && <NavBadge>{subItem.badge}</NavBadge>}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function SidebarMenuCollapsedDropdown({
  item,
  href,
}: {
  item: NavCollapsible;
  href: string;
}) {
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
          >
            <RenderIcon icon={item.icon} />
            <span className="flex-1 truncate">{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" sideOffset={4}>
          <DropdownMenuLabel>
            {item.title} {item.badge ? `(${item.badge})` : ""}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.items.map((sub) => (
            <DropdownMenuItem key={`${sub.title}-${sub.url}`} asChild>
              <Link
                to={sub.url}
                className={`${checkIsActive(href, sub) ? "bg-secondary" : ""}`}
              >
                <RenderIcon icon={sub.icon} />
                <span className="max-w-52 text-wrap">{sub.title}</span>
                {sub.badge && (
                  <span className="ms-auto text-xs">{sub.badge}</span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}

function checkIsActive(href: string, item: NavItem, mainNav = false) {
  return (
    href === item.url || // /endpoint?search=param
    href.split("?")[0] === item.url || // endpoint
    !!item?.items?.filter((i) => i.url === href).length || // if child nav is active
    (mainNav &&
      href.split("/")[1] !== "" &&
      href.split("/")[1] === (item.url as string)?.split("/")[1])
  );
}
