"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface DashboardContextType {
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
  currentUser: {
    name: string
    email: string
    avatar?: string
    subscription: "free" | "pro" | "enterprise"
  } | null
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentUser] = useState({
    name: "أحمد محمد",
    email: "ahmed@example.com",
    subscription: "pro" as const,
  })

  return (
    <DashboardContext.Provider
      value={{
        sidebarCollapsed,
        setSidebarCollapsed,
        currentUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
