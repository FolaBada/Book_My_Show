import React from "react";

const MovieHero = () => {
    return(
        <>
        <div className="md:hidden">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1689340194905_midcenturydesktop.jpg"
            alt="poster"
            />
        </div>
        
        <div className="hidden md:block lg:hidden">
        <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1689340194905_midcenturydesktop.jpg"
            alt="poster"
            />
        </div>

        <div className="relative hidden lg:block" style={{height: "40rem"}}>

            <div className="absolute h-full w-full z-10"
            style={{backgroundImage:"linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}/>
            
        <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1689340194905_midcenturydesktop.jpg"
            alt="poster"
        />
        
        <div className="absolute z-30 w-64 h-96 left-64 top-10">

        <img
        src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/mid-century-et00364300-1689144768.jpg"
        alt="poster"
        className="h-full w-full rounded-xl"
        />

        </div>
        
        </div>
        </>
    )
}

export default MovieHero;