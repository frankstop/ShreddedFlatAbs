import TrackRow from "./TrackRow";

export default function DayView({ groups, exercises, currentIndex, onSelectTrack }) {
  return (
    <div className="day-view">
      {groups.map((group) => (
        <section key={group.name} className="day-view__section">
          <h3 className="day-view__section-title">
            {group.name}
            {group.rounds ? (
              <span className="day-view__rounds"> × {group.rounds}</span>
            ) : null}
          </h3>
          <div className="day-view__tracks">
            {group.items.map((track) => (
              <TrackRow
                key={track.index}
                track={track}
                exercise={exercises[track.ref]}
                active={track.index === currentIndex}
                onSelect={() => onSelectTrack(track.index)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
