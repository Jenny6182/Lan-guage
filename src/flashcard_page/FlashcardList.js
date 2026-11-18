import Flashcard from "./Flashcard"

const FlashcardList = (props) => {
    const flashcards = props.flashcards

    return ( 
        <div className="flashcard-list">
            {flashcards.map((flashcard) => (
                <Flashcard key={flashcard.id} info={flashcard}/>
            ))}
        </div>
     );
}
 
export default FlashcardList;