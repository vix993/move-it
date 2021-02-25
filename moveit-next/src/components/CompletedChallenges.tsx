import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"

export const CompletedChallenges = () => {
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className="flex items-center justify-between my-14 mx-0 pb-4 border-b border-solid font-medium">
            <span className="text-gray-500 text-xl">Completed Challenges</span>
            <span className="text-gray-500 text-2xl">{challengesCompleted}</span>
        </div>
    )
}