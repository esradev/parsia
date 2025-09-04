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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Crown,
  Zap,
  Star,
  Check,
  CreditCard,
  Calendar,
  TrendingUp,
  Download,
  MessageSquare,
  ImageIcon,
  Mic,
} from "lucide-react";

const plans = [
  {
    id: "free",
    name: "رایگان",
    price: "0",
    period: "ماهانه",
    icon: Star,
    color: "text-gray-500",
    bgColor: "bg-gray-50 dark:bg-gray-950",
    features: [
      "۱۰ گفتگو در ماه",
      "۵ تصویر تولید شده",
      "۱۰۰۰ کلمه متن",
      "پشتیبانی پایه",
    ],
    limits: {
      chats: { used: 7, total: 10 },
      images: { used: 3, total: 5 },
      words: { used: 650, total: 1000 },
    },
  },
  {
    id: "pro",
    name: "حرفه‌ای",
    price: "99",
    period: "ماهانه",
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    features: [
      "گفتگو نامحدود",
      "۱۰۰ تصویر در ماه",
      "۵۰,۰۰۰ کلمه",
      "صداهای پیشرفته",
      "پشتیبانی اولویت‌دار",
    ],
    limits: {
      chats: { used: 127, total: -1 }, // -1 means unlimited
      images: { used: 45, total: 100 },
      words: { used: 12500, total: 50000 },
    },
    isCurrentPlan: true,
  },
  {
    id: "enterprise",
    name: "سازمانی",
    price: "299",
    period: "ماهانه",
    icon: Crown,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    features: [
      "همه امکانات حرفه‌ای",
      "تصویر نامحدود",
      "کلمات نامحدود",
      "API اختصاصی",
      "پشتیبانی ۲۴/۷ اختصاصی",
    ],
    limits: {
      chats: { used: 0, total: -1 },
      images: { used: 0, total: -1 },
      words: { used: 0, total: -1 },
    },
  },
];

const currentPlan = plans.find((p) => p.isCurrentPlan) || plans[1];

const billingHistory = [
  {
    id: "1",
    date: "2024-01-15",
    amount: "99.00",
    status: "پرداخت شده",
    plan: "حرفه‌ای",
    invoice: "INV-2024-001",
  },
  {
    id: "2",
    date: "2023-12-15",
    amount: "99.00",
    status: "پرداخت شده",
    plan: "حرفه‌ای",
    invoice: "INV-2023-012",
  },
  {
    id: "3",
    date: "2023-11-15",
    amount: "99.00",
    status: "پرداخت شده",
    plan: "حرفه‌ای",
    invoice: "INV-2023-011",
  },
];

export function SubscriptionManagement() {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan.id);

  const getUsagePercentage = (used: number, total: number) => {
    if (total === -1) return 0; // Unlimited
    return (used / total) * 100;
  };

  const formatUsage = (used: number, total: number) => {
    if (total === -1) return `${used.toLocaleString()} / نامحدود`;
    return `${used.toLocaleString()} / ${total.toLocaleString()}`;
  };

  return (
    <div className="space-y-8">
      {/* Current Plan Status */}
      <Card>
        <CardHeader className="text-right">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <currentPlan.icon className={`h-5 w-5 ${currentPlan.color}`} />
              پلن فعلی شما: {currentPlan.name}
            </CardTitle>
            <Badge variant="secondary">فعال</Badge>
          </div>
          <CardDescription>تمدید در ۱۵ فوریه ۲۰۲۴</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Usage Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <MessageSquare className="h-4 w-4 text-blue-500" />
                <span>گفتگوها</span>
              </div>
              <Progress
                value={getUsagePercentage(
                  currentPlan.limits.chats.used,
                  currentPlan.limits.chats.total
                )}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground text-right">
                {formatUsage(
                  currentPlan.limits.chats.used,
                  currentPlan.limits.chats.total
                )}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <ImageIcon className="h-4 w-4 text-green-500" />
                <span>تصاویر</span>
              </div>
              <Progress
                value={getUsagePercentage(
                  currentPlan.limits.images.used,
                  currentPlan.limits.images.total
                )}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground text-right">
                {formatUsage(
                  currentPlan.limits.images.used,
                  currentPlan.limits.images.total
                )}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <Mic className="h-4 w-4 text-purple-500" />
                <span>کلمات</span>
              </div>
              <Progress
                value={getUsagePercentage(
                  currentPlan.limits.words.used,
                  currentPlan.limits.words.total
                )}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground text-right">
                {formatUsage(
                  currentPlan.limits.words.used,
                  currentPlan.limits.words.total
                )}
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="outline">
              <CreditCard className="ml-2 h-4 w-4" />
              بروزرسانی روش پرداخت
            </Button>
            <Button variant="outline">
              <Calendar className="ml-2 h-4 w-4" />
              لغو اشتراک
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-bold text-right mb-6">پلن‌های موجود</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isCurrentPlan = plan.id === currentPlan.id;
            const isSelected = plan.id === selectedPlan;

            return (
              <Card
                key={plan.id}
                className={`relative cursor-pointer transition-all ${
                  isSelected ? "ring-2 ring-primary" : ""
                } ${isCurrentPlan ? "border-primary" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {isCurrentPlan && (
                  <Badge className="absolute -top-2 -right-2">پلن فعلی</Badge>
                )}

                <CardHeader className="text-right">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${plan.bgColor}`}>
                      <Icon className={`h-6 w-6 ${plan.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="text-sm text-muted-foreground">
                          تومان
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / {plan.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-right">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 justify-end text-sm"
                      >
                        <span>{feature}</span>
                        <Check className="h-4 w-4 text-green-500 shrink-0" />
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={isCurrentPlan ? "outline" : "default"}
                    disabled={isCurrentPlan}
                  >
                    {isCurrentPlan ? "پلن فعلی" : "ارتقا به این پلن"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            تاریخچه صورتحساب‌ها
          </CardTitle>
          <CardDescription>آخرین پرداخت‌ها و صورتحساب‌ها</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {billingHistory.map((bill) => (
              <div
                key={bill.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Badge variant="outline">{bill.status}</Badge>
                </div>

                <div className="text-right flex-1">
                  <div className="flex items-center gap-4 justify-end">
                    <span className="font-medium">{bill.amount} تومان</span>
                    <span className="text-sm text-muted-foreground">
                      {bill.plan}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(bill.date).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    شماره صورتحساب: {bill.invoice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
