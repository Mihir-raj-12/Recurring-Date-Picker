import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const DatePickerComponent = ({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
}) => {
  return (
    <div className="datePick">
      <h3>Select Start Date</h3>
      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        id="start-date"
        selected={startDate}
        onChange={onStartChange}
        placeholderText="Click to select a start date"
        dateFormat="dd/MM/yyyy"
      />

      <h3>Select End Date (optional)</h3>
      <label htmlFor="end-date">End Date</label>
      <DatePicker
        id="end-date"
        selected={endDate}
        onChange={onEndChange}
        minDate={startDate}
        placeholderText="Click to select an end date"
        dateFormat="dd/MM/yyyy"
        isClearable 
      />
    </div>
  );
};

export default DatePickerComponent;
