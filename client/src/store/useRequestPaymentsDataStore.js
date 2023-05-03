import { create } from "zustand";

const useRequestPaymentsDataStore = create((set) => ({
  requestPaymentsData: "",
  setRequestPaymentsData: (data) =>
    set(() => ({ requestPaymentsData: { ...data } })),
}));

export default useRequestPaymentsDataStore;
