import { SEOGenerator } from "../../components/content/seo-generator"

export default function SEOGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">مولد محتوى SEO</h1>
        <p className="text-muted-foreground mt-2">أنشئ محتوى محسن لمحركات البحث</p>
      </div>
      <SEOGenerator />
    </div>
  )
}
