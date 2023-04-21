import React from "react";
import styled from "styled-components";
import randomHexCode from "./randomHex";
import { sub } from "../../../styles/mixins";

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
  position: relative;

  .remove {
    position: absolute;
    right: -10px;
    top: -10px;
    background-color: white;
    color: black;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: none;

    :hover {
      cursor: pointer;
      background-color: #ff7300;
      color: white;
    }
  }
`;

export default function SelectedTag({
  data: tagData,
  setSelectedTags,
  selectedTags,
}) {
  const { name, backgroundColor, textColor } = tagData;

  const clickHandler = () => {
    const newCurrenttags = selectedTags.filter((data) => {
      const { tagId } = data;
      return tagId !== tagData.tagId;
    });
    setSelectedTags(newCurrenttags);
  };

  return (
    <Container backColor={backgroundColor} fontColor={textColor}>
      {name}
      <button onClick={clickHandler} className="remove">
        X
      </button>
    </Container>
  );
}
