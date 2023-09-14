//페이지, 리액트 컴포넌트, 정적 파일
import logo from "../../assets/logo.svg";
import googleIcon from "../../assets/googleIcon.jpg";
import kakaoIcon from "../../assets/kakaoIcon.jpg";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import {
  primary,
  secondary,
  sub,
  misc,
  dtFontSize,
  mbFontSize,
} from "../../styles/mixins";

//라이브러리 및 라이브러리 메소드
import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// import { Outlet } from "react-router-dom";

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
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    margin: 30px 0;
  }

  > .page-info-container {
    display: flex;
    flex-direction: column;

    > img {
      margin-bottom: 30px;
      width: 220px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        margin-bottom: 10px;
        width: 153px;
      }
    }

    > span {
      color: ${sub.sub400};
      font-size: ${dtFontSize.medium};
      font-weight: 400;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.medium};
        text-align: center;
      }
    }

    @media screen and (max-width: ${breakpoint.mobile}) {
      align-items: center;
      width: max-content;
    }
  }
`;

const ContentInnerRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: max-content;
  margin: 30px 0 30px 30px;

  > .user-type-info {
    color: ${primary.primary500};
    font-size: ${dtFontSize.large};
    font-weight: 600;
    margin-bottom: 10px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.large};
    }
  }

  > .move-to-performer-signup-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;

    > span {
      color: ${sub.sub400};
      font-size: ${dtFontSize.small};
      font-weight: 400;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.small};
      }
    }

    > button {
      all: unset;
      cursor: pointer;
      color: ${primary.primary500};
      font-size: ${dtFontSize.medium};
      font-weight: 600;
      margin-top: 5px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.medium};
      }

      &:hover {
        color: ${primary.primary200};
      }
    }
  }

  > .social-signup-button-container {
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: center;
    margin-top: 10px;
    width: 350px;

    > .naver-button {
      all: unset;
      cursor: pointer;
      height: 40px;
      width: 40px;
      margin-right: 10px;

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

  @media screen and (max-width: ${breakpoint.mobile}) {
    align-items: center;
    margin: 30px 0 0 0;
    width: 100%;
  }
`;

const SignupContainer = styled.div`
  align-items: center;
  background-color: ${primary.primary100};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: space-between;
  min-height: 400px;
  padding: 20px;
  width: 350px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 320px;
    min-height: 280px;
    padding: 15px;
  }

  > .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

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

      > input {
        border: none;
        border-radius: 5px;
        color: ${sub.sub400};
        font-size: ${dtFontSize.small};
        width: 300px;
        height: 40px;
        padding: 0 10px;

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.small};
          width: 250px;
          height: 25px;
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

    > .validation-message-container {
      display: flex;
      flex-direction: column;
      margin: 5px 0;
      width: max-content;

      > .validation-message {
        all: unset;
        color: ${misc.red};
        font-size: ${dtFontSize.small};

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.small};
        }
      }
    }
  }

  > button {
    all: unset;
    background-color: ${primary.primary300};
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: ${dtFontSize.medium};
    font-weight: 600;
    text-align: center;
    width: 300px;
    height: 50px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
      width: 250px;
      height: 40px;
    }

    &:hover {
      background-color: ${secondary.secondary500};
    }
  }

  .error-message {
    all: unset;
    color: ${misc.red};
    font-size: ${dtFontSize.small};
    margin-top: 10px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.small};
    }
  }
`;

