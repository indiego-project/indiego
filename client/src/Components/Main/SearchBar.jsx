/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from "react";

import { primary, dtFontSize, secondary, sub } from "../../styles/mixins";
import breakpoint from "../../styles/breakpoint";
import Search from "../../assets/search.svg";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchBarContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: none;
  }
`;

const OptionContainer = styled.div`
  width: 8%;
  min-width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

const OptionSelector = styled.div`
  z-index: 10;
  width: 100%;
  min-width: max-content;
  /* height: 75%; */
  border: 2px solid ${primary.primary700};
  border-radius: 10px 0 0 10px;
  background-color: ${primary.primary600};
  display: flex;

  &:hover {
    background-color: ${secondary.secondary500};
    border-color: ${secondary.secondary700};
    cursor: pointer;
  }

  p {
    min-width: max-content;
    min-height: max-content;
    width: 100%;
    padding: 8.5px;
    text-align: center;
    color: white;
    font-size: ${dtFontSize.medium};

    @media screen and (max-width: 1200px) {
      font-size: ${dtFontSize.small};
      padding: 9.5px;
    }
  }

  svg {
    transform: rotate(180deg);
    margin-right: 7px;
    margin-top: 6px;
  }
`;

const OptionsList = styled.div`
  position: relative;
  z-index: 0;
  top: ${(props) => (props.isClicked ? "0" : "-60px")};
  opacity: ${(props) => (props.isClicked ? 1 : 0)};
  width: 100%;
  height: 70px;
  background-color: ${sub.sub300};
  margin-top: 5px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  pointer-events: ${(props) => (props.isClicked ? "" : "none")};

  li {
    list-style: none;
    width: 100%;
    min-width: max-content;
    font-weight: 500;
    color: white;
    margin-top: 6.5px;
    padding: 3px 10%;
    text-align: center;

    &:hover {
      background-color: ${primary.primary400};
      cursor: pointer;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 34%;
  height: 80%;
  border-radius: 0 10px 10px 0;
  border: 2px solid ${primary.primary700};
  border-width: 2px 2px 2px 0;

  svg {
    margin: 10px 10px 0 0;

    :hover {
      path {
        fill: ${primary.primary300};
      }

      cursor: pointer;
    }
  }

  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    font-size: ${dtFontSize.medium};
    padding-left: 20px;

    &:focus-within {
      outline: none;
    }
  }

  &:focus-within {
    border: 0;
    outline: 3px solid ${primary.primary200};

    svg:hover {
      cursor: pointer;
    }

    path {
      fill: ${primary.primary200};
    }
  }
`;

export default function SearchBar({
  className,
  navigateTo,
  defaultValue,
  additionalParams,
}) {
  const [isSearchOptionsClicked, setIsSearchOptionsClicked] = useState(false);
  const [searchOption, setSearchOption] = useState("공연명");
  const [searchInput, setSearchInput] = useState(defaultValue);
  const navigate = useNavigate();

  let searchURI = `${navigateTo}?search=${searchInput}&filter=${searchOption}`;

  additionalParams?.forEach((param) => {
    if (Array.isArray(param)) {
      searchURI += "&" + param[0] + "=" + param[1];
    }
  });

  const searchOptionsContainerEventHandler = (e, props) => {
    if (props === "blur") {
      const next = e.relatedTarget;
      if (next instanceof HTMLLIElement) {
        setSearchOption(next.innerText);
        setIsSearchOptionsClicked(false);
      } else {
        setIsSearchOptionsClicked(false);
      }
    } else {
      setIsSearchOptionsClicked(!isSearchOptionsClicked);
    }
  };

  const searchInputOnChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchInputOnKeyUpHandler = (e) => {
    if (searchInput && e.key === "Enter") {
      navigate(searchURI);
    }
  };

  const searchIconClickHandler = () => {
    if (searchInput) {
      navigate(searchURI);
    }
  };

  return (
    <SearchBarContainer className={className}>
      <OptionContainer className="option_container">
        <OptionSelector
          tabIndex="0"
          className={isSearchOptionsClicked && "clicked"}
          onClick={searchOptionsContainerEventHandler}
          onBlur={(e) => {
            searchOptionsContainerEventHandler(e, "blur");
          }}
        >
          <p>{searchOption}</p>
          {/* traingle icon */}
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="white"
              d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
            />
          </svg>
        </OptionSelector>
        <OptionsList isClicked={isSearchOptionsClicked}>
          <li tabIndex={-1}>공연명</li>
          <li tabIndex={-1}>아티스트명 </li>
        </OptionsList>
      </OptionContainer>
      <InputContainer className="input_container">
        <input
          placeholder="검색어를 입력하세요."
          value={searchInput}
          onChange={searchInputOnChangeHandler}
          onKeyUp={searchInputOnKeyUpHandler}
        />
        {/* search icon */}
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={searchIconClickHandler}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </InputContainer>
    </SearchBarContainer>
  );
}
