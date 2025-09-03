import { UserProfile } from "../components/account/user-profile"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">الملف الشخصي</h1>
        <p className="text-muted-foreground mt-2">إدارة معلوماتك الشخصية وإعدادات الحساب</p>
      </div>
      <UserProfile />
    </div>
  )
}
