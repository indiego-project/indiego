/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect, useRef } from "react";

import {
  dtFontSize,
  primary,
  sub,
  misc,
  mbFontSize,
  secondary,
} from "../../../styles/mixins";
import breakpoint from "../../../styles/breakpoint";

import styled from "styled-components";
import dayjs from "dayjs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Spinner";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 80%;
    height: 100%;
  }
`;

const DateController = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${sub.sub300};
  border-width: 0 0 1px 0;

  p {
    color: white;
    font-weight: 600;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.small};
    }
  }

  svg {
    width: 15px;
    height: 15px;
    margin: 10px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 8px;
    }

    path {
      fill: white;
    }

    :hover {
      cursor: pointer;

      path {
        fill: ${primary.primary500};
      }
    }
  }
`;

const CalendarFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CalendarGrid = styled.div`
  display: grid;
  width: 100%;
  min-width: 300px;
  height: 25%;
  grid-template-columns: repeat(7, 14.265%);
  grid-template-rows: 1fr 0.2fr;

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.small};
    min-width: 0;
    max-width: 350px;
  }

  .item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 1;

    background-color: ${primary.primary200};
    border: 2px solid white;
    border-width: 0 0 1px 0;
    border-radius: 18px 18px 0 0;
  }

  .days {
    text-align: center;
    font-weight: 600;
    padding: 10px 0;
    color: white;
    background-color: ${primary.primary300};
    border: 1px solid white;
    border-width: 0 1px 0 0;

    @media screen and (max-width: ${breakpoint.mobile}) {
      padding: 5px;
      font-size: ${mbFontSize.xsmall};
    }
  }

  .days.last {
    border: 1px solid ${primary.primary300};
    border-width: 0 1px 0 0;
  }
`;

const DateGrid = styled.div`
  width: 100%;
  min-width: 300px;
  height: 100%;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(7, 14.285%);
  grid-template-rows: repeat(6, 1fr);
  border: 2px solid ${primary.primary100};
  border-radius: 0 0 20px 20px;
  border-width: 0 1.5px 1.5px 1.5px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    min-width: 0;
    height: 80%;
    grid-template-rows: repeat(6);
  }

  .date_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 100%;
      height: 100%;
    }

    .dot {
      position: absolute;
      top: 30px;
      font-size: 20px;
      font-weight: 800;
      color: ${misc.orange};
      pointer-events: none;

      @media screen and (max-width: ${breakpoint.mobile}) {
        top: 2px;
      }
    }
  }

  .date {
    text-align: center;
    width: 30px;
    height: 30px;
    padding: 5px;
    font-size: ${dtFontSize.small};

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xsmall};
      padding-top: 3px;
      width: 20px;
      height: 20px;

      :hover ~ .dot {
        color: white;
      }

      :focus-within ~ .dot {
        color: white;
      }
    }

    :hover {
      background-color: ${primary.primary300};
      color: white;
      border-radius: 100%;
      cursor: pointer;
    }

    :focus-within {
      background-color: ${primary.primary300};
      color: white;
      border-radius: 100%;
    }
  }

  .date.previous {
    color: ${sub.sub300};
    pointer-events: none;

    :hover {
      color: white;
    }
  }

  .date.selected.weekend {
    color: white;
  }

  .date.weekend {
    color: ${misc.red};

    :hover {
      color: white;
    }

    :focus-within {
      color: white;
    }
  }

  p.selected {
    background-color: ${primary.primary300};
    color: white;
    border-radius: 100%;
  }
`;

const SpinnerExtended = styled(Spinner)`
  position: absolute;
  left: 45%;
  top: 40%;
`;

