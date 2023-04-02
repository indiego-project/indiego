/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useEffect } from "react";

import ItemList from "../../Components/Ticktes/ItemList.jsx";
import SearchBar, {
  SearchBarContainer,
} from "../../Components/Main/SearchBar.jsx";
import PageNation from "../../Components/Board/BoardList/PageNation.jsx";

import breakpoint from "../../styles/breakpoint";
import { primary, sub, dtFontSize, mbFontSize } from "../../styles/mixins";
import "../../styles/ReactDatePicker.css";

import styled from "styled-components";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Spinner.jsx";
import DetailSearch from "../../Components/Ticktes/DetailSearch.jsx";

import { useAnimation } from "../../utils/useAnimation.js";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

const ContentHeaderContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: max-content;
  align-items: space-between;
  min-height: 100px;
  padding: 30px 47px;
  width: 90%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    min-height: 100px;
    padding: 20px 5.13%;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
    height: 100%;
  }
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    all: unset;
    color: ${primary.primary500};
    font-size: ${dtFontSize.xxlarge};
    font-weight: 700;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xlarge};
    }
  }

  > h2 {
    all: unset;
    color: ${sub.sub400};
    font-size: ${dtFontSize.medium};
    font-weight: 400;
    margin: 5px 0 0 0;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

const SearchBarTickets = styled(SearchBar)`
  @media screen and (max-width: ${breakpoint.mobile}) {
    display: flex;
  }
`;

const SearchBarOuterContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  .filter_icon {
    border: 1px solid ${sub.sub300};
    padding: 5px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-left: 5px;

    svg {
      width: 15px;
      height: 15px;
    }

    path {
      fill: ${sub.sub300};
    }
  }
`;

const ItemListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

const SpinnerExtended = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;

  .lds-dual-ring:after {
    border: 6px solid ${primary.primary300};
    border-color: ${primary.primary300} transparent ${primary.primary300}
      transparent;
  }
`;

const PaginationExtended = styled(PageNation)`
  margin-top: 50px;

  .movePageButton {
    :hover {
      cursor: pointer;
      background-color: ${primary.primary300};
    }
  }
`;

export default function Tickets() {
  const [searchParams] = useSearchParams();
  const queryParams = [...searchParams.entries()];
  const location = useLocation();
  const [searchURI, setSearchURI] = useState(location.pathname + "?");
  const [pageInfo, setPageInfo] = useState([]);
  const [data, setData] = useState([]);
  const [detailSearchOpen, setDetailSearchOpen] = useState(false);
  const [shouldRender, trigger, handleTransition] =
    useAnimation(detailSearchOpen);

  // url 에서 params를 빼와 공연데이터를 fetch
  const fetchShowData = () => {
    const params = {};

    queryParams.forEach((queryArr) => {
      params[queryArr[0]] = queryArr[1];
    });

    return axios.get(`${process.env.REACT_APP_SERVER_URI}/shows`, {
      params,
    });
  };

  const fetchShowDataOnSuccess = (response) => {
    const data = response.data;
    setData(data.data);
    setPageInfo(data.pageInfo);
  };

  const { isLoading, refetch } = useQuery({
    queryKey: ["fetchShowData"],
    queryFn: fetchShowData,
    onSuccess: fetchShowDataOnSuccess,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const detailSearchOpenHandler = () => {
    window.scrollTo(0, 0);
    setDetailSearchOpen(true);
    const body = document.querySelector("body");
    body.classList.add("modal_open");
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   let newSearchURI = location.pathname + "?";
  //   queryParams.forEach((paramArr) => {
  //     const queryKey = paramArr[0];
  //     const queryVal = paramArr[1];

  //     if (queryKey !== "page") {
  //       newSearchURI += queryKey + "=" + queryVal + "&";
  //     }
  //   });
  //   setSearchURI(newSearchURI);
  //   refetch();
  // }, [searchParams]);

  return (
    <Container>
      {shouldRender && (
        <DetailSearch
          closeModal={setDetailSearchOpen}
          trigger={trigger}
          handleTransition={handleTransition}
        />
      )}
      <ContentHeaderContainer>
        <HeaderTitleContainer>
          <h1>공연 검색</h1>
          <h2>찾고자 하는 공연이 열리는 지역과 기간, 공연명을 입력하세요.</h2>
        </HeaderTitleContainer>
      </ContentHeaderContainer>
      <ContentContainer>
        <SearchBarOuterContainer>
          <SearchBarTickets navigateTo="/tickets">
            <div
              className="filter_icon"
              onClick={detailSearchOpenHandler}
              role="button"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
              </svg>
            </div>
          </SearchBarTickets>
        </SearchBarOuterContainer>
        {isLoading ? (
          <SpinnerExtended
            searchURI={searchURI}
            setSearchURI={setSearchURI}
            refetch={refetch}
          />
        ) : (
          <ItemListContainer>
            <ItemList data={data} />
          </ItemListContainer>
        )}
      </ContentContainer>
      {pageInfo.totalPages > 0 && (
        <PaginationExtended location={searchURI} pageData={pageInfo} />
      )}
    </Container>
  );
}
