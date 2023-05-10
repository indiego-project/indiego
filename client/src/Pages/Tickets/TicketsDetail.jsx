//페이지, 리액트 컴포넌트, 정적 파일
import TicketsDetailTap from "../../Components/TicketsDetail/TicketsDetailTapMenu.jsx";
import KakaoMapButton from "../../Components/TicketsDetail/KakaoMapButton.jsx";
import TicketDeleteModal from "../../Components/TicketsDetail/TicketDeleteModal.jsx";
import ReactDatePicker from "../../Components/Board/TicketsCreate/ReactDatePicker.jsx";
import SelectTicketDateCalendar from "../../Components/TicketsDetail/SelectTicketDateCalendar.jsx";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "../../Components/Ticktes/Create/Tag.jsx";

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
import useReservationDateStore from "../../store/useReservationDateStore.js";
import useOpenModalStore from "../../store/useOpenModalStore.js";
import useClickedStarStore from "../../store/useClickedStarStore.js";
import useRequestPaymentsDataStore from "../../store/useRequestPaymentsDataStore.js";
import instance from "../../api/core/default.js";

//라이브러리 및 라이브러리 메소드
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import dayjs from "dayjs";

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
  height: max-content;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
    align-items: center;
  }
`;

const ContentHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${sub.sub200};
  margin: 20px 0;
  padding: 20px;
  width: 90%;
  min-height: 120px;
`;

const HeaderInfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  height: max-content;
  justify-content: space-between;

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
  width: 90vw;
  height: min-content;
  justify-content: space-between;
  padding: 2%;
  height: 100vh;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    height: min-content;
    padding: 2%;
    width: 100vw;
  }
`;

const PosterAndInfoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: min-content;

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
  width: 20vw;
  height: calc(20vw / 3 * 4);
  box-shadow: 0 5px 5px #6d6d6d;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 60vw;
    height: calc(60vw / 3 * 4);
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
  height: 100%;
  margin-left: 10px;
  min-height: 450px;
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

const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const TopRightContainer = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid ${sub.sub300};
  border-radius: 10px;
  flex-direction: column;
  margin-left: 10px;
  height: 100%;
  width: 30%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-left: 0;
    width: 90%;
    height: 700px;
  }

  > .inner-container {
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${sub.sub300};

    &.disactived {
      pointer-events: none;
    }

    > .total-price {
      font-weight: 600;
      font-size: ${dtFontSize.medium};
      color: ${primary.primary400};
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
        border-radius: 3px;
        justify-content: center;
        color: white;
        display: flex;
        background-color: ${primary.primary200};
        width: 20px;
        height: 20px;

        &:hover {
          background-color: ${secondary.secondary400};
          cursor: pointer;
        }
      }

      > .reservation-seat {
        align-items: center;
        background-color: ${sub.sub100};
        text-align: center;
        display: flex;
        justify-content: center;
        width: 50px;
        font-weight: 600;
        font-size: ${dtFontSize.medium};

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.medium};
          color: ${sub.sub800};
        }
      }

      > span {
        margin-left: 5px;
        font-size: ${dtFontSize.medium};
        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.medium};
        }
      }
    }
  }

  > .middle-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${sub.sub300};
    height: 50%;
    justify-content: center;
  }

  > .calendar-container {
    align-items: center;
    display: flex;
    justify-content: center;
    height: max-content;
    width: 100%;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  height: max-content;
  margin-top: 10px;
  overflow-x: scroll;

  .tag_box {
    display: flex;
    width: max-content;
  }
`;

const ImpossibleButton = styled(PillButton)`
  pointer-events: none;
`;

