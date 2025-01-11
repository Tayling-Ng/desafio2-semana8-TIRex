import { Link } from 'react-router-dom'
import Img403  from '../../assets/img-error/Img403.svg'

const Error403Component = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
      <div className="flex justify-center">
        <img src={ Img403 } alt="Image Not Found" className="w-[157px] h-[206px]" />
      </div>
      <div className='flex flex-col items-center min-w-[230px] min-h-[196px] '>
        <h1 className='text-[86px]  leading-[36px]'>403</h1>
        <p className='xl:w-[440px] sd:w-[387px] xs:w-[257px] xs:text-center '>Nothing to see here... yet! To see this content, you need to 
          <Link to="/" className=" text-[#4F46E5] text-[15px] leading-[36px] text-end ">Login</Link> </p>
       
      </div>
    </div>
  )
}
export default Error403Component

