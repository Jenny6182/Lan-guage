import Flashcard from "./Flashcard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// TODO: 11/24, resolve the error regarding react-router-dom!!
import { fetchCards } from "../services/databaseService";

const ReviewPage = () => {
    const { stackID } = useParams();
    console.log("stack id: ", stackID);
    // get the url param embedded using useParams function??
    // TODO: 11/24, add url param to stack and then parse it here to pass to fetchCards as stackID

    const [flashcards, setCards] = useState([]);

    useEffect(() => {
            async function loadCards() {
                console.log("Fetching Cards...")
                const data = await fetchCards(stackID);
                console.log(data);
                // remember to await an async function's return if u wanna store reuslts in a variable
                // otherwise u only get a Promise, not actual data!
                setCards(data);
            }
            loadCards();
        }, []);

    return ( 
        <div className="content">
            <h2>Review Page</h2>
            {/* CHANGE the flashcard list to the actual flashcard list to be displayed */}
            <div className="flashcard-list">
                {flashcards.map((flashcard) => (
                    <Flashcard key={flashcard.id} info={flashcard}/>
                ))}
            </div>            
            <button>Add Card</button>
        </div>
     );
}

export default ReviewPage;