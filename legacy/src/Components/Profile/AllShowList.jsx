//페이지, 리액트 컴포넌트, 정적 파일
import ShowList from "./ShowList.jsx";
import ShowItem from "./ShowItem.jsx";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import {
  primary,
  secondary,
  sub,
  misc,
  dtFontSize,
  mbFontSize,
} from "../../styles/mixins";
import instance from "../../api/core/default.js";
import useIsLoginStore from "../../store/useIsLoginStore.js";

//라이브러리 및 라이브러리 메소드
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const ContentInnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding: 5%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 20px 5.13%;
  }

  > .reservation-list-title {
    align-items: center;
    display: flex;
    color: ${primary.primary500};
    display: flex;
    font-size: ${dtFontSize.xlarge};
    font-weight: 600;
    height: 24px;
    width: 80%;
    margin-bottom: 20px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 100%;
    }
  }

  > .expired-list-title {
    align-items: center;
    display: flex;
    color: ${primary.primary500};
    display: flex;
    font-size: ${dtFontSize.xlarge};
    font-weight: 600;
    height: 24px;
    width: 80%;
    margin: 50px 0 20px 0;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 100%;
    }
  }
`;

const ShowListContainer = styled.div`
  align-items: center;
  display: flex;
  height: max-content;
  min-height: 250px;
  width: 80%;
  background-color: white;
  border: 1px solid ${sub.sub300};
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: column;
  padding: 4%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }
`;

export default function AllShowList() {
  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const [data, setData] = useState();
  const [isExpiredDataExist, setIsExpiredDataExist] = useState(true);
  const [isNotExpiredDataExist, setIsNotExpiredDataExist] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    return instance({
      method: "get",
      url: "/shows/reservations",
    });
  };

  const fetchDataOnSuccess = (response) => {
    setData(response.data.data && response.data.data);
  };

  const fetchDataOnError = (err) => {
    window.alert("일시적인 오류입니다. 잠시 후에 다시 시도해주세요.");
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchData,
    keepPreviousData: true,
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });

  const notExpiredData = data && data.filter((data) => data.expired === false);
  const expiredData = data && data.filter((data) => data.expired === true);

  useEffect(() => {
    if (notExpiredData && notExpiredData.length <= 0) {
      setIsNotExpiredDataExist(false);
    }

    if (expiredData && expiredData.length <= 0) {
      setIsExpiredDataExist(false);
    }
  }, [data]);

  return (
    <ContentInnerContainer>
      <div className="reservation-list-title">내가 예매한 공연</div>
      <ShowListContainer>
        <ShowList
          allReservationData={notExpiredData}
          dataExist={isNotExpiredDataExist}
        />
      </ShowListContainer>
      <div className="expired-list-title">지난 공연 목록</div>
      <ShowListContainer>
        <ShowList
          allReservationData={expiredData}
          dataExist={isExpiredDataExist}
        />
      </ShowListContainer>
    </ContentInnerContainer>
  );
}
