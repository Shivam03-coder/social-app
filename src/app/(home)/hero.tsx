import React from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Sparkles,
  Users,
  BarChart,
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 blur-3xl"></div>
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-pink-100 opacity-20 blur-2xl"></div>
          <div className="absolute left-0 top-2/3 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          {/* Feature Pills */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-x-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
                <Sparkles size={16} className="animate-pulse" />
                New Features
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-600">
                <Users size={16} />
                10k+ Users
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="font- text-center font-normal">
            <h1 className="relative mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">Transform Your</span>
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-black to-blue-600 bg-clip-text text-transparent">
                Social Media Presence
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600">
              One powerful platform to schedule, analyze, and optimize your
              content across all social networks. Join thousands of successful
              brands managing their social media with confidence.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={"/user-dashboard"}>
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-300 via-black to-purple-300 px-8 py-4 font-semibold text-white transition-all hover:scale-105 sm:w-auto">
                  Start Free Trial
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>
              <button className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:w-auto">
                <BarChart size={20} />
                See Live Demo
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-4">
              {[
                ["10K+", "Active Users", "#bbf7d0"],
                ["500K+", "Posts Published", "#fed7aa"],
                ["98%", "Customer Satisfaction", "#FDB7EA"],
                ["24/7", "Expert Support", "#B2A5FF"],
              ].map(([stat, label, color]) => (
                <div
                  key={label}
                  className="flex flex-col rounded-lg bg-slate-50 py-5"
                  style={{ backgroundColor: color } as React.CSSProperties}
                >
                  <span className="text-3xl font-bold text-gray-900">
                    {stat}
                  </span>
                  <span className="text-sm text-gray-500">{label}</span>
                </div>
              ))}
            </div>

            {/* Platform Icons */}
            <div className="my-16 flex flex-wrap items-center justify-center gap-8 border-t border-gray-100 pt-8">
              <Facebook
                size={32}
                className="transform text-gray-400 transition-all hover:scale-110 hover:text-blue-600"
              />
              <Instagram
                size={32}
                className="transform text-gray-400 transition-all hover:scale-110 hover:text-pink-600"
              />
              <Linkedin
                size={32}
                className="transform text-gray-400 transition-all hover:scale-110 hover:text-blue-700"
              />
              <Twitter
                size={32}
                className="transform text-gray-400 transition-all hover:scale-110 hover:text-blue-400"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
