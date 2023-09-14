import { create } from "zustand";

const useReservationDateStore = create((set) => ({
  reservationDate: "",
  setReservationDate: (state) => set(() => ({ reservationDate: state })),
}));

export default useReservationDateStore;
