import React, {useEffect, useState} from 'react';
 import axios from "axios";
    import {getToken,getRole} from "../helper/Token.jsx";
    import {useNavigate, useParams} from "react-router-dom";



const UpdateForm = () => {
    let {postId} = useParams();
    let navigate = useNavigate();
    const token = getToken();
    const role = getRole();
    let [formDate, setFormData] = useState({
        name: '',
        price: '',
    });
    let [data, setData] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/getProductById/${postId}`, {
                    headers: {
                        token: token,
                        role: role
                    }
                });
                const fetchedPost = response.data;
                setFormData(fetchedPost);
                setData(true);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        getPost();
    }, [data]);

    const handleChange = (e) => {
        setFormData({
            ...formDate,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/api/v1/updateProduct/${postId}`, formDate, {
                headers: {
                    token: token,
                    role: role
                }
            });
            const fetchedPost = response.data;
            setFormData(fetchedPost);
            setData(true);
            alert('Post Updated')
            navigate('/postList');
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };


    return (
        <div>
            <h1>Update Post</h1>
            <input type="text" name="name" value={formDate.name} onChange={handleChange}/>
            <input type="text" name="price" value={formDate.price} onChange={handleChange}/>
            <button onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default UpdateForm;