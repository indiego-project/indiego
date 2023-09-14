//페이지, 리액트 컴포넌트, 정적 파일
import ReviewList from "./ReviewList.jsx";
import StarRating from "./StarRating.jsx";
import { PillButton } from "../../Pages/Tickets/TicketsDetail.jsx";
import useStarScoreStore from "../../store/useStarScoreStore.js";
import useClickedStarStore from "../../store/useClickedStarStore.js";

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

//라이브러리 및 라이브러리 메소드
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components/macro";

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  > .sub-title {
    color: ${primary.primary500};
    font-size: ${dtFontSize.xlarge};
    font-weight: 600;
    text-align: left;
    width: 100%;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.large};
    }
  }

  > .sub-description {
    border-bottom: 1px solid ${sub.sub200};
    display: flex;
    color: ${sub.sub400};
    font-weight: 400;
    padding-bottom: 5%;
    margin-top: 5px;
    margin-bottom: 5%;
    width: 100%;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

const ReviewWritingContainer = styled.div`
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${sub.sub200};
  width: 100%;
  height: 200px;
  justify-content: space-between;
  margin-bottom: calc(5% + 50px);
  padding: 4%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    height: 150px;
    font-size: ${mbFontSize.small};
    margin-bottom: 20%;
  }

  > div {
    align-items: center;
    display: flex;
    width: 90%;

    @media screen and (max-width: ${breakpoint.mobile}) {
      flex-direction: column;
      font-size: ${mbFontSize.large};
      width: 100%;
    }

    > input {
      border: 2px solid ${sub.sub300};
      border-radius: 10px;
      width: 100%;
      height: 50px;
      margin-left: 5%;
      padding: 10px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.small};
        height: 40px;
        margin-left: 0;
      }
    }
  }

  > .alert-message {
    color: ${primary.primary300};
    font-size: ${dtFontSize.medium};
    font-weight: 600;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

export default function TicketsDetailTapReview() {
  const { score, setScore } = useStarScoreStore((state) => state);
  const { clicked, setClicked } = useClickedStarStore((state) => state);
  const [comment, setComment] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [localStorage.getItem("accessToken")]);

  const postData = () => {
    return instance({
      method: "post",
      url: `/shows/${params.id}/comments`,
      data: { score, comment },
    });
  };

  const postDataOnsuccess = (response) => {
    queryClient.invalidateQueries("fetchReviewData");
    window.alert("후기 작성이 완료되었습니다!");
    setComment("");
    setClicked([false, false, false, false, false]);
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
    } else if (
      error.response.status === 403 &&
      error.response.data.message === "후기를 작성할 수 있는 권한이 없습니다."
    ) {
      window.alert("공연을 예매한 분만 후기를 작성할 수 있습니다.");
    } else if (
      error.response.status === 403 &&
      error.response.data.message === "후기를 이미 작성하셨습니다."
    ) {
      window.alert("후기를 이미 작성하셨습니다.");
    }
  };

  const { mutate: postCommentData } = useMutation({
    mutationFn: postData,
    onSuccess: postDataOnsuccess,
    onError: postDataOnError,
  });

  const handlePostComment = () => {
    if (!score) {
      window.alert("별점이 입력되지 않았습니다.");
      return;
    }
    postCommentData();
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <ContentContainer>
      <div className="sub-title">공연 후기 남기기</div>
      <div className="sub-description">공연에 대한 후기를 남겨주세요.</div>
      <ReviewWritingContainer>
        <div>
          <StarRating />
          <input
            maxLength="50"
            placeholder="후기는 50자 이내로 제한됩니다."
            value={comment || ""}
            onChange={handleChangeComment}
          />
        </div>
        {isLogin ? (
          <PillButton
            color={primary.primary300}
            hoverColor={secondary.secondary500}
            onClick={handlePostComment}
          >
            작성하기
          </PillButton>
        ) : (
          <span className="alert-message">
            후기는 로그인한 상태에서만 작성 가능합니다
          </span>
        )}
      </ReviewWritingContainer>
      <div className="sub-title">공연 후기</div>
      <div className="sub-description">
        공연에 다녀오신 분들이 남겨주신 소중한 후기입니다.
      </div>
      <ReviewList />
    </ContentContainer>
  );
}
