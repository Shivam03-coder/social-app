import { CheckSquare } from "lucide-react";
import React from "react";

const Analytic = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="mb-6 bg-gradient-to-r from-blue-600 via-black to-blue-600 bg-clip-text text-transparent text-4xl font-bold">
              Track Your Success with Advanced Analytics
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Get detailed insights into your social media performance. Monitor
              engagement, reach, and growth across all platforms in one unified
              dashboard.
            </p>
            <div className="space-y-4">
              {[
                ["Real-time performance metrics", "bg-green-100"],
                ["Custom report generation", "bg-blue-100"],
                ["Audience insights", "bg-red-100"],
                ["Engagement analytics", "bg-teal-100"],
              ].map(([label, color], index) => (
                <span
                  key={index}
                  className={`flex max-w-[350px] items-center gap-3 rounded-xl ${color} p-3`}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <CheckSquare size={16} className="text-green-600" />
                  </div>
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Analytics Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytic;
