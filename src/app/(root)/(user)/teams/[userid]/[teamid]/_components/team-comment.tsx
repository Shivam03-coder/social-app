"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AtSign, MessageCircle, Paperclip, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

function TeamComment() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          text: newMessage,
          sender: "You",
          timestamp: new Date(),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-background min-h-screen p-4 md:p-8">
      <Card className="mx-auto flex h-[80vh] max-w-4xl flex-col">
        <div className="border-b p-4">
          <div className="flex items-center gap-2">
            <MessageCircle className="text-primary h-5 w-5" />
            <h1 className="text-xl font-semibold">Chat</h1>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === "You" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${message.sender}`}
                  />
                  <AvatarFallback>
                    {message.sender.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`flex flex-col ${
                    message.sender === "You" ? "items-end" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {message.sender}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <div
                    className={`mt-1 rounded-lg p-3 ${
                      message.sender === "You"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              className="flex-1"
            />
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <AtSign className="h-5 w-5" />
            </Button>
            <Button onClick={handleSendMessage}>
              <Send className="mr-2 h-5 w-5" />
              Send
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default TeamComment;
