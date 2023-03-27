//페이지, 리액트 컴포넌트, 정적 파일
import TicketsDetailTap from "../../Components/TicketsDetail/TicketsDetailTapMenu.jsx";
import KakaoMapButton from "../../Components/TicketsDetail/KakaoMapButton.jsx";
import TicketDeleteModal from "../../Components/TicketsDetail/TicketDeleteModal.jsx";
import ReactDatePicker from "../../Components/Board/TicketsCreate/ReactDatePicker.jsx";
import SelectTicketDateCalendar from "../../Components/TicketsDetail/SelectTicketDateCalendar.jsx";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
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
import useOpenModalStore from "../../store/useOpenModalStore.js";
import useClickedStarStore from "../../store/useClickedStarStore.js";
import instance from "../../api/core/default.js";

//라이브러리 및 라이브러리 메소드
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components/macro";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }
`;

const ContentHeaderContainer = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid ${sub.sub200};
  display: flex;
  height: max-content;
  justify-content: space-between;
  min-height: 140px;
  padding: 40px;
  width: 90%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    min-height: 100px;
    padding: 20px;
    width: 100%;
  }
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    all: unset;
    color: ${primary.primary500};
    font-size: ${dtFontSize.xxlarge};
    font-weight: 700;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xlarge};
    }
  }

  > h2 {
    all: unset;
    color: ${sub.sub400};
    font-size: ${dtFontSize.medium};
    font-weight: 400;
    margin: 5px 0 0 0;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 205px;
  height: max-content;
  margin: 0 0 0 20px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    margin: 0;
    width: max-content;
    height: 59px;
  }
`;

export const PillButton = styled.button`
  all: unset;
  color: white;
  cursor: pointer;
  width: max-content;
  height: max-content;
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: ${dtFontSize.medium};
  background-color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }
`;

const ContentTopContainer = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  justify-content: space-between;
  padding: 2%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 2%;
  }
`;

const TopLeftContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-width: max-content;
  width: 68%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    margin-bottom: 20px;
    width: 90%;
  }

  > h3 {
    all: unset;
    color: ${sub.sub800};
    width: 100%;
    font-size: ${dtFontSize.large};
    font-weight: 600;
    margin: 5px 0;
    text-align: center;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.large};
    }
  }
`;

const PosterImage = styled.img`
  width: 270px;
  height: 360px;
  box-shadow: 0 5px 5px #6d6d6d;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 240px;
    height: 320px;
    margin-bottom: 20px;
  }
`;

const Price = styled.span`
  font-size: ${dtFontSize.medium};
  font-weight: 600;
  color: ${sub.sub400};
  margin-bottom: 5px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }
`;

const EmptySeat = styled.span`
  font-size: ${dtFontSize.medium};
  font-weight: 600;
  color: ${sub.sub800};
  margin-bottom: 5px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }
`;

