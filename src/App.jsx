
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import PostCreate from "./pages/Post.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/post" element={<PostCreate/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
