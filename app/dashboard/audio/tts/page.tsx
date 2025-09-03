import { TextToSpeech } from "../../components/audio/text-to-speech"

export default function TTSPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">تحويل النص إلى صوت</h1>
        <p className="text-muted-foreground mt-2">حول النصوص إلى ملفات صوتية عالية الجودة</p>
      </div>
      <TextToSpeech />
    </div>
  )
}
