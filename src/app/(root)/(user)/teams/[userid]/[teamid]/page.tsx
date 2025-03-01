import React from "react";
import Stories from "./_components/stories";
import PostInfo from "./_components/post-info";
import TeamComment from "./_components/team-comment";
import PostCreation from "./_components/post-creation";
import CommentCreation from "./_components/comment-creation";

const Postpage = () => {
  return (
    <div className="h-full w-full bg-slate-50">
      <div className="mx-auto h-full w-[80%] px-20">
        <Stories />
        <div className="mt-5 flex">
          <div className="w-full max-w-[3.75rem]">
            <PostInfo />
          </div>
          <div className="max-w-[30.275rem] h-full">
            <PostCreation />
          </div>
          <div className="w-full max-w-[27.5rem]">
            <CommentCreation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postpage;
