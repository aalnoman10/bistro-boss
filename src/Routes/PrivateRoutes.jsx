import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Proveider/AuthProveider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (user) {
        return children;
    }
    else if (loading) {
        return <h1>Loading ...</h1>
    }
    return <Navigate to='/login' state={{ from: location }} replace={true} />
};

export default PrivateRoutes;