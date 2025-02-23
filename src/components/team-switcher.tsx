"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

// Move mockTeams outside the component to prevent unnecessary re-renders
export const mockTeams = [
  {
    id: "1",
    name: "Design Team",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60",
    description: "Crafting beautiful user experiences and visual designs",
    members: [
      {
        id: "1",
        name: "John Doe",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
        role: "Lead Designer",
      },
      {
        id: "2",
        name: "Jane Smith",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
        role: "UI Designer",
      },
    ],
  },
  {
    id: "2",
    name: "Development Team",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    description: "Building robust and scalable applications",
    members: [
      {
        id: "3",
        name: "Mike Johnson",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
        role: "Senior Developer",
      },
      {
        id: "4",
        name: "Sarah Williams",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
        role: "Frontend Developer",
      },
    ],
  },
];

export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(mockTeams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <img src={activeTeam?.logo} alt={activeTeam?.name} className="size-6 rounded-full" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeTeam?.name}</span>
                <span className="truncate text-xs">{activeTeam?.description}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] bg-white min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">Teams</DropdownMenuLabel>
            {mockTeams.map((team, index) => (
              <DropdownMenuItem
                key={team.id}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <img src={team.logo} alt={team.name} className="size-4 rounded-full" />
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="bg-background flex size-6 items-center justify-center rounded-md border">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
