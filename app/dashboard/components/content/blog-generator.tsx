"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Copy, Download, RefreshCw } from "lucide-react"

const blogTypes = [
  { value: "howto", label: "دليل إرشادي" },
  { value: "listicle", label: "قائمة" },
  { value: "review", label: "مراجعة" },
  { value: "news", label: "خبر" },
  { value: "opinion", label: "رأي" },
  { value: "tutorial", label: "تعليمي" },
]

export function BlogGenerator() {
  const [title, setTitle] = useState("")
  const [outline, setOutline] = useState("")
  const [blogType, setBlogType] = useState("")
  const [targetAudience, setTargetAudience] = useState("")
  const [keywords, setKeywords] = useState("")
  const [generatedBlog, setGeneratedBlog] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!title.trim()) return

    setIsGenerating(true)

    setTimeout(() => {
      const sampleBlog = `# ${title}

## مقدمة

في عالم اليوم المتسارع، أصبح ${title.toLowerCase()} موضوعاً مهماً يستحق الاهتمام والدراسة. هذا المقال سيقدم لك دليلاً شاملاً حول هذا الموضوع.

## النقاط الرئيسية

### 1. الأساسيات
${outline || "سنبدأ بالأساسيات التي يجب على كل شخص معرفتها حول هذا الموضوع."}

### 2. الاستراتيجيات المتقدمة
بعد فهم الأساسيات، يمكننا الانتقال إلى الاستراتيجيات الأكثر تقدماً وفعالية.

### 3. التطبيق العملي
الجانب النظري مهم، لكن التطبيق العملي هو ما يحدث الفرق الحقيقي.

### 4. أفضل الممارسات
هناك مجموعة من أفضل الممارسات التي يجب اتباعها لضمان النجاح.

### 5. الأخطاء الشائعة
تجنب هذه الأخطاء الشائعة سيوفر عليك الكثير من الوقت والجهد.

## الخلاصة

في الختام، ${title.toLowerCase()} موضوع معقد يتطلب فهماً عميقاً وتطبيقاً عملياً. باتباع النصائح والاستراتيجيات المذكورة في هذا المقال، ستكون على الطريق الصحيح لتحقيق النجاح.

## المصادر والمراجع

- مصدر 1: معلومات أساسية حول الموضوع
- مصدر 2: دراسات وأبحاث متخصصة
- مصدر 3: تجارب عملية وحالات دراسية`

      setGeneratedBlog(sampleBlog)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            إعدادات المقال
          </CardTitle>
          <CardDescription>حدد تفاصيل المقال المطلوب كتابته</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-right block">
              عنوان المقال
            </Label>
            <Input
              id="title"
              placeholder="مثال: دليل شامل للتسويق الرقمي"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-right"
              dir="rtl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="outline" className="text-right block">
              الخطوط العريضة (اختياري)
            </Label>
            <Textarea
              id="outline"
              placeholder="اكتب النقاط الرئيسية التي تريد تغطيتها في المقال..."
              value={outline}
              onChange={(e) => setOutline(e.target.value)}
              className="min-h-[80px] text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block">نوع المقال</Label>
              <Select value={blogType} onValueChange={setBlogType} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع المقال" />
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
                الجمهور المستهدف
              </Label>
              <Input
                id="audience"
                placeholder="مثال: المبتدئين في التسويق"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-right block">
              الكلمات المفتاحية
            </Label>
            <Input
              id="keywords"
              placeholder="كلمة1، كلمة2، كلمة3"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="text-right"
              dir="rtl"
            />
          </div>

          <Button onClick={handleGenerate} disabled={!title.trim() || isGenerating} className="w-full">
            {isGenerating ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                جاري كتابة المقال...
              </>
            ) : (
              <>
                <BookOpen className="ml-2 h-4 w-4" />
                كتابة المقال
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Blog */}
      <Card>
        <CardHeader className="text-right">
          <div className="flex items-center justify-between">
            <CardTitle>المقال المُنتج</CardTitle>
            {generatedBlog && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(generatedBlog)}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <CardDescription>المقال النهائي جاهز للنشر</CardDescription>
        </CardHeader>
        <CardContent>
          {generatedBlog ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{generatedBlog.split(" ").length} كلمة</Badge>
                <Badge variant="secondary">{Math.ceil(generatedBlog.split(" ").length / 200)} دقائق قراءة</Badge>
              </div>

              <Separator />

              <div className="prose prose-sm max-w-none text-right" dir="rtl">
                <div className="whitespace-pre-wrap leading-relaxed">{generatedBlog}</div>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>سيظهر المقال المُنتج هنا</p>
              <p className="text-sm mt-1">املأ النموذج واضغط على "كتابة المقال"</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
