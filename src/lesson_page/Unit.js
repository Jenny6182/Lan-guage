import Lesson from "./Lesson"
import { fetchLessons } from "../services/databaseService";
import { useEffect, useState } from "react";

const Unit = ({ info }) => {

    const [isOpen, setOpen] = useState(false);
    const [lessons, setLessons] = useState([]);
    // maybe put this in each unit instead?

    useEffect( () => {
        // !units = true even when it's empty, empty array is true in javascript
        // so you have to compare length = 0, not !units...
        if (isOpen && lessons.length === 0) {
            async function loadLessons() {
                const data = await fetchLessons(info.id) // pass in the level's id
                console.log(data)
                setLessons(data)
            }
            console.log("load lessons is called!")
            loadLessons();
        }
    }, [isOpen])

    function handleOpen() {
        // flip it
        setOpen(!isOpen)
    }

    return ( 
        <div className="unit" onClick={handleOpen}>
            <button className="open-button" onClick={handleOpen}>
                <h1>Unit { info.unit_name }</h1>
                {console.log(isOpen)}
            </button>

             
            {/* Display units of the level optionally when level is open */}
            {isOpen && (
                <div className="unit-content"> 
                    {lessons.map( (lesson) => (<Lesson key={ lesson.id } info={ lesson } /> ) )}
                </div>
                )
            }   
           
        </div>        
     );
}
 
export default Unit;