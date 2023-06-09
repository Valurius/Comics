import UploadFile from "../components/UploadFile";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/upload', element:<UploadFile/>},
    {path: '/about', element:<About/>},
    {path: '/posts', element:<Posts/>, exact:true},
    {path: '/posts/:id', element:<PostIdPage/>, exact:true},
    {path: '/error', element:<Error/>},
]

export const publicRoutes = [
    {path: '/login', element:<Login/>},
]