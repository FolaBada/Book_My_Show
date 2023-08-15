import React from "react";  

//Componenets
import Navbar from "../Components/Navbar/navbar.component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) =>{
    return(
        <>
        <Navbar />
        <HeroCarousel />
        {props.children}
        </>
    );
};

export default DefaultLayout;