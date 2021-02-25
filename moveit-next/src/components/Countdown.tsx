import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => {
    setIsActive(true);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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

      {hasFinished ? (
        <button
          disabled
          className="w-full h-20 mt-8 flex items-center justify-center rounded bg-white shadow text-gray-600 text-xl font-semibold cursor-not-allowed border-b-8 border-solid border-green-300"
        >
          Cycle complete
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className="w-full h-20 mt-8 flex items-center justify-center rounded bg-red-400 text-blue-50 text-xl font-semibold duration-200 hover:bg-white hover:text-gray-700 hover:shadow"
              onClick={resetCountdown}
            >
              Abandon cycle
            </button>
          ) : (
            <button
              type="button"
              className="w-full h-20 mt-8 flex items-center justify-center rounded bg-blue-500 text-blue-50 text-xl font-semibold duration-200 hover:bg-blue-700"
              onClick={startCountdown}
            >
              Start cycle
            </button>
          )}
        </>
      )}
    </div>
  );
};
