import instagram from '../../assets/img-header-footer/instagram.jpg'
import linkedin from '../../assets/img-header-footer/linkedin.jpg'
import facebook from '../../assets/img-header-footer/facebook.jpg'
import facebookHover from '../../assets/img-hover/facebook-hover.png'
import instagramHover from '../../assets/img-hover/instagram-hover.png'
import linkedinHover from '../../assets/img-hover/linkedin-hover.png'


const Footer = () => {
    return (
        <div className=' flex flex-col items-center w-full h-[206px]  bg-[#1E293B]  justify-center py-[20px] gap-[20px] tablet:px-[19px] 
        tablet:h-[145px] desktop:h-[100px] desktop:flex-row desktop:gap-[60px]'>
            <div className='flex gap-[16px] ' >
                <a href="https://www.facebook.com/" className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full relative' >

                    <img src={facebook} alt="icon Facebook" className='w-[11px] h-[11px] transition-opacity duration-300 hover:opacity-0' />
                    <img src={facebookHover} alt='facebook Hover Icon'
                        className='w-[11px] h-[11px] absolute opacity-0 transition-all duration-300 hover:opacity-100' />

                </a>
                <a href="https://www.instagram.com/" className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full relative' >

                    <img src={instagram} alt="icon intagram" className='w-[11px] h-[11px] transition-opacity duration-300 hover:opacity-0' />
                    <img src={instagramHover} alt='Instagram Hover Icon'
                        className='w-[11px] h-[11px] absolute opacity-0 transition-all duration-300 hover:opacity-100' />

                </a>
                <a href="https://www.linkedin.com/" className='icon-bg-white flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full relative'>

                    <img src={linkedin} alt='icon linkedin' className='w-[11px] h-[11px] transition-opacity duration-300 hover:opacity-0' />
                    <img src={linkedinHover} alt='LinkedIn Hover Icon'
                        className='w-[11px] h-[11px] absolute opacity-0 transition-all duration-300 hover:opacity-100' />

                </a>
            </div>
            <div className='flex flex-col items-center justify-center text-white  gap-[20px] tablet:flex-row font-normal  '>
                <p className='tablet:text-[18px]  text-[14px] leading-[28px] desktop:text-[20px]'>&copy; 2024 Project Manager.All rights reserved.</p>
                <p className='tablet:text-[18px]  text-[14px] leading-[28px] desktop:text-[20px]'>Privacy Policy</p>
                <p className='tablet:text-[18px]  text-[14px] leading-[28px] desktop:text-[20px]' >Terms of Service</p>

            </div>
        </div>
    )
}

export default Footer