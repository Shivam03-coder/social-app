import React from "react";
import { Sparkles, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="mb-12">
      <div className="flex  px-8 items-center justify-between border-b bg-white p-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 animate-pulse text-purple-600" />
          <h1 className="bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-2xl font-bold text-transparent">
            SOCIAL-X
          </h1>
        </div>

        {/* Center - Search Bar */}
        <div className="relative w-1/3">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Right - Profile Icons */}
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/profile.jpg" alt="User Profile" />
            <AvatarFallback className="bg-black text-white">SA</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="bg-purple-100 rounded-b-full p-4 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Sparkles className="h-8 w-8 animate-pulse text-purple-600" />
          <h1 className="bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-4xl font-bold tracking-wide text-transparent">
            SOCIAL-X
          </h1>
        </div>
        <p className="mx-auto max-w-2xl font-lexend text-lg leading-relaxed text-gray-900">
          Collaborate, create, and achieve together. Join or create a team to
          use ShadCN UI.
        </p>
      </div>
    </header>
  );
};

export default Header;
