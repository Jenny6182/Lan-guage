import Unit from "./Unit"
import { fetchUnits } from "../services/databaseService";
import { useEffect, useState } from "react";

const Level = ({ info }) => {
    // when you pass an object not just a single number or string
    // you need one extra layer of unwrapping because jsx wraps that object in another props wrapper object

    const [isOpen, setOpen] = useState((false));
    const [units, setUnits] = useState([]);

    // change this so it doesn't also fetch whenever we close the drop down
    // and that the next time we close the drop down and open it, it should use already cached data
    // RN it's fetching whenever we change the open / close drop down variable
    useEffect( () => {
        // !units = true even when it's empty, empty array is true in javascript
        // so you have to compare length = 0, not !units...
        if (isOpen && units.length === 0) {
            async function loadUnits() {
                const data = await fetchUnits(info.id) // pass in the level's id
                setUnits(data)
            }
            console.log("load units is called!")
            loadUnits();
        }
    }, [isOpen])

    function handleOpen() {
        // flip it
        setOpen(!isOpen)
    }


    return ( 
        <div className="level">
            <button className="open-button" onClick={handleOpen}>
                <h1>Level { info.level_name }</h1>
                {console.log(isOpen)}
            </button>

             
            {/* Display units of the level optionally when level is open */}
            {isOpen && (
                <div className="level-content"> 
                    {units.map( (unit) => (<Unit key={ unit.id } info={ unit } /> ) )}
                </div>
                )
            }   
           
        </div>
     );
}
 
export default Level;