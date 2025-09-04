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
import { Copy, Download, RefreshCw, Sparkles } from "lucide-react";

const textTypes = [
  { value: "marketing", label: "متن بازاریابی" },
  { value: "product", label: "توضیح محصول" },
  { value: "email", label: "ایمیل" },
  { value: "ad", label: "تبلیغ" },
  { value: "press", label: "بیانیه مطبوعاتی" },
];

const tones = [
  { value: "professional", label: "حرفه‌ای" },
  { value: "friendly", label: "دوستانه" },
  { value: "persuasive", label: "متقاعدکننده" },
  { value: "casual", label: "غیررسمی" },
  { value: "formal", label: "رسمی" },
];

export function TextGenerator() {
  const [prompt, setPrompt] = useState("");
  const [textType, setTextType] = useState("");
  const [tone, setTone] = useState("");
  const [targetLength, setTargetLength] = useState("medium");
  const [keywords, setKeywords] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI text generation
    setTimeout(() => {
      const sampleText = `این یک متن نمونه است که براساس درخواست شما تولید شده است: "${prompt}".

هوش مصنوعی می‌تواند محتوای باکیفیت و متناسب با نیازهای خاص شما تولید کند. چه به متن بازاریابی، توضیح محصول یا هر نوع متن دیگری نیاز داشته باشید.

ویژگی‌های اصلی:
• محتوای سفارشی براساس درخواست شما
• لحن مناسب برای مخاطب هدف
• بهینه‌سازی برای کلمات کلیدی
• کیفیت بالا و محتوای اصیل

این محتوا آماده استفاده است و می‌توانید آن را براساس نیاز خود ویرایش کنید.`;

      setGeneratedText(sampleText);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle>تنظیمات متن</CardTitle>
          <CardDescription>
            مشخصات متن موردنظر خود را انتخاب کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt" className="text-right block">
              توضیح محتوای موردنظر
            </Label>
            <Textarea
              id="prompt"
              placeholder="توضیح کامل درباره محتوایی که می‌خواهید تولید شود را بنویسید..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block">نوع متن</Label>
              <Select value={textType} onValueChange={setTextType} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="نوع متن را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  {textTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-right block">لحن نوشتار</Label>
              <Select value={tone} onValueChange={setTone} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="لحن را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((toneOption) => (
                    <SelectItem key={toneOption.value} value={toneOption.value}>
                      {toneOption.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-right block">
              کلمات کلیدی (اختیاری)
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

          <div className="space-y-2">
            <Label className="text-right block">طول متن</Label>
            <Select
              value={targetLength}
              onValueChange={setTargetLength}
              dir="rtl"
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">کوتاه (۵۰ تا ۱۰۰ کلمه)</SelectItem>
                <SelectItem value="medium">متوسط (۱۰۰ تا ۳۰۰ کلمه)</SelectItem>
                <SelectItem value="long">بلند (۳۰۰ تا ۵۰۰ کلمه)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                در حال تولید...
              </>
            ) : (
              <>
                <Sparkles className="ml-2 h-4 w-4" />
                تولید متن
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Content */}
      <Card>
        <CardHeader className="text-right">
          <div className="flex items-center justify-between">
            <CardTitle>متن تولید شده</CardTitle>
            {generatedText && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <CardDescription>نتیجه نهایی متن تولید شده</CardDescription>
        </CardHeader>
        <CardContent>
          {generatedText ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">
                  {generatedText.split(" ").length} کلمه
                </Badge>
                <Badge variant="secondary">{generatedText.length} حرف</Badge>
              </div>

              <Separator />

              <div className="prose prose-sm max-w-none text-right" dir="rtl">
                <div className="whitespace-pre-wrap leading-relaxed">
                  {generatedText}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>متن تولید شده اینجا نمایش داده می‌شود</p>
              <p className="text-sm mt-1">
                فرم را پر کنید و روی "تولید متن" کلیک کنید
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
