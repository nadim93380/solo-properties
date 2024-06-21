/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvidor";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";


const PrivateRoute = ({ children }) => {
    const { loading } = useContext(AuthContext)
    
    const { user } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    if (user) {
        return children
    }

};

export default PrivateRoute;