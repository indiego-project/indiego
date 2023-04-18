//페이지, 리액트 컴포넌트, 정적 파일
import logo from "../assets/logo.svg";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import googleIcon from "../assets/googleIcon.jpg";
import kakaoIcon from "../assets/kakaoIcon.jpg";

//로컬 모듈
import breakpoint from "../styles/breakpoint";
import {
  primary,
  secondary,
  sub,
  misc,
  dtFontSize,
  mbFontSize,
} from "../styles/mixins";
import useIsLoginStore from "../store/useIsLoginStore";

//라이브러리 및 라이브러리 메소드
import { React, useState, useRef } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 0 auto;
  min-height: calc(100vh - 87px);
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: max-content;
  position: relative;
  > .logo {
    margin-bottom: 20px;
    width: 220px;
    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 153px;
    }
  }
  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }
  > .social-signup-button-container {
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: center;
    position: absolute;
    width: 350px;
    bottom: -50px;
    > .google-button {
      all: unset;
      cursor: pointer;
      height: 40px;
      width: 40px;
      margin-right: 20px;
      > img {
        height: 40px;
        width: 40px;
      }
    }
    > .kakao-button {
      all: unset;
      cursor: pointer;
      height: 40px;
      width: 40px;
      > img {
        height: 40px;
        width: 40px;
      }
    }
  }
`;

const SelectLoginTypeTab = styled.div`
  align-items: center;
  display: flex;
  > .type-user-tab-menu {
    all: unset;
    align-items: center;
    background-color: ${primary.primary100};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: ${dtFontSize.medium};
    font-weight: 600;
    height: 45px;
    justify-content: center;
    padding: 10px;
    width: 225px;
    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
      height: 35px;
      width: 160px;
    }
  }
  > .type-performer-tab-menu {
    all: unset;
    align-items: center;
    background-color: ${secondary.secondary300};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
    color: ${secondary.secondary700};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: ${dtFontSize.medium};
    font-weight: 600;
    height: 45px;
    justify-content: center;
    padding: 10px;
    width: 225px;
    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
      height: 35px;
      width: 160px;
    }
  }
`;

const LoginContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.color};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  height: max-content;
  min-height: 350px;
  justify-content: space-between;
  padding: 20px;
  width: 450px;
  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 320px;
    height: 280px;
    padding: 15px;
  }
  > .input-container {
    display: flex;
    flex-direction: column;
    > label {
      color: white;
      font-size: ${dtFontSize.medium};
      font-weight: 600;
      margin-bottom: 10px;
      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.medium};
      }
    }
    > div {
      display: flex;
      height: max-content;
      width: max-content;
      position: relative;
      > .login-input {
        border: none;
        border-radius: 5px;
        color: ${sub.sub400};
        font-size: ${dtFontSize.small};
        width: 350px;
        height: 40px;
        padding: 0 10px;
        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.small};
          width: 250px;
          height: 35px;
        }
      }
      > button {
        all: unset;
        cursor: pointer;
        right: 1%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        > svg {
          color: ${sub.sub300};
        }
      }
    }
    > .keep-login-container {
      align-items: center;
      display: flex;
      margin-top: 20px;
    }
  }
  > .error-message {
    color: ${misc.red};
    font-size: ${dtFontSize.medium};
    font-weight: 600;
    text-align: center;
    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

const InputLabel = styled.span`
  color: ${(props) => props.fontColor};
  font-size: ${dtFontSize.medium};
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }
`;

const LoginButton = styled.button`
  all: unset;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  color: ${(props) => props.fontColor};
  cursor: pointer;
  font-size: ${dtFontSize.medium};
  font-weight: 600;
  text-align: center;
  width: 350px;
  height: 50px;
  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
    width: 250px;
    height: 40px;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

const KeepLoginCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1.5px solid ${(props) => props.borderColor};
  border-radius: 2px;
  margin-right: 5px;
  padding: 0;
  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 16px;
    height: 16px;
  }
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${(props) => props.color};
  }
`;

const KeepLoginCheckboxLabel = styled.span`
  color: ${(props) => props.fontColor};
  font-size: ${dtFontSize.medium};
  font-weight: 600;
  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }
