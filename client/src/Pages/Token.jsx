import { React, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useIsLoginStore from "../store/useIsLoginStore";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Token() {
  const [searchParams] = useSearchParams();
  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setIsLogin(true);
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

  const getUserInfoOnSuccess = (response) => {
    localStorage.setItem("userInfoStorage", JSON.stringify(response.data.data));
    navigate("/");
  };

  useQuery({
    queryKey: ["getUserInfo"],
    queryFn: getUserInfo,
    enabled: isLogin,
    onSuccess: getUserInfoOnSuccess,
  });

  return <></>;
}
