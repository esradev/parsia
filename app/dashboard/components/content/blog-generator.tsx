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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Copy, Download, RefreshCw } from "lucide-react";

const blogTypes = [
  { value: "howto", label: "راهنمای گام‌به‌گام" },
  { value: "listicle", label: "فهرست" },
  { value: "review", label: "بررسی" },
  { value: "news", label: "خبر" },
  { value: "opinion", label: "نظر" },
  { value: "tutorial", label: "آموزشی" },
];

export function BlogGenerator() {
  const [title, setTitle] = useState("");
  const [outline, setOutline] = useState("");
  const [blogType, setBlogType] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [keywords, setKeywords] = useState("");
  const [generatedBlog, setGeneratedBlog] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!title.trim()) return;

    setIsGenerating(true);

    setTimeout(() => {
      const sampleBlog = `# ${title}

## مقدمه

در دنیای پرشتاب امروز، ${title.toLowerCase()} موضوعی مهم است که شایسته توجه و بررسی می‌باشد. این مقاله راهنمای جامعی درباره این موضوع ارائه می‌دهد.

## نکات اصلی

### 1. اصول اولیه
${
  outline ||
  "ابتدا با اصول اولیه‌ای که هر فرد باید درباره این موضوع بداند شروع می‌کنیم."
}

### 2. استراتژی‌های پیشرفته
پس از درک اصول اولیه، می‌توانیم به سراغ استراتژی‌های پیشرفته‌تر و مؤثرتر برویم.

### 3. کاربرد عملی
بخش نظری مهم است اما کاربرد عملی تفاوت واقعی را رقم می‌زند.

### 4. بهترین روش‌ها
مجموعه‌ای از بهترین روش‌ها وجود دارد که رعایت آن‌ها موفقیت را تضمین می‌کند.

### 5. اشتباهات رایج
اجتناب از این اشتباهات رایج باعث صرفه‌جویی در زمان و انرژی شما خواهد شد.

## جمع‌بندی

در پایان، ${title.toLowerCase()} موضوعی پیچیده است که نیازمند درک عمیق و کاربرد عملی می‌باشد. با رعایت نکات و استراتژی‌های ذکر شده در این مقاله، در مسیر درست موفقیت قرار خواهید گرفت.

## منابع و مراجع

- منبع ۱: اطلاعات پایه درباره موضوع
- منبع ۲: مطالعات و تحقیقات تخصصی
- منبع ۳: تجربیات عملی و مطالعات موردی`;

      setGeneratedBlog(sampleBlog);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            تنظیمات مقاله
          </CardTitle>
          <CardDescription>جزئیات مقاله موردنظر را مشخص کنید</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-right block">
              عنوان مقاله
            </Label>
            <Input
              id="title"
              placeholder="مثال: راهنمای جامع بازاریابی دیجیتال"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-right"
              dir="rtl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="outline" className="text-right block">
              خطوط کلی (اختیاری)
            </Label>
            <Textarea
              id="outline"
              placeholder="نکات اصلی موردنظر برای پوشش در مقاله را بنویسید..."
              value={outline}
              onChange={(e) => setOutline(e.target.value)}
              className="min-h-[80px] text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block">نوع مقاله</Label>
              <Select value={blogType} onValueChange={setBlogType} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="نوع مقاله را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  {blogTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="audience" className="text-right block">
                مخاطب هدف
              </Label>
              <Input
                id="audience"
                placeholder="مثال: مبتدیان بازاریابی"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-right block">
              کلمات کلیدی
            </Label>
            <Input
              id="keywords"
              placeholder="کلمه۱، کلمه۲، کلمه۳"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="text-right"
              dir="rtl"
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!title.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                در حال تولید مقاله...
              </>
            ) : (
              <>
                <BookOpen className="ml-2 h-4 w-4" />
                تولید مقاله
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Blog */}
      <Card>
        <CardHeader className="text-right">
          <div className="flex items-center justify-between">
            <CardTitle>مقاله تولیدشده</CardTitle>
            {generatedBlog && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(generatedBlog)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <CardDescription>مقاله نهایی آماده انتشار است</CardDescription>
        </CardHeader>
        <CardContent>
          {generatedBlog ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">
                  {generatedBlog.split(" ").length} کلمه
                </Badge>
                <Badge variant="secondary">
                  {Math.ceil(generatedBlog.split(" ").length / 200)} دقیقه
                  مطالعه
                </Badge>
              </div>

              <Separator />

              <div className="prose prose-sm max-w-none text-right" dir="rtl">
                <div className="whitespace-pre-wrap leading-relaxed">
                  {generatedBlog}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>مقاله تولیدشده اینجا نمایش داده می‌شود</p>
              <p className="text-sm mt-1">
                فرم را پر کنید و روی "تولید مقاله" کلیک کنید
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
