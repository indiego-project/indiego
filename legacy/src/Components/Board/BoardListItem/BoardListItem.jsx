//페이지, 리액트 컴포넌트, 정적 파일
import heart from "../../../assets/heart.svg";
import { BoardItem } from "../../../Pages/Boards/Board/BoardList";

//로컬 모듈
import { dtFontSize, sub, mbFontSize } from "../../../styles/mixins";
import breakpoint from "../../../styles/breakpoint";

//라이브러리 및 라이브러리 메소드
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const BoardItemContent = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    justify-content: flex-start;
  }

  .titleLink {
    text-decoration-line: none;
    width: max-content;
    margin-top: 10px;
    font-size: ${dtFontSize.medium};
    font-weight: 700;
    text-align: left;
    color: ${sub.sub900};
    background-color: white;
    border: none;
    cursor: pointer;

    @media screen and (max-width: ${breakpoint.mobile}) {
      margin-top: 15px;
      font-size: ${mbFontSize.large};
    }
  }
  .contentDiv {
    display: block;
    font-size: ${dtFontSize.small};
    font-weight: 500;
    text-align: left;
    color: ${sub.sub700};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    height: 20px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      margin-top: 10px;
      font-size: ${mbFontSize.medium};
    }
  }
`;

const BoardItemCreateInfo = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: none;
  }
  .authorDiv {
    width: 30px;
    font-size: ${dtFontSize.xsmall};
    font-weight: 300;
    color: ${sub.sub300};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .createDateDiv {
    margin-left: 20px;
    font-size: ${dtFontSize.xsmall};
    font-weight: 300;
    margin-bottom: 10px;
    color: ${sub.sub300};
  }
`;

const BoardListItem = (props) => {
  const { pathname } = useLocation();
  return (
    <BoardItem key={props.id}>
      <div className="likeDiv">
        <div>
          <div className="heartImageDiv">
            <img width={30} src={heart} alt="heart"></img>
          </div>
        </div>
        <div className="heartCount">{props.likeCount}</div>
      </div>
      <div className="imageDiv">
        <img
          className="postImage"
          src={
            props.image === ""
              ? "https://elkcitychamber.com/wp-content/uploads/2022/08/Placeholder-Image-Square.png"
              : props.image
          }
          alt="postImage"></img>
      </div>
      <BoardItemContent>
        <Link to={`${pathname}/${props.id}`} className="titleLink">
          {props.title}
        </Link>
        <div className="contentDiv">
          {props.content.replace(/(<([^>]+)>)/gi, "")}
        </div>
        <BoardItemCreateInfo>
          <div className="authorDiv">{props.nickname}</div>
          <div className="createDateDiv">
            {new Date(props.createdAt).toLocaleString()}
          </div>
        </BoardItemCreateInfo>
      </BoardItemContent>
    </BoardItem>
  );
};

export default BoardListItem;
