import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PersonStandingIcon, Users } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

interface TeamCardProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  members: TeamMember[];
  onViewTeam?: (teamId: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  id,
  name,
  description,
  logo,
  members,
  onViewTeam,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/teams/12345678/${id}`}>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative overflow-hidden rounded-[30px] border-none bg-pink-100 shadow-lg transition-all duration-300 hover:-translate-y-2"
      >
        {/* Team Logo */}
        <div className="h-32 overflow-hidden">
          <img
            src={logo}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <CardContent className="p-6">
          {/* Team Name */}
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="mb-4 text-sm text-gray-500">{description}</p>

          {/* Team Members */}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2 overflow-hidden">
              {members.slice(0, 4).map((member) => (
                <Avatar key={member.id} className="h-8 w-8 ring-2 ring-white">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              {members.length > 4 && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium ring-2 ring-white">
                  +{members.length - 4}
                </div>
              )}
            </div>
            <span className="flex gap-x-2 text-base text-gray-900">
              <PersonStandingIcon /> {members.length} members
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TeamCard;
