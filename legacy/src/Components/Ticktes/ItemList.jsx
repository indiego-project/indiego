import React from "react";

import styled from "styled-components";
import CardItem from "./CardItem.jsx";

import breakpoint from "../../styles/breakpoint.js";

const ItemGrid = styled.div`
  width: 90%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 20%));
  position: relative;
  justify-content: space-evenly;
  column-gap: 50px;
  row-gap: 100px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 25px;
    column-gap: 100px;
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
