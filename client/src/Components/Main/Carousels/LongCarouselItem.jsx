/* eslint-disable react/prop-types */
import React from "react";

import { dtFontSize, mbFontSize, primary, sub } from "../../../styles/mixins";

import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  max-width: 250px;
  height: 50%;
  margin-right: 29px;
  padding: 5px calc(3px + 1vw);
  background-color: ${sub.sub300};
  border-radius: 10px;

  @media screen and (max-width: 1100px) {
    width: calc(20vw + 38px);
    margin-right: calc(16px + 2.3vw);
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin: 0 calc(20px + 3vw) 0 0;
    width: 15vw;
    background-color: transparent;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin: 0 calc(10px + 3vw) 0 0;
    width: 15vw;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0 calc(10px + 2.5vw) 0 0;
    width: 15vw;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 0 calc(6px + 2.5vw) 0 0;
    width: 15vw;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    margin: 0 calc(5px + 1vw) 0 0;
    width: 15vw;
  }
`;

const ImageContainer = styled.div`
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 3px solid ${primary.primary500};
  border-radius: 10px;

  img {
    width: 70px;
    height: 85px;
    border-radius: 10px;
  }

  @media screen and (max-width: 900px) {
    background-color: ${sub.sub200};
  }
`;

const ConcertDetailsContainer = styled.div`
  width: calc(10vw);
  min-width: 100px;
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

  h2 {
    font-size: calc(3px + 0.6vw);
    text-align: center;

    @media screen and (max-width: 800px) {
      font-size: 10px;
    }
  }

  h3 {
    font-size: calc(2px + 0.5vw);
    margin-top: 10px;
    text-align: center;
    @media screen and (min-width: 1400px) {
      font-size: ${dtFontSize.xsmall};
    }
    @media screen and (max-width: 900px) {
      font-size: ${mbFontSize.xsmall};
      margin-top: 2px;
    }
  }

  .date {
    font-size: calc(1px + 0.3vw);
    font-weight: 400;
    color: ${sub.sub400};
    margin-top: 10px;
    text-align: center;

    @media screen and (min-width: 1400px) {
      font-size: 10px;
    }

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .location {
    font-size: calc(2px + 0.3vw);
    font-weight: 800;
    color: ${sub.sub400};
    margin-top: 10px;
    text-align: center;
    @media screen and (min-width: 1400px) {
      font-size: 10px;
    }

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;
export default function LongCarouselItem({ data }) {
  return (
    <Link to={`tickets/${data.id}`}>
      <ItemContainer>
        <ImageContainer>
          <img src={data.image} alt="poster" />
        </ImageContainer>
        <ConcertDetailsContainer>
          <h2 className="title">{data.title}</h2>
          <h3 className="artist">{data.nickname}</h3>
          <h4 className="date">{`${data.showAt} - ${data.expiredAt}`}</h4>
          <h4 className="location">{data.detailAddress}</h4>
        </ConcertDetailsContainer>
      </ItemContainer>
    </Link>
  );
}
