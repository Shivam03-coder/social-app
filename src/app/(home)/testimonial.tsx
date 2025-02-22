import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const userReviews = [
  {
    name: "Nichole T.",
    role: "Consultant",
    review:
      "I love that it's easy for people to navigate the workspaces. My clients can approve and leave comments without thinking about it. It was easy to get started with the workspaces and onboard my clients. I use this daily and my team loves it!",
    image: "/nichole.png",
  },
  {
    name: "John D.",
    role: "Product Manager",
    review:
      "This tool has streamlined my workflow. The approval process is seamless, and my team finds it very intuitive. A must-have for professionals!",
    image: "/john.png",
  },
  {
    name: "Sarah M.",
    role: "Marketing Specialist",
    review:
      "The AI-driven analytics have been a game changer for our campaigns. The insights are clear and actionable!",
    image: "/sarah.png",
  },
  {
    name: "Alex P.",
    role: "Software Engineer",
    review:
      "I love the automation features! They save me hours of manual work every week. Highly recommended.",
    image: "/alex.png",
  },
  {
    name: "Emma R.",
    role: "UI/UX Designer",
    review:
      "A clean and intuitive interface makes my job easier. The design system is very well thought out.",
    image: "/emma.png",
  },
  {
    name: "David L.",
    role: "Entrepreneur",
    review:
      "This platform has made managing my team so much easier. I can track everything in one place.",
    image: "/david.png",
  },
  {
    name: "Sophia W.",
    role: "HR Manager",
    review:
      "The onboarding experience is smooth and efficient. Employees love using it!",
    image: "/sophia.png",
  },
  {
    name: "Liam T.",
    role: "Project Manager",
    review:
      "Great for task management and collaboration. Our productivity has significantly improved!",
    image: "/liam.png",
  },
  {
    name: "Olivia H.",
    role: "Finance Analyst",
    review:
      "Financial reporting is now so much faster. The AI-powered insights are fantastic.",
    image: "/olivia.png",
  },
  {
    name: "Ethan C.",
    role: "Operations Manager",
    review:
      "Managing logistics and workflows has never been easier. The automation tools are a blessing.",
    image: "/ethan.png",
  },
  {
    name: "Mia K.",
    role: "Sales Executive",
    review:
      "I can track leads, manage customer interactions, and close deals faster than ever!",
    image: "/mia.png",
  },
  {
    name: "Noah B.",
    role: "Customer Success Manager",
    review:
      "Client communication has improved drastically. Love the integrations with our CRM!",
    image: "/noah.png",
  },
  {
    name: "Ava J.",
    role: "Tech Lead",
    review:
      "Scalability and performance are top-notch. Our development team loves the seamless API integrations.",
    image: "/ava.png",
  },
];
const colors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-orange-100",
  "bg-teal-100",
];
const TestimonialCarousel = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-16 bg-gradient-to-r from-blue-600 via-black to-blue-600 bg-clip-text text-center font-lexend text-3xl font-medium text-gray-900 text-transparent">
        Empowering Teams with Seamless Collaboration & Smart Automation
      </h2>
      <div className="mx-auto grid place-items-center lg:grid-cols-2">
        <h1 className="bg-gradient-to-r from-blue-600 via-black to-blue-600 bg-clip-text text-transparent">
          <AvatarCircle />
          So easy it barely needs support but when it does it’s great
        </h1>
        <Carousel className="mx-auto w-full max-w-2xl">
          <CarouselContent>
            {userReviews.map((user, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center p-2">
                  <Card
                    className={`h-auto w-full max-w-[400px] rounded-3xl border border-gray-200 p-6 shadow-lg transition-shadow hover:shadow-xl ${colors[index % colors.length]}`}
                  >
                    <CardContent className="flex flex-col min-h-[300px] text-left">
                      <h3 className="mb-4 text-sm tracking-wide text-gray-400">
                        NDCONSULTING
                      </h3>
                      <div className="flex flex-col gap-2">
                        <span className="text-4xl font-bold text-purple-500">
                          “
                        </span>
                        <h2 className="text-xl font-semibold text-gray-900">
                          Great tool for my staff and my clients
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                          {user.review}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-3">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-500">{user.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

function AvatarCircle() {
  return <AvatarCircles numPeople={99} avatarUrls={avatars} />;
}
