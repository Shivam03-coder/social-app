import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/shared/login-form";
import CampaignCard from "./campaign-card";
import Image from "next/image";
import Link from "next/link";

export default function RootAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh bg-[#d6c6f8] lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <CampaignCard />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-x-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                SOCIAL-X
              </h1>
            </div>
          </Link>
        </div> */}
        {children}
      </div>
    </div>
  );
}
