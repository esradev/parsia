"use client";

import { useState, useCallback } from "react";

export interface AIFeature {
  id: string;
  name: string;
  description: string;
  category: "chat" | "content" | "image" | "audio";
  isActive: boolean;
  usageCount: number;
  lastUsed?: Date;
}

export function useAIFeatures() {
  const [features] = useState<AIFeature[]>([
    {
      id: "chat-assistant",
      name: "دستیار هوشمند",
      description: "گفتگوهای هوشمند و کمک فوری",
      category: "chat",
      isActive: true,
      usageCount: 45,
      lastUsed: new Date(),
    },
    {
      id: "content-generator",
      name: "تولیدکننده محتوا",
      description: "ایجاد محتوای بازاریابی و مقالات",
      category: "content",
      isActive: true,
      usageCount: 23,
      lastUsed: new Date(Date.now() - 86400000),
    },
    {
      id: "image-generator",
      name: "تولیدکننده تصویر",
      description: "ایجاد تصاویر هنری با هوش مصنوعی",
      category: "image",
      isActive: true,
      usageCount: 12,
      lastUsed: new Date(Date.now() - 172800000),
    },
    {
      id: "audio-tools",
      name: "ابزارهای صوتی",
      description: "تبدیل متن به صدا و بالعکس",
      category: "audio",
      isActive: false,
      usageCount: 0,
    },
  ]);

  const getFeaturesByCategory = useCallback(
    (category: AIFeature["category"]) => {
      return features.filter((feature) => feature.category === category);
    },
    [features]
  );

  const getActiveFeatures = useCallback(() => {
    return features.filter((feature) => feature.isActive);
  }, [features]);

  return {
    features,
    getFeaturesByCategory,
    getActiveFeatures,
  };
}
