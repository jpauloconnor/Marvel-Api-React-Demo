import _ from 'lodash';
import { thumbnailSmall } from './apiUrls';

export function createUniqueArrayOfBooksFromResponse(data, titleCaseQuery){
  const booksWithSpecificOrPartialTitle = findBooksBySpecificOrPartialTitle(titleCaseQuery, data);
  const booksWithCharacter = findBooksContainingCharacterInQuery(titleCaseQuery, data);
  booksWithSpecificOrPartialTitle.push(...booksWithCharacter);

  const arrayOfUniqueBooks = _.uniqBy(booksWithSpecificOrPartialTitle, 'id');
  const booksWithToggleProperty = addTogglePropertyToEachObject(arrayOfUniqueBooks);
  arrayOfUniqueBooks.push(...booksWithToggleProperty);

  return arrayOfUniqueBooks;
}

export function findBooksBySpecificOrPartialTitle(titleCaseQuery, data){
  const foundBooks = [];
    for(var i = 0; i < data.length; i++){
      const currentItemId = data[i].id;
      const currentItemTitle = data[i].title;
      const thumbnail = data[i].thumbnail.path;
      const description = data[i].description;

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
      const items = data[i].characters.items;
      const currentItemTitle = data[i].title;
      const currentItemId = data[i].id;
      const thumbnailPath = data[i].thumbnail.path;
  
        if(items !== null) {
          for(var j = 0; j < items.length; j++){
            const name = items[j].name;
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


