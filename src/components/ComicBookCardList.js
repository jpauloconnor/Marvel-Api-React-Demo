 import React, { Component } from 'react';
 import ComicBookCard from './ComicBookCard';

export default class ConceptList extends Component {
    render(){
        let items = [];
        let books = this.props.results;

        for(let index in books){
            items.push(
                <ComicBookCard key={index} book={books[index]} />
            )
        }

        return (
            <ul>
                {items}
            </ul>
        );
    }
}



