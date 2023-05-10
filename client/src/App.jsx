/* eslint-disable react/react-in-jsx-scope */
import Router from "./Router.jsx";
// 그다음에는 로컬 모듈
import "./App.css";
import useIsLoginStore from "./store/useIsLoginStore.js";
import { useUserInfoStore } from "./store/useUserInfoStore.js";

// 그다음에는 라이브러리
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

const queryClient = new QueryClient();

function App() {
  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const { userInfo, setUserInfo } = useUserInfoStore((state) => state);
  const userData = JSON.parse(localStorage.getItem("userInfoStorage"));

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
      setUserInfo(userData);
      return;
    }

    if (refreshToken) {
      setIsLogin(true);
      setUserInfo(userData);
      axios
        .get(`${process.env.REACT_APP_SERVER_URI}/members/reissue`, {
          headers: {
            "Content-Type": "application/json",
            // eslint-disable-next-line prettier/prettier
            Authorization: `Bearer ${accessToken}`,
            // eslint-disable-next-line prettier/prettier
            Refresh: refreshToken,
          },
        })
        .then((response) => {
          localStorage.setItem(
            "accessToken",
            response.headers.get("Authorization").split(" ")[1]
          );
        })
        .catch((err) => {
          throw new Error("Refresh Token 인증에 실패했습니다.", err);
        });
      return;
    }

    setIsLogin(false);
  }, []);

  if (isLogin === "loading") {
    return null;
  }

  if (isLogin && userInfo) {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Router />
        </QueryClientProvider>
      </>
    );
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
