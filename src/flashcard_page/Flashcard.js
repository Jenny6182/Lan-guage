
import { useState } from 'react';

const Flashcard = (props) => {
    const info = props.info
    const front = info.front
    const back = info.back
    // const id = info.id

    const [flipped, setFlipped] = useState(false);
    
    const handleFlip = () => {
        setFlipped(!flipped)
        console.log("State: ", flipped)
        // false = front
    }

    return ( 
        <button className="flashcard" onClick={handleFlip}>
            <h2>{ flipped ? back : front }</h2> 
        </button>    
     );
}
 
export default Flashcard;