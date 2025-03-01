"use client";
import { useState } from "react";
import { MoreHorizontal, Trash, Edit, GalleryHorizontal } from "lucide-react";
import Image from "next/image";
import PostEditSheet from "./post-edit-sheet";

export default function WelcomePost() {
  const [hover, setHover] = useState(false);

  return (
    <div className="mx-auto w-full bg-white p-4">
      <div
        className="relative w-full overflow-hidden rounded-lg bg-gray-100"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image src="/image.png" alt="Welcome" height={600} width={500} />
        {hover && (
          <div className="absolute inset-0 flex items-start justify-end gap-2 bg-black bg-opacity-50 p-2 transition-all duration-300">
            <button className="rounded bg-gray-700 p-1 text-white hover:bg-gray-600">
              <GalleryHorizontal size={18} />
            </button>
            <PostEditSheet />
            <button className="rounded bg-red-600 p-1 text-white hover:bg-red-500">
              <Trash size={18} />
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="flex items-center gap-2 text-xl font-bold">👋 Welcome</p>
        <p className="text-gray-700">✨ Welcome to Planable! ✨</p>
        <p className="text-sm text-gray-600">
          This is a placeholder post to give you a little tour of what Planable
          can do for your social media planning and collaboration.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Welcome aboard, and let’s make your social media management smooth and
          effective!
        </p>
        <p className="mt-2 text-sm text-blue-500">
          #Planable #Welcome #SocialMediaManagement
        </p>
      </div>
    </div>
  );
}
