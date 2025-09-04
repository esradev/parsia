import { SEOGenerator } from "../../components/content/seo-generator";

export default function SEOGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">
          تولیدکننده محتوای سئو
        </h1>
        <p className="text-muted-foreground mt-2">
          تولید محتوای بهینه‌شده برای موتورهای جستجو
        </p>
      </div>
      <SEOGenerator />
    </div>
  );
}
