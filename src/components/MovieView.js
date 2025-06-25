import Hero from './Hero'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    const { id } = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      console.log('make a api request',  id)
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4b588effce8b45c4144200cccafa0095&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
            setIsLoading(false)
        })
    }, [id])

    function renderMovieDetails () {
      if(isLoading) {
        return <Hero text="Loading..." />
      }
      if(movieDetails) {
        return (
          <>
            <Hero text={movieDetails.original_title}/>
          </>
        )
      }
    }

    return renderMovieDetails()
};


export default MovieView;