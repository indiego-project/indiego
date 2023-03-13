//페이지, 리액트 컴포넌트, 정적 파일
import ShowItem from "./ShowItem.jsx";

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
import { React, useState, useEffect } from "react";
import styled from "styled-components/macro";

const ShowListInnerContainer = styled.ul`
  all: unset;
  align-items: center;
  display: flex;
  height: 450px;
  position: relative;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: ${breakpoint.mobile}) {
    height: 340px;
    width: 100%;
  }

  > span {
    position: absolute;
    top: 50%;
  }
`;

export default function ShowList({ allReservationData, dataExist }) {
  return (
    <ShowListInnerContainer>
      {dataExist ? "" : <span>공연 목록이 없습니다</span>}
      {allReservationData &&
        allReservationData.map((allReservationData) => (
          <ShowItem
            reservationData={allReservationData}
            key={allReservationData.id}
          />
        ))}
    </ShowListInnerContainer>
  );
}
