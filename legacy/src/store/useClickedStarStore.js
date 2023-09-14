import { create } from "zustand";

const useClickedStarStore = create((set) => ({
  clicked: [false, false, false, false, false],
  setClicked: (state) => set(() => ({ clicked: state })),
}));

export default useClickedStarStore;
