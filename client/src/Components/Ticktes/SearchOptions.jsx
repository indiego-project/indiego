/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";

import Button from "../Main/Button.jsx";
import Overlay from "../../Components/Main/Popups/Overlay.jsx";
import SeoulMap from "../../Components/Main/Popups/SeoulMap.jsx";
import SearchBar from "../Main/SearchBar.jsx";

import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { useSearchParams, useLocation } from "react-router-dom";

import { primary, secondary, dtFontSize, sub } from "../../styles/mixins";
import breakpoint from "../../styles/breakpoint";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

const SelectorContainer = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
  justify-content: center;

  .selector_group {
    display: flex;
    height: max-content;
    align-items: center;
    width: max-content;
    height: 100%;
    margin-left: 10px;
  }

  label {
    margin-right: 5px;
    font-weight: 600;
    color: ${primary.primary500};

    :hover {
      cursor: pointer;
    }
  }

  input {
    :hover {
      cursor: pointer;
    }
  }

  .mobile_top_selector_group {
    display: flex;
    align-items: center;
  }

  .dash {
    margin: 0 5px;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SelectDateContainer = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  justify-content: center;
  align-items: center;
`;

const DatePickerContainer = styled.div`
  width: max-content;
  height: 30px;
  font-weight: 800;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0 5px;
  background-color: ${primary.primary300};

  svg {
    margin: 0 5px;

    path {
      fill: white;
    }
  }

  :focus-within {
    outline: 1px solid ${primary.primary300};
    background-color: ${secondary.secondary400};
  }

  :hover {
    background-color: ${secondary.secondary400};
    cursor: pointer;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 80px;
  border-radius: 20px;
  background-color: transparent;
  border: none;
  font-weight: 600;
  color: white;
  margin-left: 3px;

  :focus-within {
    outline: none;
  }
`;

const ButtonExtended = styled(Button)`
  width: max-content;
  min-width: 120px;
  height: max-content;

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin-left: 0;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
`;

const LocationPopupContainer = styled.div`
  width: 80%;
  height: max-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  h1 {
    font-size: ${dtFontSize.xlarge};
    text-align: center;
    color: ${sub.sub800};
    margin-top: 10px;
  }

  .location {
    font-weight: 600;
  }

  .location_indicator_container {
    display: flex;
    align-items: center;
  }

  span {
    font-weight: 600;
    color: ${primary.primary300};
  }

  .reset_location {
    background-color: ${primary.primary300};
    padding: 5px;
    border-radius: 20px;
    color: white;
    margin-left: 10px;
    font-size: ${dtFontSize.small};

    :hover {
      cursor: pointer;
      background-color: ${secondary.secondary500};
    }
  }
`;

const CloseButton = styled.button`
  width: 30%;
  max-width: 180px;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid ${sub.sub800};
  color: ${sub.sub800};
  margin: 10px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: ${primary.primary300};
    color: white;
    border-color: ${primary.primary300};
  }
`;

const SearchBarMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SearchBarExtended = styled(SearchBar)`
  width: 100%;
  justify-content: flex-start;
  padding: 0 10px;
  margin-top: 10px;
  max-width: 700px;

  .input_container {
    width: 80%;
  }

  .option_container {
    width: 20%;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    display: flex;
    width: 90%;
  }
`;

const DateResetButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: ${primary.primary300};
  color: white;
  padding: 7px;
  margin: 0 7px;
  font-weight: 600;

  :hover {
    background-color: ${secondary.secondary400};
    cursor: pointer;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    margin: 10px 0;
  }
`;

export default function SearchOptions({ searchURI, setSearchURI }) {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("전체");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [popupOpen, setPopupOpen] = useState(false);
  const [dateSelectActive, setDateSelectActive] = useState(false);
  const currentURL = useLocation();

  const [searchParams] = useSearchParams();
  const queryParams = [...searchParams.entries()];

  const additionalParams = [
    dateSelectActive && ["start", `${startDate.toISOString().split("T")[0]}`],
    dateSelectActive && ["end", `${endDate.toISOString().split("T")[0]}`],
    location && ["address", location],
    ["category", category],
  ];

  useEffect(() => {
    if (endDate < startDate) {
      window.alert(
        "올바른 날짜 형식이 아닙니다. 시작 날짜와 끝 날짜를 확인해주세요."
      );
      setStartDate(new Date());
      setEndDate(new Date());
    }
  }, [endDate, startDate]);

  useEffect(() => {
    let newSearchURI = currentURL.pathname + "?";
    let newQueryParams = [];
    if (queryParams.length > 0) {
      newQueryParams = newQueryParams.concat(queryParams.slice(0, 2));
    }
    additionalParams.forEach((param) => {
      if (param) {
        newQueryParams.push(param);
      }
    });
    newQueryParams.forEach((param) => {
      if (param) {
        const queryKey = param[0];
        const queryVal = param[1];
        newSearchURI += queryKey + "=" + queryVal + "&";
      }
    });
    setSearchURI(newSearchURI);
  }, [location, category, startDate, endDate]);

  const locationPopupClickHandler = (e) => {
    const address = JSON.parse(e.target.attributes.value.value).address;
    setLocation(address);
  };

  const locationButtonClickHandler = () => {
    setPopupOpen(true);
  };

  const radioButtonOnChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const dateResetOnClickHandler = () => {
    setDateSelectActive(false);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  return (
    <Container>
      <SelectorContainer>
        {popupOpen && (
          <Overlay>
            <LocationPopupContainer>
              <h1>검색할 지역 선택하기</h1>
              <SeoulMap clickHandler={locationPopupClickHandler} />
              <div className="location_indicator_container">
                <p className="location">
                  선택한 위치 : <span>{location ? location : "없음"}</span>
                </p>
                <p
                  className="reset_location"
                  onClick={() => {
                    setLocation("");
                  }}
                >
                  초기화
                </p>
              </div>
              <CloseButton
                onClick={() => {
                  setPopupOpen(false);
                }}
              >
                닫기
              </CloseButton>
            </LocationPopupContainer>
          </Overlay>
        )}
        <DateResetButton onClick={dateResetOnClickHandler}>
          날짜 초기화
        </DateResetButton>
        <SelectDateContainer>
          <DatePickerContainer>
            {/* calander 아이콘 */}
            <svg
              width={15}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
            </svg>
            <StyledDatePicker
              selected={startDate}
              onChange={(startDate) => {
                setStartDate(startDate);
              }}
              dateFormat="yyyy-MM-dd"
              locale={ko}
              value={dateSelectActive ? startDate : "시작날짜 선택"}
              onCalendarOpen={() => {
                setDateSelectActive(true);
              }}
            />
          </DatePickerContainer>
          <svg className="dash" width={10} viewBox="0 0 448 512">
            <path
              fill={primary.primary300}
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
          <DatePickerContainer>
            {/* calander 아이콘 */}
            <svg
              width={15}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
            </svg>
            <StyledDatePicker
              selected={endDate}
              onChange={(endDate) => {
                setEndDate(endDate);
              }}
              dateFormat="yyyy-MM-dd"
              value={dateSelectActive ? startDate : "끝 날짜 선택"}
              onCalendarOpen={() => {
                setDateSelectActive(true);
              }}
              locale={ko}
            />
          </DatePickerContainer>
        </SelectDateContainer>
        <div className="mobile_top_selector_group">
          <ButtonExtended clickEvent={locationButtonClickHandler}>
            {location ? location : "없음"}
          </ButtonExtended>
          <RadioGroup>
            <div className="selector_group">
              <label htmlFor="all">전체</label>
              <input
                defaultChecked
                id="all"
                name="category"
                type="radio"
                value="전체"
                onChange={radioButtonOnChangeHandler}
              />
            </div>
            <div className="selector_group">
              <label htmlFor="music">음악</label>
              <input
                id="music"
                name="category"
                type="radio"
                value="음악"
                onChange={radioButtonOnChangeHandler}
              />
            </div>
            <div className="selector_group">
              <label htmlFor="play">연극</label>
              <input
                id="play"
                name="category"
                type="radio"
                value="연극"
                onChange={radioButtonOnChangeHandler}
              />
            </div>
          </RadioGroup>
        </div>
      </SelectorContainer>
      <SearchBarMainContainer>
        <SearchBarExtended
          navigateTo="/tickets"
          fetchMode={false}
          defaultValue={searchParams.get("search") || ""}
          additionalParams={additionalParams}
        />
      </SearchBarMainContainer>
    </Container>
  );
}
