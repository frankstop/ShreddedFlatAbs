// Dedicated to Theo — the reason this whole project exists.

// The week, exactly as the plan was written. Each track references a slug
// from exercises.js so repeated moves (Push-ups, Plank, Stomach Vacuum...)
// only need to be curated once.
export const schedule = {
  monday: {
    day: "Monday",
    title: "Upper Body + Flat Core + Posture",
    sections: [
      {
        name: "Strength",
        tracks: [
          { ref: "push-ups", setsReps: "4×25" },
          { ref: "decline-push-ups", setsReps: "4×20" },
          { ref: "pike-push-ups", setsReps: "4×10–12" },
          { ref: "diamond-push-ups", setsReps: "4×10" },
        ],
      },
      {
        name: "Flat Core",
        tracks: [
          { ref: "hollow-body-hold", setsReps: "3×30 sec" },
          { ref: "plank", setsReps: "2×60 sec" },
          { ref: "dead-bugs", setsReps: "3×10 per side" },
          { ref: "stomach-vacuum", setsReps: "5×20 sec" },
        ],
      },
      {
        name: "Posture",
        tracks: [
          { ref: "scapular-retractions", setsReps: "3×12" },
          { ref: "wall-angels", setsReps: "3×10" },
          { ref: "chin-tucks", setsReps: "3×10" },
        ],
      },
    ],
  },

  tuesday: {
    day: "Tuesday",
    title: "Legs + Flat Core + Posture",
    sections: [
      {
        name: "Strength",
        tracks: [
          { ref: "goblet-squats", setsReps: "4×15" },
          { ref: "split-squats", setsReps: "3×12 per leg" },
          { ref: "glute-bridges", setsReps: "3×20" },
          { ref: "calf-raises", setsReps: "4×25" },
        ],
      },
      {
        name: "Flat Core",
        tracks: [
          { ref: "hanging-knee-raises", setsReps: "3×10–12" },
          { ref: "side-plank", setsReps: "1–2×20 sec per side" },
          { ref: "hollow-rocks", setsReps: "2×10" },
          { ref: "stomach-vacuum", setsReps: "5×20 sec" },
        ],
      },
      {
        name: "Posture",
        tracks: [
          { ref: "hip-flexor-stretch", setsReps: "2×30 sec per side" },
          { ref: "hamstring-stretch", setsReps: "2×30 sec" },
          { ref: "clamshells", setsReps: "3×12 per side" },
        ],
      },
    ],
  },

  wednesday: {
    day: "Wednesday",
    title: "Back/Biceps + Flat Core + Posture",
    sections: [
      {
        name: "Strength",
        tracks: [
          { ref: "pull-ups", setsReps: "4×10–12" },
          { ref: "inverted-rows", setsReps: "4×10" },
          { ref: "chin-ups", setsReps: "4×8–10" },
          { ref: "slow-negative-pull-ups", setsReps: "3×5" },
        ],
      },
      {
        name: "Flat Core",
        tracks: [
          { ref: "dead-bugs", setsReps: "3×12 per side" },
          { ref: "plank", setsReps: "75 sec" },
          { ref: "hollow-body-hold", setsReps: "3×30 sec" },
          { ref: "stomach-vacuum", setsReps: "5×25 sec" },
        ],
      },
      {
        name: "Posture",
        tracks: [
          { ref: "scapular-pull-ups", setsReps: "3×8" },
          { ref: "reverse-snow-angels", setsReps: "3×15" },
          { ref: "thoracic-spine-extension", setsReps: "1×60 sec" },
        ],
      },
    ],
  },

  thursday: {
    day: "Thursday",
    title: "Flat Core Focus + Posture",
    sections: [
      {
        name: "Flat Core Circuit",
        rounds: 3,
        tracks: [
          { ref: "hollow-body-hold", setsReps: "30 sec" },
          { ref: "dead-bugs", setsReps: "12 per side" },
          { ref: "plank", setsReps: "60 sec" },
          { ref: "russian-twists", setsReps: "12 per side" },
          { ref: "slow-mountain-climbers", setsReps: "30 sec" },
          { ref: "stomach-vacuum", setsReps: "25 sec" },
        ],
      },
      {
        name: "Posture",
        tracks: [
          { ref: "cat-cow", setsReps: "2×10" },
          { ref: "shoulder-blade-squeeze", setsReps: "3×12" },
          { ref: "chin-tucks", setsReps: "3×10" },
          { ref: "hip-flexor-stretch", setsReps: "2×30 sec" },
        ],
      },
    ],
  },

  friday: {
    day: "Friday",
    title: "Full Body + Core Activation + Posture",
    sections: [
      {
        name: "Strength",
        tracks: [
          { ref: "push-ups", setsReps: "4×25" },
          { ref: "pull-ups", setsReps: "4×10" },
          { ref: "air-squats", setsReps: "3×20" },
          { ref: "dips", setsReps: "4×10" },
          { ref: "glute-bridges", setsReps: "3×20" },
        ],
      },
      {
        name: "Core",
        tracks: [
          { ref: "hanging-knee-raises", setsReps: "3×10" },
          { ref: "plank", setsReps: "60 sec" },
          { ref: "stomach-vacuum", setsReps: "5×25 sec" },
        ],
      },
      {
        name: "Posture",
        tracks: [
          { ref: "scapular-retractions", setsReps: "3×12" },
          { ref: "wall-angels", setsReps: "3×10" },
          { ref: "thoracic-spine-extension", setsReps: "1×45 sec" },
        ],
      },
    ],
  },

  saturday: {
    day: "Saturday",
    title: "Conditioning + Flat Core + Posture",
    sections: [
      {
        name: "Conditioning Circuit",
        rounds: 3,
        tracks: [
          { ref: "burpees", setsReps: "10" },
          { ref: "push-ups", setsReps: "20" },
          { ref: "air-squats", setsReps: "20" },
          { ref: "plank", setsReps: "1 min" },
          { ref: "hollow-body-hold", setsReps: "25 sec" },
          { ref: "slow-mountain-climbers", setsReps: "20 sec" },
        ],
      },
      {
        name: "Finish",
        tracks: [{ ref: "stomach-vacuum", setsReps: "6×20–25 sec" }],
      },
      {
        name: "Posture",
        tracks: [
          { ref: "hip-flexor-stretch", setsReps: "2×30 sec" },
          { ref: "shoulder-blade-squeeze", setsReps: "3×12" },
          { ref: "chin-tucks", setsReps: "3×10" },
        ],
      },
    ],
  },

  sunday: {
    day: "Sunday",
    title: "Rest",
    rest: true,
    note: "Light stretching optional.",
  },
};

export const dayOrder = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
