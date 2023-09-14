// import { useState, createContext, useContext, useEffect } from "react";
// import axios from "axios";
//
// const AuthContext = createContext();
//
// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//     });
//
//
//
//
//
//     axios.defaults.headers.common["token"] = auth?.token;
//
//
//
//     useEffect(() => {
//
//
//         const storedAuth = localStorage.getItem('auth');
//         if (storedAuth) {
//             setAuth(JSON.parse(storedAuth));
//         }
//     }, [
//
//     ]);
//
//
//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// const useAuth = () => useContext(AuthContext);
//
// export { useAuth, AuthProvider };













//
//
// import { useState, createContext, useContext, useEffect } from "react";
// import axios from "axios";
//
// const AuthContext = createContext();
//
// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         token: "",
//     });
//
//
//
//
//
//     axios.defaults.headers.common["token"] = auth?.token;
//
//
//
//     useEffect(() => {
//
//
//         const storedAuth = localStorage.getItem('token');
//         if (storedAuth) {
//             const parsedAuth = JSON.stringify(storedAuth);
//             setAuth({...auth, token : parsedAuth.token})
//             setAuth(parsedAuth)
//         }
//     }, [
//
//     ]);
//
//
//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// const useAuth = () => useContext(AuthContext);
//
// export { useAuth, AuthProvider };


















//
// import { useState, createContext, useContext, useEffect } from "react";
// import axios from "axios";
//
// const AuthContext = createContext();
//
// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//     });
//
//     useEffect(() => {
//         const storedAuth = localStorage.getItem('auth');
//         if (storedAuth) {
//             const parsedAuth = JSON.parse(storedAuth);
//             // Update the auth state with the parsed values
//             setAuth(parsedAuth);
//             // Set the axios default token header
//             axios.defaults.headers.common["token"] = auth.token;
//         }
//     }, []);
//
//     // Function to update the auth state and also store it in localStorage
//     const updateAuth = (newAuth) => {
//         setAuth(newAuth);
//         localStorage.setItem('auth', JSON.stringify(newAuth));
//         axios.defaults.headers.common["token"] = newAuth.token;
//     };
//
//     return (
//         <AuthContext.Provider value={[auth, updateAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// const useAuth = () => useContext(AuthContext);
//
// export { useAuth, AuthProvider };
