
import Navbar from './components/Navbar';
import Home from './home_page/Home';
import FlashcardPage from './flashcard_page/FlashcardPage';
import LessonPage from './lesson_page/LessonPage';
import ReviewPage from './flashcard_page/ReviewPage';
import ReadPage from './lesson_page/ReadPage';
import { Routes, Route } from 'react-router';

// root component - App! the top layer thing that gets rendered in index (the biggest box)
// aka, top of component tree
// NOTE: ALL components must be capitalized
function App() {
  // any data type will be transferred into a string when outputting
  // besides objects & booleans, so number etc. are fine
  // const fruits = ["a", "b", "c"]
  // const link = "https://sites.google.com/site/populardoodlegames/home"


  // can write anything before the return at the end where you return html components
  // NOTE: this is also called a "jsx template"
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson" element={<LessonPage />} />
        <Route path="/flashcard" element={<FlashcardPage />} />
        <Route path="/review/:stackID" element={<ReviewPage />} />
        {/* when you do /:stuff that's a placeholder to match anything in url */}
        <Route path="/read" element={<ReadPage />} />
        {/* the paths are the links u want the user to use
                it has nothing to do with the actual folder paths in ur project */}
      </Routes>
    </div>
  );
}

export default App;
