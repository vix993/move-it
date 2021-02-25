import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    
    <div className="h-full bg-white rounded-2xl shadow py-6 px-8 flex flex-col items-center justify-center text-center">
      {activeChallenge && (
        <div className="h-full w-full flex flex-col">
          <header className="text-blue-600 font-semibold text-xl pt-0 px-8 pb-6 border-b border-solid border-gray-300">
            Earn {activeChallenge.amount} xp
          </header>

          <main className="flex-1 flex flex-col items-center justify-center">
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong className="font-semibold text-3xl text-gray-600 mt-6 mx-0 mb-4">
              New challenge
            </strong>
            <p className="leading-normal text-gray-500">{activeChallenge.description}</p>
          </main>

          <footer className="grid grid-cols-2 gap-4">
            <button
              className="h-12 flex items-center justify-center rounded-2xl text-white text-base font-semibold bg-red-500 duration-200 hover:bg-opacity-80"
              type="button"
              onClick={resetChallenge}
            >
              Fail
            </button>
            <button
              className="h-12 flex items-center justify-center rounded-2xl text-white text-base font-semibold bg-green-500 duration-200 hover:bg-opacity-80"
              type="button"
            >
              Success
            </button>
          </footer>
        </div>
      )}
      {!activeChallenge && (
        <div className="flex flex-col items-center">
          <strong className="text-2xl font-medium leading-normal">
            Complete a cycle to receive a challenge
          </strong>
          <p className="flex flex-col items-center leading-normal max-w-3/4 mt-12">
            <img className="mb-4" src="icons/level-up.svg" alt="Level Up" />
            Farm XP by completing challenge.
          </p>
        </div>
      )}
    </div>
  );
};
