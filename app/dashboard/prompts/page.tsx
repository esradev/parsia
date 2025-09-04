"use client";
import React, { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// داده‌های نمونه با ترجمه فارسی و چند پرامپت بیشتر
const prompts = [
  {
    id: 1,
    title: "پرومپت یک",
    category: "نوشتن",
    text: "یک داستان درباره ... بنویسید.",
  },
  {
    id: 2,
    title: "پرومپت دو",
    category: "برنامه‌نویسی",
    text: "یک تابع ایجاد کنید که ...",
  },
  {
    id: 3,
    title: "پرومپت سه",
    category: "نوشتن",
    text: "مورد علاقه خود را توصیف کنید ...",
  },
  {
    id: 4,
    title: "پرومپت چهار",
    category: "برنامه‌نویسی",
    text: "یک الگوریتم مرتب‌سازی بنویسید.",
  },
  {
    id: 5,
    title: "پرومپت پنج",
    category: "طراحی",
    text: "یک لوگو برای یک شرکت فناوری طراحی کنید.",
  },
  {
    id: 6,
    title: "پرومپت شش",
    category: "نوشتن",
    text: "یک نامه رسمی به مدیر خود بنویسید.",
  },
  {
    id: 7,
    title: "پرومپت هفت",
    category: "برنامه‌نویسی",
    text: "یک برنامه برای محاسبه مجموع اعداد بنویسید.",
  },
  {
    id: 8,
    title: "پرومپت هشت",
    category: "طراحی",
    text: "یک پوستر برای رویداد فرهنگی طراحی کنید.",
  },
];

// استخراج دسته‌بندی‌های یکتا
const categories = Array.from(new Set(prompts.map((p) => p.category)));

export default function PromptsPage() {
  const [category, setCategory] = useState("all");

  const filteredPrompts = useMemo(() => {
    if (category === "all") return prompts;
    return prompts.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">پرومپت‌ها</h1>
      <div className="mb-8 flex items-center gap-4">
        <label htmlFor="category" className="font-medium">
          فیلتر بر اساس دسته‌بندی:
        </label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-40" id="category">
            <SelectValue placeholder="همه" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">همه</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-6">
        {filteredPrompts.map((prompt) => (
          <Card key={prompt.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">{prompt.title}</CardTitle>
              <Badge variant="secondary">{prompt.category}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{prompt.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
