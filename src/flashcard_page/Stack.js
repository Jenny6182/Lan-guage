import { Link } from "react-router";

const Stack = ({ info }) => {
    // when you put { info }, it's equivalent to saying const info = props.info bc our props had attribute info 

    return ( 
        // TODO: use the url param to pass Stack id so you know which stack of cards to get in review page
        <Link to="/review" className="stack">
            {console.log(info.stack_name)}
            <h2>{ info.stack_name }</h2>
        </Link>   
     );
}
 
export default Stack;