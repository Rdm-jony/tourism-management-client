import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import AddSpot from "../Pages/AddSpot/AddSpot";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllSpots from "../Pages/AllSpots/AllSpots";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyList from "../Pages/MyList/MyList";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UpdateSpot from "../Pages/UpdateSpot/UpdateSpot";

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
                loader: ({ params }) => fetch(`http://localhost:5000/spot/details/${params.id}`),
                element: <ViewDetails></ViewDetails>
            }, {
                path: "/myList",
                element: <MyList></MyList>
            }, {
                path: "/updateSpot",
                element: <UpdateSpot></UpdateSpot>
            }
        ]

    }
])