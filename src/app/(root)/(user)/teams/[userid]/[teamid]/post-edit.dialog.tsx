"use client";
import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Bell,
  Eye,
  Star,
  MoreHorizontal,
  Clock,
  Instagram,
  Share2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import PostViewTabs from "./post-view-tab";
interface PostEditDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const PostEditDialog: FC<PostEditDialogProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent className="h-full flex flex-col max-w-[97%] overflow-y-scroll bg-white">
        <PostEditDialogheader />
        <PostViewTabs />
      </DialogContent>
    </Dialog>
  );
};

export default PostEditDialog;

const PostEditDialogheader = () => {
  return (
    <DialogHeader>
      <DialogTitle className="hidden">POST EDITIOR</DialogTitle>
      <div className="flex w-full items-center justify-between border-b pb-5 pt-2">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          {/* Instagram Icon */}
          <div className="rounded-lg bg-pink-500 p-2">
            <Instagram size={18} className="text-white" />
          </div>
          {/* Buttons */}
          <button className="flex items-center gap-1 rounded-lg border px-3 py-1 text-sm hover:bg-gray-100">
            📢 Campaign
          </button>
          <button className="txet-sm flex items-center gap-1 rounded-lg border px-3 py-1 hover:bg-gray-100">
            🏷 Labels
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <Share2
            size={18}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
          <Bell
            size={18}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
          <Clock
            size={18}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
          <Eye
            size={18}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
          <Star
            size={18}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
          <MoreHorizontal
            size={18}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
          {/* Profile Image */}
          <Image
            src="/logo.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </DialogHeader>
  );
};
