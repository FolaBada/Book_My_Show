import { Route } from 'react-router-dom';

//Axios
import axios from 'axios';
//HOC
import DefaultHoc from './HOC/Default.HOC';
import MovieHOC from './HOC/movie.HOC';
//Pages
import HomePage from './Pages/Home.page';
import Movie from './Pages/Movie.page';
import Plays from './Pages/plays.page';
  //Imoport css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
     <DefaultHoc path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie}/>
     <DefaultHoc path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
