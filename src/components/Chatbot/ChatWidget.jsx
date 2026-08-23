import { useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../../hooks/useChat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const SUGGESTIONS = [
  "What are Harish's skills?",
  "Tell me about his projects",
  "How can I hire him?",
  "What services does he offer?",
];

const ChatWidget = () => {
  const {
    messages,
    isLoading,
    error,
    isOpen,
    toggleChat,
    sendMessage,
    clearChat,
    retry,
  } = useChat();

  const messagesEndRef = useRef(null);
  const chatPanelRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleChat();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleChat]);

  // Close if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        chatPanelRef.current &&
        !chatPanelRef.current.contains(e.target) &&
        !e.target.closest('#chat-fab')
      ) {
        toggleChat();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, toggleChat]);

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <>
      {/* Floating Action Button — hidden when chat is open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="chat-fab"
            onClick={toggleChat}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/30 flex items-center justify-center cursor-pointer border border-primary-light/20 group"
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 30px rgba(108, 99, 255, 0.6), 0 0 60px rgba(108, 99, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            aria-label="Open AI chat assistant"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.6, delay: 2, repeat: Infinity, repeatDelay: 8 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatPanelRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[550px] rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-primary/10 border border-white/10 chat-panel-mobile"
            style={{
              background: 'linear-gradient(180deg, rgba(18, 18, 42, 0.98) 0%, rgba(10, 10, 26, 0.99) 100%)',
              backdropFilter: 'blur(20px)',
            }}
            role="dialog"
            aria-label="AI Chat Assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                {/* AI Avatar */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-primary/20">
                    AI
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent-cyan border-2 border-dark-bg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Harish AI{' '}
                    <span className="text-xs ml-1">✨</span>
                  </h3>
                  <p className="text-[10px] text-accent-cyan font-medium">
                    {isLoading ? 'Typing...' : 'Online • Ask me anything'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Clear chat */}
                <button
                  onClick={clearChat}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all"
                  aria-label="Clear chat history"
                  title="Clear chat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                {/* Close */}
                <button
                  onClick={toggleChat}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all"
                  aria-label="Close chat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1 chat-scrollbar" style={{ minHeight: '300px', maxHeight: '380px' }}>
              {messages.map((msg, index) => (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  isLatest={index === messages.length - 1 && msg.role === 'assistant'}
                />
              ))}

              {/* Error banner */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"
                >
                  <span>⚠️ {error}</span>
                  <button
                    onClick={retry}
                    className="ml-auto text-red-300 hover:text-white underline text-xs"
                  >
                    Retry
                  </button>
                </motion.div>
              )}

              {/* Quick suggestions (only when just welcome message) */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 space-y-2"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold px-1">
                    Quick Questions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((suggestion, i) => (
                      <motion.button
                        key={i}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput onSend={sendMessage} isLoading={isLoading} />

            {/* Powered by footer */}
            <div className="text-center py-1.5 border-t border-white/5">
              <p className="text-[9px] text-gray-600">
                Powered by • Harish AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
