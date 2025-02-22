import React from "react";
import {
  Calendar,
  Share2,
  CropIcon as DragDropIcon,
  Eye,
  CheckSquare,
  Clock,
  Users,
  Image as ImageIcon,
  BarChart3,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Navbar from "./navbar";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Manage Your Social Media
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Schedule, collaborate, and analyze your social media content across
            all platforms with our powerful management suite.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
              Get Started Free <ArrowRight size={20} />
            </button>
            <button className="rounded-full border-2 border-gray-300 px-8 py-4 font-semibold transition-colors hover:border-gray-400">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Platform Icons */}
        <div className="mb-20 flex justify-center gap-8">
          <Facebook
            size={32}
            className="text-gray-400 transition-colors hover:text-blue-600"
          />
          <Instagram
            size={32}
            className="text-gray-400 transition-colors hover:text-pink-600"
          />
          <Linkedin
            size={32}
            className="text-gray-400 transition-colors hover:text-blue-700"
          />
          <Twitter
            size={32}
            className="text-gray-400 transition-colors hover:text-blue-400"
          />
        </div>
      </header>

      {/* Features Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Powerful Features for Modern Teams
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-4xl font-bold">
                Track Your Success with Advanced Analytics
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Get detailed insights into your social media performance.
                Monitor engagement, reach, and growth across all platforms in
                one unified dashboard.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time performance metrics",
                  "Custom report generation",
                  "Audience insights",
                  "Engagement analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <CheckSquare size={16} className="text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Social Media Strategy?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Join thousands of teams already using our platform to streamline
            their social media management.
          </p>
          <button className="rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2025 Social Media Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <Calendar className="text-blue-600" />,
    title: "Content Calendar",
    description:
      "Visual scheduling for posts across multiple social media platforms with intuitive timeline view.",
  },
  {
    icon: <Share2 className="text-blue-600" />,
    title: "Multi-Platform Support",
    description:
      "Seamlessly manage content across Facebook, Instagram, LinkedIn, Twitter, and more.",
  },
  {
    icon: <DragDropIcon className="text-blue-600" />,
    title: "Drag & Drop Interface",
    description:
      "Create and arrange posts effortlessly with our intuitive drag and drop interface.",
  },
  {
    icon: <Eye className="text-blue-600" />,
    title: "Post Previews",
    description:
      "Preview exactly how your posts will look before publishing to any platform.",
  },
  {
    icon: <CheckSquare className="text-blue-600" />,
    title: "HomePageroval Workflows",
    description:
      "Set up structured HomePageroval processes to ensure quality control across your team.",
  },
  {
    icon: <Clock className="text-blue-600" />,
    title: "Auto-Publishing",
    description:
      "Schedule posts to automatically publish at optimal times for maximum engagement.",
  },
  {
    icon: <Users className="text-blue-600" />,
    title: "User Roles & Permissions",
    description:
      "Manage access levels for team members and clients with granular controls.",
  },
  {
    icon: <ImageIcon className="text-blue-600" />,
    title: "Media Library",
    description:
      "Centralized storage for all your media assets with easy organization and access.",
  },
  {
    icon: <BarChart3 className="text-blue-600" />,
    title: "Analytics & Reports",
    description:
      "Comprehensive analytics and reporting to track and improve your social media performance.",
  },
];

export default HomePage;
