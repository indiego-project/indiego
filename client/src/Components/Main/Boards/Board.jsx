/* eslint-disable react/prop-types */
import React from "react";

import { primary, sub, dtFontSize } from "../../../styles/mixins";

import styled from "styled-components";
import breakpoint from "../../../styles/breakpoint";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { Link } from "react-router-dom";

const BoardContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border: 1px solid ${sub.sub300};
  border-width: ${(props) => (props.isLast ? "0 0 0 0" : `0 0 1px 0`)};
`;

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  min-width: 30px;
  margin: 0 5px;

  path {
    fill: ${primary.primary300};
  }

  p {
    color: ${primary.primary500};
    font-size: calc(6px + 0.5vw);
    font-weight: 500;
    margin-top: 5px;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    svg {
      width: 15px;
    }
  }
`;

const ImageContainer = styled.div`
  padding: 10px;
  max-width: 80px;
  width: 20%;
  min-width: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: 100px;
  padding: 12px 0;
  justify-content: space-between;
  margin: 0 10px;

  .title {
    font-size: calc(6px + 0.5vw);
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    -webkit-box-orient: vertical;
    white-space: normal;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: calc(200px + 3vw);
    }
  }

  .content {
    font-size: calc(4px + 0.5vw);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  .info {
    font-size: calc(3px + 0.5vw);
    color: ${sub.sub400};
  }
`;

export default function Board({ data, isLast }) {
  return (
    <BoardContainer isLast={isLast}>
      <VoteContainer>
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        <p>{data.likeCount}</p>
      </VoteContainer>
      <ImageContainer>
        <img
          src={
            data.image === ""
              ? "https://elkcitychamber.com/wp-content/uploads/2022/08/Placeholder-Image-Square.png"
              : data.image
          }
          alt="preview"
        />
      </ImageContainer>
      <PostDetailContainer>
        <p className="title">{data.title}</p>
        <p className="content">{data.content.replace(/(<([^>]+)>)/gi, "")}</p>
        <p className="info">{new Date(data.createdAt).toLocaleString()}</p>
      </PostDetailContainer>
    </BoardContainer>
  );
}
