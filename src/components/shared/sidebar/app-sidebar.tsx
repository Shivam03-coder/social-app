"use client";

import * as React from "react";
import {
  AudioWaveform,
  BarChart3,
  BookOpen,
  Bot,
  Command,
  FileText,
  Frame,
  GalleryVerticalEnd,
  Instagram,
  Map,
  Megaphone,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavWorkspace } from "@/components/shared/sidebar/nav-workspace";
import { NavPosts } from "@/components/shared/sidebar/nav-posts";
import { NavUser } from "@/components/nav-user";
import { ProjectSwitcher } from "@/components/shared/sidebar/project-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Searchbar from "./search-bar";
import Notification from "./notification";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Workspace",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Content",
          url: "#",
          icon: FileText,
        },
        {
          title: "Camapign",
          url: "#",
          icon: Megaphone,
        },
        {
          title: "Analytics",
          url: "#",
          icon: BarChart3,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Instagram,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: Instagram,
    },
    {
      name: "Travel",
      url: "#",
      icon: Instagram,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <ProjectSwitcher />
        <Searchbar />
      </SidebarHeader>
      <SidebarContent>
        <NavWorkspace items={data.navMain} />
        <NavPosts projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
