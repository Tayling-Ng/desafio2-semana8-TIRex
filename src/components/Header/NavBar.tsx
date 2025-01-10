import { useState } from 'react'
import shapeIcon from '../../assets/img-header-footer/shape.svg'
import menuIcon from '../../assets/img-header-footer/menu.svg'

const NavBar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      }

      <div className='xl:hidden'>
      <button onClick={toggleMenu} className='flex items-center gap-[20px] p-[20px] '>
        <img src={menuIcon} alt="Menu" className="w-[24px] h-[24px]" />
        <img src={shapeIcon} alt="Search" className='w-[36px] h-[36px] p-[8px] gap-[4px] bg-[#1E293B] ' />
      </button>    
    </div>

  return (
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
  )
}

export default NavBar
