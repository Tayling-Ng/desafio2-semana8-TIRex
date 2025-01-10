// function HomeSec2() {
//
//     return <div className="bg-blue-500">MODELO COMPASSITOS</div>;
// }
// export default HomeSec2;

import ManageProjects from './../../../assets/img-home-sec2/1_MenageProjects.png';
import TrackTasks from './../../../assets/img-home-sec2/2_TrackTasks.png';
import Collaborate from './../../../assets/img-home-sec2/3_Collaborate.png';

const HomeSec2 = () => {
    return (
        <section className="flex flex-col items-center bg-slate-800 text-white w-full h-[843px] gap-[60px] p-[60px] px-[170px]">
            <div className="flex flex-col w-[1100px] h-[192px] gap-6">
                <h1 className="text-5xl font-bold leading-9 tracking-tight text-left text-yellow-200">
                    The manager
                </h1>
                <p className="">
                    Project Manager is a tool designed to make organizing and
                    tracking your daily tasks easier than ever. With a clean,
                    intuitive interface and powerful features, you can plan,
                    prioritize, and keep tabs on your projects - whether you're
                    working solo or a with a team
                </p>
                <button className="bg-[#F8F2FF] w-60 h-12 p-3 rounded-lg text-[#160A60]">
                    Learn More
                </button>
            </div>
            <div className="flex gap-10">
                <div className="">
                    <img className="" src={ManageProjects} alt="image" />
                    <div className="w-[340px] h-20 pt-3 px-[12px] gap-1">
                        <p className="text-[16px]">Manage Projects</p>
                        <p className="text-[20px]">20+ projects</p>
                    </div>
                </div>
                <div className="">
                    <img
                        className="image-section2"
                        src={TrackTasks}
                        alt="image"
                    />
                    <div className="w-[340px] h-20 pt-3 px-[12px] gap-1">
                        <p className="text-[16px]">Track Tasks</p>
                        <p className="text-[20px]">50+ tasks</p>
                    </div>
                </div>
                <div className="">
                    <img className="" src={Collaborate} alt="image" />
                    <div className="w-[340px] h-20 pt-3 px-[12px] gap-1">
                        <p className="text-[16px]">Collaborate</p>
                        <p className="text-[20px]">10+ team members</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSec2;
