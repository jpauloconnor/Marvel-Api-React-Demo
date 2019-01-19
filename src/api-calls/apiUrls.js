export const marvelComicURL = 'https://gateway.marvel.com/v1/public/';
export const apiKey = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;
export const limit = `limit=${100}`;
export const queryByBookId = 0;
export const bookSearchUrl = `${marvelComicURL}comics?${limit}&${apiKey}`;

