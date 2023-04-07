import React from "react";

import styled from "styled-components";
import CardItem from "./CardItem.jsx";

import breakpoint from "../../styles/breakpoint.js";
import Spinner from "../Spinner.jsx";

const ItemGrid = styled.div`
  width: 90%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row: 1;
  grid-gap: 40px;
  position: relative;

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: block;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    margin: 0 20px;
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
