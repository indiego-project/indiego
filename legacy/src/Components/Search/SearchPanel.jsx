import React, { useState } from "react";

import { primary, dtFontSize, sub } from "../../styles/mixins";

import styled from "styled-components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const SearchPanelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;

  .radio_group {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  label {
    margin-right: 5px;
    font-weight: 500;
    font-size: ${dtFontSize.small};
    color: ${primary.primary500};
  }

  input {
    margin-right: 10px;
  }

  label,
  input {
    :hover {
      cursor: pointer;
    }
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  width: 40%;
  height: 70%;
  border-radius: 10px;
  border: 2px solid ${sub.sub500};

  &:focus-within {
    border: 0;
    outline: 3px solid ${primary.primary200};

    path {
      fill: ${primary.primary300};
    }
  }

  .image_container {
    display: flex;
    width: max-content;
    height: 100%;
    align-items: center;
  }

  svg {
    margin: 0 5px;
    :hover {
      cursor: pointer;
      path {
        fill: ${primary.primary300};
      }
    }
  }
`;

const SearchBarInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 10px;
  margin-left: 5px;
  padding-left: 10px;
  border: none;
  outline: none;

  &:focus-within {
    outline: none;
  }
`;

export default function SearchPanel({ setSearchedData }) {
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("공연명");
  const [enableFetch, setEnableFetch] = useState(false);

  const searchInputOnChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchInputOnKeyUpHandler = (e) => {
    if (e.key === "Enter") {
      setEnableFetch(true);
    }
  };

  const filterInputOnChangeHandler = (e) => {
    setFilterInput(e.target.value);
  };

  const searchClickHandler = () => {
    setEnableFetch(true);
  };

  const fetchMapSearchData = () => {
    const params = {
      search: searchInput,
      filter: filterInput,
    };

    return axios.get(`${process.env.REACT_APP_SERVER_URI}/shows/maps`, {
      params,
    });
  };

  const fetchMapSearchDataOnSuccess = (res) => {
    setEnableFetch(false);
    setSearchedData(res.data.data);
  };

  useQuery({
    queryKey: ["searchMapData"],
    queryFn: fetchMapSearchData,
    enabled: enableFetch,
    onSuccess: fetchMapSearchDataOnSuccess,
  });

  return (
    <SearchPanelContainer>
      <div className="radio_group">
        <label htmlFor="title">공연명</label>
        <input
          onChange={filterInputOnChangeHandler}
          defaultChecked
          name="filter"
          id="title"
          type="radio"
          value="공연명"
        />
        <label htmlFor="artist">아티스트명</label>
        <input
          onChange={filterInputOnChangeHandler}
          name="filter"
          id="artist"
          type="radio"
          value="아티스트명"
        />
      </div>
      <SearchBarContainer>
        <SearchBarInput
          placeholder="검색어를 입력해주세요."
          value={searchInput}
          onChange={searchInputOnChangeHandler}
          onKeyUp={searchInputOnKeyUpHandler}
        />
        <div className="image_container">
          <svg
            width={15}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={searchClickHandler}
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </div>
      </SearchBarContainer>
    </SearchPanelContainer>
  );
}
