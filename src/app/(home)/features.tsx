import {
  Calendar,
  Share2,
  Crop as DragDropIcon,
  Eye,
  CheckSquare,
  Clock,
  Users,
  Image as ImageIcon,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-white" />,
    title: "Content Calendar",
    description:
      "Visual scheduling for posts across multiple social media platforms with an intuitive timeline view.",
    color: "bg-blue-200",
  },
  {
    icon: <Share2 className="h-6 w-6 text-white" />,
    title: "Multi-Platform Support",
    description:
      "Seamlessly manage content across Facebook, Instagram, LinkedIn, Twitter, and more.",
    color: "bg-green-200",
  },
  {
    icon: <DragDropIcon className="h-6 w-6 text-white" />,
    title: "Drag & Drop Interface",
    description:
      "Create and arrange posts effortlessly with our intuitive drag-and-drop interface.",
    color: "bg-purple-200",
  },
  {
    icon: <Eye className="h-6 w-6 text-white" />,
    title: "Post Previews",
    description:
      "Preview exactly how your posts will look before publishing to any platform.",
    color: "bg-yellow-200",
  },
  {
    icon: <CheckSquare className="h-6 w-6 text-white" />,
    title: "Approval Workflows",
    description:
      "Set up structured approval processes to ensure quality control across your team.",
    color: "bg-red-200",
  },
  {
    icon: <Clock className="h-6 w-6 text-white" />,
    title: "Auto-Publishing",
    description:
      "Schedule posts to automatically publish at optimal times for maximum engagement.",
    color: "bg-indigo-200",
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "User Roles & Permissions",
    description:
      "Manage access levels for team members and clients with granular controls.",
    color: "bg-teal-200",
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-white" />,
    title: "Media Library",
    description:
      "Centralized storage for all your media assets with easy organization and access.",
    color: "bg-pink-200",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    title: "Analytics & Reports",
    description:
      "Comprehensive analytics and reporting to track and improve your social media performance.",
    color: "bg-orange-200",
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center font-lexend text-3xl font-medium text-gray-900">
          Powerful Features for Modern Teams
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl text-black ${feature.color} p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black bg-opacity-20">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
