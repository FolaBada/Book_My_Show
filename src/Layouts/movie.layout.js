import React from "react";  

//Componenets
import MovieNavbar from "../Components/Navbar/movieNavbar.components";

const MovieLayout = (props) =>{
    return(
        <>
        <MovieNavbar />
        {props.children}
        </>
    );
};

export default MovieLayout;