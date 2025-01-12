import shapeIcon from "../../assets/img-header-footer/shape.svg";

const NavBarTabletDesktop = () => {
    return (
        <nav className="gap-[20px] items-center hidden tablet:flex">
            <div className="flex  gap-[20px]">
                <a
                    href="/"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline"
                >
                    About
                </a>
                <a
                    href="#"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline"
                >
                    Settings
                </a>
                <a
                    href="#"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline"
                >
                    Profile
                </a>
            </div>
            <div className="flex items-center p-[5px] rounded tablet:w-[133px] desktop:w-[200px] justify-between  border-[#FFFFFF1A] border text-[#FFFFFF80] hover:border-[#268FE4]">
                <input
                    type="text"
                    placeholder="Search in site"
                    name="search"
                    className="outline-none bg-transparent text-[14px] w-[93px]"
                />
                <img src={shapeIcon} alt="Search" className="w-[20px] h-[20px]" />
            </div>
        </nav>
    );
};
export default NavBarTabletDesktop;
