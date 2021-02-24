import { useState, useEffect } from "react";

export const Countdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000)
    }
  }, [active, time])

  return (
    <div>
      <div className="flex items-center font-mono font-semibold text-gray-700">
        <div className="flex-1 flex items-center justify-evenly bg-white shadow rounded-2xl text text-9xl text-center">
          <span className="flex-1 border-r border-solid border-blue-50">
            {minuteLeft}
          </span>
          <span className="flex-1 border-l border-solid border-blue-50">
            {minuteRight}
          </span>
        </div>
        <span className="text-9xl my-0 mx-2">:</span>
        <div className="flex-1 flex items-center justify-evenly bg-white shadow rounded-2xl text text-9xl text-center">
          <span className="flex-1 border-r border-solid border-blue-50">
            {secondLeft}
          </span>
          <span className="flex-1 border-l border-solid border-blue-50">
            {secondRight}
          </span>
        </div>
      </div>
      <button
        type="button"
        className="w-full h-20 mt-8 flex items-center justify-center rounded bg-blue-500 text-blue-50 text-xl font-semibold duration-200 hover:bg-blue-700"
        onClick={startCountdown}
      >
        Start cycle
      </button>
    </div>
  );
};
