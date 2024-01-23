import AuthProvider from "./AuthProvider";

const GrandChild = (props) =>{
    const {name, age} = props;
    return(
        <div>
            I want any props;
            {name}
            {age}
        </div>
    )
}

export default AuthProvider(GrandChild);