import React from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import _ from 'lodash'
import { Col, Row, Container } from 'reactstrap'

interface Props {
  results: string[]
  placeholder: string
  isEmpty: boolean
  onSearch?: () => void
  onSelect?: () => void
  isOpen: boolean
  toggleAccordion?: () => void
}

const ComicBookSearch = ({ results, onSearch, onSelect, placeholder, isEmpty, isOpen, toggleAccordion}: Props) => {
  return (
    <div>
    <Container>
      <Row>
        <Col>
              <SearchInput 
                placeholder={placeholder} 
                onChange={_.debounce(onSearch, 1000)}  />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
              <SearchResults 
                isOpen={isOpen} 
                results={results} 
                onSelect={onSelect} 
                toggleAccordion={toggleAccordion} 
                isEmpty={isEmpty} />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ComicBookSearch;