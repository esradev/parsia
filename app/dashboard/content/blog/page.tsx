import { BlogGenerator } from "../../components/content/blog-generator";

export default function BlogGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">تولیدکننده مقالات</h1>
        <p className="text-muted-foreground mt-2">
          مقالات جامع و مفید برای وبلاگ خود بنویسید
        </p>
      </div>
      <BlogGenerator />
    </div>
  );
}
