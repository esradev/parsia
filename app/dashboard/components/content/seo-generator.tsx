"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Search, TrendingUp, Target } from "lucide-react"

export function SEOGenerator() {
  const [topic, setTopic] = useState("")
  const [targetKeywords, setTargetKeywords] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [results, setResults] = useState({
    title: "",
    metaDescription: "",
    keywords: [],
    headings: [],
  })

  const handleGenerate = async () => {
    if (!topic.trim()) return

    setIsGenerating(true)

    setTimeout(() => {
      setResults({
        title: `${topic} - دليل شامل 2024 | أفضل النصائح والاستراتيجيات`,
        metaDescription: `اكتشف كل ما تحتاج لمعرفته عن ${topic}. دليل شامل يتضمن أفضل الممارسات والنصائح العملية لتحقيق النجاح في ${topic}.`,
        keywords: [topic, `${topic} 2024`, `دليل ${topic}`, `نصائح ${topic}`, `استراتيجيات ${topic}`, `أفضل ${topic}`],
        headings: [
          `ما هو ${topic}؟`,
          `أهمية ${topic} في العصر الحديث`,
          `أفضل استراتيجيات ${topic}`,
          `نصائح عملية لتطبيق ${topic}`,
          `أخطاء شائعة في ${topic} وكيفية تجنبها`,
          `مستقبل ${topic}`,
        ],
      })
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            إعدادات SEO
          </CardTitle>
          <CardDescription>أدخل معلومات الموضوع لإنتاج محتوى محسن لمحركات البحث</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-right block">
                الموضوع الرئيسي
              </Label>
              <Input
                id="topic"
                placeholder="مثال: التسويق الرقمي"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords" className="text-right block">
                الكلمات المفتاحية المستهدفة
              </Label>
              <Input
                id="keywords"
                placeholder="كلمة1، كلمة2، كلمة3"
                value={targetKeywords}
                onChange={(e) => setTargetKeywords(e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>
          </div>

          <Button onClick={handleGenerate} disabled={!topic.trim() || isGenerating} className="w-full">
            {isGenerating ? "جاري الإنتاج..." : "إنتاج محتوى SEO"}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {results.title && (
        <Tabs defaultValue="title" className="w-full" dir="rtl">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="title">العنوان</TabsTrigger>
            <TabsTrigger value="meta">الوصف</TabsTrigger>
            <TabsTrigger value="keywords">الكلمات المفتاحية</TabsTrigger>
            <TabsTrigger value="headings">العناوين الفرعية</TabsTrigger>
          </TabsList>

          <TabsContent value="title" className="space-y-4">
            <Card>
              <CardHeader className="text-right">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  عنوان الصفحة (Title Tag)
                </CardTitle>
                <CardDescription>العنوان الذي سيظهر في نتائج البحث</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg text-right">
                    <p className="font-medium">{results.title}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{results.title.length} حرف</Badge>
                    <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(results.title)}>
                      <Copy className="h-4 w-4 ml-1" />
                      نسخ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meta" className="space-y-4">
            <Card>
              <CardHeader className="text-right">
                <CardTitle>وصف الميتا (Meta Description)</CardTitle>
                <CardDescription>الوصف الذي سيظهر تحت العنوان في نتائج البحث</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg text-right">
                    <p>{results.metaDescription}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{results.metaDescription.length} حرف</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(results.metaDescription)}
                    >
                      <Copy className="h-4 w-4 ml-1" />
                      نسخ
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
                  الكلمات المفتاحية المقترحة
                </CardTitle>
                <CardDescription>كلمات مفتاحية محسنة لمحركات البحث</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-end">
                  {results.keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-accent">
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
                <CardTitle>العناوين الفرعية المقترحة</CardTitle>
                <CardDescription>هيكل العناوين لتحسين SEO</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.headings.map((heading, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="text-right flex-1">
                        <span className="font-medium">H{index + 2}</span>
                        <p className="mt-1">{heading}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(heading)}>
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
  )
}
