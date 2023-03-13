/* eslint-disable import/no-unresolved */
//페이지, 리액트 컴포넌트, 정적 파일
import ReviewItem from "../TicketsDetail/ReviewItem.jsx";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import useTicketDataStore from "../../store/useTicketDataStore.js";

//라이브러리 및 라이브러리 메소드
import axios from "axios";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components/macro";

const ReviewListContainer = styled.ul`
  all: unset;
  display: flex;
  width: 90%;
  flex-direction: column;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }
`;

const AddMoreButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  margin-top: 3%;
  width: max-content;

  &:hover {
    color: ${primary.primary500};
  }

  > span {
    margin-right: 5px;
  }
`;

export default function ReviewList() {
  const [data, setData] = useState("");
  const { ticketData, setTicketData } = useTicketDataStore((state) => state);

  const fetchData = () => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URI}/shows/${ticketData.id}/comments`,
    });
  };

  const fetchDataOnSuccess = (response) => {
    const latestData = response.data.data.reverse();
    setData(latestData);
  };

  const fetchDataOnError = (err) => {
    window.alert("일시적인 오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchReviewData"],
    queryFn: fetchData,
    keepPreviousData: true,
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });

  return (
    <>
      <ReviewListContainer>
        {data &&
          data.map((data) => (
            <ReviewItem reviewData={data} key={data.commentId} />
          ))}
      </ReviewListContainer>
    </>
  );
}
