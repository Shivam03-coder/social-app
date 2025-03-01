"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import StoryCard from "./story-card";

const Stories = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="mt-5 flex flex-col rounded-md p-6 transition-all hover:border hover:bg-white">
      <div className="flex w-full justify-between">
        <h5 className="font-lexend text-lg font-normal">Stories(0)</h5>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <Minus className={`transition-transform duration-300`} />
          ) : (
            <Plus className={`transition-transform duration-300`} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "mt-2 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } rounded-md bg-white`}
      >
        <div className="p-4">
          <StoryCard />
        </div>
      </div>
    </section>
  );
};

export default Stories;
