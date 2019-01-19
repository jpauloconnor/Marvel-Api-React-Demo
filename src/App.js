import React, { useEffect } from 'react';
import Header from './components/header';
import ComicBookSearch from './components/ComicBookSearch';
import ComicBookDetail from './components/ComicBookDetails';
import { useComicSearch, useComicDetail, useToggleState } from './hooks/comicBookHookFunctions'; 
import { HashRouter } from 'react-router-dom';
import { Container, Col, Row, Card, CardBody, } from 'reactstrap';
import './App.css';

const App = () => {
  
  const [results, searchComics] = useComicSearch();  
  const [comicBook, getComicBook] = useComicDetail();
  const [isOpen, toggleAccordion] = useToggleState();

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
                                <ComicBookSearch onSearch={searchComics} onSelect={getComicBook} results={results} toggleAccordion={toggleAccordion} isOpen={isOpen}/> 
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