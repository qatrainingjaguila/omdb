import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie';

const SearchMovie = () => {

    const [data,setData]= useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [filmTitle, setFilmTitle] = useState("");

    useEffect(() => {
        // setTimeout(() => {
            axios.get("http://www.omdbapi.com/?apikey=967c14dc&t=" + filmTitle
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
        // }, 4000)
    })

    const updateTitle = (e) => {
        setFilmTitle(e.target.value);
    }


    if (error) {
        return <p>Oops.. something has happened... {error.message}</p>
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