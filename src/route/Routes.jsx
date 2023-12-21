
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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <Services></Services>
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
