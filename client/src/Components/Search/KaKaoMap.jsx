/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from "react";

import marker from "../../assets/marker.svg";
import createMarker from "../../utils/createMarker";
import { dtFontSize, primary, secondary, sub } from "../../styles/mixins";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  position: relative;
`;

const MapSearchPanelContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #336db5cf;
  position: absolute;
  left: 0%;
  top: 0%;
  width: ${(props) => (props.isSearched ? "200px" : 0)};
  height: 100%;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  .search_title {
    font-weight: 600;
    color: white;
    opacity: ${(props) => (props.isSearched ? 1 : 0)};
    transition: all 0.3s ease-in-out;
  }

  .close_button {
    padding: 5px;
    border: 1px solid white;
    color: white;
    border-radius: 10px;
    background-color: ${primary.primary100};
    opacity: ${(props) => (props.isSearched ? 1 : 0)};

    :hover {
      color: white;
      background-color: ${secondary.secondary500};
      cursor: pointer;
    }
  }
`;

const SearchedDataListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${primary.primary100}a2;
  border-radius: 10px;
  overflow-y: scroll;
  width: 90%;
  height: 60%;
  opacity: ${(props) => (props.isSearched ? 1 : 0)};
  transition: width 0.5s ease-in-out, opacity 0.6s ease-in-out;
  position: relative;
  box-shadow: 0 5px 5px ${primary.primary600};

  li {
    display: flex;
    align-items: center;
    padding: 6px;
    border: 1px solid white;
    border-width: 0 0 1px 0;
    opacity: ${(props) => (props.isSearched ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;

    :hover {
      cursor: pointer;
      background-color: ${secondary.secondary600};
    }
  }

  span {
    width: 15px;
    height: 100%;
    text-align: center;
    padding-top: 10px;
    font-size: ${dtFontSize.small};
    font-weight: 400;
    margin-right: 10px;
    color: white;
  }

  p {
    font-weight: 600;
    color: white;
    font-size: ${dtFontSize.small};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow-x: hidden;
    -webkit-box-orient: vertical;
  }

  .artist,
  .address {
    font-size: ${dtFontSize.xsmall};
    font-weight: 400;
    color: #dddddd;
  }
`;

const NullInfo = styled.p`
  position: absolute;
  top: 50%;
  left: 18%;
  opacity: ${(props) => (props.isOut ? 0 : 1)};
  transition: all 0.1s ease-in-out;
`;

export default function KaKaoMap({ userInfo, searchedData, setSearchedData }) {
  const { kakao } = window;

  const userXBoundary = [
    userInfo && userInfo.location[0] - 0.0040515,
    userInfo && userInfo.location[0] + 0.0040515,
  ];
  const userYBoundary = [
    userInfo && userInfo.location[1] - 0.0073285,
    userInfo && userInfo.location[1] + 0.0073285,
  ];

  const [data, setData] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const [XBoundary, setXBoundary] = useState(userXBoundary);
  const [YBoundary, setYBoundary] = useState(userYBoundary);

  const mapElement = useRef();
  const clustererElement = useRef();
  const markersArray = useRef([]);
  const hoverWindowArray = useRef([]);

  const markerImageSrc = marker;
  const markerImageSize = new kakao.maps.Size(64, 64);
  const markerImageOption = { offset: new kakao.maps.Point(27, 69) };

  const markerImage = new kakao.maps.MarkerImage(
    markerImageSrc,
    markerImageSize,
    markerImageOption
  );

  // 데이터 fetching 로직
  const fetchMarkersInfo = () => {
    setFetchTrigger(false);
    const params = {
      x1: XBoundary[0],
      x2: XBoundary[1],
      y1: YBoundary[0],
      y2: YBoundary[1],
    };
    return axios.get(
      `${process.env.REACT_APP_SERVER_URI}/shows/maps/location`,
      { params }
    );
  };

  const fetchMarkersInfoOnSuccess = (res) => {
    const data = res.data.data;
    setData(data);
  };

  useQuery({
    queryKey: ["fetchMarkersInfo", XBoundary, YBoundary],
    queryFn: fetchMarkersInfo,
    onSuccess: fetchMarkersInfoOnSuccess,
    enabled: fetchTrigger,
    retry: false,
  });

  // 지도 초기 생성
  useEffect(() => {
    const userX = userInfo.location[0];
    const userY = userInfo.location[1];

    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(userX, userY), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    if (!mapContainer.hasChildNodes()) {
      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption);
      mapElement.current = map;

      map.setMaxLevel(9);

      // 클러스터러 객체 생성
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 3,
      });
      clustererElement.current = clusterer;

      // 초기에 데이터가 존재하면 마커 추가
      if (data && data.length > 0) {
        data.map((locObj) => {
          const [marker, hoverWindow] = createMarker(
            locObj,
            map,
            markerImage,
            kakao
          );
          markersArray.current.push(marker);
          hoverWindowArray.current.push(hoverWindow);
        });
      }

      // 지도에 컨트롤 추가
      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // 맵 이벤트 핸들러 추가
      kakao.maps.event.addListener(map, "zoom_changed", () => {
        hoverWindowArray.current.forEach((hoverWIndow) => {
          hoverWIndow.setMap(null);
        });
        const bounds = map.getBounds();
        const sePoint = bounds.getSouthWest();
        const nePoint = bounds.getNorthEast();

        const XBoundaryValue = [sePoint.getLat(), nePoint.getLat()];
        const YBoundaryValue = [sePoint.getLng(), nePoint.getLng()];

        setXBoundary(XBoundaryValue);
        setYBoundary(YBoundaryValue);

        setFetchTrigger(true);
      });

      kakao.maps.event.addListener(map, "dragend", () => {
        const bounds = map.getBounds();
        const sePoint = bounds.getSouthWest();
        const nePoint = bounds.getNorthEast();

        const XBoundaryValue = [sePoint.getLat(), nePoint.getLat()];
        const YBoundaryValue = [sePoint.getLng(), nePoint.getLng()];

        setXBoundary(XBoundaryValue);
        setYBoundary(YBoundaryValue);

        setFetchTrigger(true);
      });
    }
  }, []);

  // data fatching 후 marker 생성 로직
  useEffect(() => {
    // 맵, 클러스터 인스턴스 불러오기
    const map = mapElement.current;
    const clusterer = clustererElement.current;

    if (markersArray.current.length > 0) {
      markersArray.current.forEach((marker) => {
        marker.setMap(null);
        clusterer.removeMarker(marker);
      });
    }

    const markers =
      data &&
      data.map((locObj) => {
        // 마커 생성
        const [marker, hoverWindow] = createMarker(
          locObj,
          map,
          markerImage,
          kakao
        );
        hoverWindowArray.current.push(hoverWindow);
        return marker;
      });

    markersArray.current = markers;

    // 클러스터에 배열 형태로 된 마커들을 전달하면 클러스터 생성
    clusterer.addMarkers(markers);
  }, [data]);

  const searchedItemClickHandler = (data, mapElement, markerImage, kakao) => {
    const map = mapElement.current;
    const [marker, hoverWindow] = createMarker(
      data,
      mapElement.current,
      markerImage,
      kakao
    );
    markersArray.current.push(marker);
    hoverWindowArray.current.push(hoverWindow);
    map.setCenter(new kakao.maps.LatLng(data.latitude, data.longitude));
  };

  useEffect(() => {
    const userXBoundary = [
      userInfo.location[0] - 0.0040515,
      userInfo.location[0] + 0.0040515,
    ];
    const userYBoundary = [
      userInfo.location[1] - 0.0073285,
      userInfo.location[1] + 0.0073285,
    ];

    setXBoundary(userXBoundary);
    setYBoundary(userYBoundary);
    setFetchTrigger(true);
    mapElement.current.setCenter(
      new kakao.maps.LatLng(userInfo.location[0], userInfo.location[1])
    );
  }, [userInfo]);

  return (
    <Container>
      <MapSearchPanelContainer isSearched={!!searchedData}>
        <p className="search_title">검색 결과</p>
        <SearchedDataListContainer isSearched={!!searchedData}>
          {searchedData && searchedData.length > 0 ? (
            searchedData.map((data, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    searchedItemClickHandler(
                      data,
                      mapElement,
                      markerImage,
                      kakao
                    );
                  }}
                >
                  <span>{index + 1}.</span>
                  <div>
                    <p className="title">{`${data.title}`}</p>
                    <p className="artist">{data.nickname}</p>
                    <p className="address">{`${data.address}`}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <NullInfo className="null_info" isOut={!searchedData}>
              검색 결과가 없습니다.
            </NullInfo>
          )}
        </SearchedDataListContainer>
        <button
          className="close_button"
          onClick={() => {
            setSearchedData();
          }}
        >
          닫기
        </button>
      </MapSearchPanelContainer>
      <div id="map" style={{ width: "100%", height: "450px" }}></div>
    </Container>
  );
}
