// useAnnounceStore.js
import { create } from "zustand";
import { sendAnnounce, getAnnounce } from "../src/Api/announce";

const useAnnounceStore = create((set) => ({
  announces: [],
  loading: false,
  error: null,

  // fetch announces
  fetchAnnounces: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAnnounce();
      set({ announces: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // send announce
  addAnnounce: async (announceData) => {
    set({ loading: true, error: null });
    try {
      const newAnnounce = await sendAnnounce(announceData);
      set((state) => ({
        announces: [...state.announces, newAnnounce],
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useAnnounceStore;
