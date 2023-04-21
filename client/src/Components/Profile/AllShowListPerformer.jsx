//페이지, 리액트 컴포넌트, 정적 파일
import ShowListPerformer from "./ShowListPerformer.jsx";

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

//라이브러리 및 라이브러리 메소드
import { React, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components/macro";

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

  > .performance-list-title {
    align-items: center;
    display: flex;
    color: ${secondary.secondary600};
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
    color: ${secondary.secondary600};
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
  const [data, setData] = useState();
  const [isExpiredDataExist, setIsExpiredDataExist] = useState(true);
  const [isNotExpiredDataExist, setIsNotExpiredDataExist] = useState(true);

  const fetchDataOnSuccess = (response) => {
    const { getShowOfSeller: data } = response.data.data;
    setData(data);
  };

  const fetchDataOnError = () => {
    window.alert("일시적인 오류입니다. 잠시 후에 다시 시도해주세요.");
  };
  // graphQl
  const gqlFetchData = () => {
    const query = `
        query GetShowOfSeller($page: Int, $size: Int) {
          getShowOfSeller(page: $page, size: $size) {
              id
              title
              nickname
              showAt
              expiredAt
              address
              detailAddress
              image
              emptySeats
              revenue
              isExpired
          }
        }
      `;

    const data = { query };

    return instance.post(`${process.env.REACT_APP_SERVER_URI}/graphql`, data);
  };

  const { isLoading } = useQuery({
    queryFn: gqlFetchData,
    queryKey: ["FetchSellShowsGQL"],
    keepPreviousData: true,
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });
  // graphQl

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
      <div className="performance-list-title">현재 공연 목록</div>
      <ShowListContainer>
        <ShowListPerformer
          allReservationData={notExpiredData}
          dataExist={isNotExpiredDataExist}
        />
      </ShowListContainer>
      <div className="expired-list-title">지난 공연 목록</div>
      <ShowListContainer>
        <ShowListPerformer
          allReservationData={expiredData}
          dataExist={isExpiredDataExist}
        />
      </ShowListContainer>
    </ContentInnerContainer>
  );
}
