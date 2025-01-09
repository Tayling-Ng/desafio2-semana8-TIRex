import facebook from '../../assets/img-header-footer/facebook.jpg'
import instagram from '../../assets/img-header-footer/instagram.jpg'
import linkedin from '../../assets/img-header-footer/linkedin.jpg'

const Footer = () => {
  return (
    <div className=' flex flex-col items-center w-[393px] h-[206px] p-[30px] gap-[20px] bg-[#1E293B]
    sm:w-[px] sm:h-[px]'>
        <div className='flex justify-between w-[px] h-[px] gap-[20px]'>
            <a href="">
                <div className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full '> 
                    <img src={facebook} alt="icon Facebook" className='w-[11px] h-[11px]' />
                </div>
            </a>
            <a href="">
                <div className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full '> 
                    <img src={instagram} alt="icon intagram" className='w-[11px] h-[11px]' />
                </div>
            </a>
            <a href="">
                <div className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full '> 
                    <img src={linkedin} alt="icon linkedin" className='w-[11px] h-[11px]' />
                </div>
            </a>
        </div>
        <div className='flex-flex-col text-center text-white text-[14px] leading-[28px] gap-[20px]'>
            <p>&copy; 2024 Project Manager. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p >Terms of Service</p>

        </div>

        
    </div>
  )
}

export default Footer