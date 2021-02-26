import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
