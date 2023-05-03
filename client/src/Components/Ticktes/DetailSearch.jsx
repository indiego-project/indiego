/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { dtFontSize, primary, sub } from "../../styles/mixins";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import DateSelect from "./SearchOptions/DateSelect";
import LocationSelect from "./SearchOptions/LocationSelect";
import CategorySelect from "./SearchOptions/CategorySelect";

import { useTicketSearchStore } from "../../store/useTicketSearchStore";
import breakpoint from "../../styles/breakpoint";
import TagSelect from "./Create/TagSelect";

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: ${sub.sub800 + "A5"};
  opacity: ${(props) => (props.trigger ? 1 : 0)};

  transition: opacity 0.3s;
`;

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 650px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    position: absolute;
    top: 10px;
    height: 85%;
  }
`;

const SearchPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54%;
  height: 88%;
  border-radius: 20px;
  background-color: white;
  transform: ${(props) =>
    props.trigger ? "translateY(0px)" : "translateY(500px)"};
  transition: transform 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  box-shadow: 0px 5px 10px 10px rgba(0, 0, 0, 0.2);

  .panel.header {
    display: flex;
    width: 100%;
    height: 10%;
    border-radius: 20px 20px 0 0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${sub.sub200};

    .close_button {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 10px;
      top: 3px;
      padding: 5px;
      border: none;
      border-radius: 20px;
      background-color: transparent;
      margin-top: 20px;
      font-weight: 600;
      font-size: ${dtFontSize.medium};

      @media screen and (max-width: ${breakpoint.mobile}) {
        top: -12px;
        color: ${sub.sub400};
      }

      :hover {
        cursor: pointer;
        background-color: ${sub.sub200};
      }
    }

    p {
      font-weight: 700;
    }
  }

  .panel.footer {
    height: 15%;
    border-radius: 0 0 20px 20px;
    border-top: 1px solid ${sub.sub200};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    p {
      font-weight: 600;
      text-decoration: underline;
      padding: 10px;
      border-radius: 10px;

      :hover {
        cursor: pointer;
        background-color: ${sub.sub200};
      }
    }

    button {
      background-color: ${primary.primary300};
      color: white;
      border: none;
      padding: 20px 40px;
      border-radius: 10px;
      font-size: ${dtFontSize.medium};

      :hover {
        cursor: pointer;
        background-color: ${primary.primary400};
      }
    }
  }

  .options_container {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    width: 100%;
    height: 80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: max-content;
    min-height: 300px; //develop only
    margin-top: 30px;
    padding: 0 25px;

    ::after {
      content: "";
      width: 100%;
      border-bottom: 1px solid ${sub.sub200};
    }

    .header {
      font-size: ${dtFontSize.large};
      font-weight: 500;
    }

    .contents {
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;

      .description {
        margin-top: 10px;
        color: ${sub.sub500};
        font-size: ${dtFontSize.medium};
      }
    }
  }
`;

const TagSelectStyleExtended = styled(TagSelect)`
  .title {
    display: none;
  }

  .description {
    color: ${sub.sub500};
  }
`;

export default function DetailSearch({
  closeModal,
  trigger,
  handleTransition,
}) {
  const { resetSearchParams, getSearchUrl, setAllParams, searchParams } =
    useTicketSearchStore((state) => state);

  const paramsCopy = useRef(
    JSON.parse(
      JSON.stringify(useTicketSearchStore((state) => state.searchParams))
    )
  );

  const closeButtonHandler = () => {
    const body = document.querySelector("body");
    body.classList.remove("modal_open");
    setAllParams(paramsCopy.current);
    closeModal(false);
  };
  const removeFilterHandler = () => {
    const body = document.querySelector("body");
    body.classList.remove("modal_open");
    resetSearchParams();
    closeModal(false);
  };

  const filterApplyHandler = () => {
    window.location.replace(getSearchUrl());
  };

  return (
    <Overlay trigger={trigger} onTransitionEnd={handleTransition}>
      <OuterContainer>
        <SearchPanelContainer trigger={trigger}>
          <div className="panel header">
            <button className="close_button" onClick={closeButtonHandler}>
              X
            </button>
            <p>상세 검색 필터</p>
          </div>
          <div className="options_container">
            <div className="date container">
              <p className="date header">공연 날짜 선택</p>
              <div className="date contents">
                <p className="date description">
                  공연 시작 날짜와 종료 날짜를 선택해주세요.
                </p>
                <DateSelect />
              </div>
            </div>
            <div className="location container">
              <p className="location header">공연 지역 선택</p>
              <div className="location contents">
                <p className="location description">
                  공연 지역은 현재 서울로 제한됩니다.
                </p>
                <LocationSelect />
              </div>
            </div>
            <div className="category container">
              <p className="category header">공연 카테고리 선택</p>
              <div className="category contents">
                <p className="category description">
                  공연 카테고리를 선택합니다.
                </p>
                <CategorySelect />
              </div>
            </div>
            {/* <div className="tag container">
              <p className="tag header">공연 태그 선택</p>
              <TagSelectStyleExtended />
            </div> */}
          </div>
          <div className="panel footer">
            <p onClick={removeFilterHandler}>필터 해제</p>
            <button onClick={filterApplyHandler}>전체 적용</button>
          </div>
        </SearchPanelContainer>
      </OuterContainer>
    </Overlay>
  );
}
