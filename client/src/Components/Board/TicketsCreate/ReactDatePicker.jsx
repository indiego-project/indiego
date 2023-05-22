import React, { useState, forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./ReactDatePicker.css";

const ReactDatePicker = ({ date, setDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const offset = 1000 * 60 * 60 * 9;
  const startDatewithOffset = new Date(startDate.getTime() + offset);
  useEffect(() => {
    setDate(
      startDatewithOffset
        .toISOString()
        .replace("T", " ")
        .split(".")[0]
        .substring(0, 10)
    );
  }, [startDate]);

  useEffect(() => {
    if (!date) {
      setStartDate(new Date());
    }
  }, [date]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={(selectedDate) => {
          setStartDate(selectedDate);
        }}
        dateFormat="yyyy년 MM월 dd일"
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default ReactDatePicker;
