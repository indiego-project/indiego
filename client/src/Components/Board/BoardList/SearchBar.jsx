import styled from "styled-components";
import React, { useState } from "react";
import { primary, sub } from "../../../styles/mixins";
import search from "../../../assets/search.svg";
import axios from "axios";
import useBoardListStore from "../../../store/useBoardListStore";
import { useSearchParams } from "react-router-dom";

const SearchBarDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  .aSearchBarDiv {
    width: 500px;
    border: 3px solid ${sub.sub500};
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding-right: 9px;

    .searchBarInput {
      width: 100%;
      border-radius: 20px;
      padding: 10px;
      height: 40px;
      border: none;

      &:focus-within {
        outline: none;
      }
    }

    .searchImage {
      width: 17px;
      height: 17px;
    }
    &:focus-within {
      border: 3px solid ${primary.primary200};
    }
  }

  .listButton {
    background-color: blue;
  }
`;
const SearchBar = ({ location, placeholder, setPageData }) => {
  const [value, setValue] = useState("");
  const { setBoardListData } = useBoardListStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePage();
    }
  };

  const handlePage = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URI}/articles?${location}search=${value}
      `
    );
    setBoardListData(response.data.data);
    setPageData(response.data.pageInfo);
    searchParams.set("search", value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);

    window.scrollTo(0, 0);
  };

  return (
    <SearchBarDiv>
      <div className="aSearchBarDiv">
        <input
          className="searchBarInput"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDown}
        />
        <img className="searchImage" src={search} alt="돋보기"></img>
      </div>
    </SearchBarDiv>
  );
};

export default SearchBar;
