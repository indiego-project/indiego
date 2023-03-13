import right from "../../../assets/right.svg";
import left from "../../../assets/left.svg";

import { sub, dtFontSize, primary } from "../../../styles/mixins";

import styled from "styled-components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  .movePageButton {
    border-radius: 100%;
    width: 15px;
    height: 15px;
    background-color: ${sub.sub500};
    border: none;
    padding: 0;
    cursor: pointer;

    .arrowLeftImage {
      width: 6px;
    }

    .arrowRightImage {
      width: 6px;
      margin-left: 1px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;

    li {
      margin: 3px;

      a {
        background-color: white;
        border: none;
        color: ${sub.sub900};
        font-size: ${dtFontSize.medium};
        width: 20px;
        height: 35px;
        margin-left: 5px;
        margin-right: 5px;
        padding: 0;
        text-decoration-line: none;
      }
      &.on a {
        color: ${primary.primary200};
      }
    }
  }
`;

// props로 page를 뺀 현재의 주소와 axios.get으로 가져온 res.pageData를 가져와야 합니다
const PageNation = ({ pageData, location, className }) => {
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    navigate(`${location}page=${pageData.page - 1}`);
  };

  const handleNextPage = () => {
    navigate(`${location}page=${pageData.page + 1}`);
  };

  const PageLengthData = [...Array(pageData.totalPages)].map((it, idx) => {
    return (it = {
      nowNum: pageData.page === idx + 1 ? true : false,
      num: idx + 1,
    });
  });

  // 페이지가 무조건 5개씩 보이게 만든다
  const FilterData = PageLengthData.filter((it) => {
    if (pageData.page === 1) {
      return it.num < pageData.page + 5;
    } else if (pageData.page === 2) {
      return it.num < pageData.page + 4;
    } else if (pageData.page === pageData.totalPages - 1) {
      return it.num > pageData.page - 4 && it.num < pageData.page + 2;
    } else if (pageData.page === pageData.totalPages) {
      return it.num > pageData.page - 5;
    }

    return it.num > pageData.page - 3 && it.num < pageData.page + 3;
  });

  return (
    <PageNationDiv className={className}>
      <button
        className="movePageButton"
        onClick={handlePreviousPage}
        disabled={pageData.page === 1 ? true : false} // 현재 페이지가 1번 페이지라면 못클릭
      >
        <img className="arrowLeftImage" src={left} alt="이전 버튼" />
      </button>
      <ul>
        {FilterData.map((it, idx) => (
          <li key={idx} className={it.nowNum ? "on" : ""}>
            <Link to={`${location}page=${it.num}`}>{it.num}</Link>
          </li>
        ))}
      </ul>
      <button
        className="movePageButton"
        onClick={handleNextPage}
        disabled={pageData.page === pageData.totalPages ? true : false} // 현재 페이지와 총 페이지가 같다면 못클릭
      >
        <img className="arrowRightImage" src={right} alt="다음 버튼" />
      </button>
    </PageNationDiv>
  );
};

export default PageNation;
