import { React, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useIsLoginStore from "../store/useIsLoginStore";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

export default function Token() {
  const [searchParams] = useSearchParams();
  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);

  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      fetchUserInfo();
    } else {
      setIsLogin(false);
      window.location.replace("/");
    }
  }, []);

  const getUserInfo = () => {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return axios.get(`${process.env.REACT_APP_SERVER_URI}/members/token`, {
      headers,
    });
  };

  // const getUserInfoOnSuccess = (response) => {
  //   console.log("onSuccess get userinfo");
  //   localStorage.setItem("userInfoStorage", JSON.stringify(response.data.data));
  //   navigate("/");
  // };

  const { mutate: fetchUserInfo } = useMutation({
    mutationKey: ["fetchUserInfo"],
    mutationFn: getUserInfo,
    onSuccess: (response) => {
      localStorage.setItem(
        "userInfoStorage",
        JSON.stringify(response.data.data)
      );
      setIsLogin(true);
      window.location.replace("/");
    },
    onError: (response) => {
      window.alert("로그인에 실패했습니다. 다시 시도해주세요.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.replace("/");
    },
  });

  // useQuery({
  //   queryKey: ["getUserInfo"],
  //   queryFn: getUserInfo,
  //   enabled: isLogin,
  //   onSuccess: getUserInfoOnSuccess,
  //   onError: (err) => {
  //     console.log(err);
  //     window.alert("token error");
  //     setIsLogin(false);
  //   },
  // });

  return <></>;
}
