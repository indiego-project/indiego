//페이지, 리액트 컴포넌트, 정적 파일
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScoredStar from "../TicketsDetail/ScoredStar";
import StarRating from "./StarRating.jsx";

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
import useStarScoreStore from "../../store/useStarScoreStore";
import instance from "../../api/core/default";

//라이브러리 및 라이브러리 메소드
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components/macro";

const ReviewItemContainer = styled.li`
  align-items: center;
  background-color: ${sub.sub200};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  margin-bottom: 3%;
  padding: 20px 0;

  @media screen and (max-width: ${breakpoint.mobile}) {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    padding: 15px;
  }

  > .top-container {
    align-items: center;
    display: flex;
    width: fit-content;

    @media screen and (max-width: ${breakpoint.mobile}) {
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    > .top-left-container {
      align-items: center;
      display: flex;

      > .star-rating-container {
        align-items: center;
        display: flex;
        padding-right: 10px;
        width: max-content;
      }

      > .reviewer-name {
        display: flex;
        color: ${sub.sub800};
        font-weight: 600;
        font-size: ${dtFontSize.small};
        flex-direction: row;
        padding-right: 50px;
        width: max-content;
        height: fit-content;

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.small};
          padding-right: 0;
        }
      }
    }

    > .button-container {
      display: flex;
      justify-content: space-between;
      right: 0;
      position: relative;
      width: 53px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        width: 46px;
      }

      > button {
        all: unset;
        width: max-content;
        font-size: ${dtFontSize.small};
        color: ${sub.sub400};
        cursor: pointer;

        &:hover {
          color: ${primary.primary500};
        }

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.small};
        }
      }
    }
  }

  > .review-content {
    color: ${sub.sub800};
    font-weight: 400;
    font-size: ${dtFontSize.small};

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.small};
    }
  }

  > .edit-comment-input {
    border: 2px solid ${sub.sub300};
    border-radius: 10px;
    width: 95%;
    height: 30px;
    padding: 10px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.small};
      height: 40px;
    }
  }
`;

export default function ReviewItem({ reviewData }) {
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState("");
  const [isSameUser, setIsSameUser] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { score, setScore } = useStarScoreStore((state) => state);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      reviewData.memberId ===
        JSON.parse(localStorage.getItem("userInfoStorage")).id
    ) {
      setIsSameUser(true);
    } else {
      setIsSameUser(false);
    }

    setComment(reviewData.comment);
  }, [localStorage.getItem("accessToken")]);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEditCommentInput = (e) => {
    setComment(e.target.value);
  };

  const patchData = () => {
    return instance({
      method: "patch",
      url: `/shows/${reviewData.showId}/comments/${reviewData.commentId}`,
      data: { score, comment },
    });
  };

  const patchDataOnsuccess = (response) => {
    window.alert("한줄평 수정이 완료되었습니다!");
    setEditMode(!editMode);
    queryClient.invalidateQueries("fetchReviewData", { refetchInactive: true });
    location.reload();
  };

  const patchDataOnError = (error) => {
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

  const { mutate: patchCommentData } = useMutation({
    mutationFn: patchData,
    onSuccess: patchDataOnsuccess,
    onError: patchDataOnError,
  });

  const handleEditComment = () => {
    patchCommentData();
  };

  const deleteData = () => {
    return instance({
      method: "delete",
      url: `/shows/${reviewData.showId}/comments/${reviewData.commentId}`,
    });
  };

  const deleteDataOnsuccess = (response) => {
    window.alert("한줄평 삭제가 완료되었습니다!");
  };

  const deleteDataOnError = (error) => {
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

  const { mutate: deleteCommentData } = useMutation({
    mutationFn: deleteData,
    onSuccess: deleteDataOnsuccess,
    onError: deleteDataOnError,
  });

  const handleDeleteComment = () => {
    deleteCommentData();
  };

  console.log(reviewData.score);

  return (
    <ReviewItemContainer>
      <div className="top-container">
        <div className="top-left-container">
          <div className="star-rating-container">
            {editMode ? (
              <StarRating />
            ) : (
              <ScoredStar score={reviewData.score} />
            )}
          </div>
          <div className="reviewer-name">{reviewData.nickname}</div>
        </div>
        {isSameUser ? (
          <div className="button-container">
            {editMode ? (
              <button onClick={handleEditComment}>완료</button>
            ) : (
              <button onClick={handleEditMode}>수정</button>
            )}
            <button onClick={handleDeleteComment}>삭제</button>
          </div>
        ) : (
          ""
        )}
      </div>
      {editMode ? (
        <input
          className="edit-comment-input"
          value={comment}
          onChange={handleEditCommentInput}
          maxLength="50"
        />
      ) : (
        <span className="review-content">{reviewData.comment}</span>
      )}
    </ReviewItemContainer>
  );
}
