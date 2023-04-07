import React from "react";

import breakpoint from "../../styles/breakpoint";
import { primary, dtFontSize, sub, misc } from "../../styles/mixins";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const CardItemContainer = styled.div`
  width: 100%;
  background-color: ${sub.sub200};
  border-radius: 20px;
  position: relative;
  padding: 15px 10px;
  transition: all 0.1s ease-in-out;
  min-height: 200px;

  a {
    text-decoration: none !important;
    color: inherit;

    @media screen and (max-width: ${breakpoint.mobile}) {
      display: flex;
      flex-direction: row;
      padding: 30px 10px;
      position: relative;
    }
  }

  &:hover {
    background-color: ${primary.primary300};
    color: white;
    cursor: pointer;
    box-shadow: 0 5px 5px ${sub.sub400};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    background-color: transparent;
    border-radius: 0px;
    border-bottom: 1px solid ${sub.sub200};
    :hover {
      border: none;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 50%;
  }

  img {
    box-shadow: 0 5px 5px ${sub.sub400};
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;

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
          <img width="100px" height="120px" src={data.image} alt="poster" />
        </ImageContainer>
        <DetailContainer>
          <h4>{data.category}</h4>
          <h2>{data.title}</h2>
          <h3>{data.nickname}</h3>
          <h4 className="price">{`${data.price ? data.price + "₩" : ""}`}</h4>
          <h4>
            {data.showAt && data.expiredAt
              ? `${data.showAt} - ${data.expiredAt}`
              : ""}
          </h4>
          <h4>{data.detailAddress}</h4>
        </DetailContainer>
      </Link>
    </CardItemContainer>
  );
}
