"use client";
import DateTimePicker from "@/components/date-time-picker";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import React, { FC } from "react";

interface PostheaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Postheader: FC<PostheaderProps> = ({ setIsOpen, isOpen }) => {
  return (
    <div className="flex justify-between bg-white p-3">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="center h-10 w-10 rounded-full bg-gray-300 text-gray-800">
          SA
        </div>
        <div className="flex items-center">
          <p className="font-lexend text-sm font-normal text-gray-800">
            shivam850anand@gmail.com
          </p>
        </div>
      </div>
      <p className="flex items-center pl-2 text-sm text-gray-500">
        <DateTimePicker />
      </p>
      <div className="flex items-center gap-2">
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export default Postheader;
