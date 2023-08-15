import React, { useState,useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";
    // Components
import {NextArrow, PrevArrow} from "./arrow.component"    



//import css files

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    
    const [images, setImages] = useState([]);    
   
    useEffect(() => {
            const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results)
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLg ={
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />
    }


    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />
      };

    
      return(
        <>
        <div className="lg:hidden">
         <HeroSlider {...settings}>
            {
                images.map((Image) =>(
                    <div className="w-full h-64 md:h-80 py-3">
                        <img src= {`https://image.tmdb.org/t/p/original${Image.backdrop_path}`}
                         alt="testing" className="w-full h-full rounded-md"/>
                    </div>
                ))
            }
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
            {
                images.map((Image) =>(
                    <div className="w-full h-96 px-2 py-3">
                        <img src={`https://image.tmdb.org/t/p/original${Image.backdrop_path}`} 
                        alt="testing" className="w-full h-full rounded-md"/>
                    </div>
                ))
            }
        </HeroSlider>
        </div>
        </>
      );
};

export default HeroCarousel;