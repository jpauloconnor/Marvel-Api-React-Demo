import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ComicBookCardList from './components/ComicBookCardList';
import ComicBookCardForm from './components/ComicBookCardForm';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <ComicBookCardForm />
          <ComicBookCardList />
          <Footer />
      </div>
    );
  }
}

export default App;
