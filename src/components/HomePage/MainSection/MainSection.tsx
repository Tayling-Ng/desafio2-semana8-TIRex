import AchievementCard from "./AchievementCard";
import WelcomeCard from "./WelcomeCard";
import hero from '../../../assets/img-home-main/hero-img.png';

function MainSection() {
    return(
        <div className="relative flex flex-col justify-center items-center min-w-[393px] h-[700px] bg-[url('./assets/img-home-main/main-bg.jpg')] bg-cover bg-center pt-[56px] gap-[28px]
        tablet:min-w-[744px] tablet:h-[644px] tablet:gap-[65px] tablet:pt-[87px] tablet:justify-start
        desktop:min-w-[1440px] desktop:h-[644px] desktop:flex-row desktop:justify-between desktop:items-start desktop:gap-[344px] desktop:pl-[64px] desktop:pr-[197px] desktop:pt-[89.46px]" >
            <WelcomeCard></WelcomeCard>            
            <div className="flex flex-col justify-between items-center gap-[17px] tablet:flex-row tablet:w-[656px]
            desktop:flex-col">
                <AchievementCard number="2000+" text="Satisfied clients"></AchievementCard>
                <AchievementCard number="400+" text="Managed projects"></AchievementCard>
                <AchievementCard number="500+" text="Kanban boards"></AchievementCard>
            </div>
            
            <img src={hero} alt="Hero" className="hidden desktop:block absolute w-[1175px] h-[820px] top-[-61.54px] left-[265px] "/>
            
                        
                        

        </div>
        
    )
}

export default MainSection