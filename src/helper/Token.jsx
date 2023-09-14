const setToken = (token) => {
    localStorage.setItem("token", token);
}

const getToken = () => {
    return localStorage.getItem("token");
}

const setRole = (role) => {
    localStorage.setItem("role", role);
}

const getRole = () => {
    return localStorage.getItem("role");
}
const setsEmail = (email) => {
    localStorage.setItem("email", email);
}

export { setToken, getToken, setRole, getRole,setsEmail };