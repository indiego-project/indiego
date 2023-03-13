/* eslint-disable react/prop-types */
import React from "react";

import { useState } from "react";

import { primary, sub, dtFontSize } from "../../../styles/mixins";
import Arrow from "../../../assets/arrow.svg";
import { useInterval } from "../../../utils/useInterval";

import Button from "../Button.jsx";
import LongCarouselItemList from "./LongCarouselItemList.jsx";

import styled from "styled-components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Spinner";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselHeader = styled.div`
  display: flex;
  width: 100%;

  h1 {
    width: max-content;
    margin-left: 20px;
    color: ${primary.primary500};
    font-size: ${dtFontSize.large};
    text-align: center;
    padding-top: 18px;
  }

  @media screen and (max-width: 1100px) {
    width: 90vw;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  background-color: ${sub.sub200};
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1100px) {
    width: 90vw;
  }
`;

const PrevButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: ${sub.sub400};
  border: 0;
  margin-left: 0;
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
  margin-left: 0;
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

export default function LocationShowsList({ userInfo }) {
  const [data, setData] = useState([]);
  const isLogin = !!localStorage.getItem("accessToken");
  const serverURI = process.env.REACT_APP_SERVER_URI;

  const fetchShowDataByLocation = () => {
    if (userInfo && userInfo?.profile[0].address) {
      return axios.get(`${serverURI}/shows/location`, {
        params: { address: userInfo?.profile[0].address },
      });
    } else {
      return axios.get(`${serverURI}/shows/location`, {
        params: { address: "강남구" },
      });
    }
  };

  const fetchShowDataByLocationOnSuccess = (response) => {
    const data = response.data.data.shows;
    setData(data);
  };

  const { isLoading, refetch } = useQuery({
    queryKey: ["fetchShowDataByLocation"],
    queryFn: fetchShowDataByLocation,
    onSuccess: fetchShowDataByLocationOnSuccess,
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch();
  }, [userInfo]);

  return (
    <Container>
      <CarouselHeader>
        <h1>우리 동네 공연 현황</h1>
        {isLogin && userInfo ? (
          userInfo.profile[0].address ? (
            <Link to={`mypage/${userInfo.role.toLowerCase()}/${userInfo.id}`}>
              <Button className="my_location">
                {`내 지역: ${userInfo.profile[0].address}`}
              </Button>
            </Link>
          ) : (
            <Link to={`mypage/${userInfo.role.toLowerCase()}/${userInfo.id}`}>
              <Button className="my_location">위치 설정하러 가기</Button>
            </Link>
          )
        ) : (
          <Link to="/signup">
            <Button className="my_location">회원가입 하기</Button>
          </Link>
        )}
      </CarouselHeader>
      <CarouselContainer>
        {isLoading ? (
          <Spinner />
        ) : data.length > 0 ? (
          <LongCarouselItemList data={data} />
        ) : (
          <p> 현재 내 지역에 공연이 존재하지 않습니다.</p>
        )}
      </CarouselContainer>
    </Container>
  );
}
