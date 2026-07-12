// Dedicated to Theo — the reason this whole project exists.
import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import DayView from "./components/DayView";
import NowPlaying from "./components/NowPlaying";
import RestDay from "./components/RestDay";
import { schedule, dayOrder } from "./data/schedule";
import { exercises } from "./data/exercises";
import { flattenDay, groupBySection } from "./data/flatten";
import "./App.css";

function App() {
  const [selectedDay, setSelectedDay] = useState("monday");
  const [currentIndex, setCurrentIndex] = useState(0);

  const day = schedule[selectedDay];
  const flatTracks = useMemo(() => flattenDay(day), [day]);
  const groups = useMemo(() => groupBySection(flatTracks), [flatTracks]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedDay]);

  const currentTrack = flatTracks[currentIndex] ?? null;
  const currentExercise = currentTrack ? exercises[currentTrack.ref] : null;

  return (
    <div className="app">
      <Sidebar
        dayOrder={dayOrder}
        schedule={schedule}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
      />
      <main className="main">
        <header className="main__header">
          <p className="main__day-label">{day.day}</p>
          <h1>{day.rest ? "Rest" : day.title}</h1>
        </header>

        {day.rest ? (
          <RestDay note={day.note} />
        ) : (
          <>
            <NowPlaying
              track={currentTrack}
              exercise={currentExercise}
              onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              onNext={() =>
                setCurrentIndex((i) => Math.min(flatTracks.length - 1, i + 1))
              }
              hasPrev={currentIndex > 0}
              hasNext={currentIndex < flatTracks.length - 1}
            />
            <DayView
              groups={groups}
              exercises={exercises}
              currentIndex={currentIndex}
              onSelectTrack={setCurrentIndex}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
