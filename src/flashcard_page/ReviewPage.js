import Flashcard from "./Flashcard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCardIDs, fetchCards } from "../services/databaseService";

const ReviewPage = () => {
    const { stackID } = useParams();
    console.log("stack id: ", stackID);

    const [cardsInfo, setCards] = useState([]);

    useEffect(() => {
            async function loadCards() {
                // Get all the card ids corresponding to the stackID that triggered the ReviewPage
                const stackCards = await fetchCardIDs(stackID);

                // Extract each stackCard's cardid, put in an array
                const id_array = stackCards.map(item => item.card_id);

                // Use fetchCards with the ids fetched, get all cards' info
                const data = await fetchCards(id_array);

                // Set the cards state into the array of cards' info
                setCards(data)
            }
            loadCards();
        }, []);

    return ( 
        <div className="content">
            <h2>Review Page</h2>
            <div className="flashcard-list">
                {cardsInfo.map((card) => (
                    <Flashcard key={card.id} info={card}/>
                ))}
            </div>            
            <button>Add Card</button>
        </div>
     );
}

export default ReviewPage;

// Notes:
// remember to await an async function's return if u wanna store reuslts in a variable
// otherwise u only get a Promise, not actual data!