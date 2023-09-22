import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import {getToken,getRole,getsId} from "../helper/Token.jsx";

const Summary = () => {
    let token = getToken();
    let role = getRole();
    let id = getsId();
    let [tasks, setTasks] = useState([]);


    useEffect(() => {
        TaskBycount();
    } , []);


    let TaskBycount = async () => {
        try{
            const response = await axios.get('http://localhost:4000/api/v1/TaskBycount', {
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
            <h1>Summary</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Count</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <tr key={task._id}>
                        <td>{task.status}</td>
                        <td>{task.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default Summary;