import { create } from "zustand";

const useSelectProfileLocationModalStore = create((set) => ({
  openModal: false,
  setOpenModal: () => set((state) => ({ openModal: !state.openModal })),
}));

export default useSelectProfileLocationModalStore;
