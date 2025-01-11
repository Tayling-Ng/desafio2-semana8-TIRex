import { Link } from 'react-router-dom'
import ImgNotFound from '../../assets/page-not-found/ImgNotFound.svg'

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-[55px]  tablet:flex-row tablet:gap-[44px] tablet:px-[21px]  '>
    
        <img src={ImgNotFound} alt="Image Not Found" className="w-[202px] h-[189px] tablet:w-[334px] tablet:h-[439px]" />
     
      <div className='flex flex-col items-center tablet:items-start'>
        <h1 className='text-[86px] font-normal leading-[36px] text-center'>404</h1>
        <p className='text-[18px]  leading-[36px] text-center font-normal w-[230px] mt-[40px] tablet:text-start desktop:w-[440px] desktop:text-[24px]'>Oops! Nothing to see here, just a lost kanban task.</p>
        <Link to="/" className=" text-[#4F46E5] text-[15px] leading-[36px] font-bold mt-[10px] underline tablet:self-end">Go back to home</Link>
      </div>
    </div>
  )
}
export default PageNotFound
