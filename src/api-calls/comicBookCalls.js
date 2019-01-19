import { bookSearchUrl, apiKey, marvelComicURL } from './apiUrls';
import { findBooksByTitle, toTitleCase, findBooksWithCharacterFromQuery } from './comicBookCallHelpers'; 
import _ from 'lodash';

export const searchComicBooks = async query => {
  let titleCaseQuery = toTitleCase(query);

  const res = await fetch(bookSearchUrl);
  let responseObject = await res.json();

  let data = responseObject.data.results;
  let booksForCharacter = findBooksByTitle(titleCaseQuery, data);
  let booksWithCharacter = findBooksWithCharacterFromQuery(titleCaseQuery, data);
  booksForCharacter.push(...booksWithCharacter);
  
  let books = _.uniqBy(booksForCharacter, 'id');
  
  return books.map(i => ({
    id: i.id,
    title: i.title,
    thumbnail: i.thumbnail
  }))
}

export const getComicBookDetails = async queryByBookId => {
  let bookIdQueryUrl = `${marvelComicURL}comics/${queryByBookId}?${apiKey}`;
  const res = await fetch(bookIdQueryUrl)
  let detailsObject = await res.json();
  let objectToReturn = detailsObject.data.results[0];

  return objectToReturn;
}

