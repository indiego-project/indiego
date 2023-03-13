import React from "react";
import styled from "styled-components";
import NotFoundSVG from "../assets/NotFound_animate.svg";
import breakpoint from "../styles/breakpoint";
import { dtFontSize, primary } from "../styles/mixins";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 52vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  img {
    position: absolute;
    top: 5%;
    width: 400px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 350px;
    }
  }

  .notfound_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 95%;

    h1 {
      font-size: ${dtFontSize.xlarge};
      color: ${primary.primary300};
      margin-top: 5px;
    }

    .small {
      font-size: ${dtFontSize.small};
      color: ${primary.primary300};
    }

    @media screen and (max-width: ${breakpoint.mobile}) {
      top: 85%;

      h1 {
        font-size: ${dtFontSize.large};
      }
    }
  }
`;

export default function NotFound() {
  return (
    <Container>
      <img src={NotFoundSVG} alt="404" />
      <div className="notfound_info">
        <h1 className="small">어이쿠, 발을 잘못 디디셨군요?</h1>
        <h1>페이지를 찾을 수 없습니다.</h1>
      </div>
    </Container>
  );
}
