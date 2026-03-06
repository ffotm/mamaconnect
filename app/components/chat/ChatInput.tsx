interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask MamaConnect AI anything..."
        className="flex-1 text-sm text-gray-800 outline-none placeholder:text-gray-400 bg-transparent"
      />
      <button
        onClick={onSend}
        disabled={!value.trim()}
        className="w-10 h-10 rounded-full bg-[#F46A6A] text-white flex items-center justify-center hover:bg-[#e55d5d] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
        aria-label="Send message"
      >
        <SendIcon />
      </button>
    </div>
  );
}
