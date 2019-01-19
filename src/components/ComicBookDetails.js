import React from 'react'

export default ({ comicBook }) => (
  <div>
        <h1>Book Title: {comicBook.title} </h1>
        <h3>Book Id:{comicBook.id}</h3>
        <h3>Description: {comicBook.description}</h3>
        <h3>Format: {comicBook.format}</h3>
        {/* <img src={comicBook.thumbnail.path.jpg} alt={logo} /> */}
  </div>
)
