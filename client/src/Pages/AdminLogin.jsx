import React, { useState } from "react";

import styled from "styled-components";

import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import useIsLoginStore from "../store/useIsLoginStore";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #323232;
  color: white;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      margin-top: 10px;
    }

    input {
      margin-top: 10px;
    }

    button {
      padding: 5px 10px;
      margin-top: 30px;

      :hover {
        cursor: pointer;
        background-color: blue;
        color: white;
      }
    }

    input#keep_login {
      margin-left: 10px;
    }
  }
`;

export const AdminLogin = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);
  const { setIsLogin } = useIsLoginStore((state) => state);

  const requestAdminLogin = () => {
    const data = { email: emailInput, password: passwordInput, role: "ADMIN" };
    return axios.post(
      process.env.REACT_APP_SERVER_URI + "/members/login",
      data
    );
  };

  const { mutate: submitLoginForm } = useMutation({
    mutationFn: requestAdminLogin,
    mutationKey: "requestAdminLogin",
    onSuccess: (response) => {
      if (keepLogin) {
        localStorage.setItem("refreshToken", response.headers.get("Refresh"));
      }
      localStorage.setItem(
        "accessToken",
        response.headers.get("Authorization").split(" ")[1]
      );
      localStorage.setItem(
        "userInfoStorage",
        JSON.stringify(response.data.data)
      );
      setIsLogin("hi!");
      window.location.replace("/admin");
    },
    onError: (err) => {
      throw new AxiosError(err);
    },
  });

  const handleChange = (e) => {
    if (e.target.id === "password") {
      setPasswordInput(e.target.value);
    } else {
      setEmailInput(e.target.value);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    submitLoginForm();
  };

  return (
    <Container>
      <h1>Indiego Admin Login</h1>
      <form>
        <label htmlFor="email">Admin Email</label>
        <input
          onChange={handleChange}
          value={emailInput}
          placeholder="admin email"
          id="email"
        />
        <label htmlFor="password">Admin Password</label>
        <input
          value={passwordInput}
          placeholder="admin password"
          type="password"
          id="password"
          onChange={handleChange}
        />
        <div className="checkbox_container">
          <label htmlFor="keep_login">keep login</label>
          <input
            onChange={(e) => {
              setKeepLogin(!e.target.value);
            }}
            value={keepLogin}
            id="keep_login"
            type="checkbox"
          ></input>
        </div>
        <button onClick={formSubmitHandler}>submit</button>
      </form>
    </Container>
  );
};
