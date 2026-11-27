import Level from "./Level"
import { fetchLevels } from "../services/databaseService";
import { useEffect, useState } from "react";

const LessonPage = () => {
    const [levels, setLevels] = useState([]);

    useEffect( () => {
        async function loadLevels() {
            const data = await fetchLevels();
            setLevels(data)
        }
        loadLevels();
    }, [] );

    return ( 
        <div className="content">
            <h1>Lesson Page</h1>
            {levels.map((level) => (
                // key is a special props object so if you want to pass it,
                // you have to pass it with some other name for it
                <Level key={ level.id } info={ level } />
            ))}
        </div>
     );
}
 
export default LessonPage;




// Todo: lesson page = map of levels, level = map of units, unit = map of lessons

// TODO 11/25: get the lessons read query and structuring working too!! and then make the drop down menus
// and then we can work on either linking lessons with stacks of cards, or adding and deleting cards or editing