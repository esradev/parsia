import { BlogGenerator } from "../../components/content/blog-generator"

export default function BlogGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">مولد المقالات</h1>
        <p className="text-muted-foreground mt-2">اكتب مقالات مدونة شاملة ومفيدة</p>
      </div>
      <BlogGenerator />
    </div>
  )
}
