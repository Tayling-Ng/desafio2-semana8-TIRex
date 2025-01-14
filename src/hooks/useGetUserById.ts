
import axios from 'axios';
import { useCallback, useState } from "react";

interface IUser {
    id:string,
    createdAt:string,
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


const useGetUserById = () => {
   
    const [loading, setLoading] = useState(false); 
    const  [ user, setUser] =  useState<IUser | undefined>(undefined)

    
    const getUserById = useCallback(async (id:string) => {
        setLoading(true); 

        const response = await axios.get(`http://localhost:3000/users/${id}`)
        console.log('deu certo', response.data)
        setUser(response.data)
        setLoading(false)

    }, []);

    return {
        getUserById,
        user, 
        loading
       
        
    };
};

export default useGetUserById









