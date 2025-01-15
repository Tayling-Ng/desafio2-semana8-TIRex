import { useState } from 'react'
import shapeIcon from '../../assets/img-header-footer/shape.svg'
import menuIcon from '../../assets/img-header-footer/menu.svg'

const NavBar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      }



  return (
    <nav className={` sm:flex xl:flex sm:gap-[20px] xl:gap-[20px] sm:items-center xl:items-center`}>
    <ul className={`flex  gap-[20px] ${menuOpen ? 'block' : 'hidden'} `}>
      <li><a href="/home" className="text-white">Home</a></li>
      <li><a href="#" className="text-white">About</a></li>
      <li><a href="/settings" className="text-white">Settings</a></li>
      <li><a href="/profile" className="text-white">Profile</a></li>
    </ul>   
    <div className=''>
      <button onClick={toggleMenu} className='flex items-center gap-[20px] p-[20px] '>
        <img src={menuIcon} alt="Menu" className="w-[24px] h-[24px]" />
        
      </button>    
    </div>
    <form action="#" className={` items-center gap-[10px] flex p-[5px] rounded  border-[#FFFFFF1A] border text-[#FFFFFF80]`} >
      <input type="text" placeholder="Search in site" name="search" className={`
       outline-none ${menuOpen ? 'block' : 'hidden'} bg-transparent `} />
      <button type="submit" className="p-[5px]  rounded">
        <img src={shapeIcon} alt="Search" className="w-[16px] h-[16px]" />
      </button>   
    </form>  
  </nav>
  )
}

export default NavBar
