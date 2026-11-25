
import { useEffect, useState } from 'react';
import { fetchCard } from '../services/databaseService';

const Flashcard = ({ info }) => {
    const cardID = info.card_id
    const [front, setFront] = useState([]);
    const [back, setBack] = useState([]);e

    useEffect(() => {
                async function loadCard() {
                    console.log("Fetching Card...")
                    const data = await fetchCard(cardID);
                    console.log(data);
                    // remember to await an async function's return if u wanna store reuslts in a variable
                    // otherwise u only get a Promise, not actual data!
                    setFront(data.ch_name);
                    setBack(data.en_name);
                    console.log("data: ", data)
                    console.log("front: ", data.ch_name)
                    console.log("back: ", data.en_name)
                }
                loadCard();
            }, []);


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