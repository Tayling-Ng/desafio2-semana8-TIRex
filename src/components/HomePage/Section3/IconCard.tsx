interface IconCardProps {
    url: string;
    title: string;
    subtitle: string;
}

function IconCard({url, title, subtitle}: IconCardProps){
    return(
        <div className="flex flex-col justify-center items-center gap-[20px] p-[12px] w-[353px] h-[204px] tablet:w-[229px] desktop:w-[245px]">
            <div className="bg-white w-[100px] h-[100px] rounded-[50%] flex justify-center items-center">
                <img src={url} alt="Icon" className="w-[48px] h-[48px] " />
            </div>
            <div className="flex flex-col gap-[8px] tablet:w-[240px] desktop:w-[245px]">
                <p className="text-white text-[20px] leading-[28px] text-center">{title}</p>
                <p className="text-white text-[16px] leading-[24px] text-center">{subtitle}</p>
            </div>
            

        </div>
    )
}

export default IconCard