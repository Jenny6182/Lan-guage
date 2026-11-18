import { Link } from "react-router";

const Stack = (fetchedStack) => {

    return ( 
        <Link to="/review" className="stack">
            <h2>{ fetchedStack.stack_name }</h2>
            {/* <h3>{ en_name }</h3> */}
        </Link>   
     );
}
 
export default Stack;