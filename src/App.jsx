import "./App.css";
import CalendarPreview from "./componenets/CalendarPreview";
import RecurringDatePicker from "./componenets/RecurringDatePicker";
import { useState } from "react";

function App() {
  const [selectedDates, setSelectedDates] = useState([]);

  return (
    <div className="container">
      <RecurringDatePicker setSelectedDates={setSelectedDates} />
      <CalendarPreview selectedDates={selectedDates} />
    </div>
  );
}

export default App;
