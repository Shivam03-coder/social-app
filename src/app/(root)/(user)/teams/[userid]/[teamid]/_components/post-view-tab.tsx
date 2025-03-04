import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Smartphone } from "lucide-react";
import MobileView from "./mobile-view";
import BrowserView from "./browser-view";

const PostViewTabs = () => {
  return (
    <Tabs defaultValue="desktop" className="top-0">
      {/* Ensure that the TabsList is properly structured */}
      <TabsList className="mx-auto flex w-[40%] items-center">
        <TabsTrigger className="max-w-max" value="desktop">
          <Monitor size={18} />
        </TabsTrigger>
        <TabsTrigger className="max-w-max" value="mobile">
          <Smartphone size={18} />
        </TabsTrigger>
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
