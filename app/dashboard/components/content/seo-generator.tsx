"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Search, TrendingUp, Target } from "lucide-react";

export function SEOGenerator() {
  const [topic, setTopic] = useState("");
  const [targetKeywords, setTargetKeywords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<{
    title: string;
    metaDescription: string;
    keywords: string[];
    headings: string[];
  }>({
    title: "",
    metaDescription: "",
    keywords: [],
    headings: [],
  });

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);

    setTimeout(() => {
      setResults({
        title: `${topic} - راهنمای جامع ۲۰۲۴ | بهترین نکات و استراتژی‌ها`,
        metaDescription: `همه چیز درباره ${topic} را کشف کنید. راهنمای جامع شامل بهترین روش‌ها و نکات عملی برای موفقیت در ${topic}.`,
        keywords: [
          topic,
          `${topic} ۲۰۲۴`,
          `راهنمای ${topic}`,
          `نکات ${topic}`,
          `استراتژی‌های ${topic}`,
          `بهترین ${topic}`,
        ],
        headings: [
          ` ${topic} چیست؟`,
          `اهمیت ${topic} در عصر حاضر`,
          `بهترین استراتژی‌های ${topic}`,
          `نکات عملی برای اجرای ${topic}`,
          `اشتباهات رایج در ${topic} و راه‌های جلوگیری`,
          `آینده ${topic}`,
        ],
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            تنظیمات سئو
          </CardTitle>
          <CardDescription>
            اطلاعات موضوع را وارد کنید تا محتوای بهینه شده برای موتورهای جستجو
            تولید شود
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-right block">
                موضوع اصلی
              </Label>
              <Input
                id="topic"
                placeholder="مثال: بازاریابی دیجیتال"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords" className="text-right block">
                کلمات کلیدی هدف
              </Label>
              <Input
                id="keywords"
                placeholder="کلمه۱، کلمه۲، کلمه۳"
                value={targetKeywords}
                onChange={(e) => setTargetKeywords(e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!topic.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? "در حال تولید..." : "تولید محتوای سئو"}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {results.title && (
        <Tabs defaultValue="title" className="w-full" dir="rtl">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="title">عنوان</TabsTrigger>
            <TabsTrigger value="meta">توضیحات</TabsTrigger>
            <TabsTrigger value="keywords">کلمات کلیدی</TabsTrigger>
            <TabsTrigger value="headings">عناوین فرعی</TabsTrigger>
          </TabsList>

          <TabsContent value="title" className="space-y-4">
            <Card>
              <CardHeader className="text-right">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  عنوان صفحه (Title Tag)
                </CardTitle>
                <CardDescription>
                  عنوانی که در نتایج جستجو نمایش داده می‌شود
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg text-right">
                    <p className="font-medium">{results.title}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {results.title.length} کاراکتر
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        navigator.clipboard.writeText(results.title)
                      }
                    >
                      <Copy className="h-4 w-4 ml-1" />
                      کپی
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meta" className="space-y-4">
            <Card>
              <CardHeader className="text-right">
                <CardTitle>توضیحات متا (Meta Description)</CardTitle>
                <CardDescription>
                  توضیحی که زیر عنوان در نتایج جستجو نمایش داده می‌شود
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg text-right">
                    <p>{results.metaDescription}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {results.metaDescription.length} کاراکتر
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        navigator.clipboard.writeText(results.metaDescription)
                      }
                    >
                      <Copy className="h-4 w-4 ml-1" />
                      کپی
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keywords" className="space-y-4">
            <Card>
              <CardHeader className="text-right">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  کلمات کلیدی پیشنهادی
                </CardTitle>
                <CardDescription>
                  کلمات کلیدی بهینه شده برای موتورهای جستجو
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-end">
                  {results.keywords.map((keyword, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="headings" className="space-y-4">
            <Card>
              <CardHeader className="text-right">
                <CardTitle>عناوین فرعی پیشنهادی</CardTitle>
                <CardDescription>ساختار عناوین برای بهبود سئو</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.headings.map((heading, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <div className="text-right flex-1">
                        <span className="font-medium">H{index + 2}</span>
                        <p className="mt-1">{heading}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(heading)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