`;

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordInputType, setPasswordInputType] = useState({
    type: "password",
    visible: false,
  });
  const [errorMessageContent, setErrorMessageContent] = useState();
  const [checked, setChecked] = useState(false);
  const [isLoginTypeUser, setIsLoginTypeUser] = useState("USER");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const data = { email: email, password: password, role: isLoginTypeUser };
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);

  const handleGoogleOauthLogin = () => {
    location.href = `${process.env.REACT_APP_SERVER_URI}/oauth2/authorization/google`;
  };

  const handleKakaoOauthLogin = () => {
    location.href = `${process.env.REACT_APP_SERVER_URI}/oauth2/authorization/kakao`;
  };

  const handleLoginType = () => {
    if (isLoginTypeUser === "USER") {
      setIsLoginTypeUser("PERFORMER");
    } else {
      setIsLoginTypeUser("USER");
    }
    setEmail("");
    setPassword("");
    setErrorMessageContent("");
    setChecked(false);
  };

  const handlePasswordInputType = () => {
    if (!passwordInputType.visible) {
      setPasswordInputType({ type: "text", visible: true });
    } else {
      setPasswordInputType({ type: "password", visible: false });
    }
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  const postLoginData = () => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    return axios.post(
      `${process.env.REACT_APP_SERVER_URI}/members/login`,
      data,
      headers,
      { withCredentials: true }
    );
  };

  const postLoginOnSuccess = (response) => {
    if (checked) {
      localStorage.setItem("refreshToken", response.headers.get("Refresh"));
    }
    localStorage.setItem(
      "accessToken",
      response.headers.get("Authorization").split(" ")[1]
    );
    localStorage.setItem("userInfoStorage", JSON.stringify(response.data.data));
    setIsLogin("hi!");
    window.location.replace("./");
  };

  const postLoginOnError = (err) => {
    if (err.response.status === 401) {
      setErrorMessageContent("이메일 혹은 비밀번호를 다시 확인해주세요.");
    } else if (err.response.status === 404) {
      setErrorMessageContent(
        "존재하지 않는 회원입니다. 로그인 정보를 다시 확인해주세요."
      );
    }
  };

  const { mutate: postLogin } = useMutation({
    mutationKey: ["postLoginData"],
    mutationFn: postLoginData,
    onSuccess: postLoginOnSuccess,
    onError: postLoginOnError,
  });

  const handleLogin = () => {
    if (!email) {
      emailInputRef.current.focus();
      setErrorMessageContent("⚠︎ 이메일을 입력해주세요");
      return;
    } else if (!password) {
      passwordInputRef.current.focus();
      setErrorMessageContent("⚠︎ 비밀번호를 입력해주세요");
    } else {
      setErrorMessageContent("");
      postLogin();
    }
  };

  const handleEnterPressLogin = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Container>
      <ContentContainer>
        <img alt="logo" className="logo" src={logo} />
        <SelectLoginTypeTab>
          <button className="type-user-tab-menu" onClick={handleLoginType}>
            일반 로그인
          </button>
          <button className="type-performer-tab-menu" onClick={handleLoginType}>
            퍼포머 로그인
          </button>
        </SelectLoginTypeTab>
        <LoginContainer
          color={
            isLoginTypeUser === "USER"
              ? primary.primary100
              : secondary.secondary300
          }
        >
          <div className="input-container">
            <InputLabel
              fontColor={
                isLoginTypeUser === "USER" ? "white" : secondary.secondary700
              }
            >
              이메일
            </InputLabel>
            <div>
              <input
                className="login-input"
                id="e-mail"
                onKeyPress={handleEnterPressLogin}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="이메일"
                ref={emailInputRef}
                value={email || ""}
              />
            </div>
          </div>
          <div className="input-container">
            <InputLabel
              fontColor={
                isLoginTypeUser === "USER" ? "white" : secondary.secondary700
              }
            >
              비밀번호
            </InputLabel>
            <div>
              <button onClick={handlePasswordInputType}>
                {passwordInputType.visible ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
              <input
                className="login-input"
                id="password"
                ref={passwordInputRef}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyPress={handleEnterPressLogin}
                placeholder="비밀번호"
                value={password || ""}
                type={passwordInputType.type}
              />
            </div>
            <div className="keep-login-container">
              <KeepLoginCheckbox
                borderColor={
                  isLoginTypeUser === "USER" ? "white" : secondary.secondary700
                }
                color={
                  isLoginTypeUser === "USER"
                    ? primary.primary300
                    : secondary.secondary500
                }
                checked={checked}
                type="checkbox"
                onChange={handleCheckbox}
              />
              <KeepLoginCheckboxLabel
                id="keepLogin"
                fontColor={
                  isLoginTypeUser === "USER" ? "white" : secondary.secondary700
                }
              >
                로그인 유지
              </KeepLoginCheckboxLabel>
            </div>
          </div>
          {errorMessageContent ? (
            <p className="error-message">{errorMessageContent}</p>
          ) : (
            ""
          )}
          <LoginButton
            onClick={handleLogin}
            color={
              isLoginTypeUser === "USER"
                ? primary.primary300
                : secondary.secondary500
            }
            fontColor={"white"}
            hoverColor={
              isLoginTypeUser === "USER"
                ? secondary.secondary500
                : primary.primary300
            }
          >
            로그인
          </LoginButton>
        </LoginContainer>
        {isLoginTypeUser ? (
          <div className="social-signup-button-container">
            <button className="google-button" onClick={handleGoogleOauthLogin}>
              <img alt="google icon" src={googleIcon} />
            </button>
            <button className="kakao-button" onClick={handleKakaoOauthLogin}>
              <img alt="kakao-icon" src={kakaoIcon} />
            </button>
          </div>
        ) : (
          ""
        )}
      </ContentContainer>
    </Container>
  );
}
