import React, { Component } from 'react';

    /*
    TODOs: 
        1. Marvel Server Down. Couldn't get API key.
        Codepen for borrowed api key
        https://codepen.io/Boo-urns/pen/IdCKr?editors=0010
        2. Need process.env
        3. Fix API key with hash:
            https://stackoverflow.com/questions/28743530/you-must-provide-a-hash-error-when-using-api-to-download-data-in-r
    */

export default class ComicBookCardForm extends Component {
    state = {
        comicBookTitle: 'wolverine'
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleKeyUp = (e) => {
        const key = 'fc0e2b2bcfc273962ce941db43aa2039'; //1 & 2
        const marvelComicURL = 'https://gateway.marvel.com/v1/public/comics';
        
        //3
        fetch(`${marvelComicURL}?apiKey=${key}`)
            .then(response => {
                if(response.status !== 200){
                    console.log('Error: ', response.status);
                    return;
                }
    
                response.json().then(data => {
                    const results = data.results;
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

                <button type="submit">Get Comic Book</button>
            </form>
        );
    }
}