//페이지, 리액트 컴포넌트, 정적 파일
import { PageWrapper } from "../Boards/Board/BoardList.jsx";
import {
  PostWrapper,
  PostBoard,
  TitleInputDiv,
  ContentInputDiv,
} from "../Boards/Board/BoardCreate.jsx";
import breakpoint from "../../styles/breakpoint.js";
import CategoryDropdown from "../../Components/Board/TicketsCreate/CategoryDropdown.jsx";
import OKButton from "../../Components/Board/BoardList/OKButton.jsx";
import Editor from "../../Components/Board/BoardCreate/Editor.jsx";
import { Postcode } from "../../Components/Board/TicketsCreate/Postcode";
import ReactDatePicker from "../../Components/Board/TicketsCreate/ReactDatePicker.jsx";
import TagSelect from "../../Components/Ticktes/Create/TagSelect";

//로컬 모듈
import {
  dtFontSize,
  sub,
  misc,
  secondary,
  mbFontSize,
  primary,
} from "../../styles/mixins.js";
import instance from "../../api/core/default.js";

//라이브러리 및 라이브러리 메소드
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { set } from "date-fns/esm";

const TicketsCreateContentWrapper = styled(PostWrapper)`
  .valid_info {
    font-size: ${dtFontSize.small};
    color: ${sub.sub400};
    font-weight: 300;
    margin-left: 5px;
    text-align: start;
    padding: 5px 0;
  }
`;

