import axios from 'axios';
import { useState } from "react";

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


const useGetUserByEmail = () => {
   
    const [loading, setLoading] = useState(false); 
    const  [ user, setUser] =  useState<IUser | undefined>(undefined)

    
    const getUserByEmail = async (email: string) => {
        setLoading(true); 

        const response = await axios.get(`http://localhost:3000/users/?email=${email}`)
        console.log('deu certo', response.data)
        setUser(response.data[0])
        setLoading(false)
        return response.data[0] as IUser
    };

    return {
        getUserByEmail,
        user, 
        loading
       
        
    };
};

export default useGetUserByEmail