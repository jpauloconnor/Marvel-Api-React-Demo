import { useState, useEffect } from 'react'  
import { searchComicBooksAndReturnUniqueArray, getComicBookDetailsById } from '../api-calls/comicBookCalls'

//--Search View
export const useComicSearch = () => {
  const [results, setBookResults] = useState([]);

  function searchComics(book) {
    searchComicBooksAndReturnUniqueArray(book)
      .then(setBookResults)
    }
  
  return [results, searchComics]
}

//--Details View
export function useComicDetail() {
  const [comic, setComic] = useState(null);
  
  function getComic(id) {
    if (id === null) {
      setComic(null);
    } else {
      getComicBookDetailsById(id).then(setComic);
    }
  }

  return [comic, getComic];
}

//--Toggle All -> Working
export const useToggleState = () => {
  const [isOpen, setToggleState] = useState();

  function toggleAccordion(){
      if(isOpen){
        setToggleState(false);
      } else {
        setToggleState(true);
      }
  }

  return [isOpen, toggleAccordion]
}

//--For the Initial State - Not using yet
export const useCheckResultsState = () => {
  const [isEmpty, setResultsState] = useState(true);

  function checkResultsForEmpty(results){
    var resultsState = (results === undefined || results == null || results.length <= 0) ? true : false;
    setResultsState(resultsState);
  }
  return [isEmpty, checkResultsForEmpty]
}
