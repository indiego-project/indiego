//페이지, 리액트 컴포넌트, 정적 파일
import OKButton from "../BoardList/OKButton.jsx";
import AnswerItem from "./AnswerItem.jsx";

//로컬 모듈
import {
  primary,
  dtFontSize,
  secondary,
  mbFontSize,
} from "../../../styles/mixins.js";
import breakpoint from "../../../styles/breakpoint.js";
import instance from "../../../api/core/default.js";

//라이브러리 및 라이브러리 메소드
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AnswerWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  text-align: left;

  .answerCount {
    font-size: ${dtFontSize.large};
    font-weight: 700;
    color: ${primary.primary500};
    margin-bottom: 30px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.large};
    }
  }
  .answerInputDiv {
    height: 65px;

    .answerInput {
      border: 2px solid ${primary.primary500};
      border-radius: 20px;
      width: 100%;
      height: 50px;
      padding-left: 12px;
    }
  }
`;
const AnswerCreateButtonDiv = styled.div`
  text-align: right;
  width: 100%;
  margin-bottom: 50px;
`;

const AnswerCreateButton = styled(OKButton)`
  width: 100px;
  height: 40px;

  &:hover {
    background-color: ${secondary.secondary500};
  }
`;

const AnswerListWrapper = styled.div`
  border: 2px solid ${primary.primary500};
  border-radius: 20px;
  padding: 0 20px;
  width: 100%;
  height: max-content;
  > ul {
    padding-left: 0px;
    list-style: none;

    > li {
    }
  }
`;

const AnswerList = ({ boardData, answerListData, refetch, id, userId }) => {
  const [answerData, setAnswerData] = useState("");
  const createAnswerRef = useRef();
  const navigate = useNavigate();

  const handleCreateAnswer = () => {
    if (answerData.length < 1) {
      createAnswerRef.current.focus();
      return;
    }
    if (window.confirm("작성하시겠습니까?")) {
      createAnswer();
    }
  };

  const handleButton = async () => {
    const data = { comment: answerData };
    return await instance({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${id}/comments`,
      data,
    });
  };

  const handleButtonOnSuccess = () => {
    setAnswerData("");
    alert("작성하였습니다");
    refetch();
  };

  const handleButtonOnError = (response) => {
    if (response.response.status === 401) {
      alert("로그인 후 이용하세요");
      navigate("/login");
      return;
    }
    alert("로그인 시간이 만료되었습니다");
    navigate("/login");
    return;
  };

  const { mutate: createAnswer, isLoading } = useMutation({
    mutationKey: ["handleButton"],
    mutationFn: handleButton,
    onSuccess: handleButtonOnSuccess,
    onError: handleButtonOnError,
  });

  if (isLoading) {
    <div>Loading....</div>;
  }
  return (
    <AnswerWrapper>
      <div className="answerCount">
        {boardData.articleCommentCount}개의 댓글
      </div>
      <div className="answerInputDiv">
        <input
          ref={createAnswerRef}
          className="answerInput"
          type="text"
          placeholder="댓글을 입력하세요."
          value={answerData}
          onChange={(e) => {
            setAnswerData(e.target.value);
          }}
        />
      </div>
      <AnswerCreateButtonDiv>
        <AnswerCreateButton type="button" onClick={handleCreateAnswer}>
          작성하기
        </AnswerCreateButton>
      </AnswerCreateButtonDiv>
      {boardData.articleCommentCount === 0 ? (
        <></>
      ) : (
        <AnswerListWrapper>
          <ul>
            {answerListData.map((it) => (
              <li key={it.id}>
                <AnswerItem {...it} refetch={refetch} userId={userId} />
              </li>
            ))}
          </ul>
        </AnswerListWrapper>
      )}
    </AnswerWrapper>
  );
};

export default AnswerList;
