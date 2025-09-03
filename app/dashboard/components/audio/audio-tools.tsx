"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, Volume2, FileAudio, MessageSquare, Headphones, Radio } from "lucide-react"
import Link from "next/link"

const audioFeatures = [
  {
    title: "تحويل النص إلى صوت",
    description: "حول النصوص إلى ملفات صوتية طبيعية",
    icon: Volume2,
    href: "/dashboard/audio/tts",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    features: ["أصوات طبيعية", "لغات متعددة", "سرعات مختلفة"],
    isPopular: true,
  },
  {
    title: "تحويل الصوت إلى نص",
    description: "استخرج النصوص من الملفات الصوتية",
    icon: Mic,
    href: "/dashboard/audio/stt",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950",
    features: ["دقة عالية", "تنسيقات متعددة", "ترقيم تلقائي"],
    isPopular: true,
  },
]

const recentAudio = [
  {
    title: "تسجيل صوتي لمقال التسويق",
    type: "تحويل نص لصوت",
    duration: "3:45",
    timestamp: "منذ ساعة",
    format: "MP3",
  },
  {
    title: "نسخ اجتماع العمل",
    type: "تحويل صوت لنص",
    duration: "25:30",
    timestamp: "منذ 3 ساعات",
    format: "TXT",
  },
  {
    title: "قراءة صوتية للمحتوى التعليمي",
    type: "تحويل نص لصوت",
    duration: "8:12",
    timestamp: "أمس",
    format: "WAV",
  },
]

export function AudioTools() {
  return (
    <div className="space-y-8">
      {/* Audio Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {audioFeatures.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title} className="relative hover:shadow-lg transition-shadow">
              {feature.isPopular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-500">
                  <Radio className="h-3 w-3 ml-1" />
                  الأكثر استخداماً
                </Badge>
              )}

              <CardHeader className="text-right">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-right mt-1">{feature.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-end">
                  {feature.features.map((f) => (
                    <Badge key={f} variant="secondary" className="text-xs">
                      {f}
                    </Badge>
                  ))}
                </div>

                <Link href={feature.href}>
                  <Button className="w-full">ابدأ الاستخدام</Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Audio Processing */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Headphones className="h-5 w-5" />
            المعالجات الصوتية الأخيرة
          </CardTitle>
          <CardDescription>آخر الملفات الصوتية التي تم معالجتها</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAudio.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="text-right flex-1">
                  <h4 className="font-medium">{item.title}</h4>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{item.duration}</span>
                    <span>{item.timestamp}</span>
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {item.format}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <FileAudio className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    تحميل
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audio Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Volume2 className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">127</div>
            <p className="text-sm text-muted-foreground">ملف صوتي مُنتج</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Mic className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">89</div>
            <p className="text-sm text-muted-foreground">ملف تم تحويله لنص</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold">45:30</div>
            <p className="text-sm text-muted-foreground">ساعات المعالجة</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
