import { create } from "zustand";

const useTicketDataStore = create((set) => ({
  ticketData: "",
  setTicketData: (data) => set(() => ({ ticketData: { ...data } })),
}));

export default useTicketDataStore;
