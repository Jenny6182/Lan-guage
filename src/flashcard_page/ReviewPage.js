import FlashcardList from "./FlashcardList";
import * as data from "../TempData";
import supabase from "../supabase-client";

const ReviewPage = () => {
    // const [newCard, setNewCard] = useState("");

    // // Insert a new card in database
    // const addCard = async () => {
    //     const {} = await supabase.from("cards").insert([])
    // }

    return ( 
        <div className="content">
            <h2>Review Page</h2>
            {/* CHANGE the flashcard list to the actual flashcard list to be displayed */}
            <FlashcardList flashcards={data.foodCards} />
            <button>Add Card</button>
        </div>
     );
}

export default ReviewPage;