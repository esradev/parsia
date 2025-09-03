"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Search, BookOpen, MessageCircle, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"

const contentTypes = [
  {
    title: "مولد النصوص",
    description: "أنشئ محتوى نصي عالي الجودة لأي غرض",
    icon: FileText,
    href: "/dashboard/content/text",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    features: ["نصوص تسويقية", "محتوى إعلاني", "وصف المنتجات"],
    isPopular: true,
  },
  {
    title: "محتوى SEO",
    description: "محتوى محسن لمحركات البحث",
    icon: Search,
    href: "/dashboard/content/seo",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950",
    features: ["عناوين SEO", "أوصاف ميتا", "كلمات مفتاحية"],
    isPopular: false,
  },
  {
    title: "مقالات المدونة",
    description: "اكتب مقالات شاملة ومفيدة",
    icon: BookOpen,
    href: "/dashboard/content/blog",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    features: ["مقالات طويلة", "محتوى تعليمي", "قصص"],
    isPopular: true,
  },
  {
    title: "تسميات توضيحية",
    description: "محتوى لوسائل التواصل الاجتماعي",
    icon: MessageCircle,
    href: "/dashboard/content/captions",
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    features: ["إنستغرام", "تويتر", "فيسبوك"],
    isPopular: false,
  },
]

const recentGenerations = [
  {
    title: "محتوى تسويقي لمنتج جديد",
    type: "نص تسويقي",
    timestamp: "منذ ساعتين",
    wordCount: 250,
  },
  {
    title: "مقال عن التسويق الرقمي",
    type: "مقال مدونة",
    timestamp: "منذ 4 ساعات",
    wordCount: 1200,
  },
  {
    title: "تسميات توضيحية لحملة إعلانية",
    type: "تسميات توضيحية",
    timestamp: "أمس",
    wordCount: 150,
  },
]

export function ContentGenerationHub() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">مركز إنتاج المحتوى</h1>
        <p className="text-muted-foreground mt-2">أنشئ محتوى عالي الجودة بالذكاء الاصطناعي</p>
      </div>

      {/* Content Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contentTypes.map((type) => {
          const Icon = type.icon
          return (
            <Card key={type.title} className="relative hover:shadow-lg transition-shadow">
              {type.isPopular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-500">
                  <Sparkles className="h-3 w-3 ml-1" />
                  الأكثر استخداماً
                </Badge>
              )}

              <CardHeader className="text-right">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${type.bgColor}`}>
                    <Icon className={`h-6 w-6 ${type.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription className="text-right mt-1">{type.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-end">
                  {type.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Link href={type.href}>
                  <Button className="w-full">ابدأ الإنتاج</Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Generations */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            المحتوى المُنتج مؤخراً
          </CardTitle>
          <CardDescription>آخر المحتوى الذي أنتجته</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentGenerations.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="text-right flex-1">
                  <h4 className="font-medium">{item.title}</h4>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{item.wordCount} كلمة</span>
                    <span>{item.timestamp}</span>
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  عرض
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
