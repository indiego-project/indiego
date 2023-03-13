import { create } from "zustand";

const useAnswerListStore = create((set) => ({
  answerList: [],

  getAnswerListData(data) {
    set((state) => ({
      answerList: [...data],
    }));
  },
}));

export default useAnswerListStore;
