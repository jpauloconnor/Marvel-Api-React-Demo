import React from 'react';
import ComicBookCard from './ComicBookCard';

const ComicBookCardList = (props) => {
    return (
        <div className="main">
            <h1>Comic Book Card List</h1>
            <ul>
                <li><ComicBookCard /></li>
                <li><ComicBookCard /></li>
                <li><ComicBookCard /></li>
            </ul>
        </div>
    )
}

export default ComicBookCardList;


