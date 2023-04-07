import React from "react";

import styled from "styled-components";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { ko } from "date-fns/locale";
import { primary } from "../../../styles/mixins";
import breakpoint from "../../../styles/breakpoint";

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

const StyledDateRange = styled(DateRange)`
  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 300px;

    .rdrDays {
      width: 300px;
    }
  }
`;

export default function DateSelect() {
  const { setDate, getDateRange } = useTicketSearchStore((state) => state);

  const rangePickerHandler = (rangeInput) => {
    const [range] = rangeInput;
    setDate(range);
  };

  return (
    <DatePickerContainer>
      <StyledDateRange
        editableDateInputs={true}
        onChange={(item) => rangePickerHandler([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={getDateRange()}
        locale={ko}
        startDatePlaceholder="시작 날짜"
        endDatePlaceholder="종료 날짜"
        rangeColors={[primary.primary200]}
        scroll={{ enabled: true }}
      />
    </DatePickerContainer>
  );
}
