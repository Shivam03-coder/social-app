"use client";
import React, { useState } from "react";
import Postheader from "./post-header";
import WelcomePost from "./welcome-post";
import PostEditDialog from "./post-edit.dialog";

const PostCreation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Postheader isOpen={isOpen} setIsOpen={setIsOpen} />
      <WelcomePost />
      <PostEditDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default PostCreation;
