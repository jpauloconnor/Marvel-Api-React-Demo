import React from 'react';
import Header from './components/header';
import ComicBookSearch from './components/ComicBookSearch';
import ComicBookDetail from './components/ComicBookDetails';
import { useComicSearch, useComicDetail, useInitialState } from './hooks/comicBookHookFunctions'; 
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container, Col, Row, Card, CardBody, } from 'reactstrap';
import './App.css';

const App = () => {
  
  const [initialResults, searchInitialComics ] = useInitialState();
  const [results, searchComics] = useComicSearch();  
  const [comicBook, getComicBook] = useComicDetail();
  
  console.log("Results:", results);
  return (
    <HashRouter>
      <div>
        <Header />
          <Container>
                    {comicBook ? 
                      (<ComicBookDetail comicBook={comicBook} />) 
                      : 
                      ( 
                        <Row>
                          <Col xs="12" sm="6" lg="12">
                            <Card>
                              <CardBody>  
                                <ComicBookSearch onSearch={searchComics} onSelect={getComicBook} results={results} /> 
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      )  
                    }
          </Container>
      </div>
    </HashRouter>
  )
}

export default App;

/*FOOTNOTES:
TODO: Annotate these later...
    1 - These will allow us to bring state into our functional components
    2 - Notice that the App has become a functional component now.
            3           4             
  const [comicBook, getComicBook] = useComicDetail();

    3 - State Variable: current state    
    4 - New state after the function fires, like setState
    5 - The Hook method - must be called with 'use' as a prefix for linting purposes
*/

