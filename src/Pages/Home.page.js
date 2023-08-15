import axios from "axios";
import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import Premier from "../Components/Premier/premier.component";
import PosterSlider from "../Components/PosterSlider/posterSliderComponent";
import TempPosters from "../config/TempPosters.config";
 

const HomePage = () => {

const [popularMovies, setPopularMovies] = useState([]);

useEffect(() =>{
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results)
  };
  requestPopularMovies()
}, []);

console.log(popularMovies);


    return (
        <>
      <div className="flex flex-col gap-10">

      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">
            The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
        </div>

<div className="bg-navColor-200 py-16">
   
        <div className="container mx-auto px-4">
    <div className="flex">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
        alt="Rupay"
        className="w-full h-full"/>
        </div>
            <PosterSlider images = {popularMovies} title="Premiers" subtitle ="Brand new release every Friday" isDark = {true} className="text" />
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
        images = {TempPosters}
        title = "Online Streaming Events"
        isDark = {false}
        />
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
        images = {TempPosters}
        title = "Online Streaming Events"
        isDark = {false}
        />
      </div>
        </>
    );
};

export default HomePage;

