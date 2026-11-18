import Unit from "./Unit"
import * as data from "../TempData";

const Level = (level) => {
    const info = level.info 
    // when you pass an object not just a single number or string
    // you need one extra layer of unwrapping because jsx wraps that object in another props wrapper object
    const levelID = info.id
    const rank = info.rank
    console.log(rank)

    // filter in units where the levelId matchest the 
    const units = data.units.filter(
        (unit) => unit.levelID === levelID
    );

    return ( 
        <div className="level">
            <h1>Level { rank }</h1>

            {units.map((unit) => (
                <Unit key={ unit.id } info={ unit } />
            ))}

        </div>
     );
}
 
export default Level;