"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const EXAMPLE_PROMPTS = [
  "What should I eat in first trimester?",
  "How do I reduce morning sickness?",
  "Is exercise safe during pregnancy?",
];

const AI_RESPONSES: Record<string, string> = {
  default:
    "That's a great question! While I can provide general pregnancy guidance, I'd always recommend consulting your healthcare provider for personalised advice. Sign up for MamaConnect to get tailored tips based on your trimester!",
  food: "During pregnancy, focus on folate-rich foods, lean proteins, whole grains, and plenty of fruits and vegetables. Avoid raw meats, unpasteurised dairy, high-mercury fish, and limit caffeine. Sign up to get a personalised nutrition plan!",
  morning:
    "Morning sickness is very common in early pregnancy. Try eating small, frequent meals, keeping crackers nearby, staying hydrated, and drinking ginger tea. If symptoms are severe, please see your doctor.",
  week: "Pregnancy lasts 40 weeks divided into 3 trimesters. Each week brings new developments for your baby! Sign up to track your week-by-week journey with MamaConnect.",
  exercise:
    "Light to moderate exercise like walking, swimming, or prenatal yoga is generally safe and beneficial. Aim for 30 minutes most days. Always listen to your body and avoid contact sports.",
  vitamin:
    "Key supplements include folic acid (400–800 mcg daily), iron, calcium, vitamin D, and omega-3s. A prenatal vitamin covers most needs. Always check dosages with your healthcare provider.",
  weight:
    "Healthy weight gain depends on your pre-pregnancy BMI. Generally 11–16 kg is recommended for a normal BMI. Your midwife or doctor can give you personalised guidance.",
  appointment:
    "Regular prenatal check-ups are essential! Typical schedule includes visits at weeks 8, 12, 16, 20, 24, 28, 32, 36, and weekly after 36 weeks. Sign up to set appointment reminders!",
  community:
    "MamaConnect has a wonderful community of mothers sharing experiences, tips, and support. Sign up to join 1,240+ mamas across Algeria and connect with others on the same journey!",
};

function getAIResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("food") || lower.includes("eat") || lower.includes("avoid") || lower.includes("nutrition")) return AI_RESPONSES.food;
  if (lower.includes("morning") || lower.includes("nausea") || lower.includes("sick")) return AI_RESPONSES.morning;
  if (lower.includes("week") || lower.includes("trimester")) return AI_RESPONSES.week;
  if (lower.includes("exercise") || lower.includes("active") || lower.includes("workout") || lower.includes("sport")) return AI_RESPONSES.exercise;
  if (lower.includes("vitamin") || lower.includes("supplement") || lower.includes("folic")) return AI_RESPONSES.vitamin;
  if (lower.includes("weight") || lower.includes("gain")) return AI_RESPONSES.weight;
  if (lower.includes("appointment") || lower.includes("visit") || lower.includes("check")) return AI_RESPONSES.appointment;
  if (lower.includes("community") || lower.includes("connect") || lower.includes("mother")) return AI_RESPONSES.community;
  return AI_RESPONSES.default;
}

function getTimestamp(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function AIBotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
      <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function MinimizeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function LandingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm the MamaConnect AI assistant. Ask me anything about pregnancy — nutrition, symptoms, baby development, and more.",
      isUser: false,
      timestamp: getTimestamp(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  function handleSend() {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      isUser: true,
      timestamp: getTimestamp(),
    };
    setMessages((prev) => [...prev, userMsg]);
    const userText = input.trim();
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        text: getAIResponse(userText),
        isUser: false,
        timestamp: getTimestamp(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handlePrompt(prompt: string) {
    setInput(prompt);
    if (inputRef.current) inputRef.current.focus();
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {isOpen && (
        <div
          className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ height: "460px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#F46A6A] to-[#FBC4AB]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <AIBotIcon />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">MamaConnect AI</p>
                <p className="text-[10px] text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Minimize"
              >
                <MinimizeIcon />
              </button>
              <button
                onClick={() => { setIsOpen(false); setMessages([{ id: 1, text: "Hi! I'm the MamaConnect AI assistant. Ask me anything about pregnancy — nutrition, symptoms, baby development, and more.", isUser: false, timestamp: getTimestamp() }]); }}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Suggested prompts (only visible with initial message) */}
          {messages.length === 1 && (
            <div className="px-4 pt-3 pb-1 flex flex-col gap-1.5">
              {EXAMPLE_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => handlePrompt(p)}
                  className="text-left text-xs text-gray-600 bg-gray-50 hover:bg-rose-50 hover:text-[#F46A6A] px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end gap-2 ${msg.isUser ? "justify-end" : "justify-start"}`}>
                {!msg.isUser && (
                  <div className="w-6 h-6 rounded-full bg-[#F46A6A] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                      <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
                    </svg>
                  </div>
                )}
                <div className={`max-w-[78%] px-3 py-2 rounded-xl text-xs leading-relaxed shadow-sm ${
                  msg.isUser
                    ? "bg-[#F46A6A] text-white rounded-br-md"
                    : "bg-white text-gray-700 border border-gray-100 rounded-bl-md"
                }`}>
                  {msg.text}
                  <p className={`text-[9px] mt-1 ${msg.isUser ? "text-white/70" : "text-gray-400"}`}>{msg.timestamp}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-end gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F46A6A] flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                    <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
                  </svg>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl rounded-bl-md px-3 py-2.5 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* CTA strip */}
          <div className="px-4 py-2 bg-rose-50 border-t border-rose-100 text-center">
            <p className="text-[10px] text-gray-500">
              Want personalised tips?{" "}
              <a href="/auth?mode=signup" className="font-semibold text-[#F46A6A] hover:underline">
                Create a free account
              </a>
            </p>
          </div>

          {/* Input */}
          <div className="px-3 pb-3 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a pregnancy question..."
                className="flex-1 text-xs text-gray-800 outline-none placeholder:text-gray-400 bg-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-7 h-7 rounded-lg bg-[#F46A6A] text-white flex items-center justify-center hover:bg-[#e55d5d] transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
                aria-label="Send"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F46A6A] to-[#FBC4AB] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative"
        aria-label="Open AI chat"
      >
        {isOpen ? (
          <CloseIcon />
        ) : (
          <>
            <AIBotIcon />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          </>
        )}
      </button>
    </div>
  );
}
