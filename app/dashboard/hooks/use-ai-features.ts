"use client"

import { useState, useCallback } from "react"

export interface AIFeature {
  id: string
  name: string
  description: string
  category: "chat" | "content" | "image" | "audio"
  isActive: boolean
  usageCount: number
  lastUsed?: Date
}

export function useAIFeatures() {
  const [features] = useState<AIFeature[]>([
    {
      id: "chat-assistant",
      name: "المساعد الذكي",
      description: "محادثات ذكية ومساعدة فورية",
      category: "chat",
      isActive: true,
      usageCount: 45,
      lastUsed: new Date(),
    },
    {
      id: "content-generator",
      name: "مولد المحتوى",
      description: "إنشاء محتوى تسويقي ومقالات",
      category: "content",
      isActive: true,
      usageCount: 23,
      lastUsed: new Date(Date.now() - 86400000),
    },
    {
      id: "image-generator",
      name: "مولد الصور",
      description: "إنشاء صور فنية بالذكاء الاصطناعي",
      category: "image",
      isActive: true,
      usageCount: 12,
      lastUsed: new Date(Date.now() - 172800000),
    },
    {
      id: "audio-tools",
      name: "أدوات الصوت",
      description: "تحويل النص لصوت والعكس",
      category: "audio",
      isActive: false,
      usageCount: 0,
    },
  ])

  const getFeaturesByCategory = useCallback(
    (category: AIFeature["category"]) => {
      return features.filter((feature) => feature.category === category)
    },
    [features],
  )

  const getActiveFeatures = useCallback(() => {
    return features.filter((feature) => feature.isActive)
  }, [features])

  return {
    features,
    getFeaturesByCategory,
    getActiveFeatures,
  }
}
