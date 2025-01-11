import { Link } from 'react-router-dom'
import ImgNotFound from '../../assets/page-not-found/ImgNotFound.svg'

const PageNotFoundComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className="flex justify-center">
        <img src={ImgNotFound} alt="Image Not Found" className="min-w-[300px] min-h-[200px]" />
      </div>
      <div className='flex flex-col items-center min-w-[230px] min-h-[196px]'>
        <h1 className='text-[86px] font-bold leading-[36px] text-center'>404</h1>
        <p className='text-[18px]  leading-[36px] text-center '>Oops! Nothing to see here, just a lost kanban task.</p>
        <Link to="/" className=" text-[#4F46E5] text-[15px] leading-[36px] text-end ">Go back to home</Link>
      </div>
    </div>
  )
}
export default PageNotFoundComponent
