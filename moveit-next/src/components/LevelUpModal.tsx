import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export const LevelUpModal = () => {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <div className="bg-blue-50 fixed inset-0 flex justify-center items-center bg-opacity-70">
      <div className="bg-white max-w-md px-8 py-12 rounded-md shadow text-center relative">
        <header className="text-9xl font-semibold text-blue-500 bg-levelup bg-no-repeat bg-center bg-contain">
          {level}
        </header>
        <strong className="text-gray-600">Well done!</strong>
        <p className="text-xl text-gray-500 mt-1">You have leveled up!</p>

        <button onClick={closeLevelUpModal} className="absolute right-2 top-2 bg-transparent" type="button">
          <img src="/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  );
};
