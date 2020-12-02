import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Movie = ({obj}) => {
return( 
    <>
   <Container>
       <br></br>
       <Row className="align-items-left">
       <Col sm={8}><h4>{obj.Title}</h4>
    <h4>{obj.Year}</h4>
    <h4>{obj.Rated}</h4>
    <h4>{obj.Genre}</h4>
    <h4>{obj.Plot}</h4></Col>
        <Col sm={4}><img src={obj.Poster}></img></Col> 
       </Row>
   </Container>
    </>
 );
}
export default Movie;