function Sidebar({ selectedDay, onDaySelect }) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="sidebar">
      <h2>Days</h2>

      <ul>
        {daysOfWeek.map((day) => (
          <li key={day} onClick={() => onDaySelect(day)}>
            <button id="day-btn">{day}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
