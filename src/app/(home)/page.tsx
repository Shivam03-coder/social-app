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
import Hero from "./hero";
import Features from "./features";
import TestimonialCarousel from "./testimonial";
import Analytic from "./analytic";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Features Grid */}
      <Features />
      {/* User Reviews Carousel */}
      <TestimonialCarousel />

      {/* Analytics Preview */}
      <Analytic />
      

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

export default HomePage;
