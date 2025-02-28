import DateTimePicker from "@/components/date-time-picker";
import React from "react";
import WelcomePost from "./welcome-post";

const MobileView = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Android Frame */}
      <div className="relative h-[680px] w-[360px] overflow-hidden rounded-3xl border-8 border-gray-700 bg-black shadow-lg">
        {/* Status Bar */}
        <div className="absolute left-0 top-0 flex h-6 w-full items-center justify-between bg-gray-900 px-4 text-xs text-white">
          <span>10:30 AM</span>
          <span>🔋 📶 Wi-Fi</span>
        </div>

        {/* Screen Content */}
        <div className="absolute left-0 top-6 flex h-[calc(100%-48px)] w-full flex-col items-center justify-start bg-white p-4">
          {children}
        </div>

        {/* Bottom Navbar */}
        <div className="absolute bottom-0 left-0 flex h-10 w-full items-center justify-around bg-gray-900 text-white">
          <span>⬅️</span>
          <span>🔲</span>
          <span>⭕</span>
        </div>
      </div>
    </div>
  );
};

const MobileContent = () => {
  return (
    <MobileView>
      <div className="flex h-full overflow-y-scroll w-full flex-col items-center gap-4">
        {/* HEADER */}
        <div className="flex w-full items-center justify-between border-b p-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-800">
              SA
            </div>
            <p className="text-sm text-gray-800">shivam850anand@gmail.com</p>
          </div>
          <DateTimePicker />
        </div>

        {/* MAIN CONTENT */}
        <WelcomePost />
      </div>
    </MobileView>
  );
};

export default MobileContent;
