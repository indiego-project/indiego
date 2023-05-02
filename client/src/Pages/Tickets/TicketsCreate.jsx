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

const TicketsCreateContentWrapper = styled(PostWrapper)``;

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

export default function TicketsCreate() {
  // 카테고리
  const [category, setCategory] = useState("음악"); // 사용
  // 공연명
  const [ticketName, setTicketName] = useState(""); // 사용
  const ticketNameRef = useRef();
  // 장소
  const [gu, setGu] = useState(""); // 사용
  const [place, setPlace] = useState("어디서 공연을 하시나요?"); // 사용
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
  // 공연 상세
  const [ticketInfo, setTicketInfo] = useState(""); // 사용
  const ticketInfoRef = useRef();
  // quill 에디터
  const [ticketsValue, setTicketsValue] = useState("");

  // 지도 좌표
  const [latitude, setLatitude] = useState(""); // 위도 // 사용
  const [longitude, setLongitude] = useState(""); // 경도 // 사용
  const navigate = useNavigate();

  // 이미지 정보
  const [imageUrl, setImageUrl] = useState(
    "https://elkcitychamber.com/wp-content/uploads/2022/08/Placeholder-Image-Square.png"
  );

  // Tags
  const [selectedTags, setSelectedTags] = useState([]);

  const userId = JSON.parse(localStorage.getItem("userInfoStorage"))?.id;
  const userRole = JSON.parse(localStorage.getItem("userInfoStorage"))?.role;

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
    detailDescription: ticketsValue,
    latitude: latitude,
    longitude: longitude,
    total: sit,
    tags: selectedTags.map((data) => data.tagId),
  };

  // 티켓 글 올리기
  const handlePost = () => {
    if (ticketName === "") {
      ticketNameRef.current.focus();
      return;
    }
    if (place === "어디서 공연을 하시나요?") {
      placeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (detailPlace === "") {
      detailPlaceRef.current.focus();
      return;
    }

    if (startDate > endDate) {
      alert("시작일과 종료일을 확인해주세요");
      window.scrollTo(0, 900);
      return;
    }

    if (startTime === "" || startTime > 24) {
      startTimeRef.current.focus();
      return;
    }
    if (sit === "") {
      sitRef.current.focus();
      return;
    }
    if (ticketPrice === "") {
      ticketPriceRef.current.focus();
      return;
    }
    if (ticketInfo === "") {
      ticketInfoRef.current.focus();
      return;
    }
    if (ticketsValue === "" || ticketsValue === "<p><br></p>") {
      window.scrollTo(0, 1850);
      return;
    }
    if (window.confirm("작성하시겠습니까?")) {
      createTickets();
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
    alert("로그인 시간이 만료되었습니다");
    navigate("/login");
  };

  const { mutate: createTickets } = useMutation({
    mutationKey: ["handleCreateTickets"],
    mutationFn: handleCreateTickets,
    onSuccess: handleCreateTicketsOnSuccess,
    onError: handleCreateTicketsOnError,
  });

  useEffect(() => {
    const { kakao } = window;
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(
      place,
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          setLongitude(result[0].x);
          setLatitude(result[0].y);
        }
      },
      [place]
    );
  });

  const handleCancel = () => {
    navigate("/tickets");
  };

  const onLoadFile = async (e) => {
    const file = e.target.files;
    const formData = new FormData();
    formData.append("file", file[0]); // formData는 키-밸류 구조
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
          <TicketsCreateInputDiv>
            <input
              ref={ticketNameRef}
              className="titleInput"
              placeholder="게시글의 제목을 작성해주세요."
              value={ticketName}
              onChange={(e) => {
                setTicketName(e.target.value);
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
          <ChoiceButtonDiv>
            <div className="place" ref={placeRef}>
              {place}
            </div>
            <input
              ref={detailPlaceRef}
              className="placeInput"
              placeholder="상세 주소 입력"
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
              <ReactDatePicker setDate={setStartDate}></ReactDatePicker>
            </div>
            종료일
            <div className="DatePickerInfoDiv">
              <ReactDatePicker setDate={setEndDate}></ReactDatePicker>
            </div>
            시작시간 - 숫자만 입력 (ex: 9)
            <div className="DatePickerInfoDiv">
              <input
                ref={startTimeRef}
                type="number"
                max="24"
                className="DatePickerInput"
                placeholder="시작 시간"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
            </div>
          </DatePickerDiv>
          <div className="postDiv">공연 좌석 수</div>
          <TicketsCreateInputDiv>
            <input
              ref={sitRef}
              className="contentInput"
              placeholder="공연 좌석 수"
              value={sit}
              onChange={(e) => {
                setSit(e.target.value.replace(/[^0-9]/g, ""));
              }}
            />
          </TicketsCreateInputDiv>
          <div className="postDiv">티켓 가격</div>
          <TicketsCreateInputDiv>
            <input
              ref={ticketPriceRef}
              className="contentInput"
              placeholder="티켓 가격"
              value={ticketPrice}
              onChange={(e) => {
                setTicketPrice(e.target.value.replace(/[^0-9]/g, ""));
              }}
            />{" "}
            원
          </TicketsCreateInputDiv>
          <div className="postDiv">공연 상세</div>
          <TicketsCreateInputDiv>
            <textarea
              ref={ticketInfoRef}
              className="textAreaInput"
              value={ticketInfo}
              onChange={(e) => {
                setTicketInfo(e.target.value);
              }}></textarea>
          </TicketsCreateInputDiv>
          <div className="postDiv">상세 설명</div>
          <ContentInputDiv>
            <Editor
              value={ticketsValue}
              setValue={setTicketsValue}
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
