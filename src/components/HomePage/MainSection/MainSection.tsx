import AchievementCard from "./AchievementCard";
import WelcomeCard from "./WelcomeCard";
import hero from '../../../assets/img-home-main/hero-img.png';

function MainSection() {
    return(
        <div className="relative flex flex-col justify-center items-center min-w-[393px] h-[700px] bg-[url('./assets/img-home-main/main-bg.jpg')] bg-cover bg-center pt-[56px] gap-[28px]
        sm:min-w-[744px] sm:h-[644px] sm:gap-[65px] sm:pt-[87px] sm:justify-start
        xl:w-[1440px] xl:h-[644px] xl:flex-row xl:justify-start xl:items-start xl:gap-[344px] xl:pl-[64px] xl:pr-[197px] xl:pt-[89.46px]" >
            <WelcomeCard></WelcomeCard>            
            <div className="flex flex-col justify-between items-center gap-[17px] sm:flex-row sm:w-[656px]
            xl:flex-col">
                <AchievementCard number="2000+" text="Satisfied clients"></AchievementCard>
                <AchievementCard number="400+" text="Managed projects"></AchievementCard>
                <AchievementCard number="500+" text="Kanban boards"></AchievementCard>
            </div>
            
            <img src={hero} alt="Hero" className="hidden xl:block absolute w-[1175px] h-[820px] top-[-61.54px] left-[265px] "/>
            
                        
                        

        </div>
        
    )
}

export default MainSection