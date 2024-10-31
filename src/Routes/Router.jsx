import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import AddSpot from "../Pages/AddSpot/AddSpot";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllSpots from "../Pages/AllSpots/AllSpots";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, {
                path: "/logIn",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addSpot",
                element: <AddSpot></AddSpot>
            }, {
                path: "/allSpots",
                element: <AllSpots></AllSpots>
            }, {
                path: "/spot/:id",
                element: <ViewDetails></ViewDetails>
            }
        ]

    }
])