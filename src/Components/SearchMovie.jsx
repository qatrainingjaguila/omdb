import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie';

const API_KEY = process.env.REACT_APP_API_KEY;  

const SearchMovie = () => {

    const [data,setData]= useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [filmTitle, setFilmTitle] = useState("");

    useEffect(() => {
        // setTimeout(() => {
            console.log(API_KEY);
            axios.get("http://www.omdbapi.com/?apikey=" + API_KEY + "&t=" + filmTitle
            //,
                // {
                //     headers: {
                //         'Access-Control-Allow-Origin' : '*'
                //     }
                // }
            )
                // .then(res => res)
                .then(response => {
                    setLoaded(true);
                    console.log(response.data);
                    setData(response.data);
                }, (error) => {
                    setLoaded(true);
                    setError(error);
                })
        // }, )
    })

    const updateTitle = (e) => {
        setFilmTitle(e.target.value);
    }



    if (error) {
        return <p>Oops.. something has happened... Did you use an API key? {error.message}</p>
    } else if (!isLoaded) {
        return <p> Please wait.... we are loading your information</p>
    } else {
return( 
    <>
    <h1>Search for a movie!</h1>
    <p>Enter the name of the film you are searching for here</p>
    <input type="text" onChange={(e)=>updateTitle(e)} />
    <Movie obj={data}/>
    </>
 );
}
}
export default SearchMovie;