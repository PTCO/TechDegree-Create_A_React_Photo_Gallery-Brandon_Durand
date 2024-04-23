import React, { useRef } from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Search = ({ handleSubmit }) => {
    const searchField = useRef();

    return (
        <>
            <form onSubmit={e => handleSubmit(e, searchField.current.value)} className="d-flex mb-3 searchField">
                <input type="text" className="w-100 form-control fs-4" ref={searchField}/>
                <button type="submit" className="btn btn-dark rounded-0 rounded-end-circle"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <Navigation />
            <Outlet />  
        </>
    );
}

export default Search;