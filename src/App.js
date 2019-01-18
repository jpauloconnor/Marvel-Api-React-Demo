import React from 'react';
import './App.css';
import Header from './components/header';
import ComicBookSearch from './components/ComicBookSearch';
import ComicBookDetail from './components/ComicBookDetails';
import { useComicSearch, useComicDetail } from './hooks/comicBookHookFunctions'; 

const App = () => {
        
  const [results, searchComics] = useComicSearch();  
  const [comicBook, getComicBook] = useComicDetail();

  return (
    <div>
      <Header />
        {comicBook ? (<ComicBookDetail comicBook={comicBook} />) 
        : 
        (
        <div>
            <ComicBookSearch onSearch={searchComics} onSelect={getComicBook} results={results} /> 
        </div>
        )}
    </div>
  )
}

export default App;

/*FOOTNOTES:
TODO: Annotate these later...
    1 - These will allow us to bring state into our functional components
    2 - Notice that the App has become a functional component now.
            3           4             
  const [comicBook, getComicBook] = useComicDetail();

    3 - State Variable: current state    
    4 - New state after the function fires, like setState
    5 - The Hook method - must be called with 'use' as a prefix for linting purposes
*/

