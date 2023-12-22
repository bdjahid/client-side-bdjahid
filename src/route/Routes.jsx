
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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: "/services",
                element: <Services></Services>
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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/booking/:id",
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/addservices",
                element: <AddService></AddService>
            },
            {
                path: "/myservices",
                element: <MyServices></MyServices>
            },
            {
                path: "/myshedules",
                element: <MySchedules></MySchedules>
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
