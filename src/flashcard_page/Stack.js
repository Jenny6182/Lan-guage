import { Link } from "react-router";

const Stack = ({ info }) => {
    // when you put { info }, it's equivalent to saying const info = props.info bc our props had attribute info 

    return ( 
        <Link to={`/review/${info.id}`} className="stack">
            {console.log(info.stack_name)}
            <h2>{ info.stack_name }</h2>
        </Link>   
     );
}
 
export default Stack;