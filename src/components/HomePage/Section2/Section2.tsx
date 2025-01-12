import ImgCard from './ImgCard';
import img1 from '../../../assets/img-home-sec2/img1-manage-projects.png';
import img2 from '../../../assets/img-home-sec2/img2-track-tasks.png';
import img3 from '../../../assets/img-home-sec2/img3-collaborate.png';

function Section2() {
    return (
        <div className="flex flex-col gap-[50px] px-[20.5px] py-12 min-w-[392px] h-[794px] bg-[#1E293B] overflow-hidden tablet:px-[44px] tablet:min-w-[744px] tablet:h-[843px] desktop:w-Full desktop:h-[843px] desktop:px-[170px] desktop:py-[85.5px] desktop:gap-[60px] z-[15] desktop:items-center">
            <div className="flex flex-col gap-6 min-w-[351px] h-[252px] tablet:w-[656px] tablet:h-[216px] desktop:min-w-[1100px] desktop:h-[192px]">
                <h1 className="text-[#FCF4B6] text-[24px] leading-[48px] font-bold tablet:text-[40px]">
                    The manager
                </h1>
                <p className="text-white text-[14px] leading-[24px] font-normal tablet:text-[16px]">
                    Project Manager is a tool designed to make organizing and
                    tracking your daily tasks easier than ever. With a clean,
                    intuitive interface and powerful features, you can plan,
                    prioritize, and keep tabs on your projects - whether you’re
                    working solo or a with a team
                </p>
                <button className="flex justify-center items-center bg-white text-[#160A60] w-[205px] h-[36px] p-[12px] font-medium text-[15px] leading-[24px] rounded-[8px] self-start tablet:text-[16px]">
                    Learn More
                </button>
            </div>

            <div className="flex gap-[36px] w-[996px] h-[380px] tablet:gap-[40px] tablet:w-[1100px] tablet:h-[420px] desktop:min-h-[1440px] desktop:self-center desktop:p-[0px]">
                <ImgCard
                    url={img1}
                    title="Manage Projects"
                    subtitle="20+ projects"
                ></ImgCard>
                <ImgCard
                    url={img2}
                    title="Track Tasks"
                    subtitle="50+ tasks"
                ></ImgCard>
                <ImgCard
                    url={img3}
                    title="Manage Projects"
                    subtitle="10+ team members"
                ></ImgCard>
            </div>
        </div>
    );
}

export default Section2;
