"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageSquare,
  FileText,
  ImageIcon,
  Mic,
  BookOpen,
  User,
  Settings,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const navigation = [
  {
    name: "دستیار هوشمند",
    href: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    name: "کتابخانه دستورات",
    href: "/dashboard/prompts",
    icon: BookOpen,
  },
  {
    name: "تولید محتوا",
    href: "/dashboard/content",
    icon: FileText,
    children: [
      { name: "متن", href: "/dashboard/content/text" },
      { name: "سئو", href: "/dashboard/content/seo" },
      { name: "وبلاگ", href: "/dashboard/content/blog" },
      { name: "کپشن", href: "/dashboard/content/captions" },
    ],
  },
  {
    name: "تولید تصویر",
    href: "/dashboard/images",
    icon: ImageIcon,
  },
  {
    name: "ابزارهای صوتی",
    href: "/dashboard/audio",
    icon: Mic,
    children: [
      { name: "متن به گفتار", href: "/dashboard/audio/tts" },
      { name: "گفتار به متن", href: "/dashboard/audio/stt" },
    ],
  },
  {
    name: "بازاریابی",
    href: "/dashboard/marketing",
    icon: Sparkles,
  },
  {
    name: "پشتیبانی",
    href: "/dashboard/support",
    icon: Settings,
  },
  {
    name: "طراحی وب",
    href: "/dashboard/web-design",
    icon: ImageIcon,
  },
  {
    name: "آنالیتیکس",
    href: "/dashboard/analytics",
    icon: BookOpen,
  },
  {
    name: "گزارش‌ها",
    href: "/dashboard/reports",
    icon: FileText,
  },
];

const accountNavigation = [
  {
    name: "پروفایل",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "اشتراک",
    href: "/dashboard/subscription",
    icon: CreditCard,
  },
  {
    name: "تنظیمات",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-col bg-sidebar border-l border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-sidebar-primary" />
            <Link href="/">
              <span className="font-bold text-sidebar-foreground">
                پلتفرم هوش مصنوعی
              </span>
            </Link>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {!collapsed && (
                    <span className="text-right flex-1">{item.name}</span>
                  )}
                </Link>

                {/* Sub-navigation */}
                {!collapsed && item.children && isActive && (
                  <div className="mr-6 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "block rounded-lg px-3 py-1 text-sm text-right transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          pathname === child.href
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground/60"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Account Section */}
      <div className="border-t border-sidebar-border p-3">
        <div className="space-y-1">
          {accountNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && (
                  <span className="text-right flex-1">{item.name}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
