import React from 'react';
import logo from '../logo.svg';

const ComicBookCard = (props) => {
        return (
            <div className="main">
                <h1>Comic Book Title</h1>
                <h3>Comic Book Author</h3>
                <img width="75" src={logo} alt="book" />
            </div>
        );
}

export default ComicBookCard;
