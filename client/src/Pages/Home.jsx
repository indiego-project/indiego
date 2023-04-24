import React, { Suspense, useState } from "react";

import Banner from "../Components/Main/Banner.jsx";
import SearchBar from "../Components/Main/SearchBar.jsx";
import Button from "../Components/Main/Button.jsx";
import Carousel from "../Components/Main/Carousels/Carousel.jsx";
import Boards from "../Components/Main/Boards/Boards.jsx";
import Overlay from "../Components/Main/Popups/Overlay.jsx";
const LocationPopup = React.lazy(() =>
  import("../Components/Main/Popups/LocationPopup.jsx")
);
const DatePopup = React.lazy(() =>
  import("../Components/Main/Popups/DatePopup.jsx")
);

import { dtFontSize, primary, sub } from "../styles/mixins.js";
import breakpoint from "../styles/breakpoint.js";
import instance from "../api/core/default.js";
// test
import axios from "axios";
// test
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  overflow-y: hidden;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 30vh;
  min-height: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0 60px 0;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin: 30px 0;
    max-height: max-content;
    height: max-content;
  }
`;

const CarouselDisplayBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const CarouselDisplay = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
  }

  .carousel_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 50%;

    h1 {
      color: ${primary.primary500};
      font-size: ${dtFontSize.large};
      margin-bottom: 10px;
      width: 65%;
      height: max-content;
      text-align: start;
    }

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 100%;
    }
  }

  .loading_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
    border-radius: 20px;
    background-color: ${sub.sub200};
  }
`;

const BoardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1.title {
    width: 75%;
    color: ${primary.primary500};
    font-size: ${dtFontSize.large};
    margin-bottom: 5px;
    text-align: start;

    @media screen and (max-width: ${breakpoint.mobile}) {
      text-align: center;
      background-color: ${primary.primary300};
      color: white;
      margin-left: 0;
      width: 80%;
      padding: 10px 0;
      border-radius: 20px;
    }
  }
`;

const BoardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 35%);
  column-gap: 5%;
  row-gap: 20px;
  justify-content: center;
  margin-top: 30px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    grid-template-columns: repeat(1, 80%);
  }
`;

export default function Home() {
  const [LocationPopupOpen, setLocationPopupOpen] = useState(false);
  const [DatePopupOpen, setDatePopupOpen] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const isLogin = !!localStorage.getItem("accessToken");

  const locationPopupOnClickHandler = () => {
    const body = document.querySelector("body");
    body.classList.add("modal_open");
    setLocationPopupOpen(true);
  };

  const datePopupOnClickHanlder = () => {
    const body = document.querySelector("body");
    body.classList.add("modal_open");
    setDatePopupOpen(true);
  };

  const fetchUserAddressAtHome = () => {
    const userId = JSON.parse(localStorage.getItem("userInfoStorage")).id;
    return instance.get(`/members/${userId}`);
  };

  const fetchUserAddressAtHomeOnSuccess = (res) => {
    let userAddress = res.data.data.profile[0].address;
    userAddress =
      userAddress === userAddress ?? "없음" ? "강남구" : userAddress;
    setUserAddress(userAddress);
  };

  const { isLoading: userAddressLoading } = useQuery({
    queryKey: ["fetchUserAddressAtHome", isLogin],
    queryFn: fetchUserAddressAtHome,
    onSuccess: fetchUserAddressAtHomeOnSuccess,
    enabled: isLogin,
  });

  return (
    <MainContainer popupOpen={LocationPopupOpen || DatePopupOpen}>
      {LocationPopupOpen && (
        <Overlay>
          <Suspense fallback={<div>...loading</div>}>
            <LocationPopup popupHandler={setLocationPopupOpen} />
          </Suspense>
        </Overlay>
      )}
      {DatePopupOpen && (
        <Overlay>
          <Suspense fallback={<div>...loading</div>}>
            <DatePopup popupHandler={setDatePopupOpen}></DatePopup>
          </Suspense>
        </Overlay>
      )}
      <Banner />
      <ButtonsContainer>
        <Button clickEvent={locationPopupOnClickHandler}>
          지역별 공연 현황
        </Button>
        <Button clickEvent={datePopupOnClickHanlder}>날짜별 공연 현황</Button>
      </ButtonsContainer>
      <SearchBar navigateTo="/tickets" fetchMode={false} defaultValue={""} />
      <CarouselContainer>
        <CarouselDisplayBox>
          <CarouselDisplay>
            <div className="carousel_box">
              <h1>우리 동네 인기 공연</h1>
              {isLogin ? (
                userAddress ? (
                  <Carousel
                    status="별점순"
                    address={userAddress}
                    isRankMode={true}
                  ></Carousel>
                ) : (
                  <div className="loading_container">
                    <p>사용자 지역정보를 불러오고 있습니다.</p>
                  </div>
                )
              ) : (
                <Carousel
                  status="별점순"
                  address={"강남구"}
                  isRankMode={true}
                ></Carousel>
              )}
            </div>
            <div className="carousel_box">
              <h1>우리 동네 새로운 공연</h1>
              {isLogin ? (
                userAddress ? (
                  <Carousel status="최신순" address={userAddress}></Carousel>
                ) : (
                  <div className="loading_container">
                    <p>사용자 지역정보를 불러오고 있습니다.</p>
                  </div>
                )
              ) : (
                <Carousel status="최신순" address={"강남구"}></Carousel>
              )}
            </div>
          </CarouselDisplay>
        </CarouselDisplayBox>
      </CarouselContainer>
      <BoardsContainer>
        <h1 className="title">커뮤니티 인기 게시글</h1>
        <BoardsGrid>
          <Boards path="free" category="자유게시판">
            자유게시판
          </Boards>
          <Boards path="employ" category="구인게시판">
            구인게시판
          </Boards>
          <Boards path="request" category="초청게시판">
            초청게시판
          </Boards>
          <Boards path="advertise" category="홍보게시판">
            홍보게시판
          </Boards>
          <Boards path="review" category="후기게시판">
            공연후기
          </Boards>
        </BoardsGrid>
      </BoardsContainer>
    </MainContainer>
  );
}
