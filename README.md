# ShreddedFlatAbs

_Dedicated to Theo._

A 6-day calisthenics and posture program (Mon–Sat, Sun rest) with a
music-player-style interface: day playlists, exercises as tracks, and a Now
Playing panel that loads each exercise's reference video with Prev/Next
navigation.

Live site: https://frankstop.github.io/ShreddedFlatAbs/

## Running it

```bash
npm install
npm run dev
```

## How it's put together

- `src/data/exercises.js` — the shared library of every unique exercise
  (name, category, and either a YouTube `videoId` or a `localFile` path).
  Exercises that repeat across days (Push-ups, Plank, Stomach Vacuum, ...)
  are only defined once here.
- `src/data/schedule.js` — the week itself, exactly as written: each day's
  sections (Strength / Flat Core / Posture / Conditioning) reference an
  exercise by slug and carry that day's specific sets/reps.
- `src/data/flatten.js` — flattens a day into one ordered track list (used
  for Prev/Next and for highlighting the active track) and re-groups it by
  section for rendering, so there's one source of truth for track order.
- `src/components/` — `Sidebar` (the 7 "playlists"), `DayView` +
  `TrackRow` (the tracklist), `NowPlaying` + `VideoPlayer` (the player), and
  `RestDay` (Sunday).

## Swapping a video to self-hosted

Every exercise entry in `exercises.js` can carry a `localFile` instead of a
`videoId`:

```js
"push-ups": { name: "Push-ups", localFile: "/videos/push-ups.mp4", category: "strength" },
```

`VideoPlayer` picks whichever is present — nothing else in the app needs to
change.

## A note on ads

Videos are embedded via `youtube-nocookie.com` (YouTube's privacy-enhanced
mode), which cuts down on tracking and related-video clutter. It does **not**
guarantee a video is ad-free — whether a pre-roll ad shows up is controlled
by that video's uploader/monetization, not by the embed. The only way to get
a genuinely zero-ads track is to swap it to a self-hosted `localFile`.

## Analytics

Every time a track with a video becomes the current track (selection, Prev,
Next, or switching days), the app fires a GA4 `video_view` event with
human-readable parameters: `exercise_name` ("Push-ups"), `exercise_slug`,
`day_name` ("Monday"), `section_name` ("Flat Core"), `video_source`
(`youtube`/`local`), and `video_id`. See `src/analytics.js` (allowlist +
safe no-op) and the `useEffect` in `src/App.jsx`. The gtag snippet in
`index.html` is skipped on localhost, so dev sessions never reach the real
property.

## Substituted exercises

A few moves in the original plan have thin video coverage under their exact
name. Those tracks carry a `note` field and show a "closest match" badge in
the UI — see `exercises.js` for which ones and why.
