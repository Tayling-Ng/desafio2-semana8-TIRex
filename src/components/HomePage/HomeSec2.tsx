// function HomeSec2() {
//
//     return <div className="bg-blue-500">MODELO COMPASSITOS</div>;
// }
// export default HomeSec2;

import MenageProjects from '../../assets/img-home-sec2/1_MenageProjects.png';
import TrackTasks from '../../assets/img-home-sec2/2_TrackTasks.png';
import Collaborate from '../../assets/img-home-sec2/3_Collaborate.png';

const HomeSec2 = () => {
    return (
        <section className="flex flex-col items-center bg-slate-800 text-white w-full h-[843px] gap-[10px] p-[10px] px-[170px]">
            <div className="">
                <h1 className="">The manager</h1>
                <p className="">
                    Project Manager is a tool designed to make organizing and
                    tracking your daily tasks easier than ever. With a clean,
                    intuitive interface and powerful features, you can plan,
                    prioritize, and keep tabs on your projects - whether you're
                    working solo or a with a team
                </p>
                <button className="bg-purple-800 transition-colors duration-300 transform scale-105">
                    Learn More
                </button>
            </div>
            <div className="flex gap-10">
                <div className="">
                    <img className="" src={MenageProjects} alt="image" />
                    <div className="">
                        <p className="">Manage Projects</p>
                        <p className="">20+ projects</p>
                    </div>
                </div>

                <div className="">
                    <img
                        className="image-section2"
                        src={TrackTasks}
                        alt="image"
                    />
                    <div className="">
                        <p className="">Track Tasks</p>
                        <p className="">50+ tasks</p>
                    </div>
                </div>

                <div className="">
                    <img className="" src={Collaborate} alt="image" />
                    <div className="">
                        <p className="">Collaborate</p>
                        <p className="">10+ team members</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSec2;
