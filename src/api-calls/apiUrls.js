//-- URL Constants
export const MARVEL_COMIC_URL = 'https://gateway.marvel.com/v1/public/';
export const API_KEY = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;
export const QUERY_LIMIT = `limit=${100}`;
export const BOOK_SEARCH_URL = `${MARVEL_COMIC_URL}comics?${QUERY_LIMIT}&${API_KEY}`;
export const QUERY_BY_BOOK_ID = 0;

//-- Image Constants
export const thumbnailSmall = `/portrait_small.jpg`; //50x75px
export const thumbnailMedium = `/portrait_medium.jpg`; //100x150px
export const thumbnailxLarge = `/portrait_xlarge.jpg`; //150x225px
export const thumbnailFantastic = `/portrait_fantastic.jpg`; //168x252px
export const thumbnailUncanny = `/portrait_uncanny.jpg`; //300x450px
export const thumbnailIncredible = `/portrait_incredible.jpg`; //216x324px



