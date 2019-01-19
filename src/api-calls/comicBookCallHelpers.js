export function findBooksByTitle(query, data){
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

export function findBooksByCharacter(query, data){
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

export function findBooksWithCharacterFromQuery(query, data){
  let foundBooksForCharacter = [];
    for(var i = 0; i < data.length; i++){
        let items = data[i].characters.items;
        let currentItemTitle = data[i].title;
        let currentItemId = data[i].id;
        let thumbnail = data[i].thumbnail.path;
        let currentItemThumbnail = appendPathToThumbnail(thumbnail);
  
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
