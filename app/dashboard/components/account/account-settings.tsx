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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Bell,
  Palette,
  Key,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  Save,
} from "lucide-react";

export function AccountSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const [settings, setSettings] = useState({
    // Security
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    weeklyReports: true,

    // Preferences
    language: "fa",
    theme: "system",
    timezone: "Asia/Tehran",

    // Privacy
    profileVisibility: "private",
    dataSharing: false,
    analyticsTracking: true,
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const languages = [
    { value: "fa", label: "فارسی", flag: "🇮🇷" },
    { value: "en", label: "انگلیسی", flag: "🇺🇸" },
    { value: "fr", label: "فرانسوی", flag: "🇫🇷" },
  ];

  const themes = [
    { value: "light", label: "روشن" },
    { value: "dark", label: "تاریک" },
    { value: "system", label: "سیستمی" },
  ];

  const timezones = [
    { value: "Asia/Tehran", label: "تهران (GMT+3:30)" },
    { value: "Asia/Riyadh", label: "ریاض (GMT+3)" },
    { value: "Asia/Dubai", label: "دبی (GMT+4)" },
  ];

  return (
    <Tabs defaultValue="security" className="w-full" dir="rtl">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="security">امنیت</TabsTrigger>
        <TabsTrigger value="notifications">اعلان‌ها</TabsTrigger>
        <TabsTrigger value="preferences">ترجیحات</TabsTrigger>
        <TabsTrigger value="privacy">حریم خصوصی</TabsTrigger>
      </TabsList>

      <TabsContent value="security" className="space-y-6">
        {/* Password Change */}
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              تغییر رمز عبور
            </CardTitle>
            <CardDescription>
              رمز عبور حساب خود را به‌روزرسانی کنید
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-right block">
                رمز عبور فعلی
              </Label>
              <div className="relative">
                <Input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  value={settings.currentPassword}
                  onChange={(e) =>
                    handleSettingChange("currentPassword", e.target.value)
                  }
                  className="text-right pr-10"
                  dir="rtl"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-right block">
                رمز عبور جدید
              </Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  value={settings.newPassword}
                  onChange={(e) =>
                    handleSettingChange("newPassword", e.target.value)
                  }
                  className="text-right pr-10"
                  dir="rtl"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-right block">
                تایید رمز عبور جدید
              </Label>
              <Input
                id="confirm-password"
                type="password"
                value={settings.confirmPassword}
                onChange={(e) =>
                  handleSettingChange("confirmPassword", e.target.value)
                }
                className="text-right"
                dir="rtl"
              />
            </div>

            <Button className="w-full">
              <Save className="ml-2 h-4 w-4" />
              به‌روزرسانی رمز عبور
            </Button>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              احراز هویت دو مرحله‌ای
            </CardTitle>
            <CardDescription>
              افزودن لایه امنیتی بیشتر به حساب شما
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-right">
                <p className="font-medium">فعال‌سازی احراز هویت دو مرحله‌ای</p>
                <p className="text-sm text-muted-foreground">
                  از اپلیکیشن احراز هویت برای دریافت کد امنیتی استفاده کنید
                </p>
              </div>
              <Switch
                checked={twoFactorEnabled}
                onCheckedChange={setTwoFactorEnabled}
              />
            </div>

            {twoFactorEnabled && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">
                    احراز هویت دو مرحله‌ای فعال شد
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  احراز هویت دو مرحله‌ای با موفقیت فعال شد. هنگام ورود باید کد
                  را از اپلیکیشن احراز هویت وارد کنید.
                </p>
              </div>
            )}

            {!twoFactorEnabled && (
              <Button variant="outline" className="w-full bg-transparent">
                راه‌اندازی احراز هویت دو مرحله‌ای
              </Button>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-6">
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              تنظیمات اعلان‌ها
            </CardTitle>
            <CardDescription>
              کنترل اعلان‌هایی که دریافت می‌کنید
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">اعلان‌های ایمیل</p>
                  <p className="text-sm text-muted-foreground">
                    دریافت اعلان‌های مهم از طریق ایمیل
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(value) =>
                    handleSettingChange("emailNotifications", value)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">اعلان‌های فوری</p>
                  <p className="text-sm text-muted-foreground">
                    اعلان‌های فوری در مرورگر
                  </p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(value) =>
                    handleSettingChange("pushNotifications", value)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">پیام‌های تبلیغاتی</p>
                  <p className="text-sm text-muted-foreground">
                    پیشنهادات و اخبار محصول
                  </p>
                </div>
                <Switch
                  checked={settings.marketingEmails}
                  onCheckedChange={(value) =>
                    handleSettingChange("marketingEmails", value)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">گزارش‌های هفتگی</p>
                  <p className="text-sm text-muted-foreground">
                    خلاصه هفتگی فعالیت شما
                  </p>
                </div>
                <Switch
                  checked={settings.weeklyReports}
                  onCheckedChange={(value) =>
                    handleSettingChange("weeklyReports", value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="preferences" className="space-y-6">
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              ترجیحات نمایش
            </CardTitle>
            <CardDescription>شخصی‌سازی رابط کاربری</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-right block">زبان</Label>
                <Select
                  value={settings.language}
                  onValueChange={(value) =>
                    handleSettingChange("language", value)
                  }
                  dir="rtl"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        <div className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-right block">ظاهر</Label>
                <Select
                  value={settings.theme}
                  onValueChange={(value) => handleSettingChange("theme", value)}
                  dir="rtl"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((theme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        {theme.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label className="text-right block">منطقه زمانی</Label>
                <Select
                  value={settings.timezone}
                  onValueChange={(value) =>
                    handleSettingChange("timezone", value)
                  }
                  dir="rtl"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="privacy" className="space-y-6">
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              تنظیمات حریم خصوصی
            </CardTitle>
            <CardDescription>کنترل حریم خصوصی داده‌های شما</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-right block">
                  سطح حریم خصوصی پروفایل
                </Label>
                <Select
                  value={settings.profileVisibility}
                  onValueChange={(value) =>
                    handleSettingChange("profileVisibility", value)
                  }
                  dir="rtl"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">عمومی</SelectItem>
                    <SelectItem value="private">خصوصی</SelectItem>
                    <SelectItem value="friends">فقط دوستان</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">اشتراک‌گذاری داده برای بهبود</p>
                  <p className="text-sm text-muted-foreground">
                    به ما در بهبود سرویس کمک کنید
                  </p>
                </div>
                <Switch
                  checked={settings.dataSharing}
                  onCheckedChange={(value) =>
                    handleSettingChange("dataSharing", value)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">ردیابی استفاده</p>
                  <p className="text-sm text-muted-foreground">
                    تحلیل نحوه استفاده شما از پلتفرم
                  </p>
                </div>
                <Switch
                  checked={settings.analyticsTracking}
                  onCheckedChange={(value) =>
                    handleSettingChange("analyticsTracking", value)
                  }
                />
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-destructive/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">
                  منطقه خطر
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                این اقدامات غیرقابل بازگشت هستند. مطمئن شوید که می‌خواهید ادامه
                دهید.
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  صادرات داده‌ها
                </Button>
                <Button variant="destructive" size="sm" className="w-full">
                  حذف کامل حساب کاربری
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
