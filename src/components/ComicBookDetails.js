import React from 'react'
import logo from '../logo.svg'

export default ({ comicBook }) => (
  <div>
        {comicBook.title}
        {comicBook.id}
        {comicBook.format}
        <img src={comicBook.thumbnail.path.jpg} alt={logo} />
  </div>
)
