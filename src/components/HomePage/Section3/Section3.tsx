import IconCard from "./IconCard"
import icon1 from '../../../assets/icon-home-sec3/icon-tool.png'
import icon2 from '../../../assets/icon-home-sec3/icon-clock.png'
import icon3 from '../../../assets/icon-home-sec3/icon-chat.png'
import icon4 from '../../../assets/icon-home-sec3/Icon-square.png'

function Section3(){
    return(

        <div className="bg-[#5C5A79] w-[393px] h-[1270px] pt-[60px] sm:flex sm:flex-col sm:justify-center items-center sm:gap-[60px] sm:w-[744px] sm:h-[844px] ">
            <div className="flex flex-col justify-center items-center gap-[24px] mb-[60px] ">
                <h2 className="text-[#FCF4B6] text-[25px] leading-[48px] font-bold sm:text-[40px]">Featured Tools</h2>
                <p className="text-white text-[14px] leading-[24px] font-normal sm:text-[16px]">Tools to enhance your project management</p>
                <button className="flex justify-center items-center bg-white text-[#160A60] w-[148px] h-[36px] p-[12px] font-medium text-[15px] leading-[24px] rounded-[8px]
                sm:w-[240px] sm:h-[48px] sm:text-[16px]">View All</button>
            </div>

            <div className="flex flex-col justify-center items-center gap-[40px] sm:grid sm:grid-cols-2 sm:gap-[40px] ">
                <IconCard url={icon1} title="Task Scheduler" subtitle="Plan and schedule tasks"></IconCard>
                <IconCard url={icon2} title="Deadline Tracker" subtitle="Keep track of project deadlines"></IconCard>
                <IconCard url={icon3} title="Communication Hub" subtitle="Centralized team communication"></IconCard>
                <IconCard url={icon4} title="Progress Report" subtitle="Track project progress"></IconCard>
            </div>

        </div>

    )
}

export default Section3