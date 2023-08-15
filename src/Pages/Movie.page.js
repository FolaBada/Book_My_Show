import React from "react";
import MovieHero from "../Components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi"


const launchRazorPay = () => {
    let options = {
        key: "rzp_test_lHbkJvzeR1PxIU",
        Amount: 200*100,
        Currency: "INR",
        Name: "Book My Show Clone",
        Description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zpBYW3H/imgbin-bookmyshow-office-andriod-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}
    };
    const rzp = new window.Razorpay(options);
    rzp.open(); 
}

const Movie = () => {
    return(
        <>
        <MovieHero />
        <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
        <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
        <p>A couple's weekend in a mid-century modern vacation rental turns deadly when the husband discovers the owner is a psychopath with a backyard of buried secrets and designs on his wife.</p>
        </div>  
        <div className="my-8">
        <hr />
        </div>

        <div className="flex flex-col items-start gap-3">
        <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
        <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">

            <div className="w-8 h-8">
            <BiCameraMovie />
            </div>
        
        <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get money off on 3 movies you buy/rent on Stream. Buy filmy pass @Rs.99</p>
        </div>
        </div>

        </div> 

        <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:red-700 text-white font-bold py-2 px-8 rounded">
            Book Tickets
        </button>


        </div>     
        </>
    )
}

export default Movie;