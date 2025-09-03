import { TextGenerator } from "../../components/content/text-generator"

export default function TextGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">مولد النصوص</h1>
        <p className="text-muted-foreground mt-2">أنشئ محتوى نصي عالي الجودة بالذكاء الاصطناعي</p>
      </div>
      <TextGenerator />
    </div>
  )
}
