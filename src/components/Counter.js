import AuthProvider
 from "./AuthProvider";
const Counter = () =>{
    return (
        <body style={{backgroundColor: "yellow"}}>
            <h1>This is counter</h1>
        </body>
    )
}

export default AuthProvider(Counter);