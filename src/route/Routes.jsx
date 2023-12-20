
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Shared/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/program.json')
            },

            {
                path: "/login",
                element: <Login></Login>
            },
            // {
            //     path: "/register",
            //     element: <Register></Register>
            // }
        ]
    },
]);

export default router;
