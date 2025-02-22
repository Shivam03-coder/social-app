import { LoginForm } from "@/components/shared/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
