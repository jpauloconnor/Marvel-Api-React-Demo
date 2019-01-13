import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ComicBookSearch from './components/ComicBookSearch';
import ComicBookDetail from './components/ComicBookDetails';
import { useComicSearch, useComicDetail } from './hooks/comicBookHookFunctions'; //1

//2
const App = () => {
  //3          4                  5
  const [results, searchComics] = useComicSearch();  
  const [comicBook, getComicBook] = useComicDetail();

  //Logging to show how to use/get the destructured state variables
  console.log(`results:, ${results}`,
              `searchComics:, ${searchComics}`, 
              `comicBook: ${comicBook}`, 
              `getComicBook, ${getComicBook}`);

  return (
    <div>
      <Header />
        {/* 6 */}
        {comicBook ? (<ComicBookDetail comicBook={comicBook} />) 
        : 
        (
        <div>
          <ComicBookSearch onSearch={searchComics} onSelect={getComicBook} results={results} /> 
        </div>
        )}

      <Footer />
    </div>
  )
}

export default App;

/*FOOTNOTES:
    1 - These will allow us to bring state into our functional components
    2 - Notice that the App has become a functional component now.
    3 - State Variable: current state
    4 - New state after the function fires, like setState
    5 - The Hook method - must be called with 'use' as a prefix for linting purposes
    6 - Ternary operator - not new, but used liked this with hooks a lot to manage an initial state 
        { stateVariable ? (true do this) : (if false do this) }
        Starting out, comicBook is null, so we will show the results component with a search bar. See the console.log
*/

