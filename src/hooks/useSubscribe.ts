import { useState } from "react"
import axios from "axios"

interface ISubscribe {
    name: string
    email: string
    
}



const useSubscribe =() =>{


    const [isSubmit , setIsSubmit] = useState(false)



  const createSubscribe = async (data:ISubscribe) =>{

    setIsSubmit(true)
    const response = await axios.post('http://localhost:3000/subscribe', data)

    console.log(response.data)


    setIsSubmit(false)

  }
  return {
    isSubmit,
    createSubscribe
  }

}
export default useSubscribe