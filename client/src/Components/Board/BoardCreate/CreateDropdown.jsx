import React, { useState } from "react";
import styled from "styled-components";

import { sub, dtFontSize, primary } from "../../../styles/mixins";

const DropdownDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const SelectButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: ${sub.sub300};
  color: white;
  border: none;
  text-align: center;
  z-index: 10;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  width: 100%;
  background-color: ${sub.sub300};
  color: white;
  position: absolute;
  left: 0;
  transition: all 0.3s ease-in-out;

  &.open {
    top: 30px; // 위치
    opacity: 1; //투명도
    pointer-events: auto; // 안보일때 누르는거 막아놓음
  }

  &.close {
    top: 0px; // 위치
    opacity: 0; //투명도
    pointer-events: none; // 안보일때 누르는거 막아놓음
  }

  > ul {
    > li {
      text-align: center;
      list-style: none;
      padding: 3px 0;
      font-size: ${dtFontSize.small};
      cursor: pointer;

      &:hover {
        background-color: ${primary.primary400};
      }
    }
  }
`;

const CreateDropdown = ({ setCategoryValue, categoryValue }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("자유게시판");

  const handleDropdown = (props) => {
    setValue(props);
    setToggle(!toggle);
    setCategoryValue(props);
  };

  return (
    <DropdownDiv>
      <SelectButton type="button" onClick={() => setToggle(!toggle)}>
        {categoryValue === "" ? value : categoryValue}

        <DropdownContainer className={toggle ? "open" : "close"}>
          <ul>
            <li
              role="presentation"
              onClick={() => {
                handleDropdown("자유게시판");
              }}
            >
              자유게시판
            </li>
            <li
              role="presentation"
              onClick={() => {
                handleDropdown("구인게시판");
              }}
            >
              구인게시판
            </li>
            <li
              role="presentation"
              onClick={() => {
                handleDropdown("초청게시판");
              }}
            >
              초청게시판
            </li>
            <li
              role="presentation"
              onClick={() => {
                handleDropdown("홍보게시판");
              }}
            >
              홍보게시판
            </li>
          </ul>
        </DropdownContainer>
      </SelectButton>
    </DropdownDiv>
  );
};

export default CreateDropdown;