const TicketInfoContainer = styled.div`
  display: flex;
  width: 60%;
  background-color: ${sub.sub100};
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10px;
  min-height: 500px;
  padding: 3%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-left: 0;
    min-height: 400px;
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > h3 {
    all: unset;
    color: ${sub.sub800};
    width: 100%;
    font-size: ${dtFontSize.large};
    font-weight: 600;
    margin-bottom: 5px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.large};
    }
  }

  > div > h4 {
    all: unset;
    color: ${sub.sub800};
    width: 100%;
    font-size: ${dtFontSize.large};
    font-weight: 600;
    margin-bottom: 5px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.large};
    }
  }

  > div > .title-description {
    color: ${sub.sub400};

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }

  > div > .sub-title {
    color: ${sub.sub800};
    font-weight: 600;
    margin-bottom: 3px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }

  > div > .description {
    color: ${sub.sub800};
    font-weight: 400;
    font-size: ${dtFontSize.small};

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.small};
    }
  }

  > .location-container {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      width: max-content;

      > .location-title {
        color: ${sub.sub800};
        font-weight: 600;
        margin-bottom: 3px;
        width: max-content;
      }

      > .location-description {
        display: inline;
        color: ${sub.sub800};
        font-weight: 400;
        font-size: ${dtFontSize.small};

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.small};
        }
      }
    }

    > button {
      all: unset;
      cursor: pointer;
      display: inline;
      width: 40px;
      height: 40px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        width: 30px;
        height: 30px;
      }

      > img {
        border-radius: 100%;
        width: 40px;
        height: 40px;

        @media screen and (max-width: ${breakpoint.mobile}) {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

const TopRightContainer = styled.div`
  border: 1px solid ${sub.sub300};
  display: flex;
  width: 25%;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10px;
  min-height: 900px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-left: 0;
    height: 400px;
    width: 90%;
  }

  > .inner-container {
    display: flex;
    flex-direction: column;
    height: 33.333%;
    position: relative;
    justify-content: center;
    align-items: center;

    > .error-message {
      color: ${misc.red};
      font-size: ${dtFontSize.small};
      margin-bottom: 5px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.small};
      }
    }

    > .sub-title {
      color: ${sub.sub800};
      font-size: ${dtFontSize.medium};
      font-weight: 600;
      width: 100%;
      position: absolute;
      top: 10px;
      left: 10px;
    }

    > div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      > .set-count-button {
        all: unset;
        align-items: center;
        color: ${sub.sub400};
        margin: 0 10px;

        &:hover {
          color: ${primary.primary300};
          cursor: pointer;
        }
      }

      > .reservation-seat-input {
        width: 50px;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      > span {
        margin-left: 5px;
      }
    }
  }

  > .middle-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${sub.sub300};
    border-bottom: 1px solid ${sub.sub300};
    height: 33.333%;
    position: relative;
    justify-content: center;

    > .sub-title {
      color: ${sub.sub800};
      font-size: ${dtFontSize.medium};
      font-weight: 600;
      width: 100%;
      position: absolute;
      top: 10px;
      left: 10px;
    }

    > .error-message {
      color: ${misc.red};
      font-size: ${dtFontSize.small};
      position: absolute;
      top: 62%;
    }
  }
`;

const ImpossibleButton = styled(PillButton)`
  pointer-events: none;
