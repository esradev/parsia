import { AudioTools } from "../components/audio/audio-tools"

export default function AudioPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">أدوات الصوت الذكية</h1>
        <p className="text-muted-foreground mt-2">تحويل النص إلى صوت والصوت إلى نص</p>
      </div>
      <AudioTools />
    </div>
  )
}