export default function Calendar({ setSelectedDate, setDateInfo }) {
  const now = dayjs();
  const [daysArr, setDaysArr] = useState([]);
  const [selectedYear, setSelectedYear] = useState(now.year());
  const [selectedMonth, setSelectedMonth] = useState(now.month() + 1);
  const [selectedDay, setSelectedDay] = useState(now.date());
  const [hasShow, setHasShow] = useState();

  const serverURI = process.env.REACT_APP_SERVER_URI;

  const fetchHasShowArr = () => {
    return axios.get(`${serverURI}/shows/marker`, {
      params: { year: selectedYear, month: selectedMonth, day: selectedDay },
    });
  };

  const fetchHasShowArrOnSuccess = (response) => {
    let data = response.data.data;
    setHasShow(data);
  };

  const { refetch: refetchHasShowArr } = useQuery({
    queryKey: ["fetchHasShowArr", selectedYear, selectedMonth],
    queryFn: fetchHasShowArr,
    onSuccess: fetchHasShowArrOnSuccess,
    enabled: !!selectedMonth,
  });

  // 이전 날짜를 계산해서 추가해주는 함수
  const addPreviousMonthDays = (dateObj, daysArr) => {
    const yearAndDate = `${dateObj.year()}-${dateObj.month() + 1}-`;
    const DOWofFirstDay = dayjs(yearAndDate + "01").$W;
    if (DOWofFirstDay === 0) {
      return daysArr;
    } else {
      const lastMonthDays = dayjs(
        `${dateObj.year()}${dateObj.month() - 1}${dateObj.date()}`
      ).daysInMonth();

      let lastMonthDaysArr = new Array(DOWofFirstDay).fill(0);
      lastMonthDaysArr.reduce((acc, cur, index, arr) => {
        arr[index] = acc;
        return acc - 1;
      }, lastMonthDays);
      lastMonthDaysArr.reverse();
      lastMonthDaysArr = lastMonthDaysArr.map((day) => {
        return { day, previous: true };
      });
      daysArr = lastMonthDaysArr.concat(daysArr);
      return daysArr;
    }
  };

  // 달력 날짜를 데이터에 맞게 렌더링하는 함수
  useEffect(() => {
    const selected = dayjs()
      .set("year", selectedYear)
      .set("month", selectedMonth - 1)
      .set("date", selectedDay);
    if (!hasShow) {
      setSelectedDate(now.format("YYYY년 MM월 DD일"));
      setDateInfo({
        year: selected.year(),
        month: selected.month() + 1,
        day: selected.date(),
      });
    } else {
      let newDaysArr = new Array(selected.daysInMonth()).fill(1);
      newDaysArr.reduce((acc, current, index, arr) => {
        arr[index] = acc + 1;
        return acc + current;
      });
      newDaysArr = newDaysArr.map((day) => {
        if (hasShow.indexOf(day) !== -1) {
          return { day, hasShow: true };
        } else {
          return { day, hasShow: false };
        }
      });
      newDaysArr.forEach((day) => {
        const whatDay = selected.date(day.day).$W;
        if (whatDay === 0 || whatDay === 6) {
          day.weekend = true;
        }
      });
      newDaysArr = addPreviousMonthDays(selected, newDaysArr);
      setDaysArr(newDaysArr);
    }
  }, [hasShow]);

  // 월과 년도가 변경되면 hasShow를 다시 불러오며, 관련 상태를 업데이트 해주는 함수
  useEffect(() => {
    const currentMonthDays = dayjs()
      .set("year", selectedYear)
      .set("month", selectedMonth - 1)
      .daysInMonth();

    if (selectedDay > currentMonthDays) {
      setSelectedDay(currentMonthDays);
      setSelectedDate(
        `${selectedYear}년 ${selectedMonth}월 ${currentMonthDays}일`
      );
      setDateInfo({
        year: selectedYear,
        month: selectedMonth,
        day: currentMonthDays,
      });
      refetchHasShowArr();
    } else {
      setSelectedDate(`${selectedYear}년 ${selectedMonth}월 ${selectedDay}일`);
      setDateInfo({
        year: selectedYear,
        month: selectedMonth,
        day: selectedDay,
      });
      refetchHasShowArr();
    }
  }, [selectedMonth, selectedYear]);

  const dateOnClickHandler = (e) => {
    const selected = parseInt(e.target.textContent);
    setSelectedDay(selected);
    setSelectedDate(`${selectedYear}년 ${selectedMonth}월 ${selected}일`);
    setDateInfo({
      year: selectedYear,
      month: selectedMonth,
      day: selected,
    });
  };

  const monthSelectorOnClickHandler = (num) => {
    if (selectedMonth <= 1 && num === -1) {
      setSelectedYear(selectedYear - 1);
      setSelectedMonth(12);
    } else if (selectedMonth >= 11 && num === 1) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(1);
    } else {
      setSelectedMonth(selectedMonth + num);
    }
  };

  return (
    <Container>
      <CalendarFlex>
        <CalendarGrid>
          <DateController className="item">
            <svg
              onClick={() => {
                monthSelectorOnClickHandler(-1);
              }}
              viewBox="0 0 384 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
            <p>{`${selectedYear}년 ${selectedMonth}월`}</p>
            <svg
              onClick={() => {
                monthSelectorOnClickHandler(1);
              }}
              viewBox="0 0 384 512"
            >
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </DateController>
          <p className="item days">일</p>
          <p className="item days">월</p>
          <p className="item days">화</p>
          <p className="item days">수</p>
          <p className="item days">목</p>
          <p className="item days">금</p>
          <p className="item days last">토</p>
        </CalendarGrid>
        {!hasShow ? (
          <SpinnerExtended />
        ) : (
          <DateGrid>
            {daysArr.map((day, index) => {
              console.log(selectedDay, day.day);
              return (
                <div className="date_container" key={index}>
                  <p
                    tabIndex={0}
                    className={`${
                      selectedDay === day.day && !day.previous ? "selected" : ""
                    } date 
                  ${day.previous ? "previous" : ""} 
                  ${day.weekend ? "weekend" : ""}
                  `}
                    onClick={dateOnClickHandler}
                  >
                    {day.day}
                  </p>
                  {day.hasShow && <p className="dot">.</p>}
                </div>
              );
            })}
          </DateGrid>
        )}
      </CalendarFlex>
    </Container>
  );
}
