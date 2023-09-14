//페이지, 리액트 컴포넌트, 정적 파일
import breakpoint from "../../../styles/breakpoint.js";
import {
  PageWrapper,
  ContentWrapper,
  BoardItem,
  SpinnerExtended,
} from "./BoardList.jsx";
import Aside from "../Aside/Aside.jsx";
import AnswerList from "../../../Components/Board/Answer/AnswerList";
import yellowHeart from "../../../assets/yellowHeart.gif";
import blueHeart from "../../../assets/blueHeart.gif";
import heart from "../../../assets/heart.svg";
import grayHeart from "../../../assets/grayHeart.svg";

//로컬 모듈
import {
  primary,
  dtFontSize,
  sub,
  mbFontSize,
} from "../../../styles/mixins.js";
import useBoardStore from "../../../store/useBoardStore.js";
import instance from "../../../api/core/default.js";

//라이브러리 및 라이브러리 메소드
import React, { useState } from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

const BoardInfoWrapper = styled(ContentWrapper)`
  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-top: 30px;
  }
  .titleDiv {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: ${dtFontSize.xlarge};
      color: ${primary.primary500};
      font-weight: 700;
      text-align: left;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.xlarge};
      }
    }
    .titleInfo {
      font-size: ${dtFontSize.medium};
      margin-top: 10px;
      color: ${sub.sub300};
      text-align: left;
      margin-bottom: 10px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.medium};
      }
    }
  }
`;

const QuillViewDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  height: max-content;
  text-align: left;
  padding-left: 10px;

  > * img {
    max-width: 1000px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      max-width: 350px;
    }
  }
`;

const HeartItem = styled(BoardItem)`
  justify-content: center;
  .heartButton {
    margin-bottom: 5px;
    border: white;
    cursor: pointer;
  }

  .heartCount {
    color: ${primary.primary500};
    font-size: ${dtFontSize.xlarge};
    font-weight: 700;
    margin-bottom: 80px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xlarge};
    }
  }
`;

const EditDeleteDiv = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 3px;
  .edButton {
    cursor: pointer;
    width: 40px;
    height: 20px;
    border: none;
    background-color: white;
    color: ${sub.sub400};
    margin-right: 5px;
  }
`;

const Board = () => {
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState({});
  const [answerListData, setAnswerListData] = useState([]);
  const { id } = useParams();
  const { setBoardStoreData } = useBoardStore();
  const { pathname } = useLocation();
  const userId =
    localStorage.getItem("userInfoStorage") &&
    JSON.parse(localStorage.getItem("userInfoStorage")).id;

  // 게시글 삭제 요청

  const handleBoardDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteBoard();
    }
  };

  const handleDelete = async () => {
    return await instance({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${id}`,
    });
  };

  const handleDeleteOnSuccess = () => {
    alert("삭제되었습니다");
    navigate("/board/free?category=자유게시판&page=1");
  };

  const handleDeleteOnError = () => {
    alert("로그인 시간이 만료되었습니다");
    navigate("/login");
  };

  const { mutate: deleteBoard } = useMutation({
    mutationKey: ["handleDelete"],
    mutationFn: handleDelete,
    onSuccess: handleDeleteOnSuccess,
    onError: handleDeleteOnError,
  });

  // 하트 누르기 요청
  const handleHeartCount = async () => {
    return await instance({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${id}`,
    });
  };

  const handleHeartCountOnSuccess = () => {
    refetch();
  };

  const handleHeartCountOnError = () => {
    alert("로그인 후 이용해주세요.");
    navigate("/login");
  };
  const { mutate: heartCount } = useMutation({
    mutationKey: ["handleHeartCount"],
    mutationFn: handleHeartCount,
    onSuccess: handleHeartCountOnSuccess,
    onError: handleHeartCountOnError,
  });

  // Board 내용 가져오기
  const axiosBoard = async () => {
    const response = await instance({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${id}`,
    });
    return response.data;
  };

  const axiosBoardSuccess = (response) => {
    setBoardData(response.data);
    setAnswerListData(response.data.articleComments);
    setBoardStoreData(response.data);
  };

  const axiosBoardError = (response) => {
    if (response.response.status === 400) {
      navigate("/notFound");
    }
  };

  const { isLoading, isError, error, refetch } = useQuery({
    queryKey: ["axiosBoard", answerListData],
    queryFn: axiosBoard,
    onSuccess: axiosBoardSuccess,
    onError: axiosBoardError,
    retry: false,
  });

  if (isError) {
    return <div>Error : {error.message}</div>;
  }
  return (
    <PageWrapper>
      <Aside></Aside>
      <BoardInfoWrapper>
        <div className="title">{boardData.title}</div>
        <div className="titleDiv">
          <Link className="titleInfo" to={`/members/${boardData.memberId}`}>
            글쓴이 : {boardData.nickname}
          </Link>
          <div className="titleInfo">
            {new Date(boardData.createdAt).toLocaleString()}
          </div>
        </div>

        <div className="lineDiv"></div>
        {isLoading ? (
          <SpinnerExtended />
        ) : (
          <QuillViewDiv
            dangerouslySetInnerHTML={{ __html: boardData.content }} // 리액트퀼 에디터의 정보를 태그 형식으로 가져옴
          ></QuillViewDiv>
        )}

        <HeartItem>
          <div className="likeDiv">
            <button className="heartButton" onClick={() => heartCount()}>
              <img
                width={35}
                src={boardData.likeStatus ? heart : grayHeart}
                alt="heart"
              ></img>
            </button>
            <div className="heartCount">{boardData.likeCount}</div>
          </div>
        </HeartItem>

        {boardData.memberId === userId ? (
          <EditDeleteDiv>
            <button
              className="edButton"
              onClick={() => {
                navigate(`${pathname}/edit`);
              }}
            >
              수정
            </button>
            <button className="edButton" onClick={handleBoardDelete}>
              삭제
            </button>
          </EditDeleteDiv>
        ) : (
          <></>
        )}

        {/* 댓글 리스트로 이동 */}
        <AnswerList
          boardData={boardData}
          answerListData={answerListData}
          setAnswerListData={setAnswerListData}
          id={id}
          refetch={refetch}
          userId={userId}
        />
      </BoardInfoWrapper>
    </PageWrapper>
  );
};

export default Board;
