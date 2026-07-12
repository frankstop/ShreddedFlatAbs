// Flattens a schedule day's sections into a single ordered track list, and
// re-groups it by section for rendering. Keeping one traversal as the
// source of truth means DayView and the Now Playing prev/next logic can
// never disagree about track order.
export function flattenDay(day) {
  if (!day || day.rest) return [];
  const tracks = [];
  day.sections.forEach((section) => {
    section.tracks.forEach((track) => {
      tracks.push({ ...track, sectionName: section.name, rounds: section.rounds });
    });
  });
  return tracks;
}

export function groupBySection(flatTracks) {
  const groups = [];
  flatTracks.forEach((track, index) => {
    const last = groups[groups.length - 1];
    const item = { ...track, index };
    if (last && last.name === track.sectionName) {
      last.items.push(item);
    } else {
      groups.push({ name: track.sectionName, rounds: track.rounds, items: [item] });
    }
  });
  return groups;
}
