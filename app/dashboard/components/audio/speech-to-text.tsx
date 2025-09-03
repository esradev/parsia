"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Mic, FileAudio, Copy, Download, RefreshCw, Play, Pause } from "lucide-react"

const languages = [
  { value: "ar", label: "العربية", flag: "🇸🇦" },
  { value: "en", label: "الإنجليزية", flag: "🇺🇸" },
  { value: "fr", label: "الفرنسية", flag: "🇫🇷" },
  { value: "es", label: "الإسبانية", flag: "🇪🇸" },
]

const audioFormats = [
  { value: "mp3", label: "MP3" },
  { value: "wav", label: "WAV" },
  { value: "m4a", label: "M4A" },
  { value: "ogg", label: "OGG" },
]

export function SpeechToText() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [language, setLanguage] = useState("ar")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [transcribedText, setTranscribedText] = useState("")
  const [audioUrl, setAudioUrl] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setAudioUrl(URL.createObjectURL(file))
    }
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith("audio/")) {
      setSelectedFile(file)
      setAudioUrl(URL.createObjectURL(file))
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const startRecording = () => {
    setIsRecording(true)
    // Here you would implement actual recording logic
    setTimeout(() => {
      setIsRecording(false)
      // Simulate recorded file
      setAudioUrl("/placeholder-recording.mp3")
    }, 5000)
  }

  const handleTranscribe = async () => {
    if (!selectedFile && !audioUrl) return

    setIsProcessing(true)

    // Simulate transcription
    setTimeout(() => {
      const sampleText = `هذا نص تجريبي تم استخراجه من الملف الصوتي. 

يمكن للذكاء الاصطناعي تحويل الكلام إلى نص مكتوب بدقة عالية، مع دعم اللغة العربية والعديد من اللغات الأخرى.

الميزات المتاحة:
- دقة عالية في التعرف على الكلام
- دعم تنسيقات صوتية متعددة
- إضافة علامات الترقيم تلقائياً
- تحديد المتحدثين المختلفين

هذا النص جاهز للاستخدام والتعديل حسب احتياجاتك.`

      setTranscribedText(sampleText)
      setIsProcessing(false)
    }, 4000)
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

  const handleCopy = () => {
    navigator.clipboard.writeText(transcribedText)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Upload & Settings */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5" />
            رفع الملف الصوتي
          </CardTitle>
          <CardDescription>ارفع ملف صوتي أو سجل صوتاً جديداً</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* File Upload Area */}
          <div
            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            <FileAudio className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            {selectedFile ? (
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            ) : (
              <div>
                <p className="font-medium">اسحب الملف الصوتي هنا</p>
                <p className="text-sm text-muted-foreground mt-1">أو اضغط لاختيار ملف</p>
                <div className="flex justify-center gap-2 mt-2">
                  {audioFormats.map((format) => (
                    <Badge key={format.value} variant="outline" className="text-xs">
                      {format.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <input ref={fileInputRef} type="file" accept="audio/*" onChange={handleFileSelect} className="hidden" />

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">أو</span>
            <Separator className="flex-1" />
          </div>

          {/* Recording */}
          <Button onClick={startRecording} disabled={isRecording} variant="outline" className="w-full bg-transparent">
            {isRecording ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                جاري التسجيل...
              </>
            ) : (
              <>
                <Mic className="ml-2 h-4 w-4" />
                تسجيل صوت جديد
              </>
            )}
          </Button>

          {/* Language Selection */}
          <div className="space-y-2">
            <Label className="text-right block">لغة الملف الصوتي</Label>
            <Select value={language} onValueChange={setLanguage} dir="rtl">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Audio Preview */}
          {audioUrl && (
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3 justify-center">
                <Button onClick={togglePlayback} size="sm">
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <span className="text-sm">معاينة الملف الصوتي</span>
              </div>
              <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
            </div>
          )}

          {/* Transcribe Button */}
          <Button onClick={handleTranscribe} disabled={(!selectedFile && !audioUrl) || isProcessing} className="w-full">
            {isProcessing ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                جاري التحويل...
              </>
            ) : (
              <>
                <FileAudio className="ml-2 h-4 w-4" />
                تحويل إلى نص
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Transcribed Text */}
      <Card>
        <CardHeader className="text-right">
          <div className="flex items-center justify-between">
            <CardTitle>النص المستخرج</CardTitle>
            {transcribedText && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <CardDescription>النص المحول من الملف الصوتي</CardDescription>
        </CardHeader>
        <CardContent>
          {transcribedText ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{transcribedText.split(" ").length} كلمة</Badge>
                <Badge variant="secondary">{transcribedText.length} حرف</Badge>
                <Badge variant="secondary">{languages.find((l) => l.value === language)?.label}</Badge>
              </div>

              <Separator />

              <Textarea
                value={transcribedText}
                onChange={(e) => setTranscribedText(e.target.value)}
                className="min-h-[300px] text-right"
                dir="rtl"
                placeholder="النص المستخرج سيظهر هنا..."
              />
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <Mic className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>سيظهر النص المستخرج هنا</p>
              <p className="text-sm mt-1">ارفع ملف صوتي واضغط على "تحويل إلى نص"</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
