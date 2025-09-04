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
  Copy,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Hash,
} from "lucide-react";

const platforms = [
  { value: "instagram", label: "اینستاگرام", icon: Instagram, limit: 2200 },
  { value: "twitter", label: "توییتر", icon: Twitter, limit: 280 },
  { value: "facebook", label: "فیسبوک", icon: Facebook, limit: 63206 },
  { value: "linkedin", label: "لینکدین", icon: Linkedin, limit: 3000 },
];

const tones = [
  { value: "casual", label: "غیر رسمی" },
  { value: "professional", label: "حرفه‌ای" },
  { value: "funny", label: "طنز" },
  { value: "inspiring", label: "الهام‌بخش" },
  { value: "promotional", label: "تبلیغاتی" },
];

export function CaptionGenerator() {
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("");
  const [tone, setTone] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCaptions, setGeneratedCaptions] = useState<{
    [key: string]: string;
  }>({});

  const handleGenerate = async () => {
    if (!content.trim()) return;

    setIsGenerating(true);

    setTimeout(() => {
      const captions = {
        instagram: `🌟 ${content}

این یک نمونه کپشن برای اینستاگرام است که شامل ایموجی و هشتگ‌های مناسب می‌باشد.

✨ نکات کلیدی:
• نکته مهم اول
• نکته مهم دوم  
• نکته مهم سوم

#${hashtags.split("،").join(" #")} #محتوا #بازاریابی #اینستاگرام`,

        twitter: `${content}

کپشن کوتاه و تاثیرگذار برای توییتر 🚀

#${hashtags.split("،")[0]} #توییتر`,

        facebook: `${content}

این یک نمونه پست فیسبوک طولانی‌تر است که می‌تواند جزئیات بیشتر و یک داستان کامل را شامل شود.

پست فیسبوک می‌تواند اطلاعات مفصل، داستان‌های شخصی و لینک‌های خارجی داشته باشد.

#${hashtags.split("،").join(" #")}`,

        linkedin: `${content}

پست حرفه‌ای لینکدین که بر ارزش افزوده و تجربه حرفه‌ای تمرکز دارد.

ایده‌های اصلی:
→ ایده حرفه‌ای اول
→ ایده حرفه‌ای دوم
→ ایده حرفه‌ای سوم

نظر شما چیست؟ تجربیات خود را در کامنت‌ها به اشتراک بگذارید.

#${hashtags.split("،").join(" #")} #حرفه‌ای #لینکدین`,
      };

      setGeneratedCaptions(captions);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            تنظیمات کپشن
          </CardTitle>
          <CardDescription>
            کپشن‌های سفارشی برای شبکه‌های اجتماعی بسازید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="content" className="text-right block">
              محتوای اصلی
            </Label>
            <Textarea
              id="content"
              placeholder="ایده اصلی پست را بنویسید..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block">پلتفرم هدف</Label>
              <Select value={platform} onValueChange={setPlatform} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="پلتفرم را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((p) => {
                    const Icon = p.icon;
                    return (
                      <SelectItem key={p.value} value={p.value}>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {p.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-right block">لحن محتوا</Label>
              <Select value={tone} onValueChange={setTone} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="لحن را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hashtags" className="text-right block">
              هشتگ‌ها
            </Label>
            <Input
              id="hashtags"
              placeholder="هشتگ1، هشتگ2، هشتگ3"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="text-right"
              dir="rtl"
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!content.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? "در حال تولید..." : "تولید کپشن"}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Captions */}
      {Object.keys(generatedCaptions).length > 0 && (
        <Tabs defaultValue="instagram" className="w-full" dir="rtl">
          <TabsList className="grid w-full grid-cols-4">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <TabsTrigger
                  key={p.value}
                  value={p.value}
                  className="flex items-center gap-1"
                >
                  <Icon className="h-4 w-4" />
                  {p.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {platforms.map((p) => (
            <TabsContent key={p.value} value={p.value} className="space-y-4">
              <Card>
                <CardHeader className="text-right">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <p.icon className="h-5 w-5" />
                      {p.label}
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          generatedCaptions[p.value]
                        )
                      }
                    >
                      <Copy className="h-4 w-4 ml-1" />
                      کپی
                    </Button>
                  </div>
                  <CardDescription>
                    حداکثر مجاز: {p.limit.toLocaleString()} کاراکتر
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-4 bg-muted rounded-lg text-right">
                      <div
                        className="whitespace-pre-wrap leading-relaxed"
                        dir="rtl"
                      >
                        {generatedCaptions[p.value]}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="secondary">
                        {generatedCaptions[p.value].length} کاراکتر
                      </Badge>
                      <Badge
                        variant={
                          generatedCaptions[p.value].length > p.limit
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {generatedCaptions[p.value].length > p.limit
                          ? "بیشتر از حد مجاز"
                          : "در محدوده مجاز"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
