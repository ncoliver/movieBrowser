import "./App.css";
import Navbar from "./components/Navbar";
import SearchView from "./components/SearchView";
import AboutView from "./components/AboutView";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import MovieView from './components/MovieView'


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=4b588effce8b45c4144200cccafa0095&query=${searchText}&include_adult=false&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
          console.log(data.results)
      })
    }
  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} /> 
          <Route path="/movies/:id" element={<MovieView/>} /> 

      </Routes>
    </div>
  );
}

export default App;
