export const ExperienceBar = () => {
    return (
        <header className="flex items-center">
            <span className="text-base text-gray-500">0 xp</span>
            <div className="flex-1 h-1 rounded-t bg-gray-300 mx-6 relative">
                <div className="w-4/12 h-1 bg-green-400" />
                <span className="text-gray-500 left-1/2 absolute top-px transform -translate-x-1/2">
                    300px
                </span>
            </div>
            <span className="text-base text-gray-500">600 xp</span>
        </header>
    )
}