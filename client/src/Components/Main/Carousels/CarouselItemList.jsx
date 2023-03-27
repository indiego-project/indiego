/* eslint-disable react/prop-types */
import React from "react";

import Item from "./Item.jsx";

import styled from "styled-components";

const RendererContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100%;
  overflow: hidden;
  max-width: 250px;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 100%;
  transform: ${(props) => `translateX(${props.currentIdx * -100}%)`};
  transition: ${(props) =>
    props.transition ? "transform 0.5s ease-in-out" : "unset"};
`;

export default function CarouselItemList({ data, currentIdx, transition }) {
  return (
    <RendererContainer>
      {data.length > 0 ? (
        <ItemsContainer transition={transition} currentIdx={currentIdx}>
          {data.map((item, index) => {
            return <Item data={item} key={index} />;
          })}
        </ItemsContainer>
      ) : (
        <p> 공연이 존재하지 않습니다.</p>
      )}
    </RendererContainer>
  );
}
