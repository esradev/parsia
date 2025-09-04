"use client";

import { useState, useCallback } from "react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "سلام! من دستیار هوشمند شما هستم. می‌توانم در نوشتن محتوا، پاسخ به سوالات، ترجمه و موارد دیگر به شما کمک کنم. امروز چگونه می‌توانم به شما کمک کنم؟",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const deleteMessage = useCallback((messageId: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
  }, []);

  return {
    messages,
    isLoading,
    addMessage,
    clearMessages,
    deleteMessage,
    setIsLoading,
  };
}
