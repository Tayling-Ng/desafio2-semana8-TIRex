import instagram from '../../assets/img-header-footer/instagram.jpg'
import linkedin from '../../assets/img-header-footer/linkedin.jpg'
import facebook from '../../assets/img-header-footer/facebook.jpg'
const Footer = () => {
  return (
    <div className=' flex flex-col items-center min-w-[393px] min-h-[206px] p-[20px] bg-[#1E293B] sm:flex justify-center sm:items-center
    sm:min-w-[744px] sm:min-h-[145px] xl:flex-row xl:justify-center xl:items-center xl:min-w-[1440px] xl:min-h-[100px] xl:gap-[60px]'>
        <div className='flex justify-between w-[136px] -h-[34.5px] '>
            <a href="https://www.facebook.com/">
                <div className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full '> 
                    <img src={facebook} alt="icon Facebook" className='w-[11px] h-[11px]' />
                </div>
            </a>
            <a href="https://www.instagram.com/">
                <div className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full '> 
                    <img src={instagram} alt="icon intagram" className='w-[11px] h-[11px]' />
                </div>
            </a>
            <a href="https://www.linkedin.com/">
                <div className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full '> 
                    <img src={linkedin} alt="icon linkedin" className='w-[11px] h-[11px]' />
                </div>
            </a>
        </div>
        <div className='flex flex-col text-center text-white text-[14px] leading-[28px] gap-[5px] p-[30px]  sm:text-[18px] xl:flex-row xl:justify-around  xl:gap-[60px]'>
            <p>&copy; 2024 Project Manager.All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>

        </div> 
    </div>
  )
}

export default Footer