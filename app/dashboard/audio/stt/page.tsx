import { SpeechToText } from "../../components/audio/speech-to-text"

export default function STTPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">تحويل الصوت إلى نص</h1>
        <p className="text-muted-foreground mt-2">حول الملفات الصوتية إلى نصوص مكتوبة</p>
      </div>
      <SpeechToText />
    </div>
  )
}
