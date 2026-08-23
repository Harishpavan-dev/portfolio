import { useState } from 'react';
import { motion } from 'framer-motion';

const ChatInput = ({ onSend, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 p-3 border-t border-white/5 bg-dark-bg/60 backdrop-blur-sm"
    >
      <div className="flex-1 relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isLoading ? 'AI is thinking...' : 'Ask me anything...'}
          disabled={isLoading}
          rows={1}
          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-sm font-inter resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ maxHeight: '80px' }}
          aria-label="Chat message input"
          id="chat-input"
        />
      </div>

      <motion.button
        type="submit"
        disabled={!input.trim() || isLoading}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className={`p-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ${
          input.trim() && !isLoading
            ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-primary/50'
            : 'bg-white/5 text-gray-600 cursor-not-allowed'
        }`}
        aria-label="Send message"
        id="chat-send-btn"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </motion.button>
    </form>
  );
};

export default ChatInput;
