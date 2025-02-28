"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Instagram } from "lucide-react";

const PostInfo = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="center size-[40px] rounded-full bg-white p-2 shadow-lg">
              <Check size={19} />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-blue-50">
            <ApprovalCard />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="center size-[40px] rounded-full bg-white p-2 shadow-lg">
              <Instagram className="text-pink-400" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-blue-50">
            <div className="p-3">
              <h5 className="font-lexend text-sm font-normal">
                Not published yet !
              </h5>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default PostInfo;

const ApprovalCard = () => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-4">
        <p className="text-sm font-semibold text-gray-800">
          No one approved this post yet
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Pending approval from any of these users:
        </p>
        <p className="mt-2 text-sm font-medium text-gray-800">Team</p>

        <div className="mt-3 flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.jpg" alt="Shivam Anand" />
            <AvatarFallback className="text-white bg-black">SA</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium text-gray-700">
            Shivam Anand <span className="font-semibold text-black">(You)</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
