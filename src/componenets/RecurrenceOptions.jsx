import React from "react";

const recurrenceOptions = ["None", "Daily", "Weekly", "Monthly", "Yearly"];

const RecurrenceOptions = ({ recurrence, onRecurrenceChange }) => {
  return (
    <div>
      <h3>Select Recurrence</h3>
      <label htmlFor="recurrence-select">Recurrence</label>
      <select
        id="recurrence-select"
        value={recurrence}
        onChange={(e) => onRecurrenceChange(e.target.value)}
      >
        {recurrenceOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecurrenceOptions;
