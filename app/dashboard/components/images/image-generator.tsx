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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ImageIcon,
  Download,
  RefreshCw,
  Sparkles,
  Grid3X3,
  Palette,
} from "lucide-react";

const imageStyles = [
  {
    value: "realistic",
    label: "واقع‌گرایانه",
    description: "تصاویر واقعی با کیفیت بالا",
  },
  {
    value: "artistic",
    label: "هنری",
    description: "نقاشی‌ها و آثار هنری خلاقانه",
  },
  {
    value: "cartoon",
    label: "کارتونی",
    description: "تصاویر کارتونی و سرگرم‌کننده",
  },
  { value: "abstract", label: "انتزاعی", description: "هنر مدرن و انتزاعی" },
  { value: "vintage", label: "کلاسیک", description: "سبک قدیمی و نوستالژیک" },
  { value: "minimalist", label: "مینیمال", description: "طراحی ساده و تمیز" },
];

const aspectRatios = [
  { value: "1:1", label: "مربع (۱:۱)", width: 512, height: 512 },
  { value: "16:9", label: "عریض (۱۶:۹)", width: 768, height: 432 },
  { value: "9:16", label: "عمودی (۹:۱۶)", width: 432, height: 768 },
  { value: "4:3", label: "سنتی (۴:۳)", width: 640, height: 480 },
];

const generatedImages = [
  {
    id: "1",
    url: "/ai-landscape.png",
    prompt: "منظره طبیعی زیبا با کوه‌ها و دریاچه",
    style: "واقع‌گرایانه",
    timestamp: new Date(),
  },
  {
    id: "2",
    url: "/ai-portrait.png",
    prompt: "پرتره هنری از فردی با لباس سنتی",
    style: "هنری",
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: "3",
    url: "/ai-abstract-art.png",
    prompt: "طرح انتزاعی با رنگ‌های شاد",
    style: "انتزاعی",
    timestamp: new Date(Date.now() - 172800000),
  },
];

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("generate");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate image generation
    setTimeout(() => {
      setIsGenerating(false);
      setActiveTab("gallery");
    }, 3000);
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
      dir="rtl"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="generate">تولید تصویر</TabsTrigger>
        <TabsTrigger value="gallery">گالری تصاویر</TabsTrigger>
        <TabsTrigger value="styles">سبک‌ها</TabsTrigger>
      </TabsList>

      <TabsContent value="generate" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader className="text-right">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                تنظیمات تصویر
              </CardTitle>
              <CardDescription>
                تصویری که می‌خواهید تولید شود را توصیف کنید
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-right block">
                  توضیح تصویر
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="تصویری که می‌خواهید تولید شود را با جزئیات توصیف کنید..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] text-right"
                  dir="rtl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-right block">سبک هنری</Label>
                  <Select value={style} onValueChange={setStyle} dir="rtl">
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب سبک" />
                    </SelectTrigger>
                    <SelectContent>
                      {imageStyles.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          <div className="text-right">
                            <div className="font-medium">{s.label}</div>
                            <div className="text-xs text-muted-foreground">
                              {s.description}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-right block">نسبت تصویر</Label>
                  <Select
                    value={aspectRatio}
                    onValueChange={setAspectRatio}
                    dir="rtl"
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {aspectRatios.map((ratio) => (
                        <SelectItem key={ratio.value} value={ratio.value}>
                          {ratio.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="negative" className="text-right block">
                  موارد ناخواسته در تصویر (اختیاری)
                </Label>
                <Input
                  id="negative"
                  placeholder="مثال: تار، مخدوش، رنگ‌های کدر"
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  className="text-right"
                  dir="rtl"
                />
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
                    <ImageIcon className="ml-2 h-4 w-4" />
                    تولید تصویر
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Preview Area */}
          <Card>
            <CardHeader className="text-right">
              <CardTitle>پیش‌نمایش نتیجه</CardTitle>
              <CardDescription>
                تصویر تولید شده اینجا نمایش داده می‌شود
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isGenerating ? (
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      در حال تولید تصویر...
                    </p>
                  </div>
                </div>
              ) : (
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>تصویر تولید شده اینجا نمایش داده می‌شود</p>
                    <p className="text-sm mt-1">
                      فرم را پر کنید و روی "تولید تصویر" کلیک کنید
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="gallery" className="space-y-6">
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Grid3X3 className="h-5 w-5" />
              گالری تصاویر تولید شده
            </CardTitle>
            <CardDescription>
              تمام تصاویری که با هوش مصنوعی تولید کرده‌اید
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {generatedImages.map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.prompt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-right line-clamp-2">
                        {image.prompt}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {image.style}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {image.timestamp.toLocaleDateString("fa-IR")}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        <Download className="h-4 w-4 ml-1" />
                        دانلود
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="styles" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageStyles.map((style) => (
            <Card
              key={style.value}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-right">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{style.label}</CardTitle>
                    <CardDescription className="text-right">
                      {style.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-3">
                  <img
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${style.value} art style example`}
                    alt={`نمونه سبک ${style.label}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setStyle(style.value);
                    setActiveTab("generate");
                  }}
                >
                  استفاده از این سبک
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
