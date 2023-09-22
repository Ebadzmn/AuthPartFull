import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getToken,getRole} from "../helper/Token.jsx";
import {Link,useNavigate} from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const token = getToken();
    const role = getRole();
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/getProduct', {
                    headers: {
                        token: token,
                        role: role
                    }
                });
                const fetchedPosts = response.data;
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        getPosts();
    }, [

    ]);



    const getPost = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/getProduct', {
                headers: {
                    token: token,
                    role: role
                }
            });
            const fetchedPosts = response.data;
            setPosts(fetchedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };





    let handleDelete = async (postId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/v1/deleteProduct/${postId}`, {
                headers: {
                    token: token,
                    role: role
                }
            });

            getPost();





        } catch (error) {
            console.log (error);
        }
    };


    return (
        <div>
            <h1>Post List</h1>
            <card>
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>
                            <h3>{post.name}</h3>
                            <p>{post.price}</p>
                            <button>
                                <Link to={`/update/${post._id}`}>Update</Link>
                            </button>
                            <button onClick={() => handleDelete(post._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </card>
        </div>
    );
};

export default PostList;