import ImgCard from './ImgCard';
import img1 from '../../../assets/img-home-sec2/img1-manage-projects.png';
import img2 from '../../../assets/img-home-sec2/img2-track-tasks.png';
import img3 from '../../../assets/img-home-sec2/img3-collaborate.png';

function Section2() {
    return (
        <div className="flex flex-col gap-[50px] px-[20.5px] py-12 min-w-[392px] h-[794px] bg-blue-300 overflow-hidden sm:px-[44px] sm:min-w-[744px] sm:h-[843px]">
            <div className="flex flex-col gap-6 w-[351px] h-[252px] sm:w-[656px] sm:h-[216px]">
                <h1 className="text-[#FCF4B6] text-[24px] leading-[48px] font-bold sm:text-[40px]">
                    The manager
                </h1>
                <p className="text-white text-[14px] leading-[24px] font-normal sm:text-[16px]">
                    Project Manager is a tool designed to make organizing and
                    tracking your daily tasks easier than ever. With a clean,
                    intuitive interface and powerful features, you can plan,
                    prioritize, and keep tabs on your projects - whether you’re
                    working solo or a with a team
                </p>
                <button className="flex justify-center items-center bg-white text-[#160A60] w-[205px] h-[36px] p-[12px] font-medium text-[15px] leading-[24px] rounded-[8px] self-center sm:self-start sm:text-[16px]">
                    Learn More
                </button>
            </div>

            <div className="flex gap-[36px] w-[996px] h-[380px] sm:gap-[40px] sm:w-[1100px] sm:h-[420px]">
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
