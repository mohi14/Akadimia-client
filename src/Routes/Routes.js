import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import CoursesField from "../Pages/Courses/CoursesField/CoursesField";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/category/:id',
                        element: <CoursesField></CoursesField>,
                        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
    ,
    {
        path: '/login',
        element: <LogIn></LogIn>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
]);

