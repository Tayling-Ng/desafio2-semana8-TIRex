import axios from 'axios'
import { useState } from "react"


interface ICreateTask {
    priority: string
    title: string
    members: string[]
    commentsCount: number
    progress: number
    startDate: string
    endDate: string
    timeEstimate: string
    createdBy: string
}


const useCreateTask = () => {


    const [isSubmit, setIsSubmit] = useState(false)


    const createTask = async (task: ICreateTask) => {

        setIsSubmit(true)

        console.log('valores recebidos', task)
        const id = Math.random().toString(36).substring(2, 15)
        const response = await axios.post('http://localhost:3000/tasks', { id, ...task })
        console.log('deu certo a criação no db.json', response.data)

        setIsSubmit(false)
    }


    return {
        createTask,
        isSubmit
    }
}

export default useCreateTask

