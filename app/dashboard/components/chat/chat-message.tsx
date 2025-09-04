"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
  };

  return (
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {isUser ? (
          <>
            <AvatarImage src="/diverse-user-avatars.png" />
            <AvatarFallback>کاربر</AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage src="/ai-assistant-avatar.png" />
            <AvatarFallback>دستیار</AvatarFallback>
          </>
        )}
      </Avatar>

      <div
        className={cn("flex flex-col gap-1 max-w-[80%]", isUser && "items-end")}
      >
        <div
          className={cn(
            "rounded-lg p-3 text-sm leading-relaxed",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground"
          )}
        >
          <p
            className={cn(
              "whitespace-pre-wrap",
              isUser ? "text-right" : "text-right"
            )}
            dir="rtl"
          >
            {message.content}
          </p>
        </div>

        <div
          className={cn(
            "flex items-center gap-1 text-xs text-muted-foreground",
            isUser && "flex-row-reverse"
          )}
        >
          <span>
            {message.timestamp.toLocaleTimeString("fa-IR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>

          {!isUser && (
            <div className="flex items-center gap-1 mr-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={handleCopy}
                title="کپی"
              >
                <Copy className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                title="مفید بود"
              >
                <ThumbsUp className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                title="مفید نبود"
              >
                <ThumbsDown className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                title="دوباره تولید کن"
              >
                <RotateCcw className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
