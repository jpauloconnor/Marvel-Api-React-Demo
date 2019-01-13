import { useState } from 'react'  //New Library from React....
import { searchComicBooks, getComicBookDetails } from '../api-calls/comicBookCalls'

//1             //2
export function useComicSearch() {
          //3.1      3.2                4    5
  const [results, setBookResults] = useState([])
            //6
  function searchComics(book) {
        //7                       8
    searchComicBooks(book).then(setBookResults)
  }
           //9
  return [results, searchComics]
}

export function useComicDetail() {
  const [character, setCharacter] = useState(null)
  
  console.log("Character:", character);
  
  function getCharacter(id) {
    if (id === null) {
      setCharacter(null)
    } else {
      getComicBookDetails(id).then(setCharacter)
      var x = setCharacter;
      console.log("X:", x);
    }
  }
  
  return [character, getCharacter]
}


/* FOOTNOTES 
    1 - This is a callback function, meaning that it won't execute until after the inner function has executed
    2 - Functions/Methods should always start with use
    3 - State variables - this is array destructuring. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        -Destructuring takes away the [0, 1] usage and spits these out as usable variables on an individual level.
        3.1 - Holds the current state
        3.2 - A function that will allow us to set a new state, like setState
    4 - useState will allow us to set state
        -Can be used in functional components
        -Should be used at the top of everything as state management throughout the app
    5 - Starts out as an empty array 
    6 - Declaring a nested function that will take in a book name as a parameter, a string
    7 - We call the function in our api calls
    8 - This is our setter. Once we get the api call result back, we can fire off the setBookResults function declared in 3.2
    9 - Two values are returned from the method.
*/