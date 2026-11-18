


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Lan-guage 懶規矩</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/lesson">Lessons</a>
                <a href="/flashcard">Flashcards</a>
                {/* the href are the links u want the user to use
                it has nothing to do with the actual folder paths in ur project */}
            </div>
        </nav>
    );
}
 
export default Navbar;