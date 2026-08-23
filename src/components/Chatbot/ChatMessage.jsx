import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const ChatMessage = ({ message, isLatest }) => {
  const isUser = message.role === 'user';
  const msgRef = useRef(null);

  useEffect(() => {
    if (isLatest && msgRef.current) {
      msgRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [isLatest, message.content]);

  // Simple markdown-like bold rendering
  const renderContent = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      ref={msgRef}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div
        className={`relative max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-gradient-to-br from-primary to-primary-dark text-white rounded-br-md shadow-lg shadow-primary/20'
            : 'glass-card text-gray-200 rounded-bl-md border border-white/5'
        }`}
      >
        {/* Role indicator dot */}
        {!isUser && (
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-[10px] font-bold text-accent-cyan/70 uppercase tracking-wider">
              Harish AI
            </span>
          </div>
        )}

        <div className="whitespace-pre-wrap break-words font-inter">
          {renderContent(message.content)}
          {/* Blinking cursor for streaming */}
          {!isUser && isLatest && !message.content && (
            <span className="inline-flex items-center gap-1 py-1">
              <span className="chat-typing-dot" />
              <span className="chat-typing-dot" style={{ animationDelay: '0.15s' }} />
              <span className="chat-typing-dot" style={{ animationDelay: '0.3s' }} />
            </span>
          )}
        </div>

        {/* Timestamp */}
        <div
          className={`text-[10px] mt-1.5 ${
            isUser ? 'text-white/50 text-right' : 'text-gray-500'
          }`}
        >
          {message.timestamp?.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
