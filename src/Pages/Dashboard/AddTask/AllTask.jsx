import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const AllTask = () => {

    const axiosPublic = useAxiosPublic()
    const [allData, setAllData] = useState([])


    useEffect(() => {
        axiosPublic.get("/job")
            .then((res) => {
                //console.log(res.data);
                setAllData(res.data)
            });
    }, [axiosPublic]);
    console.log(allData);










    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://job-task-server-tau.vercel.app/job/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your job has been deleted.',
                                    'success'
                                )
                            }
                        });
                }
            });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-blue-400 uppercase">
                            <th>#</th>
                            <th>title</th>
                            <th>description</th>
                            <th>deadline</th>
                            <th>priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData?.map((item, index) => <tr key={item?._id}>
                                <th>{++index}</th>
                                <td>{item?.totoList?.title}</td>
                                <td>{item?.totoList?.description}</td>
                                <td>{item?.totoList?.deadline}</td>
                                <td>{item?.totoList?.priority}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    <Link to={`/update/${item?._id}`}>
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded">Update</button>
                                    </Link>


                                </td>

                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllTask;