"use client";

const marketingTools = [
  {
    name: "تولید محتوا هوشمند",
    description:
      "ایجاد محتوای متنی و تصویری با کمک هوش مصنوعی برای شبکه‌های اجتماعی و وب‌سایت.",
  },
  {
    name: "تحلیل رقبا",
    description:
      "بررسی و تحلیل فعالیت‌های رقبا برای بهبود استراتژی بازاریابی شما.",
  },
  {
    name: "ایمیل مارکتینگ خودکار",
    description:
      "ارسال و مدیریت کمپین‌های ایمیلی با شخصی‌سازی و زمان‌بندی هوشمند.",
  },
  {
    name: "مدیریت شبکه‌های اجتماعی",
    description:
      "زمان‌بندی و انتشار پست‌ها، پاسخگویی خودکار به پیام‌ها و تحلیل عملکرد.",
  },
  {
    name: "بهینه‌سازی تبلیغات",
    description: "تحلیل و بهینه‌سازی کمپین‌های تبلیغاتی برای افزایش بازدهی.",
  },
];

export default function MarketingPage() {
  return (
    <main className="p-8 text-right">
      <h1 className="text-2xl font-bold mb-4">ابزارهای بازاریابی</h1>
      <p className="mb-6">
        در این بخش می‌توانید ابزارهای هوشمند بازاریابی را برای رشد کسب‌وکار خود
        پیدا کنید.
      </p>
      <section>
        <ul className="space-y-4">
          {marketingTools.map((tool, idx) => (
            <li key={idx} className="border rounded-lg p-4 shadow-sm bg-white">
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-gray-700">{tool.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
