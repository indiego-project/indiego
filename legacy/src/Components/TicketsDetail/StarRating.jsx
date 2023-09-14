/* eslint-disable import/no-unresolved */
//페이지, 리액트 컴포넌트, 정적 파일
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import { sub, misc } from "../../styles/mixins";
import useStarScoreStore from "../../store/useStarScoreStore";
import useClickedStarStore from "../../store/useClickedStarStore";

//라이브러리 및 라이브러리 메소드
import { React, useEffect, useState } from "react";
import styled from "styled-components/macro";

const StarContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-bottom: 3%;
  }
`;

const Star = styled.div`
  display: flex;

  .star {
    color: ${sub.sub300};
    cursor: pointer;
  }

  :hover .star {
    color: ${misc.orange};
  }

  & :hover ~ .star {
    color: ${sub.sub300};
  }

  .filled {
    color: ${misc.orange};
  }
`;

export default function StarRating() {
  const starsArray = [0, 1, 2, 3, 4];
  const { score, setScore } = useStarScoreStore((state) => state);
  const { clicked, setClicked } = useClickedStarStore((state) => state);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    setScore(clicked.filter(Boolean).length);
  };

  useEffect(() => {
    setScore(clicked.filter(Boolean).length);
  }, [clicked]);

  return (
    <StarContainer>
      <Star>
        {starsArray.map((el, idx) => (
          <FontAwesomeIcon
            icon={faStar}
            key={idx}
            onClick={() => handleStarClick(el)}
            className={clicked[idx] ? "star filled" : "star"}
          />
        ))}
      </Star>
    </StarContainer>
  );
}
