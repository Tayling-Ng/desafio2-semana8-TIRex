interface ImgCardProps {
    url: string;
    title: string;
    subtitle: string;
}

function ImgCard({ url, title, subtitle }: ImgCardProps) {
    return (
        <div className="w-[308px] h-[380px] tablet:w-[340px] tablet:h-[420px]">
            <img
                src={url}
                alt="square image"
                className="w-[308px] h-[308px] rounded-[5.5px] tablet:w-[340px] tablet:h-[340px]"
            />

            <div className="p-[11px]">
                <p className="text-white text-[14px] leading-[22px] mb-1">
                    {title}
                </p>
                <p className="text-white text-[18px] leading-[25px] font-medium">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

export default ImgCard;
