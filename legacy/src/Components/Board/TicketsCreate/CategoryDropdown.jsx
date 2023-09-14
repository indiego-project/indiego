import React, { useState } from "react";
import styled from "styled-components";

import { dtFontSize, primary, secondary } from "../../../styles/mixins";

const DropdownDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const SelectButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${primary.primary200};
  color: white;
  border: none;
  text-align: center;
  z-index: 10;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  width: 100%;
  background-color: ${primary.primary200};
  color: white;
  position: absolute;
  left: 0;
  transition: all 0.3s ease-in-out;

  &.open {
    top: 30px; // 위치
    opacity: 1; //투명도
    pointer-events: auto; // 보일때 막아놓은거 다시 원래대로
  }

  &.close {
    top: 0px; // 위치
    opacity: 0; //투명도
    pointer-events: none; // 안보일때 누르는거 막아놓음
  }

  > ul {
    > li {
      list-style: none;
      padding: 2px 0;
      font-size: ${dtFontSize.small};
      cursor: pointer;
      text-align: center;

      &:hover {
        background-color: ${secondary.secondary500};
      }
    }
  }
`;

const CategoryDropdown = ({ setCategory }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("음악");

  const handleDropdown = (props) => {
    setValue(props);
    setCategory(props);
    setToggle(!toggle);
  };
  return (
    <DropdownDiv>
      <SelectButton type="button" onClick={() => setToggle(!toggle)}>
        {value}
      </SelectButton>
      <DropdownContainer className={toggle ? "open" : "close"}>
        <ul>
          <li
            role="presentation"
            onClick={() => {
              handleDropdown("음악");
            }}
          >
            음악
          </li>
          <li
            role="presentation"
            onClick={() => {
              handleDropdown("연극");
            }}
          >
            연극
          </li>
        </ul>
      </DropdownContainer>
    </DropdownDiv>
  );
};

export default CategoryDropdown;
