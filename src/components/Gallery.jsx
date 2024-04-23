import React, { useEffect, useState } from "react";
import Photo from "./Photo";

const Gallery = ({ results , title }) => {

    const [ isLoading, setIsLoading ] = useState(true);

    // Displays loading message until result
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [results]);

    return (
        <>
            <h2 className={`${isLoading ? "d-flex": "d-none"} mt-4 border border-3 rounded p-2 fs-1`}>LOADING....</h2>
            <ul className={`${isLoading ? "d-none": "d-flex"} flex-wrap mt-4 justify-content-between w-75`}>
                <h2 className="fs-1 border-bottom border-3 pb-2 w-100"><b className="text-danger">{ title }</b> Photos</h2>
                {results.map( result => (
                    <Photo key={result.id} Data={result}/>
                ))}
            </ul>
        </>
    );
}


export default Gallery;