export default function TicketsDetail() {
  const { ticketData, setTicketData } = useTicketDataStore((state) => state);
  const { requestPaymentsData, setRequestPaymentsData } =
    useRequestPaymentsDataStore((state) => state);
  const { openModal, setOpenModal } = useOpenModalStore((state) => state);
  const { clicked, setClicked } = useClickedStarStore((state) => state);
  const [isReservationPossible, setIsReservationPossible] = useState(true);
  const [ticketCount, setTicketCount] = useState(1);
  // eslint-disable-next-line prettier/prettier
  const { reservationDate, setReservationDate } = useReservationDateStore((state) => state);
  const [isSameUser, setIsSameUser] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const now = dayjs();

  useEffect(() => {
    setIsSameUser(false);
    setClicked([false, false, false, false, false]);
    if (
      ticketData.emptySeats <= 0 ||
      now.format("YYYY-MM-DD") > ticketData.expiredAt
    ) {
      setIsReservationPossible(false);
    } else {
      setIsReservationPossible(true);
    }
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
    if (ticketCount <= 0) {
      setTicketCount("");
    }
  }, [ticketCount]);

  const fetchDataOnSuccess = (response) => {
    const { getShowById: data } = response.data.data;
    setTicketData(data);
  };

  const fetchDataOnError = () => {
    navigate("/notFound");
  };

  // graphQl
  const gqlFetchData = () => {
    const query = `
      query GetShowById($showId : ID!) {
        getShowById(showId: $showId) {
          id
          sellerId
          title
          content
          image
          category
          price
          address
          detailAddress
          expiredAt
          showAt
          showTime
          detailDescription
          latitude
          longitude
          status
          scoreAverage
          total
          emptySeats
          bookmarked
          nickname
          tags {
            tagId
            name
            backgroundColor
            textColor
            type
          }
        }
      }
    `;

    const variables = { showId: params.id };
    const data = { query, variables };

    return axios.post(`${process.env.REACT_APP_SERVER_URI}/graphql`, data);
  };

  useQuery({
    queryFn: gqlFetchData,
    queryKey: ["GQLFetchShowData"],
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });
  // graphQl

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

  const requestPayments = () => {
    return instance({
      method: "post",
      url: `/api/v1/payments`,
      data: {
        paymentType: "CARD",
        amount: ticketCount * ticketData.price,
        orderName: ticketData.title,
      },
    });
  };

  const requestPaymentsOnSuccess = (response) => {
    setRequestPaymentsData(response.data.data);
    navigate(`/tickets/${ticketData.id}/checkout`);
  };

  const requestPaymentsOnError = (error) => {
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

  const { mutate: postRequestPayments } = useMutation({
    mutationFn: requestPayments,
    onSuccess: requestPaymentsOnSuccess,
    onError: requestPaymentsOnError,
  });

  const handleReservation = () => {
    sessionStorage.setItem(
      "reservationInfo",
      JSON.stringify({
        showId: Number(ticketData.id),
        date: reservationDate,
        ticketCount: ticketCount,
      })
    );
    postRequestPayments();
  };

  return (
    <>
      <TicketDeleteModal ticketId={params.id} />
      <Container>
        <ContentContainer>
          <ContentTopContainer>
            <TopLeftContainer>
              <ContentHeaderContainer>
                <HeaderInfoContainer>
                  <HeaderTitleContainer>
                    <h1>{ticketData.title}</h1>
                    <h2>{ticketData.nickname}</h2>
                  </HeaderTitleContainer>
                  {isSameUser ? (
                    <HeaderButtonContainer>
                      <PillButton
                        color={primary.primary300}
                        hoverColor={secondary.secondary500}
                        onClick={handleMoveToEditPage}>
                        수정하기
                      </PillButton>
                      <PillButton
                        color={misc.red}
                        hoverColor={misc.lightred}
                        onClick={setOpenModal}>
                        삭제하기
                      </PillButton>
                    </HeaderButtonContainer>
                  ) : (
                    ""
                  )}
                </HeaderInfoContainer>
                <TagsContainer>
                  <div className="tag_box">
                    {ticketData?.tags?.map((data) => (
                      <Tag key={data.tagId} data={data} />
                    ))}
                  </div>
                </TagsContainer>
              </ContentHeaderContainer>
              <PosterAndInfoContainer>
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
                      <span className="location-title">공연 장소</span>
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
              </PosterAndInfoContainer>
            </TopLeftContainer>
            <TopRightContainer>
              <div className="calender-container">
                <SelectTicketDateCalendar />
              </div>
              <div className="middle-container">
                <Price>티켓 가격: ₩ {ticketData.price}</Price>
                <EmptySeat>
                  잔여 좌석: {ticketData.emptySeats} / {ticketData.total}
                </EmptySeat>
              </div>
              <div
                className={`inner-container ${
                  isReservationPossible ? "" : "disactived"
                }`}>
                <span className="sub-title">수량 선택</span>
                <div>
                  <button
                    className="set-count-button"
                    onClick={handleTicketMinus}>
                    <FontAwesomeIcon icon={faMinus} size="1x" />
                  </button>
                  <div
                    className="reservation-seat"
                    onChange={handleTicketChange}>
                    {ticketCount}
                  </div>
                  <button
                    className="set-count-button"
                    onClick={handleTicketPlus}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <span>매</span>
                </div>
              </div>
              <div className="inner-container">
                {isReservationPossible ? (
                  <>
                    <div className="total-price">
                      총 티켓 가격: {ticketCount * ticketData.price}₩
                    </div>
                    <PillButton
                      color={primary.primary300}
                      hoverColor={secondary.secondary500}
                      onClick={handleReservation}>
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
