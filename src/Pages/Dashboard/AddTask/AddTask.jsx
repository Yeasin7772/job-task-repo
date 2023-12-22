// TaskForm.js

import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';

const AddTask = ({ onSubmit }) => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (totoList) => {
        const email = user?.email
        const createData = { totoList, email }
        console.log(totoList)

        axiosPublic.post('/job', createData)
        
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success(' Successful added ')
                }
            })
            .catch(error => {
                console.error("Error  post request:", error);
            });
        // send data in data base 
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full md:w-full mx-auto p-4 bg-white shadow-md rounded ">
            <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Create Task</h2>
            <label htmlFor="title" className="block text-xl font-medium text-gray-700">
                Title
            </label>
            <input
                type="text"
                id="title"
                {...register('title', { required: true })}
                className="mt-1 p-2 w-full border rounded-md  border-gray-300 focus:outline-[#5bbb7b]"
            />

            <label htmlFor="description" className=" text-xl block mt-4  font-medium text-gray-700">
                Description
            </label>
            <textarea
                id="description"
                {...register('description')}
                className="mt-1 p-2 w-full border rounded-md h-28  border-gray-300 focus:outline-[#5bbb7b]"
            />

            <label htmlFor="deadline" className="block mt-4 text-xl font-medium text-gray-700">
                About Deadline
            </label>
            <input
                type="date"
                id="deadline"
                {...register('deadline')}
                className="mt-1 p-2 w-full border rounded-md"
            />

            <label htmlFor="priority" className="block mt-4 text-xl font-medium text-gray-700">
                Priority
            </label>
            <select id="priority" {...register('priority')} className="mt-1 text-xl p-2 w-full border rounded-md ">
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
            </select>

            <button type="submit" className="mt-4 bg-[#5bbb7b] hover:bg-[#198754] text-white w-full font-semibold p-2 rounded-md">
                Add Task
            </button>
        </form>
    );
};

export default AddTask;

