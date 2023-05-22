/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import CarouselItemList from "./CarouselItemList";

import Spinner from "../../Spinner";

import { primary, sub } from "../../../styles/mixins";
import breakpoint from "../../../styles/breakpoint";
import Arrow from "../../../assets/arrow.svg";
import { useInterval } from "../../../utils/useInterval";

import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUserInfoStore } from "../../../store/useUserInfoStore";

const CarouselContainer = styled.div`
  width: 70%;
  max-width: 480px;
  min-width: 350px;
  height: 100%;
  min-height: 200px;
  background-color: ${sub.sub200};
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-bottom: 20px;
    padding: 20px 0;
  }
`;

const PrevButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: ${sub.sub400};
  border: 0;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
    background-color: ${primary.primary200};
  }

  img {
    width: 10px;
    height: 10px;
    transform: rotate(180deg);
  }
`;

const NextButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: ${sub.sub400};
  border: 0;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
    background-color: ${primary.primary200};
  }

  img {
    width: 10px;
    height: 10px;
  }
`;

const Rank = styled.h2`
  position: absolute;
  font-size: calc(60px + 2vw);
  top: 50%;
  left: 12%;
  color: ${primary.primary200};
  font-style: italic;
  pointer-events: none;

  @media screen and (min-width: 1400px) {
    font-size: 80px;
  }

  @media screen and (max-width: 900px) {
    font-size: 60px;
    top: 60%;
    left: 18%;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: 60px;
    top: 60%;
    left: calc(5% + 8vw);
  }

  @media screen and (max-width: 500px) {
    top: 65%;
    left: 22%;
    font-size: 50px;
  }
`;

export default function Carousel({ isRankMode, status }) {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [data, setData] = useState([]);
  const [transition, setTransition] = useState(true);
  const serverURI = process.env.REACT_APP_SERVER_URI;
  const { userInfo } = useUserInfoStore((state) => state);
  const address = userInfo.address;

  const fetchShowDataOnSuccess = (response) => {
    const data = response.data.data.getSortShows.data;
    if (data.length > 1) {
      data.push(data[0]);
      data.unshift(data[data.length - 1]);
    }

    setData(data);
  };

  // GraphQl
  const gqlFetchShowData = () => {
    const query = `
    query GetSortShows($address: String, $status: String) {
      getSortShows(address: $address, status: $status) {
        data {
          id
          nickname
          image
          showAt
          expiredAt
          address
          category
        }
      }
    }`;
    const variables = { address, status };
    const data = { query, variables };

    return axios.post(`${serverURI}/graphql`, data);
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchShowDataGQL", status, address],
    queryFn: gqlFetchShowData,
    onSuccess: fetchShowDataOnSuccess,
  });

  useInterval(() => {
    if (data.length !== 1) {
      if (data.length > 0) {
        setCurrentIdx(currentIdx + 1);
        setTransition(true);

        if (currentIdx > data.length + 1) {
          setCurrentIdx(1);
        }
      }
    }
  }, 3500);

  const pageButtonClickHandler = (num) => {
    if (currentIdx > 0 && currentIdx < data.length - 1) {
      setCurrentIdx(currentIdx + num);
      setTransition(true);
    }
  };

  useEffect(() => {
    if (data.length > 1) {
      if (currentIdx === 0) {
        setTimeout(() => {
          setCurrentIdx(data.length - 2);
          setTransition(false);
        }, 500);
      } else if (currentIdx === data.length - 1) {
        setTimeout(() => {
          setCurrentIdx(1);
          setTransition(false);
        }, 500);
      }
    }
  }, [currentIdx]);

  return (
    <CarouselContainer>
      {data.length > 0 && (
        <PrevButton
          onClick={() => {
            pageButtonClickHandler(-1);
          }}>
          <img src={Arrow} alt="prev" />
        </PrevButton>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        data && (
          <CarouselItemList
            data={data}
            currentIdx={data.length === 1 ? 0 : currentIdx}
            transition={transition}
          />
        )
      )}
      {isRankMode && data.length > 0 && (
        <Rank>
          {currentIdx === 0
            ? data.length - 2
            : currentIdx === data.length - 1
            ? 1
            : currentIdx}
        </Rank>
      )}
      {data.length > 0 && (
        <NextButton
          onClick={() => {
            pageButtonClickHandler(1);
          }}>
          <img src={Arrow} alt="next" />
        </NextButton>
      )}
    </CarouselContainer>
  );
}
