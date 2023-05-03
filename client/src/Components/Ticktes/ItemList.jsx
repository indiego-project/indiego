import React from "react";

import styled from "styled-components";
import CardItem from "./CardItem.jsx";

import breakpoint from "../../styles/breakpoint.js";

const ItemGrid = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  gap: 40px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: block;
  }

  .null_info {
    width: 100%;
    height: 100%;
    background-color: red;

    @media screen and (max-width: 500px) {
      left: 30%;
    }
  }
`;

export default function ItemList({ data }) {
  return (
    <ItemGrid>
      {data.map((item, index) => {
        return <CardItem data={item} key={index} />;
      })}
    </ItemGrid>
  );
}
