import React from "react";
import Slider from "react-slick";

//components
import Poster from "../poster.componet";
// Config
import settings from "../../config/posterCarousal.config";
//Images
import PremierImages from "../../config/TempPosters.config";

export const Premier = () =>{

    return (<>
    <div className="flex flex-col items-start py-4">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className="text-white text-sm">Brand new release every Friday</p>
    </div>
    <Slider {...settings}>
    {PremierImages.map((image) => (
        <Poster {...image} isDark />
    ))}

    </Slider>
    </>)
};

export default Premier;