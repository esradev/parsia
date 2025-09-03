"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Volume2, Play, Pause, Download, RefreshCw, User } from "lucide-react"

const voices = [
  { value: "sara", label: "سارة", gender: "أنثى", language: "العربية", accent: "خليجي" },
  { value: "ahmed", label: "أحمد", gender: "ذكر", language: "العربية", accent: "مصري" },
  { value: "layla", label: "ليلى", gender: "أنثى", language: "العربية", accent: "شامي" },
  { value: "omar", label: "عمر", gender: "ذكر", language: "العربية", accent: "مغربي" },
  { value: "fatima", label: "فاطمة", gender: "أنثى", language: "العربية", accent: "عراقي" },
]

const formats = [
  { value: "mp3", label: "MP3", description: "جودة جيدة، حجم صغير" },
  { value: "wav", label: "WAV", description: "جودة عالية، حجم كبير" },
  { value: "ogg", label: "OGG", description: "جودة متوسطة، مضغوط" },
]

export function TextToSpeech() {
  const [text, setText] = useState("")
  const [selectedVoice, setSelectedVoice] = useState("")
  const [speed, setSpeed] = useState([1])
  const [pitch, setPitch] = useState([1])
  const [format, setFormat] = useState("mp3")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioUrl, setAudioUrl] = useState("")
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleGenerate = async () => {
    if (!text.trim() || !selectedVoice) return

    setIsGenerating(true)

    // Simulate audio generation
    setTimeout(() => {
      setAudioUrl("/placeholder-audio.mp3") // This would be the actual generated audio URL
      setIsGenerating(false)
    }, 3000)
  }

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const selectedVoiceData = voices.find((v) => v.value === selectedVoice)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input Form */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            إعدادات التحويل
          </CardTitle>
          <CardDescription>أدخل النص وحدد إعدادات الصوت</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="text" className="text-right block">
              النص المراد تحويله
            </Label>
            <Textarea
              id="text"
              placeholder="اكتب النص الذي تريد تحويله إلى صوت..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[120px] text-right"
              dir="rtl"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{text.length} حرف</span>
              <span>الحد الأقصى: 5000 حرف</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-right block">اختيار الصوت</Label>
            <Select value={selectedVoice} onValueChange={setSelectedVoice} dir="rtl">
              <SelectTrigger>
                <SelectValue placeholder="اختر الصوت" />
              </SelectTrigger>
              <SelectContent>
                {voices.map((voice) => (
                  <SelectItem key={voice.value} value={voice.value}>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{voice.label}</span>
                        <Badge variant="outline" className="text-xs">
                          {voice.gender}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {voice.language} - {voice.accent}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block">سرعة الكلام: {speed[0]}x</Label>
              <Slider value={speed} onValueChange={setSpeed} max={2} min={0.5} step={0.1} className="w-full" />
            </div>

            <div className="space-y-2">
              <Label className="text-right block">نبرة الصوت: {pitch[0]}x</Label>
              <Slider value={pitch} onValueChange={setPitch} max={2} min={0.5} step={0.1} className="w-full" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-right block">تنسيق الملف</Label>
            <Select value={format} onValueChange={setFormat} dir="rtl">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {formats.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    <div className="text-right">
                      <div className="font-medium">{f.label}</div>
                      <div className="text-xs text-muted-foreground">{f.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleGenerate} disabled={!text.trim() || !selectedVoice || isGenerating} className="w-full">
            {isGenerating ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                جاري التحويل...
              </>
            ) : (
              <>
                <Volume2 className="ml-2 h-4 w-4" />
                تحويل إلى صوت
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Audio Player */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle>مشغل الصوت</CardTitle>
          <CardDescription>استمع إلى النتيجة وحمل الملف</CardDescription>
        </CardHeader>
        <CardContent>
          {audioUrl ? (
            <div className="space-y-4">
              {/* Voice Info */}
              {selectedVoiceData && (
                <div className="p-3 bg-muted rounded-lg text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <Badge variant="secondary">{selectedVoiceData.accent}</Badge>
                    <Badge variant="secondary">{selectedVoiceData.gender}</Badge>
                    <span className="font-medium">{selectedVoiceData.label}</span>
                    <User className="h-4 w-4" />
                  </div>
                </div>
              )}

              {/* Audio Controls */}
              <div className="flex items-center gap-4 justify-center p-6 bg-muted rounded-lg">
                <Button onClick={togglePlayback} size="lg">
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">الملف الصوتي جاهز</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {format.toUpperCase()} • {speed[0]}x • {pitch[0]}x
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <Button className="w-full bg-transparent" variant="outline">
                <Download className="ml-2 h-4 w-4" />
                تحميل الملف الصوتي
              </Button>

              {/* Hidden Audio Element */}
              <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <Volume2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>سيظهر مشغل الصوت هنا</p>
              <p className="text-sm mt-1">املأ النموذج واضغط على "تحويل إلى صوت"</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
