import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import React from "react";

const Notification = () => {
  return (
    <SidebarMenuButton className="mt-1 flex items-center gap-x-2 rounded-lg p-2 text-sm">
      <Bell size={18} /> <span>Notification</span>
    </SidebarMenuButton>
  );
};

export default Notification;
