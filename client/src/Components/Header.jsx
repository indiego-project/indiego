/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useMemo } from "react";

import { Link, useLocation } from "react-router-dom";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Overlay from "./Main/Popups/Overlay.jsx";

import {
  primary,
  dtFontSize,
  secondary,
  mbFontSize,
  sub,
  misc,
} from "../styles/mixins";
import logo from "../assets/logo.svg";
import breakpoint from "../styles/breakpoint";
import user from "../assets/user.svg";
import { useWindowSize } from "../utils/useWindowSize.js";
import instance from "../api/core/default";

import styled from "styled-components";
import useIsLoginStore from "../store/useIsLoginStore.js";
import { useUserInfoStore } from "../store/useUserInfoStore.js";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 87px;
  background-color: white;
  z-index: 30;
  box-shadow: 0 1px 3px 0 ${sub.sub700};
  padding: 0 2%;
`;

const LogoContainer = styled.div`
  display: flex;
  width: max-content;
  height: max-content;

  img {
    width: 140px;
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 130px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    justify-content: center;
    width: 80%;
  }
`;

const HeaderLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 62px;
  margin-left: 5%;

  a,
  h2 {
    min-width: max-content;
    height: max-content;
    text-align: center;
    vertical-align: middle;
    height: max-content;
    font-size: ${dtFontSize.medium};
    padding: 10px 20px;
    padding-top: 12px;
    margin-right: 1.4%;
    color: ${primary.primary500};
    font-weight: 800;
    text-decoration: none;

    &:hover {
      background-color: ${primary.primary500};
      color: white;
      border-radius: 20px;
      cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
      height: 35px;
      font-size: ${dtFontSize.small};
      padding: 10px 10px 0 10px;
    }
  }

  .current {
    background-color: ${primary.primary300};
    color: white;
    border-radius: 20px;

    :hover {
      background-color: ${primary.primary300};
      color: white;
      border-radius: 20px;
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: none;
  }
`;

const LogoutStatusContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  margin: 0 20px;

  .login_linker {
    min-width: max-content;
    height: max-content;
    text-align: center;
    vertical-align: middle;
    height: max-content;
    font-size: ${dtFontSize.medium};
    padding: 10px 20px;
    padding-top: 12px;
    margin-right: 1.4%;
    color: ${primary.primary500};
    font-weight: 800;
    text-decoration: none;

    &:hover {
      background-color: ${primary.primary500};
      color: white;
      border-radius: 20px;
      cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
      height: 35px;
      font-size: ${dtFontSize.small};
      padding: 10px 10px 0 10px;
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: none;
  }
`;

const UserStatus = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: max-content;

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: none;
  }

  .userInfo {
    display: flex;
    justify-content: center;
    color: white;
    background-color: ${primary.primary500};
    min-width: 150px;
    max-width: 350px;
    padding: 10px;
    height: max-content;
    align-items: center;
  }

  .welcome {
    font-size: ${dtFontSize.xsmall};
    margin-right: 10px;

    @media screen and (max-width: 1200px) {
      font-size: ${dtFontSize.xsmall};
    }
  }

  .username {
    font-size: ${dtFontSize.small};
    font-weight: 600;

    @media screen and (max-width: 1200px) {
      font-size: ${dtFontSize.xsmall};
    }
  }

  .logout {
    margin-left: 15px;
    font-weight: 600;
    color: ${primary.primary500};
    font-size: ${dtFontSize.xsmall};

    :hover {
      color: ${misc.red};
      cursor: pointer;
    }
  }
`;

const HeaderSearchIcon = styled.div`
  display: none;
  width: 10%;
  height: 20px;
  margin-left: 30px;

  &:hover {
    cursor: pointer;

    path {
      fill: ${secondary.secondary500};
    }
  }

  path {
    fill: ${primary.primary500};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const NavbarIcon = styled.div`
  display: none;
  width: 10%;
  height: 30px;
  margin-left: 30px;

  &:hover {
    cursor: pointer;

    path {
      fill: ${secondary.secondary500};
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: flex;
    align-items: center;
  }

  path {
    fill: ${primary.primary500};
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: calc(100px + 30vw);
  background-color: white;
`;

const NavbarProfileBox = styled.div`
  width: 100%;
  height: 15%;
  min-height: 180px;
  background-color: ${primary.primary300};
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin-left: 10px;
  }

  .userInfo {
    display: flex;
    margin-left: 20px;
    height: 100%;
    color: white;
    font-size: ${mbFontSize.medium};
    flex-direction: column;
    justify-content: space-evenly;

    span {
      font-size: ${mbFontSize.medium};
      font-weight: 400;
    }
  }

  .logout {
    width: max-content;

    font-size: ${dtFontSize.small};
    font-weight: 600;

    :hover {
      color: ${primary.primary500};
      cursor: pointer;
    }
  }

  h2 {
    margin-top: 50px;
  }
`;

const NavbarLinkerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  a.current {
    color: ${primary.primary200};
  }

  a {
    width: 100%;
    font-size: ${mbFontSize.large};
    font-weight: 700;
    color: ${primary.primary500};
    padding: 20px 0 30px 20px;
    vertical-align: middle;
    text-decoration: none;

    :hover {
      cursor: pointer;
      background-color: ${primary.primary300};
      color: white;
    }

    @media screen and (max-width: 400px) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

export default function Header() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const { userInfo } = useUserInfoStore((state) => state);
  const { isLogin } = useIsLoginStore((state) => state);

  useWindowSize(setNavOpen);

  const logoutHandler = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const headers = {
      "Content-Type": "application/json",
      // eslint-disable-next-line prettier/prettier
      Authorization: `Bearer ${accessToken}`,
      // eslint-disable-next-line prettier/prettier
      Refresh: refreshToken,
    };

    return axios
      .get(`${process.env.REACT_APP_SERVER_URI}/members/logout`, { headers })
      .finally(() => {
        localStorage.clear();
        window.alert("로그아웃 되었습니다!");
        window.location.replace("/");
      });
  };

  return (
    <HeaderContainer>
      <HeaderSearchIcon>
        <Link to="/tickets">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </Link>
      </HeaderSearchIcon>
      <LogoContainer>
        <Link to="/" reloadDocument>
          <img width={153} src={logo} alt="logo"></img>
        </Link>
      </LogoContainer>
      <HeaderLinkContainer>
        <Link
          className={
            location.pathname.includes("tickets") &&
            !location.pathname.includes("create")
              ? "current"
              : ""
          }
          to="tickets">
          티켓팅
        </Link>
        <Link
          className={location.pathname.includes("board") ? "current" : ""}
          to="board/free?category=자유게시판&status=최신순&page=1&size=10">
          커뮤니티
        </Link>
        <Link
          className={location.pathname.includes("search") ? "current" : ""}
          to="search"
          reloadDocument>
          공연찾기
        </Link>
        {isLogin && (
          <Link
            className={location.pathname.includes("user") ? "current" : ""}
            to={`/mypage/${
              userInfo.role.toLowerCase() !== "user" ? "performer" : "user"
            }/${userInfo.id}`}>
            마이페이지
          </Link>
        )}
        {isLogin && userInfo.role === "PERFORMER" && (
          <Link
            className={
              location.pathname.includes("tickets/create") ? "current" : ""
            }
            to={"/tickets/create"}>
            공연작성하기
          </Link>
        )}
      </HeaderLinkContainer>
      {isLogin ? (
        <UserStatus>
          <Link
            to={`/mypage/${
              userInfo.role.toLowerCase() !== "user" ? "performer" : "user"
            }/${userInfo?.id}`}>
            <div className="userInfo">
              <p className="welcome">환영합니다!</p>
              <p className="username">
                {userInfo.nickname}
                <span>님</span>
              </p>
            </div>
          </Link>
          <p className="logout" onClick={logoutHandler}>
            로그아웃
          </p>
        </UserStatus>
      ) : (
        <LogoutStatusContainer>
          <Link className="login_linker" to="login">
            로그인
          </Link>
          <Link className="login_linker" to="signup">
            회원가입
          </Link>
        </LogoutStatusContainer>
      )}
      <NavbarIcon
        onClick={() => {
          setNavOpen(true);
        }}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H16V5H2V3Z" fill="black" />
          <path d="M2 8H16V10H2V8Z" fill="black" />
          <path d="M16 13H2V15H16V13Z" fill="black" />
        </svg>
      </NavbarIcon>
      {navOpen && (
        <Overlay handler={setNavOpen}>
          <NavbarContainer>
            {isLogin && (
              <NavbarProfileBox>
                <div className="userInfo">
                  <Link
                    to={`/mypage/${
                      userInfo.role.toLowerCase() !== "user"
                        ? "performer"
                        : "user"
                    }/${userInfo.id}`}>
                    <h2>
                      {`${userInfo.nickname} 님,`}
                      <span>환영합니다!</span>
                    </h2>
                  </Link>
                  <div className="logout" onClick={logoutHandler}>
                    로그아웃
                  </div>
                </div>
              </NavbarProfileBox>
            )}
            <NavbarLinkerContainer>
              {!isLogin && (
                <>
                  <Link to="/login">로그인</Link>
                  <Link to="/signup">회원가입</Link>
                </>
              )}
              <Link
                className={
                  location.pathname.includes("tickets") ? "current" : ""
                }
                to="/tickets">
                티켓팅
              </Link>
              <Link
                className={location.pathname.includes("board") ? "current" : ""}
                to="board/free?category=자유게시판&status=최신순&page=1&size=10">
                커뮤니티
              </Link>
              <Link
                className={
                  location.pathname.includes("search") ? "current" : ""
                }
                to="search">
                공연찾기
              </Link>
              {userInfo && (
                <Link
                  className={
                    location.pathname.includes("user") ? "current" : ""
                  }
                  to={`/mypage/${
                    userInfo.role.toLowerCase() !== "user"
                      ? "performer"
                      : "user"
                  }/${userInfo.id}`}>
                  마이페이지
                </Link>
              )}
              {isLogin && userInfo.role === "PERFORMER" && (
                <Link
                  className={
                    location.pathname.includes("tickets/create")
                      ? "current"
                      : ""
                  }
                  to={"/tickets/create"}>
                  공연작성하기
                </Link>
              )}
              {isLogin && userInfo.role === "ADMIN" && (
                <Link to={"/admin/main"}>ADMIN</Link>
              )}
            </NavbarLinkerContainer>
          </NavbarContainer>
        </Overlay>
      )}
    </HeaderContainer>
  );
}
