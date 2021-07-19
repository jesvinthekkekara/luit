import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import requests from './requests';

function Banner() {
    const[movie,setMovie] = useState([]);
    useEffect( ()=> {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            // here we have a list of arrays and we have to randomly select one from it 

            console.log(request.data.results [
                Math.floor( Math.random() * request.data.results.length -1)
            ])

            setMovie(request.data.results [
                Math.floor( Math.random() * request.data.results.length -1 )
            ])


        }
        fetchData();

    }, [] )
    console.log("Movie is:" + movie)

    function truncate(str,n) {
        return str?.length > n? str.substr(0,n-1) + ".." : str;
    }


    return (
        <header className="banner"  style={{backgroundSize:"cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` , backgroundPosition:"center center" }}> 
        {/* header is for bacground image while the div is for contents ; it is done so because it may clash*/}

            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}

                </h1>
                <div className="banner_buttons">
                    <button className="banner_button"> Play </button>
                    <button className="banner_button"> My List </button>
                </div>
                <h1 className="banner_description">
                   { truncate( movie?.overview , 150 ) }
 
                </h1> 
                
            </div>
            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default Banner
