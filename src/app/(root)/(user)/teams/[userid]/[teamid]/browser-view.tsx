import React from "react";
import DateTimePicker from "@/components/date-time-picker";
import WelcomePost from "./welcome-post";

const BrowserView = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-max w-full overflow-hidden rounded-xl border border-gray-300 bg-gray-200 pb-5 shadow-lg">
      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-4 flex-1 rounded-lg bg-gray-300 px-4 py-1 text-sm text-gray-600">
          https://example.com
        </div>
      </div>

      {/* Browser Content */}
      {children}
    </div>
  );
};

const BrowserContent = () => {
  return (
    <BrowserView>
      <div className="mx-auto flex h-full w-full max-w-[30.275rem] flex-col gap-x-5  border border-gray-200 bg-white p-4 rounded-md">
        {/* HEADER */}
        <div className="flex h-[80px] flex-1 p-5 justify-between">
          <div className="flex items-center gap-3">
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
        </div>
        {/* POST */}
        <WelcomePost />
      </div>
    </BrowserView>
  );
};

export default BrowserContent;
