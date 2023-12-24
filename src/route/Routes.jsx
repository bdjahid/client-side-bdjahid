
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Services from "../pages/Home/Services/Services";
import AddService from "../pages/AddService/AddService";
import MyServices from "../pages/MyServices/MyServices";
import MySchedules from "../pages/MySchedules/MySchedules";
import ViewDetails from "../pages/Home/ViewDetails/ViewDetails";
import SingleServices from "../pages/Home/SingleServices/SingleServices";
import PrivateRoute from './PrivateRoute';
import ManageService from "../pages/Home/ManageService/ManageService";
import Booking from "../pages/Home/Booking/Booking";
import Update from "../pages/Update/Update";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b8a11-server-side-bdjahid.vercel.app/services')
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('https://b8a11-server-side-bdjahid.vercel.app/product')
            },
            {
                path: "/singleservices",
                element: <SingleServices></SingleServices>
            },
            {
                path: "/manageservice",
                element: <ManageService></ManageService>
            },
            {
                path: "/services/:id",
                element: <PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-bdjahid.vercel.app/services/${params.id}`)
            },
            {
                path: "/booking/:id",
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-bdjahid.vercel.app/services/${params.id}`)
            },
            {
                path: "/addservices",
                element: <AddService></AddService>
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-bdjahid.vercel.app/product/${params.id}`)
            },
            {
                path: "/myservices",
                element: <PrivateRoute>
                    <MyServices></MyServices>
                </PrivateRoute>,
            },
            {
                path: "/myshedules",
                element: <PrivateRoute>
                    <MySchedules></MySchedules>
                </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;
