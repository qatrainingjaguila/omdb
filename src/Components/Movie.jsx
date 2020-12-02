import React from 'react';
const Movie = ({obj}) => {
return( 
    <>
    <h4>{obj.Title}</h4>
    <h4>{obj.Year}</h4>
    <h4>{obj.Rated}</h4>
    <h4>{obj.Genre}</h4>
    <h4>{obj.Plot}</h4>
    <img src={obj.Poster} alt="The poster"></img>
    </>
 );
}
export default Movie;