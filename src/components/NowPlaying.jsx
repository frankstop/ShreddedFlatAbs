import VideoPlayer from "./VideoPlayer";

export default function NowPlaying({ track, exercise, onPrev, onNext, hasPrev, hasNext }) {
  if (!track || !exercise) {
    return (
      <div className="now-playing now-playing--empty">
        <p>Pick a track below to start.</p>
      </div>
    );
  }

  return (
    <div className="now-playing">
      <div className="now-playing__video">
        <VideoPlayer exercise={exercise} />
      </div>
      <div className="now-playing__info">
        <div className="now-playing__details">
          <span className="now-playing__section">{track.sectionName}</span>
          <h2>{exercise.name}</h2>
          <p className="now-playing__setsreps">{track.setsReps}</p>
          {exercise.note && <p className="now-playing__note">Closest match — {exercise.note}</p>}
        </div>
        <div className="now-playing__controls">
          <button onClick={onPrev} disabled={!hasPrev} aria-label="Previous track">
            ⏮ Prev
          </button>
          <button onClick={onNext} disabled={!hasNext} aria-label="Next track">
            Next ⏭
          </button>
        </div>
      </div>
    </div>
  );
}
