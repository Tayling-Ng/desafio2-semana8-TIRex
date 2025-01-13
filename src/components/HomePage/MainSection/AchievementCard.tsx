interface AchievementCardProps {
    number: string;
    text: string;
}


function AchievementCard({number, text}: AchievementCardProps){
    return(
        <div className="bg-dark-brown/70 text-white text-base leading-6 font-medium w-[179px] h-[80px] rounded-[15px] pt-[17px] pb-[17px] pl-[12px] last:mb-0
        ">
            <h2>{number}</h2>
            <p>{text}</p>
        </div>
    )
}

export default AchievementCard