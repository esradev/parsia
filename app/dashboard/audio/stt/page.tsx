import { SpeechToText } from "../../components/audio/speech-to-text";

export default function STTPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">تبدیل گفتار به متن</h1>
        <p className="text-muted-foreground mt-2">
          فایل‌های صوتی را به متن تبدیل کنید
        </p>
      </div>
      <SpeechToText />
    </div>
  );
}
