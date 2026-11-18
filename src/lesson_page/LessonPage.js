import Level from "./Level"
import * as data from "../TempData";

const LessonPage = () => {
    const levels = data.levels
    console.log(levels)

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