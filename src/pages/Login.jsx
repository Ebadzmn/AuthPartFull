// import React, {useState} from 'react';
// import axios from 'axios';
// import { useAuth } from '../context';
// import { useNavigate } from 'react-router-dom';
//
// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [auth, setAuth] = useAuth();
//     const navigate = useNavigate();
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         try{
//             const {data} = await axios.post("http://localhost:4000/api/v1/login", {
//                 email,
//                 password,
//             });
//             console.log(data);
//             if(data?.error){
//                 alert(data.error);
//             }
//             else{
//                 // localStorage.setItem("auth", JSON.stringify(data));
//                 // setAuth({
//                 //     ...auth,token: data.token, user: data.user,
//                 // });
//
//                 localStorage.setItem('auth', JSON.stringify(data));
//                 setAuth(data);
//
//
//
//                 navigate("/home");
//             }
//         }
//         catch(err){
//             console.log(err);
//         }
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };
//
// export default Login;






















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// import { useNavigate } from 'react-router-dom';
//
// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         setError(null);
//     }, [email, password]);
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         if (!email || !password) {
//             setError("Please provide both email and password.");
//             return;
//         }
//
//         setLoading(true);
//
//         try {
//             const { data } = await axios.post("http://localhost:4000/api/v1/login", {
//                 email,
//                 password,
//             });
//
//             if (data?.error) {
//                 setError(data.error);
//             } else {
//                 // localStorage.setItem('auth', JSON.stringify(data));
//                 // setAuth({
//                 //     ...auth,
//                 //     token: data.token,
//                 //      user: data.user.role,
//                 // })
//
//                 localStorage.setItem('token', data.token);
//                 localStorage.setItem('role', data.user.role);
//                 navigate("/home");
//             }
//         } catch (err) {
//             setError("An error occurred during login.");
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return (
//         <div>
//             <h1>Login</h1>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit" disabled={loading}>Login</button>
//             </form>
//         </div>
//     );
// };
//
// export default Login;













import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {getToken,setToken,getRole,setRole,setsEmail,setsId} from "../helper/Token.jsx";

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setError(null);
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please provide both email and password.");
            return;
        }

        setLoading(true);

        try {
            const { data } = await axios.post("http://localhost:4000/api/v1/login", {
                email,
                password,
            });

            if (data?.error) {
                setError(data.error);
            } else {
                // localStorage.setItem('auth', JSON.stringify(data));
                // setAuth({
                //     ...auth,
                //     token: data.token,
                //      user: data.user.role,
                // })

                // localStorage.setItem('token', data.token);
                // localStorage.setItem('role', data.user.role);

                setToken(data.token);
                setRole(data.user.role);
                setsEmail(data.user.email);
                setsId(data.user._id);
                navigate("/home");
            }
        } catch (err) {
            setError("An error occurred during login.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" disabled={loading}>Login</button>
            </form>
        </div>
    );
};

export default Login;
