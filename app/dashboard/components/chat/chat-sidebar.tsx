"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  MessageSquare,
  MoreVertical,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  isActive: boolean;
}

export function ChatSidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "کمک در نوشتن محتوا",
      lastMessage: "ممنون بابت کمکت",
      timestamp: new Date(),
      isActive: true,
    },
    {
      id: "2",
      title: "سوالات درباره بازاریابی",
      lastMessage: "بهترین استراتژی‌های بازاریابی چیست؟",
      timestamp: new Date(Date.now() - 86400000),
      isActive: false,
    },
    {
      id: "3",
      title: "ترجمه متون",
      lastMessage: "می‌توانم در ترجمه کمک کنم",
      timestamp: new Date(Date.now() - 172800000),
      isActive: false,
    },
  ]);

  const filteredSessions = sessions.filter((session) =>
    session.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="w-80 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-right">گفتگوها</h2>
          <Button size="sm">
            <Plus className="h-4 w-4 ml-1" />
            گفتگوی جدید
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="جستجو در گفتگوها..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10 text-right"
            dir="rtl"
          />
        </div>
      </div>

      {/* Chat Sessions */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-accent ${
                session.isActive ? "bg-accent" : ""
              }`}
            >
              <MessageSquare className="h-4 w-4 text-muted-foreground shrink-0" />

              <div className="flex-1 min-w-0 text-right">
                <h3 className="font-medium text-sm truncate">
                  {session.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {session.lastMessage}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {session.timestamp.toLocaleDateString("fa-IR")}
                </p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
                  >
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-right">
                    <Trash2 className="ml-2 h-4 w-4" />
                    حذف گفتگو
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
