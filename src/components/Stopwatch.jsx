import React from "react";
import { useStopwatch } from "react-timer-hook";

function Stopwatch() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });
  return (
    <div className="p-10 flex flex-col items-center justify-center w-full gap-5">
      <p className="font-semibold xl:text-6xl lg:text-5xl sm:text-4xl tracking-wider">
        Stopwatch
      </p>
      <div className=" xl:text-9xl lg:text-8xl sm:text-7xl">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-neutral-800 bg-opacity-40 py-1.5 px-4 rounded-xl "
          onClick={start}
        >
          Start
        </button>
        <button
          className="bg-neutral-800 bg-opacity-40 py-1.5 px-4 rounded-xl "
          onClick={pause}
        >
          Pause
        </button>
        <button
          className="bg-neutral-800 bg-opacity-40 py-1.5 px-4 rounded-xl "
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
