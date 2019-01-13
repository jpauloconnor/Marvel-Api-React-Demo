const marvelComicURL = 'https://gateway.marvel.com/v1/public/';
const apiKey = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;


export const showAllComicBooks = async query => {
  let url = `${marvelComicURL}comics?${apiKey}`;
  const res = await fetch(url)
  let responseObject = await res.json();
  let data = responseObject.data.results;
  console.log(data);
  return data.map(i => ({
    id: i.id,
    title: i.title
  }))
}

//TODO: This is still wrong
export const searchComicBooks = async query => {
  let url = `${marvelComicURL}comics?${apiKey}`;
  const res = await fetch(url)
  let responseObject = await res.json();
  let data = responseObject.data.results;
  console.log(data);
  return data.map(i => ({
    id: i.id,
    title: i.title
  }))
}


export const getComicBookDetails = async queryByBookId => {
  const res = await fetch(`${marvelComicURL}comics/${queryByBookId}?${apiKey}`)
  let detailsObject = await res.json();
  let objectToReturn = detailsObject.data.results[0];

  console.log(`Id: ${objectToReturn.id}`, `Title: ${objectToReturn.title}`,`Thumbnail: ${objectToReturn.thumbnail}` );

  return objectToReturn;
}

