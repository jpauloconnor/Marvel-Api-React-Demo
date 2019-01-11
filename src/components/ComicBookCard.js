import React, { Component } from 'react';

export default class ComicBookCard extends Component {
    render(){
        let book = this.props.book;

        return(
            <li>
                {book.title}
            </li>
        )
    }
}
