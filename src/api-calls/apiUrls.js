export const marvelComicURL = 'https://gateway.marvel.com/v1/public/';
export const apiKey = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;
export const limit = `limit=${100}`;
export const queryByBookId = 0;
export const bookSearchUrl = `${marvelComicURL}comics?${limit}&${apiKey}`;
export const thumbnailSmall = `/portrait_small.jpg`; //50x75px
export const thumbnailMedium = `/portrait_medium.jpg`; //100x150px
export const thumbnailxLarge = `/portrait_xlarge.jpg`; //150x225px
export const thumbnailFantastic = `/portrait_fantastic.jpg`; //168x252px
export const thumbnailUncanny = `/portrait_uncanny.jpg`; //300x450px
export const thumbnailIncredible = `/portrait_incredible.jpg`; //216x324px



