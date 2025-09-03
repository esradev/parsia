import { CaptionGenerator } from "../../components/content/caption-generator"

export default function CaptionGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">مولد التسميات التوضيحية</h1>
        <p className="text-muted-foreground mt-2">أنشئ تسميات توضيحية جذابة لوسائل التواصل الاجتماعي</p>
      </div>
      <CaptionGenerator />
    </div>
  )
}
