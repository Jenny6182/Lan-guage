const Lesson = ({ info }) => {

    return ( 
        <div className="lesson">
            <a href="/read">
                <h2>{ info.lesson_name }</h2>
            </a>
        </div>   
     );
}
 
export default Lesson;