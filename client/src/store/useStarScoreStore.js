import { create } from "zustand";

const useStarScoreStore = create((set) => ({
  score: 0,
  setScore: (starScore) => set(() => ({ score: starScore })),
}));

export default useStarScoreStore;
