import GrandChild from "./GrandChild";

const Child = (props) =>{
    const {name, age} = props;
    return(
        <div>
            I don't want any props;
            <GrandChild name={name} age={age}/>
        </div>
    )
}

export default Child;