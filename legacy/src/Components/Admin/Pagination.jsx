/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;

  .button_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;

    button {
      :hover {
        cursor: pointer;
        background-color: gray;
      }
    }
  }

  .page {
    margin: 0 5px;
    :hover {
      cursor: pointer;
    }
  }

  .page.selected {
    color: blue;
  }
`;

export default function Pagination({ pageInfo, setCurPage }) {
  const pageButtonHandler = (e) => {
    setCurPage(e.target.value);
  };

  const generateButtons = (pageInfo, buttonHandler) => {
    const { totalPages, page: curPage } = pageInfo;
    const pageStart = 5 * Math.floor(curPage / 6);
    const lastPageStart = 5 * Math.floor(totalPages / 6);

    const pageGenerate = () => {
      let result = [];
      if (totalPages < 5) {
        result = new Array(totalPages).fill(0);
        result.reduce((acc) => {
          result[acc] = acc += 1;
          return acc;
        }, 0);
      } else {
        if (curPage <= lastPageStart) {
          result = new Array(5).fill(0);
        } else {
          result = new Array(totalPages - lastPageStart).fill(0);
        }
        result.reduce((acc) => {
          result[acc] = pageStart + (acc += 1);
          return acc;
        }, 0);
      }

      return result;
    };

    return pageGenerate().map((page, i) => {
      if (page === curPage) {
        return (
          <p onClick={buttonHandler} className="page selected" key={"page" + i}>
            {page}
          </p>
        );
      }
      return (
        <p onClick={buttonHandler} className="page" key={"page" + i}>
          {page}
        </p>
      );
    });
  };

  if (pageInfo) {
    return (
      <Container>
        <div className="button_container">
          <button
            onClick={() => {
              setCurPage(pageInfo.page--);
            }}
          >
            prev
          </button>
          {generateButtons(pageInfo, pageButtonHandler)}
          <button
            onClick={() => {
              setCurPage(pageInfo.page++);
            }}
          >
            next
          </button>
        </div>
      </Container>
    );
  }
}
