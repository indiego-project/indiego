//로컬 모듈
import { primary, mbFontSize, sub } from "../../../styles/mixins";
import breakpoint from "../../../styles/breakpoint";

//라이브러리 및 라이브러리 메소드
import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const MobileAsideDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 px;
  border-bottom: 3px solid ${sub.sub200};
  background-color: white;
  overflow-x: scroll;
  margin-bottom: 20px;
  display: none;

  .mobileAsideList {
    display: flex;
    flex-direction: row;
    align-items: center;

    .mobileAsideItem {
      background-color: white;
      border: solid 1px ${primary.primary500};
      border-radius: 20px;
      color: ${primary.primary500};
      font-size: ${mbFontSize.medium};
      width: 120px;
      height: 40px;
      margin-right: 20px;
      font-weight: 700;
      cursor: pointer;
    }

    .thisMobileAsideItem {
      background-color: ${primary.primary400};
      border: solid 1px white;
      border-radius: 20px;
      color: white;
      font-size: ${mbFontSize.medium};
      width: 120px;
      height: 40px;
      margin-right: 20px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: flex;
  }
`;

const MobileAside = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <MobileAsideDiv>
      <div className="mobileAsideList">
        <button
          className={
            pathname === "/board/free"
              ? "thisMobileAsideItem"
              : "mobileAsideItem"
          }
          onClick={() => {
            navigate(
              "/board/free?category=자유게시판&status=최신순&page=1&size=10"
            );
          }}
        >
          자유 게시판
        </button>
        <button
          className={
            pathname === "/board/employ"
              ? "thisMobileAsideItem"
              : "mobileAsideItem"
          }
          onClick={() => {
            navigate(
              "/board/employ?category=구인게시판&status=최신순&page=1&size=10"
            );
          }}
        >
          구인 게시판
        </button>
        <button
          className={
            pathname === "/board/request"
              ? "thisMobileAsideItem"
              : "mobileAsideItem"
          }
          onClick={() => {
            navigate(
              "/board/request?category=초청게시판&status=최신순&page=1&size=10"
            );
          }}
        >
          초청 게시판
        </button>
        <button
          className={
            pathname === "/board/advertise"
              ? "thisMobileAsideItem"
              : "mobileAsideItem"
          }
          onClick={() => {
            navigate(
              "/board/advertise?category=홍보게시판&status=최신순&page=1&size=10"
            );
          }}
        >
          홍보 게시판
        </button>
        <button
          className={
            pathname === "/board/review"
              ? "thisMobileAsideItem"
              : "mobileAsideItem"
          }
          onClick={() => {
            navigate(
              "/board/review?category=후기게시판&status=최신순&page=1&size=10"
            );
          }}
        >
          후기 게시판
        </button>
      </div>
    </MobileAsideDiv>
  );
};

export default MobileAside;