const TicketsBoard = styled(PostBoard)`
  height: max-content;
  width: 100%;

  .postDiv {
    font-size: ${dtFontSize.medium};
    margin-bottom: 10px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

const TicketsCreateInputDiv = styled(TitleInputDiv)`
  padding-top: 0;
  font-size: ${dtFontSize.medium};
  font-weight: 600;
  .titleInput {
    width: 100%;
    height: 35px;
    border: 1px solid ${sub.sub400};
    border-radius: 10px;
    padding-left: 10px;
  }

  .contentInput {
    width: 50%;
    height: 35px;
    border: 1px solid ${sub.sub400};
    border-radius: 10px;
    padding-left: 10px;
  }

  .textAreaInput {
    width: 100%;
    height: 250px;
    border: 1px solid ${sub.sub400};
    border-radius: 10px;
    resize: none;
    padding-top: 10px;
    padding-left: 10px;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 50px;

  img {
    width: 400px;
    height: 400px;
    margin-bottom: 20px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 200px;
      height: 200px;
    }
  }

  label {
    width: 150px;
    height: 30px;
    border-radius: 20px;
    background-color: ${primary.primary200};
    color: ${sub.sub100};
    border: none;
    font-size: ${dtFontSize.medium};
    text-align: center;
    cursor: pointer;
    padding-top: 5.5px;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const ChoiceButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 50px;

  .place {
    background-color: white;
    width: max-content;
    height: max-content;
    border-radius: 10px;
    padding: 8px;
    border: 1px solid ${sub.sub400};
    margin-bottom: 5px;
    font-size: ${dtFontSize.small};
  }

  .placeInput {
    background-color: white;
    width: 100%;
    height: max-content;
    border-radius: 10px;
    padding: 8px;
    border: 1px solid ${sub.sub400};
    margin-bottom: 5px;
    font-size: ${dtFontSize.small};
  }
`;

const DatePickerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  color: ${primary.primary500};
  font-size: ${dtFontSize.medium};
  font-weight: 700;
  text-align: left;

  .DatePickerInfoDiv {
    display: flex;
    margin: 5px 0;

    .DatePickerInput {
      padding: 5px;
      border: 1px solid ${sub.sub400};
      border-radius: 5px;
      width: 200px;
      height: 30px;
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${dtFontSize.small};
  }
`;

export const ChoiceButton = styled(OKButton)`
  width: 150px;
  height: 30px;

  &.complete {
    background-color: ${secondary.secondary500};
  }
`;

const ButtonDiv = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: center;
  @media screen and (max-width: ${breakpoint.mobile}) {
    display: flex;
  }
`;

const PostButton = styled(OKButton)`
  width: 200px;
  height: 50px;

  &:hover {
    background-color: ${secondary.secondary500};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 150px;
    font-size: ${mbFontSize.medium};
  }
`;

const CategoryDiv = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;

const CancelButton = styled(PostButton)`
  margin-left: 50px;
  background-color: ${misc.lightred};
`;

const VALIDATE_STATUS = Object.freeze({
  NOT_NULL: "NOT_NULL",
  INVALID: "INVALID",
  OVERFLOW: "OVERFLOW",
  VALID: "VALID",
});

export default function TicketsCreate() {
  // 카테고리
  const [category, setCategory] = useState("음악"); // 사용
  // 공연명
  const [ticketName, setTicketName] = useState(""); // 사용
  const ticketNameRef = useRef();
  // 장소
  const [gu, setGu] = useState(""); // 사용
  const [place, setPlace] = useState("공연 장소"); // 사용
  const placeRef = useRef();
  const [detailPlace, setDetailPlace] = useState(""); // 사용
  const detailPlaceRef = useRef();

  // 공연 시작 정보
  const [startDate, setStartDate] = useState(""); // 사용
  const [endDate, setEndDate] = useState(""); // 사용
  const [startTime, setStartTime] = useState(""); // 사용
  const startTimeRef = useRef();

  // 공연 좌석 수
  const [sit, setSit] = useState("");
  const sitRef = useRef();
  // 티켓 가격
  const [ticketPrice, setTicketPrice] = useState(""); // 사용
  const ticketPriceRef = useRef();
  // 공연 소개
  const [ticketInfo, setTicketInfo] = useState(""); // 사용
  const ticketInfoRef = useRef();
  // 공연 상세
  const [ticketDetail, setTicketDetail] = useState("");

  // 지도 좌표
  const [latitude, setLatitude] = useState(null); // 위도 // 사용
  const [longitude, setLongitude] = useState(null); // 경도 // 사용
  const navigate = useNavigate();

  // 이미지 정보
  const [imageUrl, setImageUrl] = useState(
    "https://elkcitychamber.com/wp-content/uploads/2022/08/Placeholder-Image-Square.png"
  );

  // Tags
  const [selectedTags, setSelectedTags] = useState([]);

  const userId = JSON.parse(localStorage.getItem("userInfoStorage"))?.id;
  const userRole = JSON.parse(localStorage.getItem("userInfoStorage"))?.role;

  // 유효성 검사 STATUS
  const [ticketNameStatus, setTicketNameStatus] = useState(
    VALIDATE_STATUS.NOT_NULL
  ); // 제목
  const [placeStatus, setPlaceStatus] = useState(VALIDATE_STATUS.NOT_NULL); // 장소(address)
  const [detailPlaceStatus, setDetailPlaceStatus] = useState(
    VALIDATE_STATUS.NOT_NULL
  ); // 상세주소 (detailAddress)
  const [dateStatus, setDateStatus] = useState(VALIDATE_STATUS.VALID); // 시작 기간 (showAt)
  const [startTimeStatus, setStartTimeStatus] = useState(VALIDATE_STATUS.VALID); // 공연 시간
  const [ticketPriceStatus, setTicketPriceStatus] = useState(
    VALIDATE_STATUS.NOT_NULL
  ); // 가격
  const [ticketInfoStatus, setTicketInfoStatus] = useState(
    VALIDATE_STATUS.NOT_NULL
  ); // 공연 상세
  const [coordinateStatus, setCoordinateStatus] = useState(
    VALIDATE_STATUS.NOT_NULL
  ); // 경도
  const [sitStatus, setSitStatus] = useState(VALIDATE_STATUS.NOT_NULL);

  const [ticketDetailStatus, setTicketDetailStatus] = useState(
    VALIDATE_STATUS.NOT_NULL
  );

  const [isValidData, setIsValidData] = useState(false);

  // 유효성 검사 STATUS

  // 티켓 post에 보낼 데이터
  const data = {
    title: ticketName,
    content: ticketInfo,
    image: imageUrl,
    category: category,
    price: ticketPrice,
    address: gu,
    detailAddress: `${place}/${detailPlace}`,
    expiredAt: endDate,
    showAt: startDate,
    showTime: startTime,
    detailDescription: ticketDetail,
    latitude: latitude,
    longitude: longitude,
    total: sit,
    tags: selectedTags.map((data) => data.tagId),
  };

  // 티켓 글 올리기
  const handlePost = () => {
    if (ticketNameStatus !== VALIDATE_STATUS.VALID) {
      ticketNameRef.current.focus();
      return;
    }
    if (placeStatus !== VALIDATE_STATUS.VALID) {
      placeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (detailPlaceStatus !== VALIDATE_STATUS.VALID) {
      detailPlaceRef.current.focus();
      return;
    }

    if (ticketInfoStatus !== VALIDATE_STATUS.VALID) {
      window.alert("공연 소개란이 비어있습니다.");
      return;
    }

    if (ticketDetailStatus !== VALIDATE_STATUS.VALID) {
      window.alert("공연 상세란이 비어있습니다.");
      return;
    }

    if (isValidData) {
      if (window.confirm("작성하시겠습니까?")) {
        createTickets();
      }
    } else {
      window.alert(
        "올바르게 작성되지 않은 공연 정보가 있습니다. 다시 한 번 확인해주세요."
      );
    }
  };
  const handleCreateTickets = async () => {
    const response = await instance({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_URI}/shows`,
      data,
    });
  };

  const handleCreateTicketsOnSuccess = () => {
    alert("작성하였습니다");
    navigate("/tickets");
  };

  const handleCreateTicketsOnError = (response) => {
    if (response.response.status === 500) {
      alert("서버 오류. 잠시 후 다시 시도해 주세요");
    }
    alert("전송에 실패했습니다. 잠시 후 다시 시도해 주세요");
  };

  const { mutate: createTickets } = useMutation({
    mutationKey: ["handleCreateTickets"],
    mutationFn: handleCreateTickets,
    onSuccess: handleCreateTicketsOnSuccess,
    onError: handleCreateTicketsOnError,
  });

  useEffect(() => {
    if (place !== "공연 장소") {
      const { kakao } = window;
      if (!kakao) {
        throw new Error(
          "카카오맵 로딩이 실패했습니다. 카카오맵 API를 확인해주세요."
        );
      }
      var geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        place,
        function (result, status) {
          if (status === "OK") {
            setLongitude(result[0].x);
            setLatitude(result[0].y);
            setCoordinateStatus(VALIDATE_STATUS.VALID);
          }

          if (status === "ZERO_RESULT") {
            window.alert("공연 장소로 선택할 수 없는 장소 입니다.");
            setPlace("공연 장소");
            setGu("");
          }
        },
        [place]
      );
    }
  });

  const handleCancel = () => {
    navigate("/tickets");
  };

  const onLoadFile = async (e) => {
    const file = e.target.files[0];
    if (!file.type.includes("image")) {
      window.alert("올바른 이미지 파일이 아닙니다.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      window.alert("파일 용량이 너무 큽니다. 10mb 이하의 이미지를 올려주세요.");
      return;
    } else {
      const formData = new FormData();
      formData.append("file", file); // formData는 키-밸류 구조
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_SERVER_URI}/shows/uploads`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setImageUrl(result.data.data);
      } catch (error) {
        alert("이미지 업로드에 실패하였습니다");
      }
    }
  };

  useEffect(() => {
    if (!userId) {
      navigate("/notFound");
    }
    if (!userRole.includes("PERFORMER")) {
      navigate("/notFound");
    }
  }, []);

  useEffect(() => {
    if (selectedTags.length > 7) {
      window.alert("태그는 최대 7개 까지 설정 가능합니다.");
    }
  }, [selectedTags]);

  useEffect(() => {
    setSelectedTags([]);
  }, [category]);

  // 유효성 검사

  // 1. 공연 제목
  useEffect(() => {
    if (ticketName.length === 0) {
      setTicketNameStatus(VALIDATE_STATUS.NOT_NULL);
      return;
    }

    if (ticketName.length >= 30) {
      setTicketNameStatus(VALIDATE_STATUS.INVALID);
      return;
    }

    setTicketNameStatus(VALIDATE_STATUS.VALID);
    return;
  }, [ticketName]);

  // 2. 공연 장소
  useEffect(() => {
    if (place === "공연 장소") {
      setPlaceStatus(VALIDATE_STATUS.NOT_NULL);
      return;
    }

    if (place !== "공연 장소" && !place.includes("서울")) {
      window.alert("현재 공연장소는 서울 외의 지역을 선택할 수 없습니다.");
      setPlace("공연 장소");
      setLatitude("");
      setLongitude("");
      setGu("");
      return;
    }

    setPlaceStatus(VALIDATE_STATUS.VALID);
  }, [place]);

  // 3. 상세 주소
  useEffect(() => {
    console.log(detailPlace);
    if (!detailPlace) {
      setDetailPlaceStatus(VALIDATE_STATUS.NOT_NULL);
      return;
    }

    setDetailPlaceStatus(VALIDATE_STATUS.VALID);
  }, [detailPlace]);

  // 4. 공연 기간
  useEffect(() => {
    const showStart = new Date(startDate);
    const showEnd = new Date(endDate);

    if (showEnd - showStart < 0) {
      window.alert("공연 기간이 올바르지 않습니다.");
      setStartDate(null);
      setEndDate(null);
    } else {
      setDateStatus(VALIDATE_STATUS.VALID);
    }
  }, [startDate, endDate]);

  // 5. 공연 시간
  useEffect(() => {
    if (startTime < 0) {
      setStartTime(0);
    }

    if (startTime > 24) {
      setStartTime(24);
    }

    setStartTimeStatus(VALIDATE_STATUS.VALID);
  }, [startTime]);

  // 6. 공연 좌석
  useEffect(() => {
    if (sit < 10 || sit > 100000) {
      setSitStatus(VALIDATE_STATUS.INVALID);
      return;
    }

    setSitStatus(VALIDATE_STATUS.VALID);
  }, [sit]);

  // 7. 공연 가격
  useEffect(() => {
    if (ticketPrice < 100 || ticketPrice > 1000000) {
      setTicketPriceStatus(VALIDATE_STATUS.INVALID);
      return;
    }

    setTicketPriceStatus(VALIDATE_STATUS.VALID);
  }, [ticketPrice]);

  // 8. 공연 소개
  useEffect(() => {
    if (!ticketInfo) {
      setTicketInfoStatus(VALIDATE_STATUS.NOT_NULL);
      return;
    }

    if (ticketInfo.length > 500) {
      setTicketInfoStatus(VALIDATE_STATUS.INVALID);
      return;
    }
    setTicketInfoStatus(VALIDATE_STATUS.VALID);
  }, [ticketInfo]);

  // 9. 공연 상세
  useEffect(() => {
    if (ticketDetail === "" || ticketDetail === "<p><br></p>") {
      setTicketDetailStatus(VALIDATE_STATUS.NOT_NULL);
      return;
    }

    setTicketDetailStatus(VALIDATE_STATUS.VALID);
  }, [ticketDetail]);

  // 10. 모든 유효성 검사 상태
  useEffect(() => {
    if (
      ticketNameStatus === VALIDATE_STATUS.VALID &&
      placeStatus === VALIDATE_STATUS.VALID &&
      dateStatus === VALIDATE_STATUS.VALID &&
      startTimeStatus === VALIDATE_STATUS.VALID &&
      ticketPriceStatus === VALIDATE_STATUS.VALID &&
      sitStatus === VALIDATE_STATUS.VALID &&
      ticketDetailStatus === VALIDATE_STATUS.VALID &&
      coordinateStatus === VALIDATE_STATUS.VALID
    ) {
      setIsValidData(true);
    }
  }, [
    ticketNameStatus,
    placeStatus,
    dateStatus,
    startTimeStatus,
    ticketPriceStatus,
    sitStatus,
    ticketDetailStatus,
    coordinateStatus,
  ]);

  // 유효성 검사

  return (
    <PageWrapper>
      <TicketsCreateContentWrapper>
        <div className="title">판매글 올리기</div>
        <div className="titleInfo">
          판매글 양식을 준수하여 게시글을 작성해주시기 바랍니다.
        </div>
        <TicketsBoard>
          <div className="postDiv">카테고리</div>
          <CategoryDiv>
            <CategoryDropdown setCategory={setCategory}></CategoryDropdown>
          </CategoryDiv>
          {/* Tags */}
          <TagSelect
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            category={category}
          />
          {/* Tags */}
          <div className="postDiv">공연명</div>
          <p className="valid_info">
            공연명은 비워둘 수 없고, 30자 이내로 제한됩니다.
          </p>
          <TicketsCreateInputDiv>
            <input
              ref={ticketNameRef}
              className="titleInput"
              placeholder="게시글의 제목을 작성해주세요."
              value={ticketName}
              onChange={(e) => {
                if (ticketNameStatus !== VALIDATE_STATUS.INVALID) {
                  setTicketName(e.target.value);
                }
              }}
              onKeyDown={(e) => {
                if (
                  ticketNameStatus === VALIDATE_STATUS.INVALID &&
                  e.code === "Backspace"
                ) {
                  setTicketName(ticketName.slice(0, ticketName.length - 1));
                }
              }}
            />
          </TicketsCreateInputDiv>

          <div className="postDiv">공연 포스터</div>
          <ImageDiv>
            <img src={imageUrl} alt="공연 포스터" />
            <label htmlFor="ex_file">공연 포스터 업로드</label>
            <input
              className="imgInput"
              type="file"
              id="ex_file"
              accept="img/*"
              onChange={onLoadFile}
            />
          </ImageDiv>

          <div className="postDiv">공연 장소</div>
          <p className="valid_info">공연 장소는 현재 서울로 제한됩니다.</p>
          <ChoiceButtonDiv>
            <div className="place" ref={placeRef}>
              {place}
            </div>
            <input
              ref={detailPlaceRef}
              className="placeInput"
              placeholder="상세 주소를 입력해주세요. 상세 주소는 비워둘 수 없습니다."
              value={detailPlace}
              onChange={(e) => {
                setDetailPlace(e.target.value);
              }}
            />
            <Postcode setPlace={setPlace} setGu={setGu}></Postcode>
          </ChoiceButtonDiv>

          <div className="postDiv">공연 기간</div>
          <DatePickerDiv>
            시작일
            <div className="DatePickerInfoDiv">
              <ReactDatePicker
                date={startDate}
                setDate={setStartDate}></ReactDatePicker>
            </div>
            종료일
            <div className="DatePickerInfoDiv">
              <ReactDatePicker
                date={endDate}
                selected={endDate}
                setDate={setEndDate}></ReactDatePicker>
            </div>
            <span>시작시간</span>
            <p className="valid_info">24시간 단위로 입력 가능합니다.</p>
            <div className="DatePickerInfoDiv">
              <input
                ref={startTimeRef}
                type="number"
                min="0"
                max="24"
                className="DatePickerInput"
                placeholder="시작 시간을 숫자로 입력해 주세요."
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
            </div>
          </DatePickerDiv>
          <div className="postDiv">공연 좌석 수</div>
          <p className="valid_info">
            공연 좌석은 최소 10석에서 최대 100,000석 까지 설정할 수 있습니다.
          </p>
          <TicketsCreateInputDiv>
            <input
              ref={sitRef}
              type="number"
              min="10"
              max="100000"
              className="contentInput"
              placeholder="공연 좌석 수"
              value={sit}
              onChange={(e) => {
                setSit(e.target.value.replace(/[^0-9]/g, ""));
              }}
              onBlur={(e) => {
                if (e.target.value < 10) {
                  setSit(10);
                }
                if (e.target.value > 100000) {
                  setSit(100000);
                }
              }}
            />
            <span>석</span>
          </TicketsCreateInputDiv>
          <div className="postDiv">티켓 가격</div>
          <p className="valid_info">
            공연 가격은 최소 100원에서 최대 1,000,000원 까지 설정할 수 있습니다.
          </p>
          <TicketsCreateInputDiv>
            <input
              ref={ticketPriceRef}
              type="number"
              min={100}
              max={1000000}
              className="contentInput"
              placeholder="티켓 가격"
              value={ticketPrice}
              onChange={(e) => {
                setTicketPrice(e.target.value.replace(/[^0-9]/g, ""));
              }}
              onBlur={(e) => {
                if (e.target.value < 100) {
                  setTicketPrice(100);
                }
                if (e.target.value > 100000) {
                  setTicketPrice(1000000);
                }
              }}
            />{" "}
            원
          </TicketsCreateInputDiv>
          <div className="postDiv">공연 소개</div>
          <TicketsCreateInputDiv>
            <textarea
              ref={ticketInfoRef}
              className="textAreaInput"
              placeholder="공연 소개는 500자 이내로 제한됩니다"
              value={ticketInfo}
              maxLength="500"
              onChange={(e) => {
                if (ticketInfoStatus !== VALIDATE_STATUS.INVALID) {
                  setTicketInfo(e.target.value);
                }
              }}
              onKeyDown={(e) => {
                if (
                  ticketInfoStatus === VALIDATE_STATUS.INVALID &&
                  e.code === "Backspace"
                ) {
                  setTicketInfo(ticketInfo.slice(0, ticketName.length - 1));
                }
              }}></textarea>
          </TicketsCreateInputDiv>
          <div className="postDiv">공연 상세</div>
          <ContentInputDiv>
            <Editor
              value={ticketDetail}
              setValue={setTicketDetail}
              placeholder={"내용을 입력해주세요."}></Editor>
          </ContentInputDiv>
        </TicketsBoard>

        <ButtonDiv>
          <PostButton onClick={handlePost}>글 올리기</PostButton>
          <CancelButton onClick={handleCancel}>취소하기</CancelButton>
        </ButtonDiv>
      </TicketsCreateContentWrapper>
    </PageWrapper>
  );
}
