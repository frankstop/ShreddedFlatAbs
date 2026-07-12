export default function TrackRow({ track, exercise, active, onSelect }) {
  return (
    <button
      className={`track-row${active ? " track-row--active" : ""}`}
      onClick={onSelect}
    >
      <span className="track-row__thumb">
        {exercise.videoId ? (
          <img
            src={`https://img.youtube.com/vi/${exercise.videoId}/default.jpg`}
            alt=""
            loading="lazy"
          />
        ) : (
          <span className="track-row__thumb-fallback" aria-hidden="true" />
        )}
      </span>
      <span className="track-row__name">
        {exercise.name}
        {exercise.note && <span className="track-row__badge">closest match</span>}
      </span>
      <span className="track-row__setsreps">{track.setsReps}</span>
    </button>
  );
}
