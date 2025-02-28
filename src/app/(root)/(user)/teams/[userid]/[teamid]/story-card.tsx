"use client";
import { Plus } from "lucide-react";

const StoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-64 bg-gray-50 shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow-sm">
        <Plus className="text-gray-400" size={20} />
      </div>
      <p className="mt-3 text-gray-500 text-sm text-center">
        Create <br /> new story
      </p>
    </div>
  );
};

export default StoryCard;
