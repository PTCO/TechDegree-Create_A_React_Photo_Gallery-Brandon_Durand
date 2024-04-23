import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className="d-flex align-items-center justify-content-evenly">
                <NavLink to="cats" className="btn btn-dark fs-5">Cats</NavLink>
                <NavLink to="dogs" className="btn btn-dark fs-5 mx-4">Dogs</NavLink>
                <NavLink to="birds" className="btn btn-dark fs-5">Birds</NavLink>
            </ul>
        </nav>
    );
}

export default Navigation;