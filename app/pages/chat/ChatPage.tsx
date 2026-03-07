"use client";

import { useState, useRef, useEffect } from "react";
import ChatMessage from "@/app/components/chat/ChatMessage";
import ChatInput from "@/app/components/chat/ChatInput";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const EXAMPLE_PROMPTS = [
  "What foods should I avoid during pregnancy?",
  "What happens in week 20 of pregnancy?",
  "How can I reduce morning sickness?",
  "Is it safe to exercise during pregnancy?",
  "What vitamins should I take?",
  "How much weight should I gain?",
];

const AI_RESPONSES: Record<string, string> = {
  default:
    "That's a great question! While I'm here to provide general pregnancy guidance, I'd always recommend consulting your healthcare provider for personalised medical advice. Is there anything specific about your pregnancy journey I can help with?",
  food: "During pregnancy, it's recommended to avoid raw or undercooked meats, unpasteurised dairy, high-mercury fish (like shark and swordfish), raw eggs, and excess caffeine. Focus on folate-rich foods, lean proteins, whole grains, and plenty of fruits and vegetables. Would you like more nutrition tips?",
  morning:
    "Morning sickness is very common, especially in the first trimester. Try eating small, frequent meals, keeping crackers by your bedside, staying hydrated, and trying ginger tea. Some mums find that vitamin B6 supplements help too. If symptoms are severe, please consult your doctor.",
  week: "At week 20, you're halfway through your pregnancy! Your baby is about 25cm long and weighs around 300g. You might start feeling those exciting first kicks (called quickening). This is usually when you'll have your mid-pregnancy ultrasound scan. How exciting!",
  exercise:
    "Light to moderate exercise is generally safe and beneficial during pregnancy. Walking, swimming, prenatal yoga, and low-impact aerobics are excellent choices. Aim for about 30 minutes of activity most days. Always listen to your body and avoid contact sports or activities with a risk of falling.",
  vitamin:
    "Key supplements during pregnancy include folic acid (especially in the first trimester), iron, calcium, vitamin D, and omega-3 fatty acids. Your prenatal vitamin should cover most of these. Always check with your healthcare provider about the right dosage for your needs.",
  weight:
    "Healthy weight gain during pregnancy varies based on your pre-pregnancy BMI. Generally, 11-16kg is recommended for those with a normal BMI. Your healthcare provider can give you personalised guidance based on your individual situation.",
};

function getAIResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("food") || lower.includes("eat") || lower.includes("avoid")) return AI_RESPONSES.food;
  if (lower.includes("morning") || lower.includes("nausea") || lower.includes("sick")) return AI_RESPONSES.morning;
  if (lower.includes("week")) return AI_RESPONSES.week;
  if (lower.includes("exercise") || lower.includes("active") || lower.includes("workout")) return AI_RESPONSES.exercise;
  if (lower.includes("vitamin") || lower.includes("supplement")) return AI_RESPONSES.vitamin;
  if (lower.includes("weight") || lower.includes("gain")) return AI_RESPONSES.weight;
  return AI_RESPONSES.default;
}

function getTimestamp(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your MamaConnect AI assistant 🌸 I'm here to help answer your pregnancy-related questions. How can I support you today?",
      isUser: false,
      timestamp: getTimestamp(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      isUser: true,
      timestamp: getTimestamp(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userText = input.trim();
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: getAIResponse(userText),
        isUser: false,
        timestamp: getTimestamp(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <>
      {/* Back to Dashboard */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#F46A6A] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Dashboard
          </a>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative pt-10 pb-12 sm:pt-14 sm:pb-14 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 50%, #fecdd3 100%)" }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#F46A6A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-4 shadow-sm">
            AI Assistant
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Talk to MamaConnect{" "}
            <span className="text-[#F46A6A]">AI</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Ask any pregnancy-related question and get supportive, helpful answers
            from our AI assistant — available anytime you need guidance.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="bg-gray-50 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Chat panel */}
            <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" style={{ minHeight: "520px" }}>
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#F46A6A] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                    <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">MamaConnect AI</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Online
                  </p>
                </div>
              </div>

              {/* Messages area */}
              <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-4" style={{ maxHeight: "400px" }}>
                {messages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    text={msg.text}
                    isUser={msg.isUser}
                    timestamp={msg.timestamp}
                  />
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F46A6A] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                        <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div className="px-5 py-4 border-t border-gray-100">
                <ChatInput value={input} onChange={setInput} onSend={handleSend} />
              </div>
            </div>

            {/* Side panel */}
            <div className="lg:w-80 shrink-0 space-y-5">
              {/* AI branding card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F46A6A] mx-auto mb-4 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                    <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
                    <circle cx="9" cy="7" r="0.5" fill="white" />
                    <circle cx="15" cy="7" r="0.5" fill="white" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">MamaConnect AI</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Your friendly pregnancy assistant, here to answer questions and
                  provide supportive guidance 24/7.
                </p>
              </div>

              {/* Suggested prompts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">Try asking:</h3>
                <div className="space-y-2">
                  {EXAMPLE_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handlePromptClick(prompt)}
                      className="w-full text-left text-xs text-gray-600 bg-gray-50 hover:bg-rose-50 hover:text-[#F46A6A] px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      &ldquo;{prompt}&rdquo;
                    </button>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">💡 Tips</h3>
                <ul className="space-y-2 text-xs text-gray-600 leading-relaxed">
                  <li>• Ask specific questions for better answers</li>
                  <li>• Mention your trimester for tailored advice</li>
                  <li>• Always consult your doctor for medical decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
