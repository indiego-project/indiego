//페이지, 리액트 컴포넌트, 정적 파일
import Spinner from "../../Components/Spinner";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons/faXmarkCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import {
  primary,
  sub,
  misc,
  dtFontSize,
  mbFontSize,
} from "../../styles/mixins";

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
  background-color: ${sub.sub100};
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
    color: ${misc.red};
  }

  > h1 {
    all: unset;
    color: ${misc.red};
    font-weight: 600;
    font-size: ${dtFontSize.xlarge};
    margin-top: 10px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xlarge};
    }
  }

  > h2 {
    all: unset;
    font-size: ${dtFontSize.medium};
    margin-top: 5px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
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
      margin-right: 10px;

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

export function FailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [errorMessage, seterrorMessage] = useState();
  const showId = JSON.parse(sessionStorage.getItem("reservationInfo")).showId;

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const postData = () => {
    return axios.post(
      `${
        process.env.REACT_APP_SERVER_URI
      }/api/v1/payments/fail?code=${searchParams.get(
        "code"
      )}&message=${searchParams.get("message")}&orderId=${searchParams.get(
        "orderId"
      )}`,
      headers
    );
  };

  const postDataOnSuccess = (response) => {
    seterrorMessage(response.data.data.errorMessage);
  };

  const postDataOnError = () => {
    window.alert("결제 과정 중 오류가 발생했습니다. 다시 시도해주세요.");
    navigate(`/tickets/${showId}`);
  };

  const { mutate: postFailData, isLoading } = useMutation({
    mutationFn: postData,
    onError: postDataOnError,
    onSuccess: postDataOnSuccess,
  });

  useEffect(() => {
    postFailData();
  }, []);

  const handleButtonClick = () => {
    navigate(`/tickets/${showId}`);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <SuccessInfoContainer>
            <FontAwesomeIcon icon={faXmarkCircle} size="4x" />
            <h1>결제에 실패하였습니다</h1>
            <h2>실패 사유: {errorMessage}</h2>
            <ButtonContainer>
              <button onClick={handleButtonClick}>이전으로 돌아가기</button>
            </ButtonContainer>
          </SuccessInfoContainer>
        </Container>
      )}
    </>
  );
}
