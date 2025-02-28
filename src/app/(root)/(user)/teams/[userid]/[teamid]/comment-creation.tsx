"use client";
import { useState } from "react";
import { MoreHorizontal, Trash, Edit, Dot, Ellipsis } from "lucide-react";
import Image from "next/image";
import useMount from "@/hooks/use-mount";

function CommentCreation() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const Mount = useMount();
  if (!Mount) return null;
  return (
    <div className="p-4">
      <div className="flex items-center bg-white gap-x-2 rounded-lg border p-2">
        <input
          type="text"
          placeholder="Say something..."
          className="flex-1 border-none p-2 focus:outline-none"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="rounded-lg bg-pink-400 px-3 py-1 text-white hover:bg-blue-600"
          onClick={handlePostComment}
        >
          Post
        </button>
      </div>
      {/* Display Comments */}
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="border my-3 border-gray-400 bg-white p-3 rounded-md  flex justify-between text-gray-700">
            {comment}
            <Ellipsis />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentCreation;
