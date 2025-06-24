import Hero from "./Hero";
import { Link } from 'react-router-dom';

// tmdb api key: 4b588effce8b45c4144200cccafa0095
// Example link for movie searches : https://api.themoviedb.org/3/search/movie?query=bad%20boys&include_adult=false&language=en-US&page=1


const MovieCard = ({ movie }) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div class="card">
        <img src={posterUrl} class="card-img-top" alt="{movie.original_title}" />
        <div class="card-body">
          <h5 class="card-title">{movie.original_title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={detailUrl} class="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  )
}

const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i}/>
  })

  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      }
    </>
  );
};

export default SearchView;
