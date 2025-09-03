import { ChatInterface } from "../components/chat/chat-interface"
import { ChatSidebar } from "../components/chat/chat-sidebar"

export default function ChatPage() {
  return (
    <div className="flex h-full gap-4">
      <ChatSidebar />
      <div className="flex-1">
        <ChatInterface />
      </div>
    </div>
  )
}
