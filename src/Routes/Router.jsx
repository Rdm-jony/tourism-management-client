import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/AddSpot/AddSpot";
import AddSpot from "../Pages/AddSpot/AddSpot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, {
                path: "logIn",
                element: <LogIn></LogIn>
            }, {
                path: "/addSpot",
                element: <AddSpot></AddSpot>
            }
        ]

    }
])