import React, { Component } from 'react';
import ComicBookCardList from './ComicBookCardList';
export default class ComicBookCardForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleKeyUp = (e) => {
        const marvelComicURL = 'https://gateway.marvel.com/v1/public/';
        const apiKey = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;
      
        let url = `${marvelComicURL}comics?${apiKey}`;

        fetch(url)
            .then(response => {
                if(response.status !== 200){
                    console.log('Error: ', response.status);
                    return;
                }
                response.json().then(data => {
                    const results = data.data.results;
                    this.setState({ results });
                });
            })      
    }
   
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                
                <input 
                    onKeyUp={this.handleKeyUp} 
                    id="searchInput" 
                    className="searchBar" 
                    type="text" 
                    placeholder="Search a comic book" 
                    required 
                />
                
                <ComicBookCardList results={this.state.results} /> 
                
                <button type="submit">Get Comic Book</button>
            </form>
        );
    }
}