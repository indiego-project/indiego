//페이지, 리액트 컴포넌트, 정적 파일
import kakaoMapIcon from "../../assets/kakaoMapIcon.jpg";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";

//라이브러리 및 라이브러리 메소드
import { React, useState } from "react";
import styled from "styled-components/macro";

const ButtonComponent = styled.button`
  all: unset;
  cursor: pointer;
  display: inline;
  width: 30px;
  height: 30px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 27px;
    height: 27px;
  }

  > img {
    border-radius: 100%;
    width: 30px;
    height: 30px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 27px;
      height: 27px;
    }
  }
`;

export default function KakaoMapButton({ detailAddress, latitude, longitude }) {
  const [locationId, setLocationId] = useState("");
  const locationName = detailAddress && detailAddress.split("/")[1];
  const headers = {
    // eslint-disable-next-line prettier/prettier
    "Authorization": `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`,
  };

  const handleButtonClick = () => {
    window.open(
      `https://map.kakao.com/link/map/${locationName},${latitude},${longitude}`
    );
  };

  return (
    <ButtonComponent onClick={handleButtonClick}>
      <img alt="kakao map icon" src={kakaoMapIcon} />
    </ButtonComponent>
  );
}
