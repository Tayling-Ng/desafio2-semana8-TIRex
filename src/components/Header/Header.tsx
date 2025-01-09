
import logo from '../../assets/img-header-footer/logo.svg'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-[393px] h-[80px] bg-[#1E293B] text-white p-[20px] 
    sm:w[744px] 
    xl:[1440px]'>
      <div className='flex items-center gap-[20px] '>
        <img src={logo} alt="Logo" 
        className='w-[40px] h-[40px] rounded-[50px]
         sm:w-[50px] sm:h-[50px] 
         xl:w-[50px] xl:h-[50px]' />
        <p className='text-[16px] leading-[36px] 
        sm:text[18px] 
        xl:text[28px]'>Project Manager</p>
      </div>
      <button className='flex justify-center items-center p-[12px] text-[15px] font-medium w-[105px] h-[36px] rounded-[30px] leading-[24px] border 
      sm:text-[15px] sm:leading-[36px] sm:w-[162px] sm:h-[48px] 
      xl:w[240px] xl:h[48px] xl:text-[16px] '>Login</button>
    </div>
  )
}
export default Header