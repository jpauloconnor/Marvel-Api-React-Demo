import _ from 'lodash';
import { thumbnailSmall } from './apiUrls';

export function createUniqueArrayOfBooksFromResponse(data, titleCaseQuery){
  let booksWithSpecificOrPartialTitle = findBooksBySpecificOrPartialTitle(titleCaseQuery, data);
  let booksWithCharacter = findBooksContainingCharacterInQuery(titleCaseQuery, data);
  booksWithSpecificOrPartialTitle.push(...booksWithCharacter);

  let arrayOfUniqueBooks = _.uniqBy(booksWithSpecificOrPartialTitle, 'id');
  let booksWithToggleProperty = addTogglePropertyToEachObject(arrayOfUniqueBooks);
  arrayOfUniqueBooks.push(...booksWithToggleProperty);

  return arrayOfUniqueBooks;
}

export function findBooksBySpecificOrPartialTitle(titleCaseQuery, data){
  let foundBooks = [];
    for(var i = 0; i < data.length; i++){
      let currentItemId = data[i].id;
      let currentItemTitle = data[i].title;
      let thumbnail = data[i].thumbnail.path;
      let description = data[i].description;

      if(currentItemTitle.includes(titleCaseQuery)){
        foundBooks.push({
          id: currentItemId,
          title: currentItemTitle,
          thumbnailSmall: `${thumbnail}${thumbnailSmall}`,
          description: description
        })    
      }
    }
  return foundBooks;
}

function addTogglePropertyToEachObject(uniqueBooks){
  for(let i = 0; i< uniqueBooks.length; i++){
    uniqueBooks[i].toggleIsOpen = false;
  }
  return uniqueBooks;
}

export function findBooksContainingCharacterInQuery(titleCaseQuery, data){
  let foundBooksForCharacter = [];
    for(var i = 0; i < data.length; i++){
        let items = data[i].characters.items;
        let currentItemTitle = data[i].title;
        let currentItemId = data[i].id;
        let thumbnailPath = data[i].thumbnail.path;
  
        if(items !== null) {
          for(var j = 0; j < items.length; j++){
            let name = items[j].name;
            if(name === titleCaseQuery){
              foundBooksForCharacter.push({
                id: currentItemId,
                title: currentItemTitle,
                thumbnailSmall: `${thumbnailPath}${thumbnailSmall}`,
              });
            }
          }
        }
      }

    return foundBooksForCharacter;
}

export function toTitleCase(str) {
  return str.replace(
      /\b\w+/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}


