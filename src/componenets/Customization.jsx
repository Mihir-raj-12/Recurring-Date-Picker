import React from "react";

const Customization = ({ recurrence, customization, onCustomize }) => {
  const dayOptions = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleIntervalChange = (e) => {
    const newInterval = parseInt(e.target.value, 10) || 1; // Ensure the value is a number
    onCustomize({ ...customization, interval: newInterval });
  };

  const handleDaySelection = (day) => {
    const updatedDays = customization.days.includes(day)
      ? customization.days.filter((d) => d !== day)
      : [...customization.days, day];
    onCustomize({ ...customization, days: updatedDays });
  };

  if (recurrence === "None") return null;

  return (
    <div>
      <h4>Customize Recurrence</h4>

      <label htmlFor="interval-input">Every</label>
      <input
        id="interval-input"
        type="number"
        value={customization.interval}
        onChange={handleIntervalChange}
        min="1"
      />
      {recurrence === "Daily" ? " days" : ""}
      {recurrence === "Weekly" ? " weeks" : ""}
      {recurrence === "Monthly" ? " months" : ""}
      {recurrence === "Yearly" ? " years" : ""}

      {recurrence === "Weekly" && (
        <div>
          <h5>Select Days</h5>
          {dayOptions.map((day) => (
            <label key={day} htmlFor={`day-${day}`}>
              <input
                id={`day-${day}`}
                type="checkbox"
                checked={customization.days.includes(day)}
                onChange={() => handleDaySelection(day)}
              />
              {day}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Customization;
