import React, { useEffect } from 'react';
import Header from './components/SiteComponents/header';
import SearchDirections from './components/SearchComponents/SearchDirections';
import ComicBookSearch from './components/SearchComponents/ComicBookSearch';
import ComicBookDetail from './components/DetailsComponents/ComicBookDetails';
import { useComicSearch, useComicDetail, useToggleState, useCheckResultsState } from './hooks/comicBookHookFunctions'; 
import { HashRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

const App = () => {
  const [results, searchComics] = useComicSearch();  
  const [comicBook, getComicBook] = useComicDetail();
  const [isOpen, toggleAccordion] = useToggleState();
  const [isEmpty, checkResultsForEmpty] = useCheckResultsState();

  console.log("Single comic:", comicBook);

  function removeDetailsView(){
    getComicBook(null);
  }

  useEffect(() => {
    checkResultsForEmpty(results);
  }, [results])

  
  useEffect(() => {
    console.log(comicBook)
  }, [])
  
  return (
    <HashRouter>
      <React.Fragment>
        <Header />
                    {comicBook ? 
                      (
                        <Container>
                          <ComicBookDetail comicBook={comicBook} onClose={removeDetailsView} /> 
                        </Container>
                      )
                      : 
                      ( 
                        <React.Fragment>
                          <SearchDirections />
                          <ComicBookSearch 
                            onSearch={searchComics} 
                            onSelect={getComicBook} 
                            results={results} 
                            toggleAccordion={toggleAccordion} 
                            isOpen={isOpen} 
                            isEmpty={isEmpty}/> 
                        </React.Fragment>
                      )  
                    }
      </React.Fragment>
    </HashRouter>
  )
}

export default App;