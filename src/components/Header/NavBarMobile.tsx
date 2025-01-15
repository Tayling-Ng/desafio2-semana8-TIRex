import shapeIcon from "../../assets/img-header-footer/shape.svg";

interface NavBarMobileProps {
    menuOpen: boolean;
}

const NavBarMobile = ({ menuOpen }: NavBarMobileProps) => {
    return (
        <nav
            menu-open={menuOpen}
            className={`${menuOpen ? "flex" : "hidden"
                } flex-col gap-[20px] items-center h-fit tablet:hidden`}
        >
            <form
                action="#"
                className="items-center justify-between mt-[10px] px-[10px] w-full gap-[10px] flex p-[5px] rounded  border-[#FFFFFF1A] border text-[#FFFFFF80] hover:border-[#268FE4] "
            >
                <input
                    type="text"
                    placeholder="Search in site"
                    name="search"
                    className="outline-none bg-transparent "
                />
                <img src={shapeIcon} alt="Search" className="w-[16px] h-[16px]" />
            </form>
            <div className="flex items-center flex-wrap w-full gap-[20px] justify-center">
                <a
                    href="/"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline"
                >
                    Home
                </a>

                <a
                    href="#"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline "
                >
                    About
                </a>

                <a
                    href="/settings"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline "
                >
                    Settings
                </a>

                <a
                    href="/profile"
                    className="text-white font-normal text-[16px] leading-[24px] hover:underline "
                >
                    Profile
                </a>
            </div>
        </nav>
    );
};
export default NavBarMobile;
