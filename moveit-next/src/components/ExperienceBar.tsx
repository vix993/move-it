import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import { currentExperience } from "../styles/components/ExperienceBar.module";

export const ExperienceBar = () => {
    const { currentXp, experienceToNextLevel } = useContext(ChallengesContext)
    const percentToNextLevel = Math.floor(currentXp * 100) / experienceToNextLevel;
    return (
        <header className="flex items-center">
            <span className="text-base text-gray-500">0 xp</span>
            <div className="flex-1 h-1 rounded-t bg-gray-300 mx-6 relative">
                <div className="w-4/12 h-1 bg-green-400" style={{ width: `${percentToNextLevel}%` }} />
                <span className="text-gray-500 left-1/2 absolute top-px transform -translate-x-1/2" style={{ left: `${percentToNextLevel}%`}}>
                    {currentXp} px
                </span>
            </div>
            <span className="text-base text-gray-500">{experienceToNextLevel} xp</span>
        </header>
    )
}