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
import instance from "../src/api/core/default";
import styled from "styled-components";
import Spinner from "./Components/Spinner.jsx";
import { primary } from "./styles/mixins.js";

const queryClient = new QueryClient();

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerApp = styled(Spinner)`
  .lds-dual-ring:after {
    border: 6px solid ${primary.primary300};
    border-color: ${primary.primary300} transparent ${primary.primary300}
      transparent;
  }
`;

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const userData = JSON.parse(localStorage.getItem("userInfoStorage"));
  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const { userInfo, setUserInfo } = useUserInfoStore((state) => state);

  console.log("app head");

  const fetchUserProfileAndSet = async (memberId) => {
    try {
      console.log("inside  try, fetchUser");
      const res = await instance.get(
        `${process.env.REACT_APP_SERVER_URI}/members/${memberId}`
      );
      let { address } = res.data.data.profile[0];
      if (address === "없음") {
        address = "강남구";
      }
      const userDataWithAddress = { ...userData, address };
      setUserInfo(userDataWithAddress);
    } catch (err) {
      console.log("inside catch, fetchUser");
      setIsLogin(false);
    }
  };

  const setLoginAndUserInfo = () => {
    console.log("inside setloginUserInfo");
    if (accessToken) {
      console.log("inside if accesstoken");
      setIsLogin(true);
      const memberId = userData.id;
      fetchUserProfileAndSet(memberId);
      return;
    } else {
      console.log("inside else, accesstoken");
      setIsLogin(false);
    }

    // refreshToken 로직을 App 컴포넌트 flow에 맞게 조금 수정할 필요가 있을 것 같습니다.
    if (refreshToken) {
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
          setIsLogin(true);
          fetchUserProfileAndSet(userData.id);
        })
        .catch((err) => {
          setIsLogin(false);
          throw new Error("Refresh Token 인증에 실패했습니다.", err);
        });
      return;
    }
  };

  useEffect(() => {
    console.log("inside useEffect");
    try {
      setLoginAndUserInfo();
      console.log("after set login and userinfo");
    } catch (err) {
      setIsLogin(false);
      console.log("inside catch set login and userinfo");
    }
  }, []);

  // 로그인 및 userInfo 가 존재할 때
  if (isLogin && Object.keys(userInfo).length !== 0) {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Router />
        </QueryClientProvider>
      </>
    );
  }

  // 로그인이 되지 않았을 때
  if (!isLogin) {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Router />
        </QueryClientProvider>
      </>
    );
  }

  // UserInfo 및 Login 상태를 로딩하는 중일 때,
  return (
    <LoadingContainer>
      <SpinnerApp />
    </LoadingContainer>
  );
}

export default App;
