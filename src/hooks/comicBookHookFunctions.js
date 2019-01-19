import { useState } from 'react'  
import { searchComicBooksAndReturnUniqueArray, getComicBookDetails } from '../api-calls/comicBookCalls'
import { exists } from 'fs';
// import { setToggleStateInObjectById } from '../api-calls/comicBookCallHelpers';
export const useInitialState = () => {
  const [initialResults, setInitialBookResults] = useState();

  function searchInitialComics() {
    searchComicBooksAndReturnUniqueArray("Spider-Man")
      .then(setInitialBookResults)
  }

  return [initialResults, searchInitialComics]
}

//--For Search View
export const useComicSearch = () => {

  const [results, setBookResults] = useState([]);

  function searchComics(book) {
    searchComicBooksAndReturnUniqueArray(book)
      .then(setBookResults)
  }

  return [results, searchComics]
}

//--For Details View
export function useComicDetail() {
  const [comic, setComic] = useState(null);
  
  function getComic(id) {
    if (id === null) {
      setComic(null);
    } else {
      getComicBookDetails(id).then(setComic);
    }
  }
  
  return [comic, getComic];
}

//--Toggle All
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



// TODO: Toggle Individuals
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

