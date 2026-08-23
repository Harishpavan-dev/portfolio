import { useState, useCallback, useRef } from 'react';

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content: "Hey there! 👋 I'm **Harish AI**, your personal assistant on this portfolio. Ask me anything about Harishpavan's skills, projects, or services. How can I help you today?",
  timestamp: new Date(),
};

export function useChat() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const abortControllerRef = useRef(null);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
    setError(null);
  }, []);

  const sendMessage = useCallback(async (content) => {
    if (!content.trim() || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    const assistantMessageId = `assistant-${Date.now()}`;

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    // Create assistant placeholder
    setMessages((prev) => [
      ...prev,
      { id: assistantMessageId, role: 'assistant', content: '', timestamp: new Date() },
    ]);

    try {
      // Cancel any previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      // Build messages for API (exclude welcome message)
      const apiMessages = [...messages.filter((m) => m.id !== 'welcome'), userMessage].map(
        ({ role, content }) => ({ role, content })
      );

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Server error (${response.status})`);
      }

      // Read SSE stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;

          const data = trimmed.slice(6);
          if (data === '[DONE]') break;

          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              throw new Error(parsed.error);
            }
            if (parsed.content) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMessageId
                    ? { ...msg, content: msg.content + parsed.content }
                    : msg
                )
              );
            }
          } catch (parseErr) {
            if (parseErr.message === 'Stream interrupted') throw parseErr;
            // Skip unparseable chunks
          }
        }
      }
    } catch (err) {
      if (err.name === 'AbortError') return;

      setError(err.message || 'Something went wrong. Please try again.');

      // Remove empty assistant message on error
      setMessages((prev) =>
        prev.filter((msg) => !(msg.id === assistantMessageId && !msg.content))
      );
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [isLoading, messages]);

  const clearChat = useCallback(() => {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
  }, []);

  const retry = useCallback(() => {
    const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user');
    if (lastUserMsg) {
      // Remove last failed assistant message and the user message
      setMessages((prev) => {
        const filtered = prev.slice(0, -1); // remove empty assistant
        return filtered.slice(0, -1); // remove user message
      });
      sendMessage(lastUserMsg.content);
    }
  }, [messages, sendMessage]);

  return {
    messages,
    isLoading,
    error,
    isOpen,
    toggleChat,
    sendMessage,
    clearChat,
    retry,
  };
}
