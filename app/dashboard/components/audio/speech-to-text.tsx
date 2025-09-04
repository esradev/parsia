"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Mic,
  FileAudio,
  Copy,
  Download,
  RefreshCw,
  Play,
  Pause,
} from "lucide-react";

const languages = [
  { value: "ar", label: "عربی", flag: "🇸🇦" },
  { value: "en", label: "انگلیسی", flag: "🇺🇸" },
  { value: "fr", label: "فرانسوی", flag: "🇫🇷" },
  { value: "es", label: "اسپانیایی", flag: "🇪🇸" },
];

const audioFormats = [
  { value: "mp3", label: "MP3" },
  { value: "wav", label: "WAV" },
  { value: "m4a", label: "M4A" },
  { value: "ogg", label: "OGG" },
];

export function SpeechToText() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("ar");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcribedText, setTranscribedText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAudioUrl(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      setSelectedFile(file);
      setAudioUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const startRecording = () => {
    setIsRecording(true);
    // Here you would implement actual recording logic
    setTimeout(() => {
      setIsRecording(false);
      // Simulate recorded file
      setAudioUrl("/placeholder-recording.mp3");
    }, 5000);
  };

  const handleTranscribe = async () => {
    if (!selectedFile && !audioUrl) return;

    setIsProcessing(true);

    // Simulate transcription
    setTimeout(() => {
      const sampleText = `این یک متن نمونه است که از فایل صوتی استخراج شده است.

هوش مصنوعی می‌تواند گفتار را با دقت بالا به متن تبدیل کند و از زبان فارسی و بسیاری زبان‌های دیگر پشتیبانی می‌کند.

امکانات موجود:
- دقت بالا در تشخیص گفتار
- پشتیبانی از فرمت‌های صوتی مختلف
- افزودن خودکار علائم نگارشی
- تشخیص گویندگان مختلف

این متن آماده استفاده و ویرایش بر اساس نیاز شماست.`;

      setTranscribedText(sampleText);
      setIsProcessing(false);
    }, 4000);
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcribedText);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Upload & Settings */}
      <Card>
        <CardHeader className="text-right">
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5" />
            بارگذاری فایل صوتی
          </CardTitle>
          <CardDescription>
            یک فایل صوتی بارگذاری کنید یا صدای جدید ضبط کنید
          </CardDescription>
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
                <p className="text-sm text-muted-foreground mt-1">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} مگابایت
                </p>
              </div>
            ) : (
              <div>
                <p className="font-medium">فایل صوتی را اینجا بکشید</p>
                <p className="text-sm text-muted-foreground mt-1">
                  یا برای انتخاب فایل کلیک کنید
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  {audioFormats.map((format) => (
                    <Badge
                      key={format.value}
                      variant="outline"
                      className="text-xs"
                    >
                      {format.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">یا</span>
            <Separator className="flex-1" />
          </div>

          {/* Recording */}
          <Button
            onClick={startRecording}
            disabled={isRecording}
            variant="outline"
            className="w-full bg-transparent"
          >
            {isRecording ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                در حال ضبط...
              </>
            ) : (
              <>
                <Mic className="ml-2 h-4 w-4" />
                ضبط صدای جدید
              </>
            )}
          </Button>

          {/* Language Selection */}
          <div className="space-y-2">
            <Label className="text-right block">زبان فایل صوتی</Label>
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
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <span className="text-sm">پیش‌نمایش فایل صوتی</span>
              </div>
              <audio
                ref={audioRef}
                src={audioUrl}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </div>
          )}

          {/* Transcribe Button */}
          <Button
            onClick={handleTranscribe}
            disabled={(!selectedFile && !audioUrl) || isProcessing}
            className="w-full"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                در حال تبدیل...
              </>
            ) : (
              <>
                <FileAudio className="ml-2 h-4 w-4" />
                تبدیل به متن
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Transcribed Text */}
      <Card>
        <CardHeader className="text-right">
          <div className="flex items-center justify-between">
            <CardTitle>متن استخراج‌شده</CardTitle>
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
          <CardDescription>متن تبدیل‌شده از فایل صوتی</CardDescription>
        </CardHeader>
        <CardContent>
          {transcribedText ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">
                  {transcribedText.split(" ").length} کلمه
                </Badge>
                <Badge variant="secondary">{transcribedText.length} حرف</Badge>
                <Badge variant="secondary">
                  {languages.find((l) => l.value === language)?.label}
                </Badge>
              </div>

              <Separator />

              <Textarea
                value={transcribedText}
                onChange={(e) => setTranscribedText(e.target.value)}
                className="min-h-[300px] text-right"
                dir="rtl"
                placeholder="متن استخراج‌شده اینجا نمایش داده می‌شود..."
              />
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <Mic className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>متن استخراج‌شده اینجا نمایش داده می‌شود</p>
              <p className="text-sm mt-1">
                یک فایل صوتی بارگذاری کنید و روی «تبدیل به متن» کلیک کنید
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
