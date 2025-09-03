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

// Example data
const prompts = [
  {
    id: 1,
    title: "Prompt One",
    category: "Writing",
    text: "Write a story about...",
  },
  {
    id: 2,
    title: "Prompt Two",
    category: "Coding",
    text: "Create a function that...",
  },
  {
    id: 3,
    title: "Prompt Three",
    category: "Writing",
    text: "Describe your favorite...",
  },
];

// Extract unique categories
const categories = Array.from(new Set(prompts.map((p) => p.category)));

export default function PromptsPage() {
  const [category, setCategory] = useState("all");

  const filteredPrompts = useMemo(() => {
    if (category === "all") return prompts;
    return prompts.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Prompts</h1>
      <div className="mb-8 flex items-center gap-4">
        <label htmlFor="category" className="font-medium">
          Filter by category:
        </label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-40" id="category">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
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
