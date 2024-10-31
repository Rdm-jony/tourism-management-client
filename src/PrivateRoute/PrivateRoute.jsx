import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center mt-10"><span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/logIn" state={location?.pathname}></Navigate>
};

export default PrivateRoute;