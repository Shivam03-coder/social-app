"use client";
import { useState } from "react";
import { MoreHorizontal, Trash, Edit, Dot, Ellipsis, Send } from "lucide-react";
import Image from "next/image";
import useMount from "@/hooks/use-mount";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center gap-x-2 rounded-lg border bg-white p-2">
        <Input
          type="text"
          placeholder="Say something..."
          className="flex-1 border-none p-2 font-lexend shadow-none outline-none focus:outline-none"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button
          className="rounded-lg bg-blue-600 px-5 py-1 text-sm text-white"
          onClick={handlePostComment}
        >
          <Send />
        </Button>
      </div>
      {/* Display Comments */}
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="my-3 flex justify-between rounded-md border-gray-400 bg-gray-100 p-3 font-lexend text-gray-700"
          >
            {comment}
            <Ellipsis />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentCreation;
