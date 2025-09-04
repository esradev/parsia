import { SubscriptionManagement } from "../components/account/subscription-management";

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">مدیریت اشتراک</h1>
        <p className="text-muted-foreground mt-2">
          مشاهده و مدیریت طرح اشتراک فعلی شما
        </p>
      </div>
      <SubscriptionManagement />
    </div>
  );
}
