import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NewPost, {action as postActionPosts} from './routes/NewPost';
import './index.css'
import RootLayout from "./routes/RootLayout";
import Posts, {loader as postLoader} from "./routes/Posts";
import PostDetails, {loader as postDetailLoader} from "./routes/PostDetails";

const router = createBrowserRouter([
    {   path: '/',
        element: <RootLayout />,
        children:[
            { path: '/',
              element: <Posts />,
              loader: postLoader,
              children: [
              { path: '/create-post', element: <NewPost />, action: postActionPosts },
              { path: '/:postId', element: <PostDetails />, loader: postDetailLoader }
                ]}
            ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

