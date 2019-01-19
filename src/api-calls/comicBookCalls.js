import { bookSearchUrl, apiKey, marvelComicURL } from './apiUrls';
import { toTitleCase, createUniqueArrayOfBooksFromResponse } from './comicBookCallHelpers'; 

export const searchComicBooksAndReturnUniqueArray = async query => {
  let titleCaseQuery = toTitleCase(query);

  const res = await fetch(bookSearchUrl);
  let responseObject = await res.json();

  let data = responseObject.data.results;
  let books = createUniqueArrayOfBooksFromResponse(data, titleCaseQuery);
  console.log("Books:", books);

  return books.map(i => ({
    id: i.id,
    title: i.title,
    thumbnailSmall: i.thumbnailSmall,
    description: i.description
  }))
}

export const getComicBookDetails = async queryByBookId => {
  let bookIdQueryUrl = `${marvelComicURL}comics/${queryByBookId}?${apiKey}`;
  const res = await fetch(bookIdQueryUrl)
  let detailsObject = await res.json();
  let objectToReturn = detailsObject.data.results[0];

  return objectToReturn;
}

