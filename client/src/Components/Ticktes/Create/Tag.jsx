import React, { useRef } from "react";
import styled from "styled-components";
import randomHexCode from "./randomHex";
import { sub, mbFontSize } from "../../../styles/mixins";
import breakpoint from "../../../styles/breakpoint";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  min-width: 60px;
  height: 30px;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.fontColor};
  padding: 0 10px;
  border-radius: 30px;
  margin-right: 5px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }

  :hover {
    cursor: ${(props) => (props.pointer ? "pointer" : "")};
  }
`;

export default function Tag({ data, clickHandler, className }) {
  const { name, backgroundColor, textColor } = data;

  return (
    <Container
      backColor={backgroundColor}
      fontColor={textColor}
      onClick={clickHandler && clickHandler(data)}
      pointer={!!clickHandler}
      className={className}
    >
      {name}
    </Container>
  );
}
