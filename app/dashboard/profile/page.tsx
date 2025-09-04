import { UserProfile } from "../components/account/user-profile";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">پروفایل کاربری</h1>
        <p className="text-muted-foreground mt-2">
          مدیریت اطلاعات شخصی و تنظیمات حساب کاربری
        </p>
      </div>
      <UserProfile />
    </div>
  );
}
