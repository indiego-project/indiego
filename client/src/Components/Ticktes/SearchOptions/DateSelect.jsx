import React, { useState } from "react";

import styled from "styled-components";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { ko } from "date-fns/locale";

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
  const defaultRange = [
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ];

  const [selectionRange, setSelectionRange] = useState(defaultRange);

  return (
    <DatePickerContainer>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setSelectionRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={selectionRange}
        locale={ko}
      />
    </DatePickerContainer>
  );
}
