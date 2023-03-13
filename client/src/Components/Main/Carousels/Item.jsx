/* eslint-disable react/prop-types */
import React from "react";

import { dtFontSize, primary, sub } from "../../../styles/mixins";

import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../../styles/breakpoint";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 100%;
  box-sizing: content-box;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      color: none;
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 250px;
  }
`;

const ImageContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 150px;
  }
`;

const ConcertDetailsContainer = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    color: ${primary.primary400};
    cursor: pointer;

    > .date {
      color: ${primary.primary300};
    }

    > .location {
      color: ${primary.primary300};
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 150px;
  }

  h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: calc(10px + 0.5vw);
    text-align: center;
    -webkit-line-clamp: 1;
    overflow: hidden;

    @media screen and (min-width: 1400px) {
      font-size: ${dtFontSize.small};
    }
  }

  h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: calc(7px + 0.5vw);
    margin-top: 10px;
    text-align: center;
    @media screen and (min-width: 1400px) {
      font-size: ${dtFontSize.medium};
    }
  }

  .date {
    font-size: calc(5px + 0.3vw);
    font-weight: 400;
    color: ${sub.sub400};
    margin-top: 10px;
    text-align: center;

    @media screen and (min-width: 1400px) {
      font-size: ${dtFontSize.xsmall};
    }
  }

  .location {
    font-size: calc(5px + 0.3vw);
    font-weight: 800;
    color: ${sub.sub400};
    margin-top: 10px;
    text-align: center;
    @media screen and (min-width: 1400px) {
      font-size: ${dtFontSize.xsmall};
    }
  }
`;
export default function Item({ data }) {
  return (
    <ItemContainer>
      <ImageContainer>
        <img src={data.image} alt="poster" />
      </ImageContainer>
      <Link to={`tickets/${data.id}`}>
        <ConcertDetailsContainer>
          <h2>{data.title}</h2>
          <h3>{data.nickname}</h3>
          <h4 className="date">{`${data.showAt} - ${data.expiredAt}`}</h4>
          <h4 className="location">{data.detailAddress}</h4>
        </ConcertDetailsContainer>
      </Link>
    </ItemContainer>
  );
}
