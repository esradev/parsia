import { ImageGenerator } from "../components/images/image-generator"

export default function ImagesPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">مولد الصور بالذكاء الاصطناعي</h1>
        <p className="text-muted-foreground mt-2">أنشئ صوراً مذهلة باستخدام الذكاء الاصطناعي</p>
      </div>
      <ImageGenerator />
    </div>
  )
}
