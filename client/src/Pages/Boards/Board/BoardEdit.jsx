/* eslint-disable no-useless-escape */
//페이지, 리액트 컴포넌트, 정적 파일
import { PageWrapper, ContentWrapper } from "./BoardList.jsx";
import breakpoint from "../../../styles/breakpoint.js";
import Aside from "../Aside/Aside.jsx";
import OKButton from "../../../Components/Board/BoardList/OKButton.jsx";
import Editor from "../../../Components/Board/BoardCreate/Editor.jsx";
import CreateDropdown from "../../../Components/Board/BoardCreate/CreateDropdown.jsx";

//로컬 모듈
import { primary, sub, secondary, mbFontSize } from "../../../styles/mixins.js";
import useBoardStore from "../../../store/useBoardStore.js";
import instance from "../../../api/core/default.js";

//라이브러리 및 라이브러리 메소드
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export const PostWrapper = styled(ContentWrapper)`
  width: 70vw;
  padding-right: 10px;
  height: max-content;
  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-top: 30px;
    width: 99%;
  }
`;

export const PostBoard = styled.div`
  width: 100%;
  height: 1000px;
  background-color: ${sub.sub200};
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 60px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }

  .postDiv {
    font-size: ${mbFontSize.large};
    font-weight: 700;
    color: ${primary.primary500};
    text-align: left;
  }
`;

const ClassificationDiv = styled.div`
  text-align: left;
  margin-bottom: 80px;
`;

export const TitleInputDiv = styled.div`
  padding-top: 10px;
  text-align: left;
  margin-bottom: 50px;

  .titleInput {
    width: 100%;
    height: 35px;
    border: 1px solid ${sub.sub400};
    border-radius: 20px;
    padding-left: 10px;
  }
`;

export const ContentInputDiv = styled.div`
  margin-top: 10px;
  text-align: left;
  padding-bottom: 50px;
  height: 500px;
  background-color: white;
  margin-bottom: 60px;

  .contentInput {
    width: 100%;
    height: 40vh;
    resize: none;
    padding-top: 5px;
    padding-left: 10px;
  }
`;

const PostButton = styled(OKButton)`
  width: 300px;
  height: 50px;

  &:hover {
    background-color: ${secondary.secondary500};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 200px;
    font-size: ${mbFontSize.medium};
  }
`;

const BoardEdit = () => {
  const { boardStoreData } = useBoardStore();
  const [categoryValue, setCategoryValue] = useState(boardStoreData.category);
  const [titleValue, setTitleValue] = useState(boardStoreData.title);
  const [contentValue, setContentValue] = useState(boardStoreData.content);
  const [thumbnailURL, setThumbnailURL] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const titleRef = useRef();
  const arrayRef = useRef([""]);
  const userId = JSON.parse(localStorage.getItem("userInfoStorage"))?.id;

  useEffect(() => {
    const newImage = new RegExp(/<img\b[^>]*>(.*?)/, "g").exec(contentValue);
    if (newImage) {
      const imageString = newImage[0];
      setThumbnailURL(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        ).exec(imageString)[0]
      );
    }
  }, [contentValue]);

  useEffect(() => {
    if (!userId) {
      navigate("/notFound");
    }
  }, []);

  const getEditBoard = async () => {
    const response = await instance({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${id}`,
    });
    return response.data;
  };

  const getEditBoardOnSuccess = (response) => {
    if (response.data.memberId !== userId) {
      navigate("/notFound");
    }
  };

  const getEditBoardOnError = (response) => {
    if (response.response.status === 400) {
      navigate("/notFound");
    }
  };

  const { isLoading } = useQuery({
    queryKey: ["getEditBoard"],
    queryFn: getEditBoard,
    onSuccess: getEditBoardOnSuccess,
    onError: getEditBoardOnError,
    retry: false,
  });

  const data = {
    title: titleValue,
    content: contentValue,
    image: arrayRef.current.length === 1 ? arrayRef.current[0] : thumbnailURL,
    category: categoryValue,
  };

  const handleEdit = () => {
    // contentValue
    if (categoryValue === "") {
      alert("카테고리를 선택해주세요");
      window.scrollTo(0, 0);
      return;
    }
    if (titleValue.length < 1) {
      titleRef.current.focus();
      return;
    }

    if (contentValue.length < 1 || contentValue === "<p><br></p>") {
      window.scrollTo(0, 300);
      return;
    }

    if (window.confirm("수정하시겠습니까?")) {
      editBoard();
    }
  };

  const handleButton = async () => {
    const response = await instance({
      method: "patch",
      url: `${process.env.REACT_APP_SERVER_URI}/articles/${id}`,
      data,
    });
    return response.data;
  };

  const handleButtonOnSuccess = () => {
    const newPathName = pathname.split("/");
    if (categoryValue === "자유게시판") {
      navigate(`/${newPathName[1]}/free/${newPathName[3]}`);
    }
    if (categoryValue === "구인게시판") {
      navigate(`/${newPathName[1]}/employ/${newPathName[3]}`);
    }
    if (categoryValue === "초청게시판") {
      navigate(`/${newPathName[1]}/request/${newPathName[3]}`);
    }
    if (categoryValue === "홍보게시판") {
      navigate(`/${newPathName[1]}/advertise/${newPathName[3]}`);
    }
    if (categoryValue === "후기게시판") {
      navigate(`/${newPathName[1]}/review/${newPathName[3]}`);
    }
  };

  const handleButtonOnError = () => {
    alert("로그인 후 이용하세요");
    navigate("/login");
  };

  const { mutate: editBoard } = useMutation({
    mutationKey: ["handleButton"],
    mutationFn: handleButton,
    onSuccess: handleButtonOnSuccess,
    onError: handleButtonOnError,
  });

  return (
    <PageWrapper>
      <Aside></Aside>
      <PostWrapper>
        <div className="title">글 수정하기</div>
        <div className="titleInfo">게시판을 수정 할 수 있습니다.</div>
        <PostBoard>
          <div className="postDiv">분류</div>
          <ClassificationDiv>
            <CreateDropdown
              setCategoryValue={setCategoryValue}
              categoryValue={categoryValue}
            ></CreateDropdown>
          </ClassificationDiv>
          <div className="postDiv">제목</div>
          <TitleInputDiv>
            <input
              ref={titleRef}
              className="titleInput"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              placeholder="게시글의 제목을 작성해주세요."
            />
          </TitleInputDiv>
          <div className="postDiv">본문</div>
          <ContentInputDiv>
            <Editor
              value={contentValue}
              setValue={setContentValue}
              placeholder={"내용을 입력해주세요."}
              arrayRef={arrayRef.current}
            ></Editor>
          </ContentInputDiv>
          <PostButton type="button" onClick={handleEdit}>
            수정하기
          </PostButton>
        </PostBoard>
      </PostWrapper>
    </PageWrapper>
  );
};

export default BoardEdit;
