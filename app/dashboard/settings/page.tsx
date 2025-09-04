import { AccountSettings } from "../components/account/account-settings";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">تنظیمات حساب کاربری</h1>
        <p className="text-muted-foreground mt-2">
          سفارشی‌سازی ترجیحات و تنظیمات امنیتی شما
        </p>
      </div>
      <AccountSettings />
    </div>
  );
}
