import AuthProvider from "./AuthProvider";

const About = () =>{
    return (
        <div>
            <h1 className="title">This is About page</h1>
        </div>
    )
}

export default AuthProvider(About);