import React from "react";

import styled from "styled-components";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { ko } from "date-fns/locale";

import { useTicketSearchStore } from "../../../store/useTicketSearchStore";

const DatePickerContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DateSelect() {
  const { setDate, getDateRange } = useTicketSearchStore((state) => state);

  const rangePickerHandler = (rangeInput) => {
    const [range] = rangeInput;
    setDate(range);
  };

  return (
    <DatePickerContainer>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => rangePickerHandler([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={getDateRange()}
        locale={ko}
        startDatePlaceholder="시작 날짜"
        endDatePlaceholder="종료 날짜"
      />
    </DatePickerContainer>
  );
}
