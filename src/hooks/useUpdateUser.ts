import axios from 'axios'
import { useState } from 'react'

interface IUser {
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: string;
    socials?: {
        twitter?: string;
        instagram?: string;
        linkedin?: string;
    };
}

const useUpdateUser = () => {

    const [isSubmit, setLoading] = useState(false);
    

    const userUpdateById = async (id: string, user:IUser) => {
        setLoading(true)

        const response = await axios.put(`http://localhost:3000/users/${id}`,user)
        console.log('deu certo', response.data)
        
        setLoading(false)

    }

    return {
        userUpdateById,
        isSubmit,
      
    }
}
export default useUpdateUser

