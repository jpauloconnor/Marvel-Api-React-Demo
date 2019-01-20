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


//TODO: Plan this out....Tried to do, but didn't get there.
export const useInitialResults = () => {
  const [initialResults, setInitialBookResults] = useState([]);
  
  function searchInitialComics(name) {
    
    useEffect(async () => {
      searchComicBooksAndReturnUniqueArray(name)
      .then(setInitialBookResults)
      console.log("Search Initial:", initialResults);
  
      }, []);
    }

  return [initialResults, searchInitialComics]
}



// TODO: Toggle Individual items in List
// export const useToggleStateForEachItem = () => {
  //   const [itemsToggle, setToggleStateForIndividualItems] = useState([]);
  
//   function toggleAccordion(results, id) {
//     console.log("Items Tog:", itemsToggle);
//     if (itemsToggle !== undefined && results.length !== 0) {
//       itemsToggle.splice(0, itemsToggle.length, ...results);
//       console.log("Items:", itemsToggle);
//       var x = setToggleStateInObjectById(itemsToggle, 22253);
//       console.log("X:", x);
//       setToggleStateForIndividualItems(x);
//   //    setToggleStateForIndividualItems(results);
//     }
//   }

//   return [itemsToggle, toggleAccordion];
// }


// export function setToggleStateInObjectById(itemsToggle, id){
//   console.log(itemsToggle, id);
  
//     for(var i = 0; i < itemsToggle.length; i++){
//       console.log("I:", i);
//       if(itemsToggle[i].id === id){
//         itemsToggle[i].toggleIsOpen = true;
//         break;
//       }
//     }
//     return itemsToggle;
// }

