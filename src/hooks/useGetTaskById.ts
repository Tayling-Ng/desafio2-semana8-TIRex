
import axios from 'axios';
import { useCallback, useState } from "react";


interface ITask {
    id: string;
    priority: string;
    title: string;
    members: string[];
    commentsCount: number;
    progress: number;
    startDate: string;
    endDate: string;
    timeEstimate: string;
    createdBy: string;
}


const useGetTaskById = () => {
   
    const [loading, setLoading] = useState(false); 
    const  [ task, setTask] =  useState<ITask | undefined>(undefined)

    
    const getTaskById = useCallback(async (id:string) => {
        setLoading(true); 

        const response = await axios.get(`http://localhost:3000/tasks/${id}`)
        console.log('deu certo', response.data)
        setTask(response.data)
        setLoading(false)

    }, []);

    return {
        getTaskById,
        task, 
        loading
       
        
    };
};

export default useGetTaskById









