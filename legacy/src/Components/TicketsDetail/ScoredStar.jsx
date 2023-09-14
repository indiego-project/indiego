/* eslint-disable import/no-unresolved */
//페이지, 리액트 컴포넌트, 정적 파일
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import { sub, misc } from "../../styles/mixins";

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
  }

  .filled {
    color: ${misc.orange};
  }
`;

export default function ScoredStar({ score }) {
  const starsArray = [1, 2, 3, 4, 5];
  const [filled, setFilled] = useState([false, false, false, false, false]);

  useEffect(() => {
    let filledStates = [...filled];
    for (let i = 0; i < 5; i++) {
      if (starsArray[i] <= score) {
        filledStates[i] = true;
      }
      setFilled(filledStates);
    }
  }, []);

  return (
    <StarContainer>
      <Star>
        {starsArray.map((el, idx) => (
          <FontAwesomeIcon
            icon={faStar}
            key={idx}
            className={filled[idx] ? "star filled" : "star"}
          />
        ))}
      </Star>
    </StarContainer>
  );
}
