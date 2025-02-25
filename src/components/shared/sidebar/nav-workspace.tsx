"use client";

import {
  ChevronRight,
  PanelsTopLeft,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import React from "react";

export function NavWorkspace({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  className="flex items-center"
                  tooltip={item.title}
                >
                  {item.icon && <item.icon />}
                  <span className="flex items-center">
                    {item.title}{" "}
                    <ChevronRight
                      size={17}
                      className="ml-3 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </span>
                  <UserPlus className="ml-6 self-end" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out data-[state=open]:max-h-[500px] data-[state=open]:opacity-100">
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <div>
                          {subItem.icon && <subItem.icon />}
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
