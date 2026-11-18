const Lesson = (props) => {
    const info = props.info
    const lessonName = info.lessonName

    return ( 
        <div className="lesson">
            <a href="/read">
                <h2>{ lessonName }</h2>
            </a>
        </div>   
     );
}
 
export default Lesson;