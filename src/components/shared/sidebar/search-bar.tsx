import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import React from "react";

const Searchbar = () => {
  const { open } = useSidebar();
  if (!open) return;
  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <Input
        type="text"
        placeholder="Search..."
        className="w-full rounded-xl border border-gray-600 bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

export default Searchbar;
