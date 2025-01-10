import { useLocation } from 'react-router-dom'
import logo from '../../assets/img-header-footer/logo.svg'
import { Buttom } from './Buttom'
import NavBar from './NavBar'

const Header = () => {
  const location = useLocation()
  console.log(location.pathname);

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
      {location.pathname === '/' && <Buttom/>}
      {location.pathname === '/kanban' && <NavBar />}

    </div>
  );
}
export default Header;