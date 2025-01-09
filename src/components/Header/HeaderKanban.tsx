import { useState } from 'react'
import logo from '../../assets/img-header-footer/logo.svg'
import shapeIcon from '../../assets/img-header-footer/shape.svg'
import menuIcon from '../../assets/img-header-footer/menu.svg'

const HeaderKanban = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='flex justify-between items-center min-w-[393px] min-h-[80px] bg-[#1E293B] text-white p-[20px] 
    sm:min-w-[744px] sm:min-h-[80px] 
    xl:min-w-[1440px] xl:min-h-[80px]'>
      <div className='flex items-center gap-[20px]'>
        <img src={logo} alt="Logo" 
        className='w-[40px] h-[40px] rounded-[50px]
         sm:w-[50px] sm:h-[50px] 
         xl:w-[50px] xl:h-[50px]' />
        <p className='text-[16px] leading-[36px] 
        sm:text-[18px] 
        xl:text-[28px]'>Project Manager</p>
      </div>

      <div className='xl:hidden'>
  
        <button onClick={toggleMenu} className='flex items-center gap-[20px] p-[20px] '>
          <img src={menuIcon} alt="Menu" className="w-[24px] h-[24px]" />
          <img src={shapeIcon} alt="Search" className='w-[36px] h-[36px] p-[8px] gap-[4px] bg-[#1E293B] ' />
        </button>
        
      </div>

      <nav className={`${menuOpen ? 'block' : 'hidden'} sm:flex xl:flex sm:gap-[20px] xl:gap-[20px] sm:items-center xl:items-center`}>
        <ul className="flex  gap-[20px]">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">Settings</a></li>
          <li><a href="#" className="text-white">Profile</a></li>
        </ul>   
        <form action="#" className="flex items-center gap-[10px]">
          <input type="text" placeholder="Search in site" name="search" className="p-[5px] rounded" />
          <button type="submit" className="p-[5px]  rounded">
            <img src={shapeIcon} alt="Search" className="w-[16px] h-[16px]" />
          </button>   
        </form>  
      </nav>
    </div>

  );
}

export default HeaderKanban;