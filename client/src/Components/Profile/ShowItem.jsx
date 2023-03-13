/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
//페이지, 리액트 컴포넌트, 정적 파일
import { PillButton } from "../../Pages/Tickets/TicketsDetail.jsx";
import NaverMapIcon from "../../assets/naverMapIcon.jpg";
import KakaoMapIcon from "../../assets/kakaoMapIcon.jpg";
import KakaoMapButton from "../TicketsDetail/KakaoMapButton.jsx";

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
import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const ShowItemContainer = styled.li`
  all: unset;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 3px 3px #b9b9b9;
  display: flex;
  min-height: 130px;
  width: 100%;
  background-color: #d0e2ff;
  border-radius: 10px;
  justify-content: space-between;
  padding: 2% 3%;
  margin-bottom: 30px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-bottom: 20px;
    min-height: 100px;
    width: 100%;
  }
`;

const ItemContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;

    > .poster-image {
      height: 100px;
      width: 75px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        height: 70px;
        width: 52.5px;
      }
    }

    > .show-info-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 10px;

      > .title-and-provider-container {
        display: flex;
        flex-direction: column;

        > a {
          color: ${sub.sub800};
          cursor: pointer;
          font-weight: 600;
          font-size: ${dtFontSize.medium};

          &:hover {
            color: ${primary.primary300};
            cursor: pointer;
          }

          @media screen and (max-width: ${breakpoint.mobile}) {
            font-size: ${mbFontSize.medium};
          }
        }
      }

      > .period-and-location-container {
        display: flex;
        flex-direction: column;

        > .period {
          color: ${primary.primary500};
          font-weight: 600;
          font-size: ${dtFontSize.small};

          @media screen and (max-width: ${breakpoint.mobile}) {
            font-size: ${mbFontSize.small};
          }
        }

        > .location {
          color: ${sub.sub400};
          font-weight: 400;
          font-size: ${dtFontSize.small};

          @media screen and (max-width: ${breakpoint.mobile}) {
            display: none;
          }
        }
      }
    }
  }

  > .button-container {
    align-items: flex-end;
    display: flex;
    width: 105px;
    justify-content: space-between;

    @media screen and (max-width: ${breakpoint.mobile}) {
      flex-direction: column;
      height: 60px;
    }
  }
`;

export default function ShowItem({ reservationData }) {
  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const navigate = useNavigate();

  const deleteReservation = () => {
    return instance({
      method: "delete",
      url: `/shows/reservations/${reservationData.id}`,
    });
  };

  const deleteReservationOnsuccess = () => {
    window.alert("예매 취소가 완료되었습니다.");
  };

  const deleteReservationOnError = (error) => {
    if (
      error.response.status === 400 &&
      error.response.data.message === "Token Expired"
    ) {
      window.alert("다시 로그인해주세요.");
      localStorage.clear();
      setIsLogin(false);
      navigate("/");
    } else if (error.response.status === 500) {
      window.alert("일시적인 오류입니다. 잠시 후에 다시 시도해주세요.");
    }
  };

  const { mutate: deleteReservationData } = useMutation({
    mutationFn: deleteReservation,
    onSuccess: deleteReservationOnsuccess,
    onError: deleteReservationOnError,
  });

  const handledeleteReservation = () => {
    deleteReservationData();
  };

  const handleMoveToShowPage = () => {
    navigate(`/tickets/${reservationData && reservationData.showId}`);
  };

  return (
    <ShowItemContainer>
      <ItemContentContainer>
        <div>
          <img
            alt="poster"
            className="poster-image"
            src={reservationData && reservationData.image}
          />
          <div className="show-info-container">
            <div className="title-and-provider-container">
              <a onClick={handleMoveToShowPage}>
                {reservationData && reservationData.title} /{" "}
                {reservationData && reservationData.nickname}
              </a>
              <span>
                {" "}
                티켓: {reservationData && reservationData.ticketCount}매
              </span>
            </div>
            <div className="period-and-location-container">
              <span className="period">
                공연일시: {reservationData && reservationData.date}
              </span>
              <span className="location">
                {reservationData && reservationData.address}{" "}
                {reservationData && reservationData.detailAddress}
              </span>
            </div>
          </div>
        </div>
        {reservationData.expired ? (
          ""
        ) : (
          <div className="button-container">
            <KakaoMapButton
              detailAddress={reservationData && reservationData.detailAddress}
              latitude={reservationData && reservationData.latitude}
              longitude={reservationData && reservationData.longitude}
            />
            <PillButton
              color={misc.red}
              hoverColor={misc.lightred}
              onClick={handledeleteReservation}
            >
              취소
            </PillButton>
          </div>
        )}
      </ItemContentContainer>
    </ShowItemContainer>
  );
}
