const marvelComicURL = 'https://gateway.marvel.com/v1/public/';
const apiKey = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;

export const searchComicBooks = async query => {
  let titleCaseQuery = toTitleCase(query);
  let url = `${marvelComicURL}comics?${apiKey}`;
  const res = await fetch(url);
  let responseObject = await res.json();
  let data = responseObject.data.results;
  let booksForCharacter = findCharacterByBookFromQuery(titleCaseQuery, data);
  return booksForCharacter.map(i => ({
    id: i.id,
    title: i.title
  }))
}

function findCharacterByBookFromQuery(query, data){
  let foundBooksForCharacter = [];
    for(var i = 0; i < data.length; i++){
        let items = data[i].characters.items;
        let currentItemTitle = data[i].title;
        let currentItemId = data[i].id;
  
        if(items !== null) {
          for(var j = 0; j < items.length; j++){
            let name = items[j].name;
            if(name === query){
              foundBooksForCharacter.push({
                id: currentItemId,
                title: currentItemTitle
              });
            }
          }
        }
      }

    return foundBooksForCharacter;
}

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

export const getComicBookDetails = async queryByBookId => {
  const res = await fetch(`${marvelComicURL}comics/${queryByBookId}?${apiKey}`)
  let detailsObject = await res.json();
  let objectToReturn = detailsObject.data.results[0];

  return objectToReturn;
}
