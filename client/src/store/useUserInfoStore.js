import { create } from "zustand";
import { produce } from "immer";

export const useUserInfoStore = create((set) => ({
  userInfo: {},

  setUserInfo: (userData) => {
    set(
      produce((state) => {
        state.userInfo = userData;
      })
    );
  },
}));
