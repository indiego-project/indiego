import { create } from "zustand";

const useOpenModalStore = create((set) => ({
  openModal: false,
  setOpenModal: () => set((state) => ({ openModal: !state.openModal })),
}));

export default useOpenModalStore;
