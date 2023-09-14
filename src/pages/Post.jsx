// import React, {useEffect, useState} from 'react';
// import {useAuth} from "../context.jsx";
// import axios from "axios";
//
// const PostCreate = () => {
//     const [auth] = useAuth();
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [category, setCategory] = useState('');
//
//
//     useEffect(() => {
//         LoadCategory();
//     }, []);
//
//     const LoadCategory = async () => {
//         try {
//             const {data} = await axios.get('http://localhost:4000/api/v1/getCategory');
//             setCategory(data);
//             console.log(data);
//         } catch (error) {
//             alert("Error loading category")
//         }
//     };
//
//
//
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:4000/api/v1/createProduct', {
//                 name,
//                 price,
//             });
//             alert("Post created successfully");
//         } catch (error) {
//             alert("Error creating post")
//         }
//     }
//
//     const logout = () => {
//         localStorage.removeItem('auth');
//         window.location.href = '/login';
//     }
//
//     if (!auth.user) {
//         return (
//             <div>
//                 <p>You are not logged in.</p>
//                 <a href="/login">Login</a>
//             </div>
//         )
//     }
//     else if (auth.user.role !== 'admin') {
//         return (
//             <div>
//                 <h1>You are not admin</h1>
//                 <button onClick={logout}>Logout</button>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 <h1>Create Post</h1>
//
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="name">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(event) => setName(event.target.value)}
//                         />
//
//                         <leble htmlFor="price">Price</leble>
//                         <input
//                             type="text"
//                             id="price"
//                             value={price}
//                             onChange={(event) => setPrice(event.target.value)}
//                         />
//
//                         <leble htmlFor="category">Category</leble>
//                         <select
//                             id="category"
//                             value={category}
//                             onChange={(event) => setCategory(event.target.value)}
//                         >
//                             <option value="category">Category</option>
//                             {category?.map((c) => (
//                                 <option key={c._id} value={c._id}>
//                                     {c.name}
//                                 </option>
//                             ))}
//                         </select>
//
//
//
//
//                     </div>
//                     <button type="submit">Create Post</button>
//                 </form>
//                 <h1>
//                     you want to logout?
//                 </h1>
//                 <button onClick={logout}>Logout</button>
//             </div>
//         );
//     }
// };
//
// export default PostCreate;





//
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context.jsx';
// import axios from 'axios';
//
// const PostCreate = () => {
//     const [auth] = useAuth();
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [category, setCategory] = useState([]); // Initialize as an empty array
//
//     useEffect(() => {
//         LoadCategory();
//     }, []);
//
//     const LoadCategory = async () => {
//         try {
//             const { data } = await axios.get('http://localhost:4000/api/v1/getCategory');
//             setCategory(data);
//             console.log(data);
//         } catch (error) {
//             alert('Error loading category');
//         }
//     };
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try{
//             const ProductData = new FormData();
//             ProductData.append('name', name);
//             ProductData.append('price', price);
//             ProductData.append('category', category);
//             const {data} = await axios.post('http://localhost:4000/api/v1/createProduct', ProductData);
//             alert("Post created successfully");
//         }
//         catch(error){
//             alert("Error creating post")
//         }
//     };
//
//     const logout = () => {
//         localStorage.removeItem('auth');
//         window.location.href = '/login';
//     };
//
//     if (!auth.user) {
//         return (
//             <div>
//                 <p>You are not logged in.</p>
//                 <a href="/login">Login</a>
//             </div>
//         );
//     } else if (auth.user.role !== 'admin') {
//         return (
//             <div>
//                 <h1>You are not admin</h1>
//                 <button onClick={logout}>Logout</button>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <h1>Create Post</h1>
//
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="name">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(event) => setName(event.target.value)}
//                         />
//
//                         <label htmlFor="price">Price</label>
//                         <input
//                             type="text"
//                             id="price"
//                             value={price}
//                             onChange={(event) => setPrice(event.target.value)}
//                         />
//
//                         <label htmlFor="category">Category</label>
//                         <select
//                             id="category"
//                             value={category ? category._id : ''}
//                             onChange={(event) => setCategory(event.target.value)}
//                         >
//                             <option value="category">Category</option>
//                             {category && Array.isArray(category) && category.map((c) => (
//                                 <option key={c._id} value={c._id}>
//                                     {c.name}
//                                 </option>
//                             ))}
//                         </select>
//
//
//                     </div>
//                     <button type="submit">Create Post</button>
//                 </form>
//                 <h1>Do you want to logout?</h1>
//                 <button onClick={logout}>Logout</button>
//             </div>
//         );
//     }
// };
//
// export default PostCreate;





import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {getToken,getRole} from "../helper/Token.jsx";

const PostCreate = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(''); // Initialize as an empty string
    const [categories, setCategories] = useState([]); // Initialize as an empty array

    const token = getToken();
    const role = getRole();

    useEffect(() => {
        LoadCategory();
    }, []);

    const LoadCategory = async () => {
        try {
            const { data } = await axios.get('http://localhost:4000/api/v1/getCategory',{
                headers: {
                    token: token,
                    role: role
                }
            });
            setCategories(data);

        } catch (error) {
            console.error('Error loading category:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const ProductData = {
                name,
                price,
                category,
            };
            const { data } = await axios.post('http://localhost:4000/api/v1/createProduct',ProductData,{
                headers: {
                    token: token,
                    role: role
                }
            },);
            alert('Post created successfully');
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Error creating post');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/login';
    };

    if (!token) {
        return (
            <div>
                <p>You are not logged in.</p>
                <a href="/login">Login</a>
            </div>
        );
    } else if (role !== 'admin') {
        return (
            <div>
                <h1>You are not admin</h1>
                <button onClick={logout}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Create Post</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />

                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <option value="">Select a category</option>
                            {categories.map((c) => (
                                <option key={c._id} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Create Post</button>
                </form>
                <h1>Do you want to logout?</h1>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }
};

export default PostCreate;








