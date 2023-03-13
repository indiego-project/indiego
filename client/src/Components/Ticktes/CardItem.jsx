import React from "react";

import breakpoint from "../../styles/breakpoint";
import { primary, dtFontSize, sub, misc } from "../../styles/mixins";

import styled from "styled-components";
import { Link } from "react-router-dom";

const CardItemContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 280px;
  background-color: ${sub.sub200};
  border-radius: 20px;
  position: relative;
  padding: 15px 10px;
  transition: all 0.1s ease-in-out;

  a {
    text-decoration: none !important;
    color: inherit;
  }

  &:hover {
    background-color: ${primary.primary300};
    color: white;
    cursor: pointer;
    transform: translateY(-20px);
    box-shadow: 0 5px 5px ${sub.sub400};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  margin-bottom: 20px;

  img {
    width: 50%;
    height: 100%;
    box-shadow: 0 5px 5px ${sub.sub400};
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: calc(10px + 0.3vw);
    margin-bottom: 5px;
  }

  h3 {
    font-size: calc(8px + 0.3vw);
    font-weight: 500;
    margin-bottom: 5px;
  }

  h4 {
    font-size: calc(3px + 0.3vw);
    font-weight: 400;
    margin-bottom: 5px;

    @media screen and (min-width: ${breakpoint.mobile}) {
      font-size: ${dtFontSize.xsmall};
    }
  }

  .price {
    font-size: calc(5px + 1vw);
    font-weight: 500;

    @media screen and (min-width: ${breakpoint.mobile}) {
      font-size: ${dtFontSize.xsmall};
    }
  }
`;

export default function CardItem({ data }) {
  return (
    <CardItemContainer>
      <Link to={`/tickets/${data.id}`}>
        <ImageContainer>
          <img src={data.image} alt="poster" />
        </ImageContainer>
        <DetailContainer>
          <h4>{data.category}</h4>
          <h2>{data.title}</h2>
          <h3>{data.nickname}</h3>
          <h4 className="price">{`${data.price} ₩`}</h4>
          <h4>{data.detailAddress}</h4>
          <h4>{`${data.showAt} - ${data.expiredAt}`}</h4>
        </DetailContainer>
      </Link>
    </CardItemContainer>
  );
}
