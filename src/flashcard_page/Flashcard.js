
import { useState } from 'react';

const Flashcard = ({ info }) => {
    const front = info.ch_name;
    const back = info.en_name;

    const [flipped, setFlipped] = useState(false);
    // false = front, true = back  
    
    const handleFlip = () => {
        setFlipped(!flipped)
    }

    return ( 
        <button className="flashcard" onClick={handleFlip}>
            <h2>{ flipped ? back : front }</h2> 
        </button>    
     );
}
 
export default Flashcard;