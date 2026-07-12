export default function VideoPlayer({ exercise }) {
  if (!exercise) return null;

  if (exercise.localFile) {
    return (
      <video
        key={exercise.localFile}
        className="video-player"
        src={exercise.localFile}
        controls
        autoPlay
      />
    );
  }

  if (!exercise.videoId) {
    return (
      <div className="video-player video-player--empty">
        <p>Video coming soon</p>
      </div>
    );
  }

  return (
    <iframe
      key={exercise.videoId}
      className="video-player"
      src={`https://www.youtube-nocookie.com/embed/${exercise.videoId}?rel=0&modestbranding=1&autoplay=1`}
      title={exercise.name}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
