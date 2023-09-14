import { create } from "zustand";

const useProfileDataStore = create((set) => ({
  profileData: "",
  setProfileData: (data) => set(() => ({ profileData: { ...data } })),
}));

export default useProfileDataStore;