export default function Signup() {
  const [nickname, setNickname] = useState();
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameInputOnFocus, setNicknameInputOnFocus] = useState(false);

  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [emailInputOnFocus, setEmailInputOnFocus] = useState(false);

  const [password, setPassword] = useState();
  const [passwordLengthValid, setPasswordLengthValid] = useState(false);
  const [passwordNumberLetterRegexValid, setPasswordNumberLetterRegexValid] =
    useState(false);
  const [passwordSpecialLetterRegexValid, setPasswordSpecialLetterRegexValid] =
    useState(false);
  const [passwordInputOnFocus, setPasswordInputOnFocus] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState({
    type: "password",
    visible: false,
  });
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const navigate = useNavigate();

  const handlePasswordInputType = () => {
    if (!passwordInputType.visible) {
      setPasswordInputType({ type: "text", visible: true });
    } else {
      setPasswordInputType({ type: "password", visible: false });
    }
  };

  //실시간 유효성 검사
  useEffect(() => {
    if (nickname && nickname.length <= 10) {
      setNicknameValid(true);
    } else {
      setNicknameValid(false);
    }
  }, [nickname]);

  useEffect(() => {
    if (
      email &&
      email.length > 0 &&
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    ) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);

  useEffect(() => {
    if (password && password.length >= 8 && password.length <= 20) {
      setPasswordLengthValid(true);
    } else {
      setPasswordLengthValid(false);
    }
  }, [password]);

  useEffect(() => {
    if (password && /(?=.*\d)(?=.*[a-zA-ZS])/.test(password)) {
      setPasswordNumberLetterRegexValid(true);
    } else {
      setPasswordNumberLetterRegexValid(false);
    }
  }, [password]);

  useEffect(() => {
    if (password && /(?=.*[^a-zA-Z0-9!@#$%^&*])/.test(password) === false) {
      setPasswordSpecialLetterRegexValid(true);
    } else {
      setPasswordSpecialLetterRegexValid(false);
    }
  }, [password]);

  const data = {
    nickname: nickname,
    email: email,
    password: password,
    role: "USER",
  };

  const postSignupData = () => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    return axios.post(
      `${process.env.REACT_APP_SERVER_URI}/members/signup`,
      data,
      headers
    );
  };

  const createMemberOnSuccess = () => {
    window.alert("회원가입이 성공적으로 완료되었습니다!");
    navigate("/login");
  };

  const createMemberOnError = () => {
    window.alert("일시적인 오류입니다. 잠시 후에 다시 시도해주세요.");
  };

  const { mutate: createMember } = useMutation({
    mutationKey: ["postSignupData"],
    mutationFn: postSignupData,
    onSuccess: createMemberOnSuccess,
    onError: createMemberOnError,
  });

  const handleSignupOnClick = () => {
    if (!nickname || !email || !password) {
      setIsInputEmpty(true);
      return;
    }
    createMember();
  };

  const handleKakaoOauthLogin = () => {
    location.href = `${process.env.REACT_APP_SERVER_URI}/oauth2/authorization/kakao`;
  };

  const handleGoogleOauthLogin = () => {
    location.href = `${process.env.REACT_APP_SERVER_URI}/oauth2/authorization/google`;
  };

  return (
    <Container>
      <ContentContainer>
        <div className="page-info-container">
          <img alt="logo" src={logo} />
          <span>
            indiego는 지역 문화 발전을 위한 인디 음악, <br />
            소규모 연극 티켓 판매 및 커뮤니티 서비스 플랫폼입니다. <br />
            회원가입을 통해 indiego 커뮤니티를 이용할 수 있습니다.
          </span>
        </div>
        <ContentInnerRightContainer>
          <span className="user-type-info">일반 회원가입</span>
          <SignupContainer>
            <div className="input-container">
              <label htmlFor="e-mail" id="e-mail">
                닉네임
              </label>
              <div>
                <input
                  id="nickname"
                  placeholder="닉네임"
                  value={nickname || ""}
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                  onFocus={() => setNicknameInputOnFocus(true)}
                />
              </div>
              {nicknameInputOnFocus ? (
                <ul className="validation-message-container">
                  {nicknameValid ? (
                    ""
                  ) : (
                    <li className="validation-message">
                      ⚠︎ 닉네임은 1자 이상 10자 이하여야 합니다
                    </li>
                  )}
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="input-container">
              <label htmlFor="e-mail" id="e-mail">
                이메일
              </label>
              <div>
                <input
                  id="e-mail"
                  placeholder="이메일"
                  value={email || ""}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onFocus={() => setEmailInputOnFocus(true)}
                />
              </div>
              {emailInputOnFocus ? (
                <ul className="validation-message-container">
                  {emailValid ? (
                    ""
                  ) : (
                    <li className="validation-message">
                      ⚠︎ 유효하지 않은 이메일 형식입니다
                    </li>
                  )}
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="input-container">
              <label htmlFor="password" id="password">
                비밀번호
              </label>
              <div>
                <button onClick={handlePasswordInputType}>
                  {passwordInputType.visible ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </button>
                <input
                  id="password"
                  placeholder="비밀번호"
                  value={password || ""}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onFocus={() => setPasswordInputOnFocus(true)}
                  type={passwordInputType.type}
                />
              </div>
              {passwordInputOnFocus ? (
                <ul className="validation-message-container">
                  {passwordLengthValid ? (
                    ""
                  ) : (
                    <li className="validation-message">
                      ⚠︎ 비밀번호는 8자 이상 20자 이하여야 합니다
                    </li>
                  )}
                  {passwordNumberLetterRegexValid ? (
                    ""
                  ) : (
                    <li className="validation-message">
                      ⚠︎ 비밀번호는 반드시 각 1개 이상의 숫자와 영문자를
                      <br />
                      포함해야 합니다
                    </li>
                  )}
                  {passwordSpecialLetterRegexValid ? (
                    ""
                  ) : (
                    <li className="validation-message">
                      ⚠︎ 한글 및 !@#$%^&*를 제외한 특수문자는 <br />
                      허용되지 않습니다
                    </li>
                  )}
                </ul>
              ) : (
                ""
              )}
            </div>
            <button onClick={handleSignupOnClick}>회원가입</button>
            {isInputEmpty ? (
              <span className="error-message">⚠︎ 모든 정보를 입력해주세요</span>
            ) : (
              ""
            )}
          </SignupContainer>
          <div className="move-to-performer-signup-container">
            <span>자신의 공연을 등록하고 싶은 인디 예술인이라면?</span>
            <button
              onClick={() => {
                navigate("/signup/performer");
              }}
            >
              퍼포머로 회원가입하기
            </button>
          </div>
          <div className="social-signup-button-container">
            <button className="naver-button" onClick={handleGoogleOauthLogin}>
              <img alt="naver icon" src={googleIcon} />
            </button>
            <button className="kakao-button" onClick={handleKakaoOauthLogin}>
              <img alt="kakao-icon" src={kakaoIcon} />
            </button>
          </div>
        </ContentInnerRightContainer>
      </ContentContainer>
    </Container>
  );
}
