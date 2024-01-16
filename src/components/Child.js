import GrandChild from "./GrandChild";

const Child = (props) =>{
    const {name, age} = props;
    return(
        <div>
            <h1 className="title">I don't want any props;</h1>
            <GrandChild name={name} age={age}/>
        </div>
    )
}

export default Child;