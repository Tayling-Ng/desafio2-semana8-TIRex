import shapeIcon from "../../assets/img-header-footer/shape.svg";
import { Link } from "react-router";

const NavBarTabletDesktop = () => {
    return (
        <nav className="gap-[20px] items-center hidden tablet:flex">
            <div className="flex items-center flex-row w-full gap-[20px] justify-center">
                <Link
                    to="/"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline"
                >
                    Home
                </Link>
 
                <Link
                    to="#"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline "
                >
                    About
                </Link>
 
                <Link
                    to="/settings"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline "
                >
                    Settings
                </Link>
 
                <Link
                    to="/profile"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline "
                >
                    Profile
                </Link>
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
