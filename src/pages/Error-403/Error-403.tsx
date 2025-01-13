import { Link } from 'react-router'
import  Img403  from '../../assets/img-error/Img403.svg'

const Error403 = () => {
  return (
    <div className='h-full flex flex-col gap-[48px] justify-center items-center tablet:flex-row tablet:gap-[33px]'>
      <img src={Img403} alt="Image unauthorized " className='w-[157px] h-[206px] tablet:w-[323px] tablet:h-[367px] desktop:w-[367px] desktop:h-[367px]' />
      <div className='flex flex-col justify-center items-center gap-[48px] tablet:items-start '>
      <h1 className='font-normal text-[96px] leading-[36px] '>403</h1>
      <p className='text-[18px] font-normal leading-[36px] w-[254px] text-center tablet:w-[387px] tablet:text-start tablet:text-[24px] desktop:w-[440px] '>Nothing to see here... yet! To see this content, you need to<Link to='/login' className='underline text-[#4f46e5] font-bold'> log in.</Link> </p>
      </div>
    </div>
  )
}

export default Error403