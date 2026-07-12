// Shared exercise library, keyed by slug. Every track in schedule.js points
// here so a move that repeats across days (Push-ups, Plank, Stomach
// Vacuum...) is only curated once.
//
// Each entry resolves to a video via `videoId` (YouTube, embedded through
// youtube-nocookie.com) or `localFile` (a self-hosted clip under /public).
// Swapping any single exercise to a local file needs no other changes.
//
// videoId values below were found via search and verified against YouTube's
// oEmbed endpoint (confirms the video exists and returns its real title).
export const exercises = {
  "push-ups": { name: "Push-ups", videoId: "Zi6c09DRGxk", category: "strength" },
  "decline-push-ups": { name: "Decline Push-ups", videoId: "QBlYp-EwHlo", category: "strength" },
  "pike-push-ups": { name: "Pike Push-ups", videoId: "pHR5yG6xBps", category: "strength" },
  "diamond-push-ups": { name: "Diamond Push-ups", videoId: "_6AvEX9-k8E", category: "strength" },
  "hollow-body-hold": { name: "Hollow Body Hold", videoId: "hK7QTWGRBu0", category: "core" },
  "plank": { name: "Plank", videoId: "A2b2EmIg0dA", category: "core" },
  "dead-bugs": { name: "Dead Bugs", videoId: "bxn9FBrt4-A", category: "core" },
  "stomach-vacuum": { name: "Stomach Vacuum", videoId: "b5GsE6ZHn_E", category: "core" },
  "scapular-retractions": { name: "Scapular Retractions", videoId: "b1snr_g3MZY", category: "posture" },
  "wall-angels": { name: "Wall Angels", videoId: "A9TD09kzjGY", category: "posture" },
  "chin-tucks": { name: "Chin Tucks", videoId: "gIBoxQ6AlS0", category: "posture" },
  "goblet-squats": { name: "Weighted Squats (Goblet or Front Squat)", videoId: "gm4ln6PO4rc", category: "strength" },
  "split-squats": { name: "Split Squats", videoId: "Ft-NS5Ogti0", category: "strength" },
  "glute-bridges": { name: "Glute Bridges", videoId: "nbjJjSa0cKo", category: "strength" },
  "calf-raises": { name: "Calf Raises", videoId: "KRJIKsY02nE", category: "strength" },
  "hanging-knee-raises": { name: "Hanging Knee Raises", videoId: "l7OroezzX9k", category: "core" },
  "side-plank": { name: "Side Plank", videoId: "iNbH7_edNI8", category: "core" },
  "hollow-rocks": {
    name: "Hollow Rocks",
    videoId: "XWNXnEfIdZU",
    category: "core",
    note: "video is titled \"Hollow Body Rocks\" — same movement, common alternate name",
  },
  "hip-flexor-stretch": { name: "Hip Flexor Stretch", videoId: "6o-GpPIGR5w", category: "mobility" },
  "hamstring-stretch": { name: "Hamstring Stretch", videoId: "B0jl9k3ImKU", category: "mobility" },
  "clamshells": { name: "Clamshells", videoId: "kO2Me7E83DQ", category: "posture" },
  "pull-ups": { name: "Pull-ups", videoId: "sIvJTfGxdFo", category: "strength" },
  "inverted-rows": { name: "Inverted Rows", videoId: "ytFnYaoIkSg", category: "strength" },
  "chin-ups": { name: "Chin-ups", videoId: "e1YSApl-QcM", category: "strength" },
  "slow-negative-pull-ups": { name: "Slow Negative Pull-ups", videoId: "pOe1L5sobF8", category: "strength" },
  "scapular-pull-ups": { name: "Scapular Pull-ups", videoId: "-ZIpSoTRsuE", category: "posture" },
  "reverse-snow-angels": { name: "Reverse Snow Angels", videoId: "b3e9rENJGCE", category: "posture" },
  "thoracic-spine-extension": { name: "Thoracic Spine Extension", videoId: "3FCsXmBsUbE", category: "mobility" },
  "russian-twists": { name: "Russian Twists", videoId: "9V9csctSKj0", category: "core" },
  "slow-mountain-climbers": { name: "Slow Mountain Climbers", videoId: "v-DcRqzmdUM", category: "conditioning" },
  "cat-cow": { name: "Cat-Cow", videoId: "xyNwxiuERXc", category: "mobility" },
  "shoulder-blade-squeeze": { name: "Shoulder Blade Squeeze", videoId: "Zz4uaHmJzm0", category: "posture" },
  "air-squats": { name: "Air Squats", videoId: "14dySbveKEI", category: "strength" },
  "dips": { name: "Dips", videoId: "vi1-BOcj3cQ", category: "strength" },
  "burpees": { name: "Burpees", videoId: "G2hv_NYhM-A", category: "conditioning" },
};
