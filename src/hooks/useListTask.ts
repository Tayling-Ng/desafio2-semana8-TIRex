
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


const useListTask = () => {
   
    const [loading, setLoading] = useState(false); 
    const [listTask, setListTask] =  useState<ITask[]>([])

    
    const getListTasks = useCallback(async () => {
        setLoading(true); 

        const response = await axios.get('http://localhost:3000/tasks')
        console.log('deu certo', response.data)
        setListTask(response.data)
        setLoading(false)

    }, []);

    return {
        getListTasks,
        listTask, 
        loading
       
        
    };
};

export default useListTask









