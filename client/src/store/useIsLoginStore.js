import { create } from "zustand";

const useIsLoginStore = create((set) => ({
  isLogin: false,
  setIsLogin: (loginstate) => set(() => ({ isLogin: loginstate })),
}));

export default useIsLoginStore;
