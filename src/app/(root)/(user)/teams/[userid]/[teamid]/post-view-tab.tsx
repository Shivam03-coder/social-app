import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, MonitorSmartphone, Smartphone } from "lucide-react";
import Android from "@/components/magicui/android";
import MobileView from "./mobile-view";
import BrowserView from "./browser-view";
const PostViewTabs = () => {
  return (
    <Tabs defaultValue="desktop" className="top-0">
      <TabsList className="mx-auto flex w-[40%] items-center">
        <div className="mx-auto flex items-center justify-center gap-x-2">
          <TabsTrigger className="max-w-max" value="desktop">
            <Monitor size={18} />
          </TabsTrigger>
          <TabsTrigger className="max-w-max" value="mobile">
            <Smartphone size={18} />
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="desktop">
        <BrowserView />
      </TabsContent>
      <TabsContent value="mobile">
        <MobileView />
      </TabsContent>
    </Tabs>
  );
};

export default PostViewTabs;
