import Child from "./Child";

const Home = (props) =>{
    const {name, age} = props;
    return(
        <div>
            {age}
            {name}
            <Child name={name} age={age}/>
        </div>
    )
}

export default Home;