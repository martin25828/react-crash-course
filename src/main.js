import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Posts'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import NewPost from "./routes/NewPost";

const router = createBrowserRouter([
    {path:'/', element: <NewPost/>},
    {path:'/create-post', element: <NewPost/>}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <RouterProvider router={router}/>
    </React.StrictMode>
)
