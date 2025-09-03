"use client"

import { useState, useCallback } from "react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "مرحباً! أنا مساعدك الذكي. يمكنني مساعدتك في كتابة المحتوى، الإجابة على الأسئلة، الترجمة، وأكثر من ذلك. كيف يمكنني مساعدتك اليوم؟",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message])
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([])
  }, [])

  const deleteMessage = useCallback((messageId: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== messageId))
  }, [])

  return {
    messages,
    isLoading,
    addMessage,
    clearMessages,
    deleteMessage,
    setIsLoading,
  }
}
