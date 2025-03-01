"use client";
import DateTimePicker from "@/components/date-time-picker";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import React, { FC } from "react";

interface PostheaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  removeIcon?: boolean;
}

const Postheader: FC<PostheaderProps> = ({ setIsOpen, isOpen, removeIcon = false }) => {
  return (
    <div className="flex justify-between bg-white p-3 items-center">
      {/* Left Side: Profile & Email */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-3"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-800">
          SA
        </div>
        <p className="font-lexend text-sm font-normal text-gray-800">
          shivam850anand@gmail.com
        </p>
      </div>

      {/* Center: Date Picker */}
      <div className="text-sm text-gray-500">
        <DateTimePicker />
      </div>

      {/* Right Side: Icons */}
      {!removeIcon && (
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal size={18} />
        </button>
      )}
    </div>
  );
};

export default Postheader;
