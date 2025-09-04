"use client";

import { useState } from "react";

type Ticket = {
  id: number;
  subject: string;
  message: string;
  status: "open" | "closed";
};

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;
    const newTicket: Ticket = {
      id: Date.now(),
      subject,
      message,
      status: "open",
    };
    setTickets([newTicket, ...tickets]);
    setSubject("");
    setMessage("");
  };

  const closeTicket = (id: number) => {
    setTickets(
      tickets.map((t) => (t.id === id ? { ...t, status: "closed" } : t))
    );
  };

  return (
    <main className="p-8 text-right max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">پشتیبانی</h1>
      <p className="mb-6">
        در این بخش می‌توانید با تیم پشتیبانی ارتباط برقرار کنید و راهنمایی
        دریافت نمایید.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded shadow p-4 mb-8"
      >
        <h2 className="text-lg font-semibold mb-2">ارسال تیکت جدید</h2>
        <input
          type="text"
          placeholder="موضوع"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          placeholder="پیام"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ارسال تیکت
        </button>
      </form>

      <section>
        <h2 className="text-lg font-semibold mb-4">تیکت‌های شما</h2>
        {tickets.length === 0 ? (
          <p className="text-gray-500">هنوز تیکتی ارسال نکرده‌اید.</p>
        ) : (
          <ul className="space-y-4">
            {tickets.map((ticket) => (
              <li
                key={ticket.id}
                className="border rounded p-4 bg-gray-50 flex flex-col"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{ticket.subject}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      ticket.status === "open"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {ticket.status === "open" ? "باز" : "بسته"}
                  </span>
                </div>
                <p className="mb-2">{ticket.message}</p>
                {ticket.status === "open" && (
                  <button
                    onClick={() => closeTicket(ticket.id)}
                    className="self-end bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    بستن تیکت
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
