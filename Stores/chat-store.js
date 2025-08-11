import { create } from "zustand"

export const useChatStore = create((set, get) => ({
  messages: [],
  setMessages: (msgs) => set({ messages: Array.isArray(msgs) ? msgs : [] }),
  addMessage: (msg) => set({ messages: [...get().messages, msg] }),
  clearMessages: () => set({ messages: [] }),
}))
