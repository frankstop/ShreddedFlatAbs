export default function Sidebar({ dayOrder, schedule, selectedDay, onSelectDay }) {
  return (
    <nav className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-mark">SFA</span>
        <span className="sidebar__brand-name">ShreddedFlatAbs</span>
      </div>
      <ul className="sidebar__list">
        {dayOrder.map((key) => {
          const d = schedule[key];
          const active = key === selectedDay;
          return (
            <li key={key}>
              <button
                className={`sidebar__item${active ? " sidebar__item--active" : ""}`}
                onClick={() => onSelectDay(key)}
              >
                <span className="sidebar__item-day">{d.day}</span>
                <span className="sidebar__item-title">{d.rest ? "Rest" : d.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
