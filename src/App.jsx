import React from "react";
import Home from "./Home";

const App = ({name, age}) =>{
    return (
        <div>
            This is my App with name as{name} and age = {age}.
            <Home  name={name} age={age}/>
        </div>
    )
}

export default App;
