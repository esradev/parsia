"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Instagram, Twitter, Facebook, Linkedin, Hash } from "lucide-react"

const platforms = [
  { value: "instagram", label: "إنستغرام", icon: Instagram, limit: 2200 },
  { value: "twitter", label: "تويتر", icon: Twitter, limit: 280 },
  { value: "facebook", label: "فيسبوك", icon: Facebook, limit: 63206 },
  { value: "linkedin", label: "لينكد إن", icon: Linkedin, limit: 3000 },
]

const tones = [
  { value: "casual", label: "غير رسمي" },
  { value: "professional", label: "مهني" },
  { value: "funny", label: "مرح" },
  { value: "inspiring", label: "ملهم" },
  { value: "promotional", label: "ترويجي" },
]

export function CaptionGenerator() {
  const [content, setContent] = useState("")
  const [platform, setPlatform] = useState("")
  const [tone, setTone] = useState("")
  const [hashtags, setHashtags] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCaptions, setGeneratedCaptions] = useState<{ [key: string]: string }>({})

  const handleGenerate = async () => {
    if (!content.trim()) return

    setIsGenerating(true)

    setTimeout(() => {
      const captions = {
        instagram: `🌟 ${content}

هذا مثال على تسمية توضيحية لإنستغرام تتضمن رموز تعبيرية وهاشتاغات مناسبة.

✨ النقاط الرئيسية:
• نقطة مهمة أولى
• نقطة مهمة ثانية  
• نقطة مهمة ثالثة

#${hashtags.split("،").join(" #")} #محتوى #تسويق #إنستغرام`,

        twitter: `${content}

تسمية توضيحية مختصرة ومؤثرة لتويتر 🚀

#${hashtags.split("،")[0]} #تويتر`,

        facebook: `${content}

هذا مثال على منشور فيسبوك أطول يمكن أن يتضمن تفاصيل أكثر وقصة كاملة.

يمكن أن يحتوي منشور فيسبوك على معلومات مفصلة، قصص شخصية، وروابط خارجية.

#${hashtags.split("،").join(" #")}`,

        linkedin: `${content}

منشور لينكد إن مهني يركز على القيمة المضافة والخبرة المهنية.

الأفكار الرئيسية:
→ فكرة مهنية أولى
→ فكرة مهنية ثانية
→ فكرة مهنية ثالثة

ما رأيكم؟ شاركوا تجاربكم في التعليقات.

#${hashtags.split("،").join(" #")} #مهني #لينكد_إن`,
      }

      setGeneratedCaptions(captions)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            إعدادات التسمية التوضيحية
          </CardTitle>
          <CardDescription>أنشئ تسميات توضيحية مخصصة لمنصات التواصل الاجتماعي</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="content" className="text-right block">
              المحتوى الأساسي
            </Label>
            <Textarea
              id="content"
              placeholder="اكتب الفكرة الرئيسية للمنشور..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block">المنصة المستهدفة</Label>
              <Select value={platform} onValueChange={setPlatform} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="اختر المنصة" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((p) => {
                    const Icon = p.icon
                    return (
                      <SelectItem key={p.value} value={p.value}>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {p.label}
                        </div>
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-right block">نبرة المحتوى</Label>
              <Select value={tone} onValueChange={setTone} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="اختر النبرة" />
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
              الهاشتاغات
            </Label>
            <Input
              id="hashtags"
              placeholder="هاشتاغ1، هاشتاغ2، هاشتاغ3"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="text-right"
              dir="rtl"
            />
          </div>

          <Button onClick={handleGenerate} disabled={!content.trim() || isGenerating} className="w-full">
            {isGenerating ? "جاري الإنتاج..." : "إنتاج التسميات التوضيحية"}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Captions */}
      {Object.keys(generatedCaptions).length > 0 && (
        <Tabs defaultValue="instagram" className="w-full" dir="rtl">
          <TabsList className="grid w-full grid-cols-4">
            {platforms.map((p) => {
              const Icon = p.icon
              return (
                <TabsTrigger key={p.value} value={p.value} className="flex items-center gap-1">
                  <Icon className="h-4 w-4" />
                  {p.label}
                </TabsTrigger>
              )
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
                      onClick={() => navigator.clipboard.writeText(generatedCaptions[p.value])}
                    >
                      <Copy className="h-4 w-4 ml-1" />
                      نسخ
                    </Button>
                  </div>
                  <CardDescription>الحد الأقصى: {p.limit.toLocaleString()} حرف</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-4 bg-muted rounded-lg text-right">
                      <div className="whitespace-pre-wrap leading-relaxed" dir="rtl">
                        {generatedCaptions[p.value]}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="secondary">{generatedCaptions[p.value].length} حرف</Badge>
                      <Badge variant={generatedCaptions[p.value].length > p.limit ? "destructive" : "secondary"}>
                        {generatedCaptions[p.value].length > p.limit ? "يتجاوز الحد المسموح" : "ضمن الحد المسموح"}
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
  )
}
