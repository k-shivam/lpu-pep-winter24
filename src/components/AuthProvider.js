import {Navigate} from "react-router-dom";

const AuthProvider = (WrappedComponent) =>{
    const NewComponent = () =>{
        let token = localStorage.getItem("token");

        if(!token){
            return <Navigate to="/login" />
        }
        return <WrappedComponent/>
    }
    return NewComponent;
}

export default AuthProvider;

