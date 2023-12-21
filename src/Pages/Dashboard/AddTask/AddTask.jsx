// TaskForm.js

import { useForm } from 'react-hook-form';

const AddTask = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data)
        // onSubmit(data);
        // send data in data base 
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full md:w-2/3 mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Create New Task</h2>
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

            <label htmlFor="deadline" className="block mt-4 text-sm font-medium text-gray-700">
                Deadline
            </label>
            <input
                type="date"
                id="deadline"
                {...register('deadline')}
                className="mt-1 p-2 w-full border rounded-md"
            />

            <label htmlFor="priority" className="block mt-4 text-sm font-medium text-gray-700">
                Priority
            </label>
            <select id="priority" {...register('priority')} className="mt-1 p-2 w-full border rounded-md">
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

