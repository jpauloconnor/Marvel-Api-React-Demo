import { BOOK_SEARCH_URL, API_KEY, MARVEL_COMIC_URL } from './apiUrls';
import { toTitleCase, createUniqueArrayOfBooksFromResponse } from './comicBookCallHelpers'; 

export const searchComicBooksAndReturnUniqueArray = async query => {
  let titleCaseQuery = toTitleCase(query);

  const res = await fetch(BOOK_SEARCH_URL);
  let responseObject = await res.json();

  let data = responseObject.data.results;
  let books = createUniqueArrayOfBooksFromResponse(data, titleCaseQuery);
  
  return books.map(i => ({
    id: i.id,
    title: i.title,
    thumbnailSmall: i.thumbnailSmall,
    description: i.description,
    toggleIsOpen: i.toggleIsOpen
  }))
}

export const getComicBookDetailsById = async QUERY_BY_BOOK_ID => {
  let bookIdQueryUrl = `${MARVEL_COMIC_URL}comics/${QUERY_BY_BOOK_ID}?${API_KEY}`;
  const res = await fetch(bookIdQueryUrl)
  let detailsObject = await res.json();
  let book = detailsObject.data.results[0];
  console.log(book);
  return book;
}
