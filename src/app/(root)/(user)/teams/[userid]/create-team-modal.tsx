import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Upload, Send } from "lucide-react";

interface CreateTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (teamData: { name: string; image: string; emails: string[] }) => void;
}

const CreateTeamModal: React.FC<CreateTeamModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [teamName, setTeamName] = useState("");
  const [teamImage, setTeamImage] = useState("");
  const [inviteEmails, setInviteEmails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: teamName,
      image: teamImage,
      emails: inviteEmails.split(",").map((email) => email.trim()),
    });
    setTeamName("");
    setTeamImage("");
    setInviteEmails("");
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] bg-white rounded-l-xl">
        <SheetHeader>
          <SheetTitle>Create New Team</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Team Name</label>
            <Input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Team Image URL</label>
            <div className="flex gap-2">
              <Input
                type="url"
                value={teamImage}
                onChange={(e) => setTeamImage(e.target.value)}
                required
              />
              <Button type="button" variant="outline" size="icon">
                <Upload size={20} />
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Invite Team Members (comma-separated emails)
            </label>
            <Textarea
              value={inviteEmails}
              onChange={(e) => setInviteEmails(e.target.value)}
              rows={3}
              placeholder="email1@example.com, email2@example.com"
            />
          </div>

          <SheetFooter className="flex justify-end space-x-2 mt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              <X size={20} /> Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
              <Send size={20} /> Create Team & Send Invites
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTeamModal;
