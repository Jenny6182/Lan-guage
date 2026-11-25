import Flashcard from "./Flashcard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCardIDs } from "../services/databaseService";

const ReviewPage = () => {
    const { stackID } = useParams();
    console.log("stack id: ", stackID);

    const [flashcards, setCards] = useState([]);

    useEffect(() => {
            async function loadCards() {
                console.log("Fetching Cards...")
                const data = await fetchCardIDs(stackID);
                console.log(data);
                // remember to await an async function's return if u wanna store reuslts in a variable
                // otherwise u only get a Promise, not actual data!
                setCards(data);
                console.log("data: ", data)
                console.log("flashcards var: ", flashcards)
            }
            loadCards();
        }, []);

    return ( 
        <div className="content">
            <h2>Review Page</h2>
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