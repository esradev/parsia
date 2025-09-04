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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Save,
  Edit,
} from "lucide-react";

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "احمد محمد سعید",
    email: "ahmed@example.com",
    phone: "+966501234567",
    location: "ریاض، عربستان سعودی",
    bio: "توسعه‌دهنده و طراح علاقه‌مند به هوش مصنوعی و فناوری‌های نوین. روی پروژه‌های متنوع در زمینه بازاریابی دیجیتال و تولید محتوا کار می‌کنم.",
    joinDate: "ژانویه ۲۰۲۴",
    avatar: "/diverse-user-avatars.png",
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const stats = [
    { label: "گفتگوها", value: "۱۲۷", icon: User },
    { label: "تصاویر تولیدشده", value: "۸۹", icon: Camera },
    { label: "مقالات", value: "۴۵", icon: Edit },
    { label: "روزهای فعالیت", value: "۲۳", icon: Calendar },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Profile Info */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader className="text-right">
            <div className="flex items-center justify-between">
              <CardTitle>اطلاعات شخصی</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "لغو" : "ویرایش"}
              </Button>
            </div>
            <CardDescription>مدیریت اطلاعات پایه شما</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={profile.avatar || "/placeholder.svg"}
                    alt={profile.name}
                  />
                  <AvatarFallback className="text-lg">اح</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="text-right flex-1">
                <h3 className="text-lg font-semibold">{profile.name}</h3>
                <p className="text-muted-foreground">{profile.email}</p>
                <Badge variant="secondary" className="mt-1">
                  عضو از {profile.joinDate}
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right block">
                  نام کامل
                </Label>
                <Input
                  id="name"
                  value={isEditing ? editedProfile.name : profile.name}
                  onChange={(e) =>
                    setEditedProfile({ ...editedProfile, name: e.target.value })
                  }
                  disabled={!isEditing}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-right block">
                  ایمیل
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={isEditing ? editedProfile.email : profile.email}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      email: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-right block">
                  شماره تلفن
                </Label>
                <Input
                  id="phone"
                  value={isEditing ? editedProfile.phone : profile.phone}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      phone: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-right block">
                  موقعیت
                </Label>
                <Input
                  id="location"
                  value={isEditing ? editedProfile.location : profile.location}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      location: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                  className="text-right"
                  dir="rtl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="text-right block">
                بیوگرافی
              </Label>
              <Textarea
                id="bio"
                value={isEditing ? editedProfile.bio : profile.bio}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, bio: e.target.value })
                }
                disabled={!isEditing}
                className="min-h-[100px] text-right"
                dir="rtl"
              />
            </div>

            {isEditing && (
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={handleCancel}>
                  لغو
                </Button>
                <Button onClick={handleSave}>
                  <Save className="ml-2 h-4 w-4" />
                  ذخیره تغییرات
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Stats & Activity */}
      <div className="space-y-6">
        {/* Usage Stats */}
        <Card>
          <CardHeader className="text-right">
            <CardTitle>آمار استفاده</CardTitle>
            <CardDescription>فعالیت شما در پلتفرم</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-lg bg-muted"
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="text-right">
            <CardTitle>اقدامات سریع</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-end bg-transparent"
            >
              <Mail className="ml-2 h-4 w-4" />
              تغییر رمز عبور
            </Button>
            <Button
              variant="outline"
              className="w-full justify-end bg-transparent"
            >
              <Phone className="ml-2 h-4 w-4" />
              فعال‌سازی احراز هویت دو مرحله‌ای
            </Button>
            <Button
              variant="outline"
              className="w-full justify-end bg-transparent"
            >
              <MapPin className="ml-2 h-4 w-4" />
              بروزرسانی موقعیت
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
