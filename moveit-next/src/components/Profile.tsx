export const Profile = () => {
    return (
        <div className="flex items-center">
            <img className="w-20 h-20 rounded-3xl" src="https://github.com/vix993.png" alt="Victor Nascimento"/>
            <div className="ml-6">
                <strong className="text-2xl font-semibold text-gray-700">Victor Nascimento</strong>
                <p className="text-base text-gray-500 mt-2 flex flex-row">
                    <img className="mr-2" src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}