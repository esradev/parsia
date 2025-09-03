"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Mic, Paperclip, MoreVertical } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { useChatMessages } from "../../hooks/use-chat-messages"

export function ChatInterface() {
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const { messages, addMessage, isLoading } = useChatMessages()
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      role: "user" as const,
      timestamp: new Date(),
    }

    addMessage(userMessage)
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: `شكراً لك على سؤالك: "${input}". هذا مثال على رد الذكاء الاصطناعي. يمكنني مساعدتك في مختلف المهام مثل كتابة المحتوى، الترجمة، والإجابة على الأسئلة.`,
        role: "assistant" as const,
        timestamp: new Date(),
      }
      addMessage(aiMessage)
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages, isTyping])

  return (
    <Card className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/ai-assistant-avatar.png" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="text-right">
            <h3 className="font-semibold">المساعد الذكي</h3>
            <p className="text-sm text-muted-foreground">متصل الآن</p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <p className="text-lg mb-2">مرحباً! كيف يمكنني مساعدتك اليوم؟</p>
              <p className="text-sm">ابدأ محادثة جديدة بكتابة رسالتك أدناه</p>
            </div>
          )}

          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/ai-assistant-avatar.png" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t">
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب رسالتك هنا..."
              className="pr-12 text-right resize-none"
              dir="rtl"
              disabled={isLoading}
            />
            <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
              <Paperclip className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="ghost" size="sm">
            <Mic className="h-4 w-4" />
          </Button>

          <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-2 text-right">اضغط Enter للإرسال، Shift+Enter لسطر جديد</p>
      </div>
    </Card>
  )
}
