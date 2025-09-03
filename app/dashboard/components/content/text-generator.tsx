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
import { Copy, Download, RefreshCw, Sparkles } from "lucide-react"

const textTypes = [
  { value: "marketing", label: "نص تسويقي" },
  { value: "product", label: "وصف منتج" },
  { value: "email", label: "بريد إلكتروني" },
  { value: "ad", label: "إعلان" },
  { value: "press", label: "بيان صحفي" },
]

const tones = [
  { value: "professional", label: "مهني" },
  { value: "friendly", label: "ودود" },
  { value: "persuasive", label: "مقنع" },
  { value: "casual", label: "غير رسمي" },
  { value: "formal", label: "رسمي" },
]

export function TextGenerator() {
  const [prompt, setPrompt] = useState("")
  const [textType, setTextType] = useState("")
  const [tone, setTone] = useState("")
  const [targetLength, setTargetLength] = useState("medium")
  const [keywords, setKeywords] = useState("")
  const [generatedText, setGeneratedText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI text generation
    setTimeout(() => {
      const sampleText = `هذا نص تجريبي تم إنتاجه بناءً على طلبك: "${prompt}".

يمكن للذكاء الاصطناعي إنتاج محتوى عالي الجودة يتناسب مع احتياجاتك المحددة. سواء كنت تحتاج إلى محتوى تسويقي، وصف منتجات، أو أي نوع آخر من النصوص.

الميزات الرئيسية:
• محتوى مخصص حسب طلبك
• نبرة مناسبة للجمهور المستهدف
• تحسين للكلمات المفتاحية
• جودة عالية ومحتوى أصلي

هذا المحتوى جاهز للاستخدام ويمكن تعديله حسب احتياجاتك الخاصة.`

      setGeneratedText(sampleText)
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle>إعدادات النص</CardTitle>
          <CardDescription>حدد متطلبات النص المطلوب إنتاجه</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt" className="text-right block">
              وصف المحتوى المطلوب
            </Label>
            <Textarea
              id="prompt"
              placeholder="اكتب وصفاً مفصلاً للمحتوى الذي تريد إنتاجه..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block">نوع النص</Label>
              <Select value={textType} onValueChange={setTextType} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع النص" />
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
              <Label className="text-right block">نبرة الكتابة</Label>
              <Select value={tone} onValueChange={setTone} dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="اختر النبرة" />
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
              الكلمات المفتاحية (اختياري)
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

          <div className="space-y-2">
            <Label className="text-right block">طول النص</Label>
            <Select value={targetLength} onValueChange={setTargetLength} dir="rtl">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">قصير (50-100 كلمة)</SelectItem>
                <SelectItem value="medium">متوسط (100-300 كلمة)</SelectItem>
                <SelectItem value="long">طويل (300-500 كلمة)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleGenerate} disabled={!prompt.trim() || isGenerating} className="w-full">
            {isGenerating ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                جاري الإنتاج...
              </>
            ) : (
              <>
                <Sparkles className="ml-2 h-4 w-4" />
                إنتاج النص
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Content */}
      <Card>
        <CardHeader className="text-right">
          <div className="flex items-center justify-between">
            <CardTitle>النص المُنتج</CardTitle>
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
          <CardDescription>النتيجة النهائية للنص المُنتج</CardDescription>
        </CardHeader>
        <CardContent>
          {generatedText ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{generatedText.split(" ").length} كلمة</Badge>
                <Badge variant="secondary">{generatedText.length} حرف</Badge>
              </div>

              <Separator />

              <div className="prose prose-sm max-w-none text-right" dir="rtl">
                <div className="whitespace-pre-wrap leading-relaxed">{generatedText}</div>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>سيظهر النص المُنتج هنا</p>
              <p className="text-sm mt-1">املأ النموذج واضغط على "إنتاج النص"</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
