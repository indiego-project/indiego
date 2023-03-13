/* eslint-disable react/prop-types */
import React from "react";

import LongCarouselItem from "./LongCarouselItem.jsx";

import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  overflow-x: scroll;
  /* background-color: bisque; */

  @media screen and (max-width: 1100px) {
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 837px;
  height: 100%;
  margin-left: ${(props) => props.currentIdx * -100}%;

  transition: ${(props) => (props.isLast ? "unset" : "all 0.5s ease-in-out")};

  @media screen and (max-width: 900px) {
    margin-left: ${(props) => props.currentIdx * -100}%;
  }
`;

export default function LongCarouselItemList({ data, currentIdx }) {
  return (
    <ListContainer>
      <ItemsContainer currentIdx={currentIdx} isLast={currentIdx === 0}>
        {data.map((item, index) => (
          <LongCarouselItem data={item} key={index} />
        ))}
      </ItemsContainer>
    </ListContainer>
  );
}
