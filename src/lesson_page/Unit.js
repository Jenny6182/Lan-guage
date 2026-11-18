import Lesson from "./Lesson"
import * as data from "../TempData";

const Unit = (props) => {
    const info = props.info
    const unitID = info.id
    const unitNumber = info.unitNumber


    const lessons = data.lessons.filter(
        (lesson) => lesson.unitID === unitID
    );

    return ( 
        <div className="unit">
            <h2>Unit { unitNumber }</h2>

            {lessons.map((lesson) => (
                <Lesson key={lesson.id} info={lesson}/>
            ))}
        </div>
     );
}
 
export default Unit;