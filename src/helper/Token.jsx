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

let setsId = (id) => {
    localStorage.setItem("id", id);
}

let getsId = () => {
    return localStorage.getItem("id");
}

export { setToken, getToken, setRole, getRole,setsEmail,setsId,getsId};