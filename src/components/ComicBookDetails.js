import React from 'react'
import logo from '../logo.svg'

export default ({ comicBook }) => (
  <div>
        <p>More work in progress.</p>

        <h1>Book Title: {comicBook.title} </h1>
        <h3>Book Id:{comicBook.id}</h3>
        <h3>Description: {comicBook.description}</h3>
        <h3>Format: {comicBook.format}</h3>
        {/* <img src={comicBook.thumbnail.path.jpg} alt={logo} /> */}
  </div>
)
