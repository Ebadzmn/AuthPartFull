import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {getToken,getRole,getsId} from "../helper/Token.jsx";

const Task = () => {
    let [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    const token = getToken();
    const role = getRole();
    const id = getsId();

    useEffect(() => {
        getTasks();
    }, []);

    let getTasks = async () => {
        try{
            const response = await axios.get('http://localhost:4000/api/v1/GetTaskByUser', {
                headers: {
                    token: token,
                    role: role,
                    id: id
                }
            });
            const fetchedTasks = response.data;
            setTasks(fetchedTasks);
        }
        catch(error){
            console.error('Error fetching tasks:', error);
        }
    }
    return (
        <div>
            <h1>Tasks</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status}</td>
                        <button className="btn btn-primary" onClick={() => navigate(`/taskUpdate/${task._id}`)}>Update</button>
                    </tr>
                ))}
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={() => navigate(`/taskByStatus/Completed`)}>Completed</button>
            <button className="btn btn-primary" onClick={() => navigate(`/taskByStatus/In Progress`)}>In Progress</button>
            <button className="btn btn-primary" onClick={() => navigate(`/taskByStatus/Deleted`)}>Deleted</button>

            <button className="btn btn-primary" onClick={() => navigate(`/summary`)}>Summary</button>

        </div>
    );
};

export default Task;