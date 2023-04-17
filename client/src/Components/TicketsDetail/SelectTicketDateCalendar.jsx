/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect, useRef, useMemo } from "react";

import {
  dtFontSize,
  primary,
  sub,
  misc,
  mbFontSize,
  secondary,
} from "../../styles/mixins";
import breakpoint from "../../styles/breakpoint";
import useTicketDataStore from "../../store/useTicketDataStore";

import styled from "styled-components";
import dayjs from "dayjs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoint.mobile}) {
    height: 300px;
  }
`;

const DateController = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${primary.primary200};
    font-size: ${dtFontSize.large};
    font-weight: 800;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.large};
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
      fill: ${primary.primary200};
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
  border-radius: 20px;
`;

const CalendarGrid = styled.div`
  display: grid;
  width: 100%;
  min-width: 250px;
  height: 25%;
  grid-template-columns: repeat(7, 14.265%);
  grid-template-rows: 1fr 0.2fr;

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.small};
    min-width: 0;
    max-width: 350px;
  }

  .item:nth-child(1) {
    color: ${primary.primary200};
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 1;
    /* background-color: ${primary.primary200}; */
    border-radius: 18px 18px 0 0;
  }

  .days {
    text-align: center;
    font-weight: 600;
    padding: 10px 0;
    color: ${primary.primary300};

    @media screen and (max-width: ${breakpoint.mobile}) {
      padding: 5px;
      font-size: ${mbFontSize.xsmall};
    }
  }
`;

const DateGrid = styled.div`
  width: 100%;
  min-width: 300px;
  height: 75%;
  display: grid;
  grid-template-columns: repeat(7, 14.285%);
  grid-template-rows: repeat(6, 1fr);

  @media screen and (max-width: ${breakpoint.mobile}) {
    max-width: 350px;
  }

  .date_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .date {
    text-align: center;
    width: 30px;
    height: 30px;
    padding: 5px;
    font-size: ${dtFontSize.small};
    color: ${sub.sub300};
    pointer-events: none;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xsmall};
      padding-top: 7px;
    }
  }

  .date.previous {
    color: ${sub.sub300};
    pointer-events: none;

    &.hasShow {
      color: ${sub.sub300};
      pointer-events: none;

      &.weekend {
        color: ${sub.sub300};
        pointer-events: none;
      }
    }
  }

  .date.hasShow {
    color: ${sub.sub500};
    cursor: pointer;
    pointer-events: stroke;

    &.weekend {
      color: ${misc.red};
      &.selected {
        color: white;
      }
    }

    &.selected {
      color: white;
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

export default function Calendar({ setReservationDate }) {
  const now = dayjs();
  const [daysArr, setDaysArr] = useState([]);
  const [selectedYear, setSelectedYear] = useState(now.year());
  const [selectedMonth, setSelectedMonth] = useState(now.month() + 1);
  const { ticketData, setTicketData } = useTicketDataStore((state) => state);
  const [selectedDay, setSelectedDay] = useState("");

  // 이전 달의 날짜의 갯수를 계산하여 공백을 추가해주는 함수
  const addPreviousMonthDays = (dateObj, daysArr) => {
    const yearAndMonth = `${dateObj.year()}-${dateObj.month() + 1}-`;
    const DOWofFirstDay = dayjs(yearAndMonth + "01").$W;
    if (DOWofFirstDay === 0) {
      return daysArr;
    } else {
      let lastMonthDaysArr = new Array(DOWofFirstDay).fill(0);
      daysArr = lastMonthDaysArr.concat(daysArr);
      return daysArr;
    }
  };

  // 달력 날짜를 데이터에 맞게 렌더링하는 함수
  useEffect(() => {
    const selected = dayjs()
      .set("year", selectedYear)
      .set("month", selectedMonth - 1);
    setReservationDate(now.format("YYYY-MM-DD"));
    let newDaysArr = new Array(
      dayjs()
        .set("year", selectedYear)
        .set("month", selectedMonth - 1)
        .daysInMonth()
    ).fill(1);
    newDaysArr.reduce((acc, current, index, arr) => {
      arr[index] = acc + 1;
      return acc + current;
    });
    newDaysArr = newDaysArr.map((day) => {
      return {
        day,
        dateInfo: `${selectedYear}-${
          selectedMonth <= 9 ? "0" + selectedMonth : selectedMonth
        }-${day <= 9 ? "0" + day : day}`,
      };
    });
    newDaysArr.forEach((day) => {
      if (
        new Date(day.dateInfo) >= new Date(ticketData.showAt) &&
        new Date(day.dateInfo) <= new Date(ticketData.expiredAt)
      ) {
        day.hasShow = true;
      } else {
        day.hasShow = false;
      }
      if (
        new Date(day.dateInfo).getDay() === 0 ||
        new Date(day.dateInfo).getDay() === 6
      ) {
        day.weekend = true;
      }
      if (now.format("YYYY-MM-DD") > day.dateInfo) {
        day.previous = true;
      }
    });
    newDaysArr = addPreviousMonthDays(selected, newDaysArr);
    setDaysArr(newDaysArr);
  }, [selectedMonth, selectedYear, ticketData]);

  //보고 있는 달에 공연이 있는지, 오늘과 공연 시작 날짜 중 어느 것이 우선인지, 보고 있는 달이 이번 달인지의 여부에 따라 selectedDay를 조작하는 함수
  useEffect(() => {
    let filteredArr = daysArr.filter((day) => day.hasShow === false);
    if (filteredArr.length >= 29) {
      setSelectedDay("");
    } else if (
      filteredArr.length < 29 &&
      now.format("YYYY-MM-DD") < ticketData.showAt
    ) {
      setSelectedDay(Number(ticketData.showAt.slice(8, 10)));
      setReservationDate(
        `${selectedYear}-${
          selectedMonth <= 9 ? "0" + selectedMonth : selectedMonth
        }-${
          Number(ticketData.showAt.slice(8, 10)) <= 9
            ? "0" + Number(ticketData.showAt.slice(8, 10))
            : Number(ticketData.showAt.slice(8, 10))
        }`
      );
    } else if (
      filteredArr.length < 29 &&
      now.format("YYYY-MM-DD") > ticketData.showAt &&
      selectedMonth - 1 === now.month()
    ) {
      setSelectedDay(now.date());
      setReservationDate(
        `${selectedYear}-${
          selectedMonth <= 9 ? "0" + selectedMonth : selectedMonth
        }-${now.date() <= 9 ? "0" + now.date() : now.date()}`
      );
    }
    if (filteredArr.length < 29 && selectedMonth - 1 !== now.month()) {
      setSelectedDay(1);
      setReservationDate(
        `${selectedYear}-${
          selectedMonth <= 9 ? "0" + selectedMonth : selectedMonth
        }-01`
      );
    }
  }, [daysArr]);

  const dateOnClickHandler = (e) => {
    const selected = parseInt(e.target.textContent);
    setSelectedDay(selected);
    setReservationDate(
      `${selectedYear}-${
        selectedMonth <= 9 ? "0" + selectedMonth : selectedMonth
      }-${selected <= 9 ? "0" + selected : selected}`
    );
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
        <DateGrid>
          {daysArr.map((day, index) => {
            return (
              <div className="date_container" key={index}>
                <p
                  tabIndex={0}
                  className={`${
                    selectedDay === day.day && !day.previous ? "selected" : ""
                  } date 
                ${day.previous ? "previous" : ""} 
                ${day.weekend ? "weekend" : ""}
                ${day.hasShow ? "hasShow" : ""}
                `}
                  onClick={dateOnClickHandler}
                >
                  {day.day}
                </p>
              </div>
            );
          })}
        </DateGrid>
      </CalendarFlex>
    </Container>
  );
}
