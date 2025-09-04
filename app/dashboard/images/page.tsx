import { ImageGenerator } from "../components/images/image-generator";

export default function ImagesPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">
          تولیدکننده تصویر با هوش مصنوعی
        </h1>
        <p className="text-muted-foreground mt-2">
          با استفاده از هوش مصنوعی تصاویر شگفت‌انگیز بسازید
        </p>
      </div>
      <ImageGenerator />
    </div>
  );
}
