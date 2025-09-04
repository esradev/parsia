import { CaptionGenerator } from "../../components/content/caption-generator";

export default function CaptionGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">تولیدکننده کپشن</h1>
        <p className="text-muted-foreground mt-2">
          کپشن‌های جذاب برای شبکه‌های اجتماعی بسازید
        </p>
      </div>
      <CaptionGenerator />
    </div>
  );
}
