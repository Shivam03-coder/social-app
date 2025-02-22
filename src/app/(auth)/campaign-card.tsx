import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CampaignCard = () => {
  return (
    <div className="relative font-lexend hidden h-full lg:block">
      <div className="relative flex h-full flex-col justify-center px-10">
        {/* Logo */}
        <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-x-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                SOCIAL-X
              </h1>
            </div>
          </Link>
        </div>

        {/* Main Content */}
        <h2 className="text-5xl font-semibold text-gray-900">
          Introducing
          <br />
          Campaigns
        </h2>

        <p className="mt-6 text-xl text-gray-600">
          Organization in SocialPro just got way better. For each campaign,
          centralize briefs, timelines, visual assets, and specific pieces of
          content.
        </p>

        <p className="mt-4 text-xl text-gray-600">
          Plus, have clear visibility over ongoing campaigns right in your
          calendar.
        </p>

        <a
          href="#"
          className="mt-8 inline-block border-b-2 border-purple-600 pb-1 text-lg font-semibold text-purple-600 hover:text-purple-700"
        >
          Learn more
        </a>

        {/* Campaign Card */}
        <div className="mt-12 max-w-md rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center gap-2">
            <Leaf className="text-green-500" size={20} />
            <span className="font-semibold">Spring Campaign</span>
          </div>

          <div className="flex gap-3">
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              Description
            </button>
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              Audience
            </button>
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              Goals
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CampaignCard;
