import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import useBoardListStore from "../../../store/useBoardListStore";

import { sub, dtFontSize, primary } from "../../../styles/mixins";
import { useNavigate } from "react-router-dom";

const DropdownDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const SelectButton = styled.button`
  width: 80px;
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
  transition: all 0.2s ease-in-out;

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
      height: 26px;
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

const Dropdown = ({ location }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("최신순");
  const { setBoardListData } = useBoardListStore();

  const navigate = useNavigate();

  const handleDropdown = async (props) => {
    setToggle(!toggle);

    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URI}/articles?${location}status=${props}`
    );
    setBoardListData(response.data.data);
    navigate(`${location}status=${props}`);
    setValue(props);
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
              handleDropdown("최신순");
            }}
          >
            최신순
          </li>
          <li
            role="presentation"
            onClick={() => {
              handleDropdown("인기순");
            }}
          >
            인기순
          </li>
        </ul>
      </DropdownContainer>
    </DropdownDiv>
  );
};

export default Dropdown;
