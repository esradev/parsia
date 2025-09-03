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
import { ImageIcon, Download, RefreshCw, Sparkles, Grid3X3, Palette } from "lucide-react"

const imageStyles = [
  { value: "realistic", label: "واقعي", description: "صور واقعية عالية الجودة" },
  { value: "artistic", label: "فني", description: "لوحات فنية وإبداعية" },
  { value: "cartoon", label: "كرتوني", description: "رسوم متحركة ومرحة" },
  { value: "abstract", label: "تجريدي", description: "فن تجريدي وحديث" },
  { value: "vintage", label: "كلاسيكي", description: "طراز قديم وعتيق" },
  { value: "minimalist", label: "بسيط", description: "تصميم بسيط ونظيف" },
]

const aspectRatios = [
  { value: "1:1", label: "مربع (1:1)", width: 512, height: 512 },
  { value: "16:9", label: "عريض (16:9)", width: 768, height: 432 },
  { value: "9:16", label: "طولي (9:16)", width: 432, height: 768 },
  { value: "4:3", label: "تقليدي (4:3)", width: 640, height: 480 },
]

const generatedImages = [
  {
    id: "1",
    url: "/ai-landscape.png",
    prompt: "منظر طبيعي خلاب مع جبال وبحيرة",
    style: "واقعي",
    timestamp: new Date(),
  },
  {
    id: "2",
    url: "/ai-portrait.png",
    prompt: "بورتريه فني لشخص يرتدي ملابس تقليدية",
    style: "فني",
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: "3",
    url: "/ai-abstract-art.png",
    prompt: "تصميم تجريدي بألوان زاهية",
    style: "تجريدي",
    timestamp: new Date(Date.now() - 172800000),
  },
]

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [style, setStyle] = useState("")
  const [aspectRatio, setAspectRatio] = useState("1:1")
  const [negativePrompt, setNegativePrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("generate")

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate image generation
    setTimeout(() => {
      setIsGenerating(false)
      setActiveTab("gallery")
    }, 3000)
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" dir="rtl">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="generate">إنتاج صور</TabsTrigger>
        <TabsTrigger value="gallery">معرض الصور</TabsTrigger>
        <TabsTrigger value="styles">الأنماط</TabsTrigger>
      </TabsList>

      <TabsContent value="generate" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader className="text-right">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                إعدادات الصورة
              </CardTitle>
              <CardDescription>صف الصورة التي تريد إنتاجها</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-right block">
                  وصف الصورة
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="صف الصورة التي تريد إنتاجها بالتفصيل..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] text-right"
                  dir="rtl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-right block">النمط الفني</Label>
                  <Select value={style} onValueChange={setStyle} dir="rtl">
                    <SelectTrigger>
                      <SelectValue placeholder="اختر النمط" />
                    </SelectTrigger>
                    <SelectContent>
                      {imageStyles.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          <div className="text-right">
                            <div className="font-medium">{s.label}</div>
                            <div className="text-xs text-muted-foreground">{s.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-right block">نسبة العرض للارتفاع</Label>
                  <Select value={aspectRatio} onValueChange={setAspectRatio} dir="rtl">
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
                  ما لا تريده في الصورة (اختياري)
                </Label>
                <Input
                  id="negative"
                  placeholder="مثال: ضبابي، مشوه، ألوان باهتة"
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              <Button onClick={handleGenerate} disabled={!prompt.trim() || isGenerating} className="w-full">
                {isGenerating ? (
                  <>
                    <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                    جاري الإنتاج...
                  </>
                ) : (
                  <>
                    <ImageIcon className="ml-2 h-4 w-4" />
                    إنتاج الصورة
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Preview Area */}
          <Card>
            <CardHeader className="text-right">
              <CardTitle>معاينة النتيجة</CardTitle>
              <CardDescription>ستظهر الصورة المُنتجة هنا</CardDescription>
            </CardHeader>
            <CardContent>
              {isGenerating ? (
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">جاري إنتاج الصورة...</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>ستظهر الصورة المُنتجة هنا</p>
                    <p className="text-sm mt-1">املأ النموذج واضغط على "إنتاج الصورة"</p>
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
              معرض الصور المُنتجة
            </CardTitle>
            <CardDescription>جميع الصور التي أنتجتها باستخدام الذكاء الاصطناعي</CardDescription>
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
                      <p className="text-sm font-medium text-right line-clamp-2">{image.prompt}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {image.style}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {image.timestamp.toLocaleDateString("ar-SA")}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <Download className="h-4 w-4 ml-1" />
                        تحميل
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
            <Card key={style.value} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="text-right">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{style.label}</CardTitle>
                    <CardDescription className="text-right">{style.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-3">
                  <img
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${style.value} art style example`}
                    alt={`مثال على النمط ${style.label}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setStyle(style.value)
                    setActiveTab("generate")
                  }}
                >
                  استخدام هذا النمط
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
