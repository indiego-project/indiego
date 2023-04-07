import { sub, primary } from "../../../styles/mixins";
import React from "react";
import styled from "styled-components";
import breakpoint from "../../../styles/breakpoint";

import { useTicketSearchStore } from "../../../store/useTicketSearchStore";

const CategoryPickerContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .selector_group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
    min-width: 30px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      margin: 0 20px;
    }
  }

  .default_input {
    visibility: hidden;
  }

  // checkbox
  label {
    position: relative;

    :hover {
      cursor: pointer;
    }

    ::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: -23px;
      width: 10px;
      height: 10px;
      padding: 5px;
      border: 1px solid ${sub.sub300};
      border-radius: 5px;
    }
  }

  // 체크박스 애니메이션
  i::before {
    display: inline;
    position: absolute;
    left: -17px;
    top: 9px;
    content: "";
    width: 0px;
    height: 0px;
    border-top: 2px solid white;
    transform-origin: top left;
    transform: rotate(43deg);
    background-color: red;
  }
  // 체크박스 애니메이션
  i::after {
    display: inline-block;
    position: absolute;
    left: -13.8px;
    top: 14.5px;
    content: "";
    width: 0px;
    border-top: 2px solid white;
    transform: rotate(-49deg);
    transform-origin: top left;
    white-space: nowrap;
  }
  // 체크박스 애니메이션
  input:checked + label::before {
    background-color: ${primary.primary200};
    transition: background-color 0.1s ease-in;
  }

  input:checked ~ label i::before {
    width: 8px;
    transition: all 0.2s cubic-bezier(0.4, 0.8, 1, 1);
  }

  input:checked ~ label i::after {
    width: 12px;
    transition: all 0.1s 0.1s cubic-bezier(0, 0.5, 1, 1);
  }
`;
export default function CategorySelect() {
  const { category } = useTicketSearchStore((state) => state.searchParams);
  const { setCategory } = useTicketSearchStore((state) => state);

  const categoryOnClickHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <CategoryPickerContainer>
      <div className="selector_group">
        <input
          id="all"
          name="category"
          type="radio"
          value="전체"
          className="default_input"
          checked={category === "전체"}
          onChange={categoryOnClickHandler}
        />
        <label htmlFor="all">
          <i />
          전체
        </label>
      </div>
      <div className="selector_group">
        <input
          id="music"
          name="category"
          type="radio"
          value="음악"
          className="default_input"
          checked={category === "음악"}
          onChange={categoryOnClickHandler}
        />
        <label htmlFor="music">
          <i />
          음악
        </label>
      </div>
      <div className="selector_group">
        <input
          id="play"
          name="category"
          type="radio"
          value="연극"
          className="default_input"
          checked={category === "연극"}
          onChange={categoryOnClickHandler}
        />
        <label htmlFor="play">
          <i />
          연극
        </label>
      </div>
    </CategoryPickerContainer>
  );
}
