import React, { useState, useEffect } from "react";
import DatePickerComponent from "./DatePicker";
import RecurrenceOptions from "./RecurrenceOptions";
import Customization from "./Customization";
import CalendarPreview from "./CalendarPreview";
import { addDays, addWeeks, addMonths, addYears, isBefore } from "date-fns";

// Utility function to generate recurrence dates
const generateRecurringDates = (
  startDate,
  endDate,
  recurrence,
  customization
) => {
  const dates = [];
  let currentDate = startDate;
  const interval = customization.interval || 1;

  while (
    !endDate ||
    isBefore(currentDate, endDate) ||
    currentDate.getTime() === endDate.getTime()
  ) {
    // Push current date before modifying
    dates.push(currentDate);

    switch (recurrence) {
      case "Daily":
        currentDate = addDays(currentDate, interval);
        break;
      case "Weekly":
        if (customization.days && customization.days.length > 0) {
          customization.days.forEach((day) => {
            const dayOffset = (day - currentDate.getDay() + 7) % 7;
            const nextDay = addDays(currentDate, dayOffset);
            if (!endDate || isBefore(nextDay, endDate)) {
              dates.push(nextDay);
            }
          });
        }
        currentDate = addWeeks(currentDate, interval);
        break;
      case "Monthly":
        currentDate = addMonths(currentDate, interval);
        break;
      case "Yearly":
        currentDate = addYears(currentDate, interval);
        break;
      default:
        break;
    }

    if (!endDate && dates.length > 365) break;
  }

  return dates;
};

const RecurringDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState("None");
  const [customization, setCustomization] = useState({ interval: 1, days: [] });
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    if (startDate && recurrence !== "None") {
      const dates = generateRecurringDates(
        startDate,
        endDate,
        recurrence,
        customization
      );
      setSelectedDates(dates);
    }
  }, [startDate, endDate, recurrence, customization]);

  return (
    <div>
      <DatePickerComponent
        startDate={startDate}
        endDate={endDate}
        onStartChange={setStartDate}
        onEndChange={setEndDate}
      />

      <RecurrenceOptions
        recurrence={recurrence}
        onRecurrenceChange={(recurrenceType) => {
          setCustomization({ interval: 1, days: [] });
          setRecurrence(recurrenceType);
        }}
      />

      <Customization
        recurrence={recurrence}
        customization={customization}
        onCustomize={setCustomization}
      />

      <CalendarPreview selectedDates={selectedDates} />
    </div>
  );
};

export default RecurringDatePicker;
