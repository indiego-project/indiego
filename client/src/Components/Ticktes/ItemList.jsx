import React from "react";

import styled from "styled-components";
import CardItem from "./CardItem.jsx";

import breakpoint from "../../styles/breakpoint.js";

const ItemGrid = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
    position: absolute;
    width: 100%;
    height: 100%;
    left: 40%;

    @media screen and (max-width: 500px) {
      left: 30%;
    }
  }
`;

export default function ItemList({ data }) {
  return (
    <ItemGrid>
      {data.length === 0 ? (
        <div className="null_info">
          <p>공연이 존재하지 않습니다</p>
        </div>
      ) : (
        data.map((item, index) => {
          return <CardItem data={item} key={index} />;
        })
      )}
    </ItemGrid>
  );
}
