import { create } from "zustand";

export const useChatStore = create((set, get) => ({
  messages: [],
  hidden: false,
  setMessages: (msgs) => set({ messages: Array.isArray(msgs) ? msgs : [] }),
  addMessage: (msg) => set({ messages: [...get().messages, msg] }),
  clearMessages: () => set({ messages: [] }), 
  hideMessages: () => set({ hidden: true }),
  showMessages: () => set({ hidden: false }),
}));