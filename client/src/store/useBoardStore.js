import { create } from "zustand";

const useBoardStore = create((set) => ({
  boardStoreData: {},

  setBoardStoreData(data) {
    set((state) => ({
      boardStoreData: {
        title: data.title,
        category: data.category,
        content: data.content,
      },
    }));
  },
}));

export default useBoardStore;
