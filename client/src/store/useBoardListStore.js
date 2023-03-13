import { create } from "zustand";

const useBoardListStore = create((set) => ({
  boardList: [],

  setBoardListData(data) {
    set((state) => ({
      boardList: [...data],
    }));
  },
}));

export default useBoardListStore;
