import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  FileText,
  ImageIcon,
  Mic,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const features = [
    {
      title: "دستیار هوشمند",
      description: "گفتگوهای هوشمند و کمک رسانی",
      icon: MessageSquare,
      href: "/dashboard/chat",
      color: "text-blue-500",
    },
    {
      title: "تولید محتوا",
      description: "ایجاد وبلاگ، محتوای سئو و کپشن",
      icon: FileText,
      href: "/dashboard/content",
      color: "text-green-500",
    },
    {
      title: "تولید تصویر هوشمند",
      description: "ایجاد تصاویر خیره کننده با هوش مصنوعی",
      icon: ImageIcon,
      href: "/dashboard/images",
      color: "text-purple-500",
    },
    {
      title: "ابزارهای صوتی",
      description: "تبدیل متن به گفتار و گفتار به متن",
      icon: Mic,
      href: "/dashboard/audio",
      color: "text-orange-500",
    },
    {
      title: "کتابخانه دستورات",
      description: "مدیریت و سازماندهی دستورات شما",
      icon: Users,
      href: "/dashboard/prompts",
      color: "text-pink-500",
    },
    {
      title: "طراحی سایت",
      description: "ایجاد و مدیریت وب سایت های حرفه ای",
      icon: FileText,
      href: "/dashboard/web-design",
      color: "text-yellow-500",
    },

    {
      title: "گزارشات",
      description: "دسترسی به گزارشات و تجزیه و تحلیل ها",
      icon: FileText,
      href: "/dashboard/reports",
      color: "text-green-500",
    },
    {
      title: "تحلیل داده",
      description: "دسترسی به ابزارهای تحلیل داده و گزارش گیری",
      icon: FileText,
      href: "/dashboard/analytics",
      color: "text-blue-500",
    },
    {
      title: "مدیریت کاربران",
      description: "مدیریت و سازماندهی کاربران و دسترسی ها",
      icon: Users,
      href: "/dashboard/users",
      color: "text-indigo-500",
    },
    {
      title: "پشتیبانی و راهنما",
      description: "دسترسی به منابع و راهنمایی های مفید",
      icon: FileText,
      href: "/dashboard/support",
      color: "text-red-500",
    },
    {
      title: "تنظیمات حساب",
      description: "مدیریت پروفایل و اشتراک شما",
      icon: Settings,
      href: "/dashboard/settings",
      color: "text-gray-500",
    },
    {
      title: "بازاریابی و تبلیغات",
      description: "مدیریت کمپین های تبلیغاتی و بازاریابی",
      icon: FileText,
      href: "/dashboard/marketing",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">داشبورد هوشمند</h1>
        <p className="text-muted-foreground mt-2">
          به پلتفرم هوش مصنوعی خوش آمدید
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader className="text-right">
                <div className="flex items-center justify-between">
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-right">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={feature.href}>
                  <Button
                    className="w-full bg-transparent cursor-pointer"
                    variant="outline"
                  >
                    شروع کنید
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
