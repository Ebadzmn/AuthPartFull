import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import {getToken,getRole,getsId} from "../helper/Token.jsx";


const TaskUpdate = () => {
    let {TaskId} = useParams();
    let [formDate, setFormData] = useState({
        status : 'Completed',
    })
    let [tasks, setTasks] = useState(false);
    const navigate = useNavigate();

    const token = getToken();
    const role = getRole();
    const id = getsId();

    let handleChange = (e) => {
        setFormData({
            ...formDate,
            [e.target.name]: e.target.value
        });
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.put(`http://localhost:4000/api/v1/UpdateTask/${TaskId}`, formDate, {
                headers: {
                    token: token,
                    role: role,
                    id: id
                }
            });
            const fetchedTasks = response.data;
            setTasks(fetchedTasks);
            setTasks(true)
            alert('Task Updated')
            navigate('/task');
        }
        catch(error){
            console.error('Error fetching tasks:', error);
        }
    }
    return (
        <div>
            <h1>Update Task</h1>
            <select
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="status"
                value={formDate.status}
                onChange={handleChange}
            >
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Deleted">Deleted</option>
            </select>
            <button className="btn btn-primary" onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default TaskUpdate;