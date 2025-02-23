"use client";
import React, { useState } from "react";
import { Plus, Users, Sparkles, ArrowRight } from "lucide-react";
import CreateTeamModal from "./create-team-modal";
import TeamCard from "./team-card";
import Header from "./header";

export const mockTeams = [
  {
    id: "1",
    name: "Design Team",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60",
    description: "Crafting beautiful user experiences and visual designs",
    members: [
      {
        id: "1",
        name: "John Doe",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
        role: "Lead Designer",
      },
      {
        id: "2",
        name: "Jane Smith",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
        role: "UI Designer",
      },
    ],
  },
  {
    id: "2",
    name: "Development Team",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    description: "Building robust and scalable applications",
    members: [
      {
        id: "3",
        name: "Mike Johnson",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
        role: "Senior Developer",
      },
      {
        id: "4",
        name: "Sarah Williams",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
        role: "Frontend Developer",
      },
    ],
  },
];

const TeamsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teams, setTeams] = useState(mockTeams);
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

  const handleCreateTeam = (teamData: {
    name: string;
    image: string;
    emails: string[];
  }) => {
    const newTeam = {
      id: String(teams.length + 1),
      name: teamData.name,
      logo: teamData.image,
      description: "A new team ready to achieve great things",
      members: [],
    };

    setTeams([...teams, newTeam]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header Section */}
      <Header />

      <div className="mx-auto max-w-7xl">
        {/* Teams Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Create Team Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative transform cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-purple-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 transition-transform group-hover:scale-110">
                <Plus className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Create New Team
              </h3>
              <p className="mb-4 text-center text-gray-500">
                Start a new collaboration space for your next big project
              </p>
              <span className="inline-flex items-center font-medium text-purple-600">
                Get Started{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>

          {/* Team Cards */}
          {teams.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>

        <CreateTeamModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateTeam}
        />
      </div>
    </div>
  );
};

export default TeamsPage;
