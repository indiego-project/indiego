import { create } from "zustand";

/**
 * loading status를 따로 분류하여, loading일 경우에는 App 전체가 렌더링 되지 않도록 막는 역할을 합니다.
 * (로그인 - 로그아웃 중간 상태의 레이아웃 깨짐을 방지하기 위함입니다.)
 * typescript의 enum을 모방하여 사용하려 했지만, javascript 임과 기존 코드가 엮여있을 것으로 생각해 기능적으로는 loading status 도입 외에 의의는 없습니다.
 */

const loginStatus = Object.freeze({
  LOADING: "loading",
  LOGIN: true,
  LOGOUT: false,
});

const useIsLoginStore = create((set) => ({
  isLogin: loginStatus.LOADING,
  setIsLogin: (loginstate) =>
    set((state) => {
      return { isLogin: loginstate };
    }),
}));

export default useIsLoginStore;
