import axios from 'axios'
import { useCallback, useState } from "react"

 
 
interface ICreateUser {
   
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    role: string,
    socials: {
      twitter: string,
      instagram: string,
      linkedin: string,
    }
}

const useCreateUser = () =>{

    const [ isSubmit, setIsSubmit ] = useState(false)

    const createTask = useCallback(async (user: ICreateUser) => {
 
        setIsSubmit(true)
 
        console.log('valores recebidos', user)
        const id = Math.random().toString(36).substring(2, 15)
        const createdAt = new Date().toISOString()
        const response = await axios.post('http://localhost:3000/users', { id,createdAt, ...user })
        console.log('deu certo a criação no db.json', response.data)
 
        setIsSubmit(false)
    }, [])
 
 
    return {
        createTask,
        isSubmit
    }

}
export default useCreateUser