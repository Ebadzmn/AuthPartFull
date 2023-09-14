//
//
//
//
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";
//
//
//
// const Home = () => {
//     const [auth] = useAuth();
//     const [users, setUsers] = useState([]);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const getUsers = async () => {
//             try {
//                 const cachedUsers = JSON.parse(localStorage.getItem('users'));
//                 if (cachedUsers) {
//                     setUsers(cachedUsers);
//                 }
//
//                 const response = await axios.get('http://localhost:4000/api/v1/getUsers');
//                 const fetchedUsers = response.data;
//                 setUsers(fetchedUsers);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//
//         getUsers();
//     }, [
//     ]);
//
// const logout = () => {
//     localStorage.removeItem('auth');
//     // localStorage.removeItem('users');
//     window.location.href = '/login';
// }
//
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
//     else if (auth.user.role === 'admin') {
//         return (
//             <div>
//                 <h1>Home</h1>
//                 <ul>
//                     {users.map((user) => (
//                         <li key={user.id}>{user.name}</li>
//                     ))}
//                 </ul>
//
//                 <button onClick={logout}>Logout</button>
//                 <button onClick={() => navigate("/post")}>Create Post</button>
//
//             </div>
//         );
//     }
// };
// export default Home;
























// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";
//
//
//
// const Home = () => {
//     const [auth] = useAuth();
//     const [users, setUsers] = useState([]);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const getUsers = async () => {
//            try{
//                   const response = await axios.get('http://localhost:4000/api/v1/getUsers');
//                     const fetchedUsers = response.data;
//                     setUsers(fetchedUsers);
//            }
//               catch(error){
//                     console.error('Error fetching users:', error);
//               }
//         };
//
//         getUsers();
//     }, [
//     ]);
//
// const logout = () => {
//     localStorage.removeItem('auth');
//     // localStorage.removeItem('users');
//     window.location.href = '/login';
// }
//
//
//     if (!auth.role) {
//         return (
//             <div>
//                 <p>You are not logged in.</p>
//                 <a href="/login">Login</a>
//             </div>
//         )
//     }
//     else if (auth.role !== 'admin') {
//         return (
//             <div>
//                 <h1>You are not admin</h1>
//                 <button onClick={logout}>Logout</button>
//             </div>
//         )
//     }
//     else if (auth.role === 'admin') {
//         return (
//             <div>
//                 <h1>Home</h1>
//                 <ul>
//                     {users.map((user) => (
//                         <li key={user.id}>{user.name}</li>
//                     ))}
//                 </ul>
//
//                 <button onClick={logout}>Logout</button>
//                 <button onClick={() => navigate("/post")}>Create Post</button>
//
//             </div>
//         );
//     }
// };
// export default Home;


















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {getToken,getRole} from "../helper/Token.jsx";


const Home = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // const token = localStorage.getItem('token');
        // const role = localStorage.getItem('role');
        const token = getToken();
        const role = getRole();
        const getUsers = async () => {
           try{
                  const response = await axios.get('http://localhost:4000/api/v1/getUsers', {
                        headers: {
                            token: token,
                            role: role
                        }
                  });
                    const fetchedUsers = response.data;
                    setUsers(fetchedUsers);


           }
              catch(error){
                    console.error('Error fetching users:', error);
              }
        };

        getUsers();
    }, [
    ]);

const logout = () => {
    localStorage.removeItem('auth');
    // localStorage.removeItem('users');
    window.location.href = '/login';
}

if(getRole() === 'admin'){
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <button onClick={logout}>Logout</button>
            <button onClick={() => navigate("/post")}>Create Post</button>

        </div>
    );
}

else if(getRole() !== 'admin'){

    return (
        <div>
            <h1>Home</h1>
           <h1> You are not admin</h1>

            <button onClick={logout}>Logout</button>

        </div>
    );
}

};
export default Home;







