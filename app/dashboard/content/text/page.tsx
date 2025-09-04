import { TextGenerator } from "../../components/content/text-generator";

export default function TextGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-balance">تولیدکننده متن</h1>
        <p className="text-muted-foreground mt-2">
          تولید محتوای متنی باکیفیت با هوش مصنوعی
        </p>
      </div>
      <TextGenerator />
    </div>
  );
}
