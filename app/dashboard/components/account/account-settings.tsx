"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Shield, Bell, Palette, Key, Smartphone, Lock, Eye, EyeOff, AlertTriangle, Save } from "lucide-react"

export function AccountSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

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
    language: "ar",
    theme: "system",
    timezone: "Asia/Riyadh",

    // Privacy
    profileVisibility: "private",
    dataSharing: false,
    analyticsTracking: true,
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const languages = [
    { value: "ar", label: "العربية", flag: "🇸🇦" },
    { value: "en", label: "English", flag: "🇺🇸" },
    { value: "fr", label: "Français", flag: "🇫🇷" },
  ]

  const themes = [
    { value: "light", label: "فاتح" },
    { value: "dark", label: "داكن" },
    { value: "system", label: "تلقائي" },
  ]

  const timezones = [
    { value: "Asia/Riyadh", label: "الرياض (GMT+3)" },
    { value: "Asia/Dubai", label: "دبي (GMT+4)" },
    { value: "Asia/Kuwait", label: "الكويت (GMT+3)" },
  ]

  return (
    <Tabs defaultValue="security" className="w-full" dir="rtl">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="security">الأمان</TabsTrigger>
        <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
        <TabsTrigger value="preferences">التفضيلات</TabsTrigger>
        <TabsTrigger value="privacy">الخصوصية</TabsTrigger>
      </TabsList>

      <TabsContent value="security" className="space-y-6">
        {/* Password Change */}
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              تغيير كلمة المرور
            </CardTitle>
            <CardDescription>تحديث كلمة المرور لحسابك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-right block">
                كلمة المرور الحالية
              </Label>
              <div className="relative">
                <Input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  value={settings.currentPassword}
                  onChange={(e) => handleSettingChange("currentPassword", e.target.value)}
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
                  {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-right block">
                كلمة المرور الجديدة
              </Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  value={settings.newPassword}
                  onChange={(e) => handleSettingChange("newPassword", e.target.value)}
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
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-right block">
                تأكيد كلمة المرور الجديدة
              </Label>
              <Input
                id="confirm-password"
                type="password"
                value={settings.confirmPassword}
                onChange={(e) => handleSettingChange("confirmPassword", e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>

            <Button className="w-full">
              <Save className="ml-2 h-4 w-4" />
              تحديث كلمة المرور
            </Button>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card>
          <CardHeader className="text-right">
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              المصادقة الثنائية
            </CardTitle>
            <CardDescription>إضافة طبقة حماية إضافية لحسابك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-right">
                <p className="font-medium">تفعيل المصادقة الثنائية</p>
                <p className="text-sm text-muted-foreground">استخدم تطبيق المصادقة للحصول على رموز الأمان</p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>

            {twoFactorEnabled && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">المصادقة الثنائية مفعلة</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  تم تفعيل المصادقة الثنائية بنجاح. ستحتاج إلى رمز من تطبيق المصادقة عند تسجيل الدخول.
                </p>
              </div>
            )}

            {!twoFactorEnabled && (
              <Button variant="outline" className="w-full bg-transparent">
                إعداد المصادقة الثنائية
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
              إعدادات الإشعارات
            </CardTitle>
            <CardDescription>تحكم في الإشعارات التي تتلقاها</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">إشعارات البريد الإلكتروني</p>
                  <p className="text-sm text-muted-foreground">تلقي إشعارات مهمة عبر البريد</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(value) => handleSettingChange("emailNotifications", value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">الإشعارات الفورية</p>
                  <p className="text-sm text-muted-foreground">إشعارات فورية في المتصفح</p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(value) => handleSettingChange("pushNotifications", value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">رسائل تسويقية</p>
                  <p className="text-sm text-muted-foreground">عروض وأخبار المنتج</p>
                </div>
                <Switch
                  checked={settings.marketingEmails}
                  onCheckedChange={(value) => handleSettingChange("marketingEmails", value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">التقارير الأسبوعية</p>
                  <p className="text-sm text-muted-foreground">ملخص أسبوعي لنشاطك</p>
                </div>
                <Switch
                  checked={settings.weeklyReports}
                  onCheckedChange={(value) => handleSettingChange("weeklyReports", value)}
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
              تفضيلات العرض
            </CardTitle>
            <CardDescription>تخصيص واجهة المستخدم</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-right block">اللغة</Label>
                <Select
                  value={settings.language}
                  onValueChange={(value) => handleSettingChange("language", value)}
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
                <Label className="text-right block">المظهر</Label>
                <Select value={settings.theme} onValueChange={(value) => handleSettingChange("theme", value)} dir="rtl">
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
                <Label className="text-right block">المنطقة الزمنية</Label>
                <Select
                  value={settings.timezone}
                  onValueChange={(value) => handleSettingChange("timezone", value)}
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
              إعدادات الخصوصية
            </CardTitle>
            <CardDescription>تحكم في خصوصية بياناتك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-right block">مستوى خصوصية الملف الشخصي</Label>
                <Select
                  value={settings.profileVisibility}
                  onValueChange={(value) => handleSettingChange("profileVisibility", value)}
                  dir="rtl"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">عام</SelectItem>
                    <SelectItem value="private">خاص</SelectItem>
                    <SelectItem value="friends">الأصدقاء فقط</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">مشاركة البيانات للتحسين</p>
                  <p className="text-sm text-muted-foreground">مساعدتنا في تحسين الخدمة</p>
                </div>
                <Switch
                  checked={settings.dataSharing}
                  onCheckedChange={(value) => handleSettingChange("dataSharing", value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-medium">تتبع الاستخدام</p>
                  <p className="text-sm text-muted-foreground">تحليل كيفية استخدامك للمنصة</p>
                </div>
                <Switch
                  checked={settings.analyticsTracking}
                  onCheckedChange={(value) => handleSettingChange("analyticsTracking", value)}
                />
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-destructive/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">منطقة الخطر</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                هذه الإجراءات لا يمكن التراجع عنها. تأكد من رغبتك في المتابعة.
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  تصدير البيانات
                </Button>
                <Button variant="destructive" size="sm" className="w-full">
                  حذف الحساب نهائياً
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
