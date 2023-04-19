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
    cursor: pointer;
  }
`;

export default function Tag({ data, setSelectedTags, selectedTags }) {
  const curColor = useRef(randomHexCode.generate());
  const color = curColor.current;
  const red = parseInt(color.substring(1, 2), 16);
  const green = parseInt(color.substring(3, 4), 16);
  const blue = parseInt(color.substring(5, 6), 16);
  const brightness = Math.floor(red * 0.299 + green * 0.587 + blue * 0.114);
  const fontColor = brightness > 11 ? sub.sub600 : "white";
  const { name } = data;

  const clickHandler = () => {
    const tagData = {
      data: { ...data },
      color: { back: color, font: fontColor },
    };
    setSelectedTags([...selectedTags, tagData]);
  };

  return (
    <Container backColor={color} fontColor={fontColor} onClick={clickHandler}>
      {name}
    </Container>
  );
}
