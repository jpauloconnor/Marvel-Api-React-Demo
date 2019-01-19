const marvelComicURL = 'https://gateway.marvel.com/v1/public/';
const apiKey = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;
const limit = `limit=${100}`;
//https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey=d81a1ee8fd5e2b08187569aa757536fb
//Date ranges...
//

// export const searchComicBooks = async query => {
  //   let titleCaseQuery = toTitleCase(query);
  //   console.log(titleCaseQuery);
//   let url = `${marvelComicURL}comics?${apiKey}`;
//   const res = await fetch(url);
//   let responseObject = await res.json();
//   console.log(responseObject);
//   let data = responseObject.data.results;
//   let booksForCharacter = findCharacterByBookFromQuery(titleCaseQuery, data);
//   console.log("Books:", booksForCharacter);
//   return booksForCharacter.map(i => ({
//     id: i.id,
//     title: i.title,
//     thumbnail: i.thumbnail
//   }))
// }

export const searchComicBooks = async query => {
  let titleCaseQuery = toTitleCase(query);
  console.log(titleCaseQuery);
  let url = `${marvelComicURL}comics?${limit}&${apiKey}`;
  const res = await fetch(url);
  let responseObject = await res.json();
  console.log(responseObject);
  let data = responseObject.data.results;
  let booksForCharacter = findBooksByTitle(titleCaseQuery, data);
  console.log("Books:", booksForCharacter);
  return booksForCharacter.map(i => ({
    id: i.id,
    title: i.title,
    thumbnail: i.thumbnail
  }))
}

function findBooksByTitle(query, data){
  let foundBooks = [];
    for(var i = 0; i < data.length; i++){
      let currentItemId = data[i].id;
      let currentItemTitle = data[i].title;
      let thumbnail = data[i].thumbnail.path;
      let currentItemThumbnail = appendPathToThumbnail(thumbnail);

      if(currentItemTitle.includes(query)){
        foundBooks.push({
          id: currentItemId,
          title: currentItemTitle,
          thumbnail: currentItemThumbnail
        })    
      }
    }
    return foundBooks;
}


function findCharacterByBookFromQuery(query, data){
  let foundBooksForCharacter = [];
    for(var i = 0; i < data.length; i++){
        let items = data[i].characters.items;
        let currentItemTitle = data[i].title;
        let currentItemId = data[i].id;
        let thumbnail = data[i].thumbnail.path;
        let currentItemThumbnail = appendPathToThumbnail(thumbnail);

        console.log("Current Thumb", currentItemThumbnail);
        if(items !== null) {
          for(var j = 0; j < items.length; j++){
            let name = items[j].name;
            if(name === query){
              foundBooksForCharacter.push({
                id: currentItemId,
                title: currentItemTitle,
                thumbnail: currentItemThumbnail
              });
            }
          }
        }
      }

    return foundBooksForCharacter;
}

function toTitleCase(str) {
  return str.replace(
      /\b\w+/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

function appendPathToThumbnail(thumbnailPath){
  return `${thumbnailPath}/portrait_fantastic.jpg`;
}

export const getComicBookDetails = async queryByBookId => {
  const res = await fetch(`${marvelComicURL}comics/${queryByBookId}?${apiKey}`)
  let detailsObject = await res.json();
  let objectToReturn = detailsObject.data.results[0];

  return objectToReturn;
}
