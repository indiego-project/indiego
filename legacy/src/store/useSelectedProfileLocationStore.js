import { create } from "zustand";

const useSelectedProfileLocationStore = create((set) => ({
  address: "없음",
  latitude: "",
  longitude: "",
  setLocation: (clickedLocation) =>
    set(() => ({
      address: JSON.parse(clickedLocation).address,
      latitude: JSON.parse(clickedLocation).latitude,
      longitude: JSON.parse(clickedLocation).longitude,
    })),
}));

export default useSelectedProfileLocationStore;
