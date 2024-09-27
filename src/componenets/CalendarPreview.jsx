import React from "react";
import { format } from "date-fns";

const CalendarPreview = ({ selectedDates = [] }) => {
  if (selectedDates.length === 0) {
  }

  return (
    <div>
      <div>
        {selectedDates.map((date) => (
          <p key={format(date, "dd-MM-yyyy")}>{format(date, "dd-MM-yyyy")}</p>
        ))}
      </div>
    </div>
  );
};

export default CalendarPreview;
