//페이지, 리액트 컴포넌트, 정적 파일
import blueHeart from "../../../assets/blueHeart.gif";

//로컬 모듈
import styled from "styled-components";
import {
  primary,
  dtFontSize,
  sub,
  mbFontSize,
} from "../../../styles/mixins.js";
import breakpoint from "../../../styles/breakpoint.js";

//라이브러리 및 라이브러리 메소드
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import instance from "../../../api/core/default.js";
import { Link, useNavigate } from "react-router-dom";

const AnswerListUserDiv = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 22px;
  border-bottom: 1px solid ${sub.sub200};
`;

const AnswerListImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  .userImage {
    width: 70px;
    border-radius: 50%;
  }
`;

const AnswerListInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 15px;

  .answerListUserName {
    background-color: white;
    height: 20px;
    text-align: left;
    color: ${primary.primary400};
    font-size: ${dtFontSize.medium};
    font-weight: 500;
    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
  .answerListCreateDate {
    background-color: white;
    height: 20px;
    text-align: left;
    color: ${sub.sub300};
    font-size: ${dtFontSize.small};
    font-weight: 300;
    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.small};
    }
  }
`;

const AnswerListContentDiv = styled.div`
  height: 30px;
  text-align: left;
  background-color: white;
  padding-bottom: 5px;
  font-size: ${dtFontSize.medium};
  color: ${sub.sub800};

  .editAnswerInput {
    font-size: ${dtFontSize.medium};
    width: 100%;
    padding: 2px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }
`;

const AnswerListFunctionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 5px; */
  margin-bottom: 10px;

  .heartDiv {
    display: flex;
    justify-content: center;

    .heartButton {
      width: 20px;
      height: 20px;
      background-color: white;
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;

      .heartImage {
        width: 20px;
        height: 20px;
      }
    }

    .heartCount {
      margin-left: 5px;
      margin-top: 1px;
      color: ${primary.primary400};
      font-size: ${dtFontSize.small};
    }
  }

  .edDiv {
    .edButton {
      cursor: pointer;
      width: 40px;
      height: 20px;
      border: none;
      background-color: white;
      color: ${sub.sub400};
      margin-right: 5px;
    }
  }
`;

const AnswerItem = (props) => {
  const [toggle, setToggle] = useState(false);
  const [editValue, setEditValue] = useState(props.comment);
  const [heartCountState, setHeartCountState] = useState("");
  const navigate = useNavigate();

  const handleEdit = () => {
    setToggle(!toggle);
  };

  // 하트 누르기 코드
  const handleHeartCount = async () => {
    return await instance({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${props.articleId}/comments/${props.id}`,
    });
  };

  const handleHeartCountOnSuccess = () => {
    props.refetch();
  };

  const handleHeartCountOnError = (response) => {
    if (response.response.status === 401) {
      alert("로그인 후 이용하세요");
      navigate("/login");
      return;
    }

    return;
  };

  const { mutate: heartCount } = useMutation({
    mutationKey: ["handleHeartCount"],
    mutationFn: handleHeartCount,
    onSuccess: handleHeartCountOnSuccess,
    onError: handleHeartCountOnError,
  });

  // 수정 완료 코드
  const handleEditComplete = () => {
    if (editValue.length < 1) {
      alert("1글자 이상을 적어야 합니다");
      return;
    }
    alert("수정하였습니다");
    editAnswer();
  };

  const handleComplete = async () => {
    const data = { comment: editValue };
    const response = await instance({
      method: "patch",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${props.articleId}/comments/${props.id}`,
      data,
    });
    return response.data.comment;
  };

  const handleCompleteOnSuccess = () => {
    setToggle(!toggle);
    props.refetch();
  };

  const handleCompleteOnError = () => {
    alert("로그인 시간이 만료되었습니다");
    navigate("/login");
  };

  const { mutate: editAnswer } = useMutation({
    mutationKey: ["handleComplete"],
    mutationFn: handleComplete,
    onSuccess: handleCompleteOnSuccess,
    onError: handleCompleteOnError,
  });

  const handleCancel = () => {
    setEditValue(props.comment);
    handleEdit();
  };

  // 삭제 코드
  const handleAnswerDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteAnswer();
    }
  };
  const handleDelete = async () => {
    return await instance({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${props.articleId}/comments/${props.id}`,
    });
  };

  const handleDeleteOnSuccess = () => {
    props.refetch();
  };

  const handleDeleteOnError = () => {
    alert("로그인 시간이 만료되었습니다");
    navigate("/login");
  };

  const { mutate: deleteAnswer } = useMutation({
    mutationKey: ["handleDelete"],
    mutationFn: handleDelete,
    onSuccess: handleDeleteOnSuccess,
    onError: handleDeleteOnError,
  });

  return (
    <AnswerListUserDiv>
      <AnswerListImageDiv>
        <img className="userImage" src={props.image} alt="userImage" />
      </AnswerListImageDiv>
      <AnswerListInfoDiv>
        <Link className="answerListUserName" to={`/members/${props.memberId}`}>
          {props.nickname}
        </Link>
        <div className="answerListCreateDate">
          {new Date(props.createdAt).toLocaleString()}
        </div>
        <AnswerListContentDiv>
          {toggle ? (
            <input
              className="editAnswerInput"
              value={editValue}
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
            ></input>
          ) : (
            props.comment
          )}
        </AnswerListContentDiv>
        <AnswerListFunctionDiv>
          <div className="heartDiv">
            <button className="heartButton" onClick={() => heartCount()}>
              <img className="heartImage" src={blueHeart} alt="하트" />
            </button>
            <span className="heartCount">{props.likeCount}</span>
          </div>

          {toggle ? (
            <div className="edDiv">
              <button
                type="button"
                className="edButton"
                onClick={handleEditComplete}
              >
                완료
              </button>
              <button type="button" className="edButton" onClick={handleCancel}>
                취소
              </button>
            </div>
          ) : props.memberId === props.userId ? (
            <div className="edDiv">
              <button type="button" className="edButton" onClick={handleEdit}>
                수정
              </button>
              <button
                type="button"
                className="edButton"
                onClick={handleAnswerDelete}
              >
                삭제
              </button>
            </div>
          ) : (
            <></>
          )}
        </AnswerListFunctionDiv>
      </AnswerListInfoDiv>
    </AnswerListUserDiv>
  );
};

export default AnswerItem;
