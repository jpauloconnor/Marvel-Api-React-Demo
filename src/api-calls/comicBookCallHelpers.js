import _ from 'lodash';
import { thumbnailSmall } from './apiUrls';

export function createUniqueArrayOfBooksFromResponse(data, titleCaseQuery){
  console.log("Data: ", data)
  let booksForCharacter = findBooksByTitle(titleCaseQuery, data);
  let booksWithCharacter = findBooksWithCharacterFromQuery(titleCaseQuery, data);
  booksForCharacter.push(...booksWithCharacter);
  
  let books = _.uniqBy(booksForCharacter, 'id');
  console.log("Books in unique array:", books);
  return books;
}

export function findBooksByTitle(titleCaseQuery, data){
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


export function findBooksByCharacter(titleCaseQuery, data){
  let foundBooks = [];
    for(var i = 0; i < data.length; i++){
      let currentItemId = data[i].id;
      let currentItemTitle = data[i].title;
      let thumbnail = data[i].thumbnail.path;
      let currentItemThumbnail = appendPathToThumbnail(thumbnail);

      if(currentItemTitle.includes(titleCaseQuery)){
        foundBooks.push({
          id: currentItemId,
          title: currentItemTitle,
          thumbnail: currentItemThumbnail
        })    
      }
    }
    return foundBooks;
}

export function findBooksWithCharacterFromQuery(titleCaseQuery, data){
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

export function appendPathToThumbnail(thumbnailPath){
  return `${thumbnailPath}/portrait_fantastic.jpg`;
}
