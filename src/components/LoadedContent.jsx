import React, { useEffect, useState } from "react";

import Photo from "./Photo";
import Gallery from "./Gallery";

// API KEY
import config from '../../node_modules/config/config';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const LoadedContent = () => {
    const [ results, setResults ] = useState([]);

    const navigate = useNavigate();

   const { query }  = useParams(); 

   // API Search
   useEffect(()=> {
        (async()=>{
            await axios.get(
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`
            )
            .then( result => {
                if(result.data.photos.photo.length === 0) {
                    navigate('/search/noresult')
                } else {
                    setResults(result.data.photos.photo) 
                }
            });
            
        })()
   }, [query])

    if( results.length > 0){ 
        return (
            <>
                <Gallery results={results} title={query}/>
            </>
        );
    }
}

export default LoadedContent;