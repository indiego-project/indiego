//페이지, 리액트 컴포넌트, 정적 파일
import Spinner from "../../Components/Spinner";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons/faCheckCircle";
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
import useTicketDataStore from "../../store/useTicketDataStore";
import useRequestPaymentsDataStore from "../../store/useRequestPaymentsDataStore";
import instance from "../../api/core/default";

//라이브러리 및 라이브러리 메소드
import { React, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 0 auto;
  min-height: calc(100vh - 87px);
  width: 100%;
`;

const SuccessInfoContainer = styled.div`
  align-items: center;
  background-color: #d3e2ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 70vh;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 90%;
  }

  > svg {
    color: ${primary.primary300};
  }

  > h1 {
    all: unset;
    color: ${primary.primary500};
    font-weight: 600;
    font-size: ${dtFontSize.xlarge};
    margin-top: 10px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xlarge};
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
  width: max-content;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    margin-top: 100px;
  }

  > button {
    all: unset;
    color: white;
    cursor: pointer;
    width: max-content;
    height: 45px;
    border-radius: 8px;
    font-weight: 600;
    font-size: ${dtFontSize.medium};
    background-color: ${primary.primary300};
    padding: 11px 22px;
    box-sizing: border-box;
    text-align: center;

    &:first-child {
      margin-right: 20px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        margin: 0 0 20px 0;
      }
    }

    &:hover {
      background-color: ${primary.primary500};
    }

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
      width: 55vw;
    }
  }
`;

export function SuccessPage() {
  const [searchParams] = useSearchParams();
  const data = JSON.parse(sessionStorage.getItem("reservationInfo"));
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("userInfoStorage")).id;
  const showId = JSON.parse(sessionStorage.getItem("reservationInfo")).showId;

  const postData = () => {
    return instance.post(
      `${
        process.env.REACT_APP_SERVER_URI
      }/api/v1/payments/success?paymentKey=${searchParams.get(
        "paymentKey"
      )}&orderId=${searchParams.get("orderId")}&amount=${searchParams.get(
        "amount"
      )}`,
      data
    );
  };

  // const postDataOnError = () => {
  //   window.alert("결제 승인 과정 중 오류가 발생했습니다. 다시 시도해주세요.");
  //   navigate(`/tickets/${showId}`);
  // };

  const { mutate: postPaymentData, isLoading } = useMutation({
    mutationFn: postData,
    // onError: postDataOnError,
  });

  useEffect(() => {
    postPaymentData();
  }, []);

  const handleButtonClick = (page) => {
    navigate(page);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <SuccessInfoContainer>
            <FontAwesomeIcon icon={faCheckCircle} size="4x" />
            <h1>결제가 완료되었습니다</h1>
            <ButtonContainer>
              <button
                onClick={() => handleButtonClick(`/mypage/user/${userId}`)}
              >
                예매 내역 확인하기
              </button>
              <button onClick={() => handleButtonClick("/tickets")}>
                다른 공연 예매하기
              </button>
            </ButtonContainer>
          </SuccessInfoContainer>
        </Container>
      )}
    </>
  );
}
