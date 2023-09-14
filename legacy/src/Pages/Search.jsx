import React, { useState, useEffect } from "react";

import KaKaoMap from "../Components/Search/KaKaoMap.jsx";

import { primary, dtFontSize, sub } from "../styles/mixins";
import breakpoint from "../styles/breakpoint.js";
import "../styles/MarkerOverlay.css";
import useIsLoginStore from "../store/useIsLoginStore.js";
import SearchPanel from "../Components/Search/SearchPanel.jsx";

import styled from "styled-components";
import instance from "../api/core/default";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapContainer = styled.div`
  display: flex;
  width: 90%;
  height: max-content;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const ContentHeaderContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: max-content;
  align-items: space-between;
  min-height: 100px;
  padding: 30px 47px;
  width: 90%;

  h1 {
    color: ${primary.primary500};
  }

  h2 {
    all: unset;
    color: ${sub.sub400};
    font-size: ${dtFontSize.medium};
    font-weight: 400;
    margin: 5px 0 0 0;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    min-height: 100px;
    padding: 20px 5.13%;
    width: 100%;
  }
`;

const SearchPanelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;

  .radio_group {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  label {
    margin-right: 5px;
    font-weight: 500;
    font-size: ${dtFontSize.small};
    color: ${primary.primary500};
  }

  input {
    margin-right: 10px;
  }

  label,
  input {
    :hover {
      cursor: pointer;
    }
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  width: 40%;
  height: 70%;
  border-radius: 10px;
  border: 2px solid ${sub.sub500};

  &:focus-within {
    border: 0;
    outline: 3px solid ${primary.primary200};

    path {
      fill: ${primary.primary300};
    }
  }

  .image_container {
    display: flex;
    width: max-content;
    height: 100%;
    align-items: center;
  }
`;

export default function Search() {
  const isLogin = !!localStorage.getItem("accessToken");
  const [userInfo, setUserInfo] = useState({
    address: "강남구",
    location: [37.4965304, 127.024758],
  });

  const [searchedData, setSearchedData] = useState();

  const fetchUserData = () => {
    const userId = JSON.parse(localStorage.getItem("userInfoStorage")).id;
    return instance.get(`/members/${userId}`);
  };

  const fetchUserDataOnSuccess = (res) => {
    const data = res.data.data;
    setUserInfo({
      address: data.profile[0].address || "강남구",
      location:
        data.latitude && data.longitude
          ? [data.latitude, data.longitude]
          : [37.4965304, 127.024758],
    });
  };

  useQuery({
    queryKey: ["fetchUserDataInMap", isLogin],
    queryFn: fetchUserData,
    onSuccess: fetchUserDataOnSuccess,
    enabled: isLogin,
    refetchOnWindowFocus: false,
  });

  return (
    <Container>
      <ContentHeaderContainer>
        <h1>공연 찾기</h1>
        <h2>찾고자 하는 공연을 위치기반으로 검색합니다.</h2>
      </ContentHeaderContainer>
      <SearchPanel setSearchedData={setSearchedData} />
      <MapContainer>
        <KaKaoMap
          isLogin={isLogin}
          userInfo={userInfo}
          searchedData={searchedData}
          setSearchedData={setSearchedData}
        />
      </MapContainer>
    </Container>
  );
}
