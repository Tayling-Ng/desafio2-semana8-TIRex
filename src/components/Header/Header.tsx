import { useLocation } from "react-router-dom";
import logo from "../../assets/img-header-footer/logo.svg";
import NavBarMobile from "./NavBarMobile";
import menuIcon from "../../assets/img-header-footer/menu.svg";
import shapeIcon from "../../assets/img-header-footer/shape.svg";
import { useState } from "react";
import NavBarTabletDesktop from "./NavBarTabletDesktop";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(location.pathname);

  return (
    <div className="flex flex-col tablet:flex-row w-full h-fit bg-[#1E293B] text-white px-[20px] py-[15px]">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-[20px]">
          <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
          <p className="text-[16px] leading-[36px] tablet:text-[18px] desktop:text-[28px]">
            Project Manager
          </p>
        </div>
        {location.pathname === "/" && (
          <a
            href="/login"
            className="w-[105px] h-[36px] text-[15px] leading-[24px] rounded-[30px] border flex justify-center items-center border-white tablet:text-[16px] tablet:w-[162px] tablet:h-[48px] desktop:w-[254px] desktop:h-[60px] hover:bg-white hover:bg-opacity-80 hover:text-white
            hover:border-[#268FE4] "
          >
            Login
          </a>
        )}
        {location.pathname.includes("kanban") && (
          <div className="tablet:hidden flex gap-[20px] items-center">
            <button
              onClick={() => {
                console.log("setMenuOpen(!menuOpen)");
                setMenuOpen(!menuOpen);
              }}
            >
              <img src={menuIcon} alt="Menu" className="w-[24px] h-[24px]" />
            </button>
            <div
              className={`${menuOpen ? "hidden" : ""
                } h-[36px] w-[36px] flex items-center justify-center rounded  border-[#FFFFFF1A] border text-[#FFFFFF80]  `}
            >
              <img src={shapeIcon} alt="Search" className="w-[16px] h-[16px]" />
            </div>
          </div>
        )}
      </div>
      {location.pathname.includes("kanban") && (
        <>
          <NavBarTabletDesktop />
          <NavBarMobile menuOpen={menuOpen} />
        </>
      )}
    </div>
  );
};
export default Header;

