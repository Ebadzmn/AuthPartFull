
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import PostCreate from "./pages/Post.jsx";
import PostList from "./pages/PostList.jsx";
import UpdateForm from "./pages/UpdateForm.jsx";
import Task from "./pages/task.jsx";
import TaskUpdate from "./pages/TaskUpdate.jsx";
import TaskByStatus from "./pages/TaskByStatus.jsx";
import Summary from "./pages/Summary.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/post" element={<PostCreate/>}/>
                <Route path="/postList" element={<PostList/>}/>
                <Route path="/update/:postId" element={<UpdateForm/>}/>
                <Route path="/task" element={<Task/>}/>
                <Route path="/taskUpdate/:TaskId" element={<TaskUpdate/>}/>
                <Route path="/taskByStatus/:TaskStatus" element={<TaskByStatus/>}/>
                <Route path="/summary" element={<Summary/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
