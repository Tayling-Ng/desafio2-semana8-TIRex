import AchievementCard from "./AchievementCard"
import WelcomeCard from "./WelcomeCard"

function MainSection() {
    return(
        <div className="flex flex-col justify-between items-center w-[393px] h-[700px] bg-[url('./assets/img-home-main/main-bg.jpg')] bg-cover bg-center pt-[56px] gap-[28px]" >
            <WelcomeCard></WelcomeCard>
            <div className="flex flex-col justify-between items-center gap-[17px]">
                <AchievementCard number="2000+" text="Satisfied clients"></AchievementCard>
                <AchievementCard number="400+" text="Managed projects"></AchievementCard>
            </div>
            <AchievementCard number="500+" text="Kanban boards"></AchievementCard>
            
            

            <img src="" alt="" />

        </div>
    )
}

export default MainSection