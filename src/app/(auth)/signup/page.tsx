import { SignupForm } from "@/components/shared/sigup-form";
import React from "react";

const SigninForm = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-lg">
        <SignupForm />
      </div>
    </div>
  );
};

export default SigninForm;
