import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetail from "../Pages/CourseDetails/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";
import MainCourseField from "../Pages/MainCourseField/MainCourseField";
import PageNotFound from "../Pages/PageNoteFound/PageNotFound";
import PrivateRoutes from "./PrivateRoutes";


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
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/category/:id',
                element: <MainCourseField></MainCourseField>,
                loader: ({ params }) => fetch(`https://akadimia-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://akadimia-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://akadimia-server.vercel.app/checkout/${params.id}`)
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
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
]);