`;

export default function TicketsDetail() {
  const { ticketData, setTicketData } = useTicketDataStore((state) => state);
  const { openModal, setOpenModal } = useOpenModalStore((state) => state);
  const [isReservationPossible, setIsReservationPossible] = useState(true);
  const [ticketCount, setTicketCount] = useState(1);
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState(false);
  const [isSameUser, setIsSameUser] = useState(false);
  const { clicked, setClicked } = useClickedStarStore((state) => state);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setDateError(false);
    setIsSameUser(false);
    setIsReservationPossible(true);
    setClicked([false, false, false, false, false]);
  }, [ticketData]);

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      ticketData.sellerId ===
        JSON.parse(localStorage.getItem("userInfoStorage")).id
    ) {
      setIsSameUser(true);
    } else {
      setIsSameUser(false);
    }
  });

  useEffect(() => {
    if (ticketData.emptySeats <= 0) {
      setIsReservationPossible(false);
    }
  }, [ticketData]);

  useEffect(() => {
    if (
      new Date(date) < new Date(ticketData.showAt) ||
      new Date(date) > new Date(ticketData.expiredAt)
    ) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  });

  useEffect(() => {
    if (ticketCount <= 0) {
      setTicketCount("");
    }
  }, [ticketCount]);

  const fetchData = () => {
    return axios.get(`${process.env.REACT_APP_SERVER_URI}/shows/${params.id}`);
  };

  const fetchDataOnSuccess = (response) => {
    setTicketData(response.data.data && response.data.data);
  };

  const fetchDataOnError = (error) => {
    navigate("/notFound");
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchData,
    keepPreviousData: false,
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });

  const handleMoveToEditPage = () => {
    navigate(`/tickets/${params.id}/edit`);
  };

  const handleTicketPlus = () => {
    if (ticketCount >= ticketData.emptySeats) {
      return;
    }
    setTicketCount(Number(ticketCount) + 1);
  };

  const handleTicketMinus = () => {
    if (ticketCount <= 1) {
      return;
    }
    setTicketCount(Number(ticketCount) - 1);
  };

  const handleTicketChange = (e) => {
    if (Number(e.target.value) > ticketData.emptySeats) {
      return;
    }
    setTicketCount(Number(e.target.value));
  };

  const postData = () => {
    return instance({
      method: "post",
      url: `/shows/reservations/${params.id}`,
      data: { date, ticketCount },
    });
  };

  const postDataOnsuccess = () => {
    window.alert("공연 예매가 완료되었습니다.");
  };

  const postDataOnError = (error) => {
    if (
      error.response.status === 400 &&
      error.response.data.message === "Token Expired"
    ) {
      window.alert("다시 로그인해주세요.");
      localStorage.clear();
      navigate("/");
    } else if (error.response.status === 500) {
      window.alert("일시적인 오류입니다. 잠시 후에 다시 시도해주세요.");
    }
  };

  const { mutate: postReservation } = useMutation({
    mutationFn: postData,
    onSuccess: postDataOnsuccess,
    onError: postDataOnError,
  });

  const handleReservation = () => {
    if (dateError || ticketCount === "") {
      return;
    }
    postReservation();
  };
  console.log(date);
  return (
    <>
      <TicketDeleteModal ticketId={params.id} />
      <Container>
        <ContentHeaderContainer>
          <HeaderTitleContainer>
            <h1>공연 상세페이지</h1>
            <h2>
              {ticketData.title} / {ticketData.nickname}
            </h2>
          </HeaderTitleContainer>
          {isSameUser ? (
            <HeaderButtonContainer>
              <PillButton
                color={primary.primary300}
                hoverColor={secondary.secondary500}
                onClick={handleMoveToEditPage}
              >
                수정하기
              </PillButton>
              <PillButton
                color={misc.red}
                hoverColor={misc.lightred}
                onClick={setOpenModal}
              >
                삭제하기
              </PillButton>
            </HeaderButtonContainer>
          ) : (
            ""
          )}
        </ContentHeaderContainer>
        <ContentContainer>
          <ContentTopContainer>
            <TopLeftContainer>
              <PosterImage alt="poster" src={ticketData.image} />
              <TicketInfoContainer>
                <div>
                  <h3>{ticketData.title}</h3>
                  <h4>{ticketData.nickname}</h4>
                  <span className="title-description">
                    {ticketData.detailAddress}
                  </span>
                </div>
                <div>
                  <span className="sub-title">공연 소개</span>
                  <span className="description">{ticketData.content}</span>
                </div>
                <div>
                  <span className="sub-title">공연 기간 / 공연 시간</span>
                  <span className="description">
                    {ticketData.showAt} ~ {ticketData.expiredAt} /{" "}
                    {ticketData.showTime}시
                  </span>
                </div>
                <div className="location-container">
                  <div>
                    <span className="location-title">위치</span>
                    <span className="location-description">
                      {ticketData.detailAddress}
                    </span>
                  </div>
                  <KakaoMapButton
                    detailAddress={ticketData.detailAddress}
                    latitude={ticketData.latitude}
                    longitude={ticketData.longitude}
                  />
                </div>
              </TicketInfoContainer>
            </TopLeftContainer>
            <TopRightContainer>
              <div className="inner-container">
                <span className="sub-title">티켓 정보</span>
                <Price>₩ {ticketData.price}</Price>
                <EmptySeat>
                  잔여 좌석: {ticketData.emptySeats} / {ticketData.total}
                </EmptySeat>
              </div>
              <div className="middle-container">
                <span className="sub-title">예매 날짜 선택</span>
                {/* <ReactDatePicker setDate={setDate}></ReactDatePicker> */}
                <SelectTicketDateCalendar
                  setDate={setDate}
                  ticketData={ticketData}
                />
                {dateError ? (
                  <span className="error-message">공연 기간이 아닙니다</span>
                ) : (
                  ""
                )}
              </div>
              <div className="inner-container">
                <span className="sub-title">수량 선택</span>
                {isReservationPossible ? (
                  <>
                    <div>
                      <button
                        className="set-count-button"
                        onClick={handleTicketMinus}
                      >
                        <FontAwesomeIcon icon={faMinus} size="1x" />
                      </button>
                      <input
                        className="reservation-seat-input"
                        onChange={handleTicketChange}
                        type="number"
                        value={ticketCount}
                      />
                      <span>매</span>
                      <button
                        className="set-count-button"
                        onClick={handleTicketPlus}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    {ticketCount === "" ? (
                      <span className="error-message">수량을 입력해주세요</span>
                    ) : (
                      ""
                    )}
                    <PillButton
                      color={primary.primary300}
                      hoverColor={secondary.secondary500}
                      onClick={handleReservation}
                    >
                      예매하기
                    </PillButton>
                  </>
                ) : (
                  <ImpossibleButton color={misc.red}>
                    예매 불가
                  </ImpossibleButton>
                )}
              </div>
            </TopRightContainer>
          </ContentTopContainer>
          <TicketsDetailTap />
        </ContentContainer>
      </Container>
    </>
  );
}
