interface ChatMessageProps {
  text: string;
  isUser: boolean;
  timestamp?: string;
}

function AIAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#F46A6A] flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
        <circle cx="9" cy="7" r="0.5" fill="white" />
        <circle cx="15" cy="7" r="0.5" fill="white" />
      </svg>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
      <span className="text-xs font-bold text-[#F46A6A]">You</span>
    </div>
  );
}

export default function ChatMessage({ text, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && <AIAvatar />}
      <div className={`max-w-[75%] px-4 py-3 shadow-sm ${
        isUser
          ? "bg-[#F46A6A] text-white rounded-2xl rounded-br-md"
          : "bg-white text-gray-700 rounded-2xl rounded-bl-md border border-gray-100"
      }`}>
        <p className="text-sm leading-relaxed">{text}</p>
        {timestamp && (
          <p className={`text-[10px] mt-1 ${isUser ? "text-white/70" : "text-gray-400"}`}>
            {timestamp}
          </p>
        )}
      </div>
      {isUser && <UserAvatar />}
    </div>
  );
}
